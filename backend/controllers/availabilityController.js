const Availability = require('../models/Availability');
const Booking = require('../models/Booking');
const BlockedTime = require('../models/BlockedTime');
const Service = require('../models/Service');
const moment = require('moment-timezone');

// Helper function to generate time slots
const generateSlots = (start, end, duration) => {
    const slots = [];
    let current = start.clone();
    while (current.clone().add(duration, 'minutes') <= end) {
        slots.push(current.clone());
        current.add(duration, 'minutes');
    }
    return slots;
};

exports.getAvailability = async (req, res) => {
    const { serviceId } = req.params;
    const { startDate, endDate } = req.query; // Expecting dates in YYYY-MM-DD format

    try {
        const service = await Service.findById(serviceId).populate('practitioners');
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        const practitionerIds = service.practitioners.map(p => p._id);

        const availabilityRules = await Availability.find({
            practitioner: { $in: practitionerIds }
        });

        const bookings = await Booking.find({
            startTime: { $gte: moment.tz(startDate, 'Australia/Sydney').startOf('day').toDate() },
            status: { $in: ['confirmed', 'pending'] }
        });

        const blockedTimes = await BlockedTime.find({
            startTime: { $lt: moment.tz(endDate, 'Australia/Sydney').endOf('day').toDate() },
            endTime: { $gte: moment.tz(startDate, 'Australia/Sydney').startOf('day').toDate() }
        });

        const availableSlots = [];
        const today = moment.tz('Australia/Sydney');
        const bookingCutoff = today.clone().add(1, 'day').hour(18).minute(0).second(0);

        let day = moment.tz(startDate, 'Australia/Sydney').startOf('day');
        const endDay = moment.tz(endDate, 'Australia/Sydney').endOf('day');

        while (day <= endDay) {
            const dayOfWeek = day.day();

            for (const rule of availabilityRules) {
                // Weekly rules: match by day of week
                if (rule.type === 'weekly') {
                    if (rule.dayOfWeek !== dayOfWeek) continue;
                }

                // Date-specific rules: only apply on that exact calendar day (Australia/Sydney)
                if (rule.type === 'date') {
                    if (!rule.date) continue;
                    const ruleDate = moment.tz(rule.date, 'Australia/Sydney').startOf('day');
                    if (!day.isSame(ruleDate, 'day')) continue;
                }

                const [startHour, startMinute] = rule.startTime.split(':').map(Number);
                const [endHour, endMinute] = rule.endTime.split(':').map(Number);

                const ruleStart = day.clone().hour(startHour).minute(startMinute);
                const ruleEnd = day.clone().hour(endHour).minute(endMinute);

                const slots = generateSlots(ruleStart, ruleEnd, service.duration);

                for (const slotStart of slots) {
                    const slotEnd = slotStart.clone().add(service.duration, 'minutes');

                    const isBooked = bookings.some(b =>
                        slotStart.isBefore(moment(b.endTime)) && slotEnd.isAfter(moment(b.startTime))
                    );

                    const isBlocked = blockedTimes.some(b =>
                        slotStart.isBefore(moment(b.endTime)) && slotEnd.isAfter(moment(b.startTime))
                    );

                    const isPastCutoff = today.isAfter(bookingCutoff) && slotStart.isSame(today, 'day');

                    if (!isBooked && !isBlocked && !isPastCutoff && slotStart.isAfter(today)) {
                        availableSlots.push({
                            start: slotStart.format(),
                            end: slotEnd.format()
                        });
                    }
                }
            }
            day.add(1, 'day');
        }

        res.json(availableSlots);

    } catch (error) {
        console.error("Error fetching availability:", error);
        res.status(500).json({ message: 'Server Error' });
    }
}; 

exports.getAllAvailabilityForAdmin = async (req, res) => {
    try {
        const rules = await Availability.find({}).populate('practitioner', 'name');
        const blockedTimes = await BlockedTime.find({});
        const bookings = await Booking.find({ status: { $in: ['confirmed', 'pending'] } });

        const events = [];

        // Generate events from rules for the next 3 months
        const today = moment.tz('Australia/Sydney').startOf('day');
        const endDay = today.clone().add(3, 'months').endOf('day');

        rules.forEach(rule => {
            let day = today.clone();
            while (day.isBefore(endDay)) {
                if (day.day() === rule.dayOfWeek) {
                    const start = day.clone().hour(rule.startTime.split(':')[0]).minute(rule.startTime.split(':')[1]);
                    const end = day.clone().hour(rule.endTime.split(':')[0]).minute(rule.endTime.split(':')[1]);
                    events.push({
                        _id: `rule-${rule._id}-${day.format('YYYY-MM-DD')}`,
                        title: `Available: ${rule.practitioner.name}`,
                        start: start.toDate(),
                        end: end.toDate(),
                        isBooked: false,
                        type: 'rule'
                    });
                }
                day.add(1, 'day');
            }
        });

        // Add blocked times to events
        blockedTimes.forEach(bt => {
            events.push({
                _id: bt._id,
                title: `Blocked: ${bt.title}`,
                start: bt.startTime,
                end: bt.endTime,
                isBooked: true, // Treat as "booked" to make it visually distinct
                type: 'blocked'
            });
        });

        // Add bookings to events
        bookings.forEach(b => {
            events.push({
                _id: b._id,
                title: `Booked`,
                start: b.startTime,
                end: b.endTime,
                isBooked: true,
                type: 'booking'
            });
        });

        res.json(events);

    } catch (error) {
        console.error("Error fetching all availability:", error);
        res.status(500).json({ message: 'Server Error' });
    }
} 