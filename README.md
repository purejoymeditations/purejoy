# PureJoy Wellness Website

A modern, responsive wellness website built with React, Node.js, and MongoDB. Features a beautiful shop, booking system, and admin dashboard.

## 🌟 Features

### Frontend

- **Modern React App** with Vite for fast development
- **Responsive Design** with Tailwind CSS
- **Interactive Components** with Framer Motion animations
- **Product Shop** with filtering and search
- **Booking System** for wellness services
- **Admin Dashboard** for content management
- **About Us** page with founder stories

### Backend

- **Express.js API** with RESTful endpoints
- **MongoDB Database** with Mongoose ODM
- **JWT Authentication** for secure admin access
- **Email Integration** with Nodemailer
- **File Upload** for product images
- **Booking Management** system

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd purejoy
   ```

2. **Install dependencies**

   ```bash
   # Install root dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Environment Setup**

   Create `.env` file in the backend directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   PORT=3001
   ```

4. **Start Development Servers**

   ```bash
   # Start backend server (from backend directory)
   cd backend
   npm start

   # Start frontend server (from frontend directory)
   cd frontend
   npm run dev
   ```

5. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## 📁 Project Structure

```
purejoy/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── assets/          # Images and static files
│   │   └── main.jsx         # App entry point
│   ├── package.json
│   └── tailwind.config.js   # Tailwind configuration
├── backend/                  # Node.js backend API
│   ├── controllers/         # Route controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── config/             # Database configuration
│   └── index.js            # Server entry point
├── PureJoy.postman_collection.json  # API testing collection
└── README.md
```

## 🛠️ Available Scripts

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend

```bash
npm start            # Start production server
npm run dev          # Start development server (if configured)
```

## 🔧 API Endpoints

### Products

- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Services

- `GET /api/services` - Get all services
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Bookings

- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

### Authentication

- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Admin registration

## 🎨 Design System

### Color Palette

- **Primary**: Warm browns and golds
- **Secondary**: Soft creams and whites
- **Accent**: Emerald greens
- **Background**: Light, warm tones

### Typography

- **Headings**: Serif fonts for elegance
- **Body**: Clean sans-serif for readability

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔒 Security Features

- JWT token authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation and sanitization
- Secure file upload handling

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Backend (Railway/Heroku)

1. Set environment variables
2. Deploy the backend directory
3. Update frontend API URLs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support or questions, please contact the development team.

---

**Built with ❤️ for PureJoy Wellness**
