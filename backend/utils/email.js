const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendBookingRequestEmail = async (booking) => {
    const adminMailOptions = {
        from: `"Purejoy" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL, // Leanne's email
        subject: 'New Booking Request',
        html: `<p>You have a new booking request from ${booking.user.name}.</p>
               <p>Service: ${booking.service.name}</p>
               <p>Time: ${booking.startTime} to ${booking.endTime}</p>
               <p>Please log in to the dashboard to confirm or reschedule.</p>`
    };

    const userMailOptions = {
        from: `"Purejoy" <${process.env.EMAIL_USER}>`,
        to: booking.user.email,
        subject: 'Your Booking Request has been Received',
        html: `<p>Hi ${booking.user.name},</p>
               <p>We have received your booking request for ${booking.service.name} from ${booking.startTime} to ${booking.endTime}.</p>
               <p>We will notify you once it's confirmed.</p>`
    };

    try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);
    } catch (error) {
        console.error('Error sending booking request emails:', error);
    }
};

const sendBookingConfirmationEmail = async (booking) => {
    const mailOptions = {
        from: `"Purejoy" <${process.env.EMAIL_USER}>`,
        to: booking.user.email,
        subject: 'Your Booking is Confirmed!',
        html: `<p>Hi ${booking.user.name},</p>
               <p>Your booking for ${booking.service.name} from ${booking.startTime} to ${booking.endTime} is confirmed.</p>
               <p>We look forward to seeing you!</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending booking confirmation email:', error);
    }
};

const sendBookingCancellationEmail = async (booking) => {
    const mailOptions = {
        from: `"Purejoy" <${process.env.EMAIL_USER}>`,
        to: booking.user.email,
        subject: 'Your Booking has been Cancelled',
        html: `<p>Hi ${booking.user.name},</p>
               <p>Your booking for ${booking.service.name} from ${booking.startTime} to ${booking.endTime} has been cancelled.</p>
               <p>Please contact us if you have any questions.</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending booking cancellation email:', error);
    }
};


module.exports = {
    sendBookingRequestEmail,
    sendBookingConfirmationEmail,
    sendBookingCancellationEmail
}; 