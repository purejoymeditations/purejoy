# Deployment Guide

This guide provides step-by-step instructions for deploying the PureJoy Wellness Website to various platforms.

## 🚀 Frontend Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy from frontend directory**

   ```bash
   cd frontend
   vercel
   ```

3. **Configure environment variables**
   - Add `VITE_API_URL` pointing to your backend URL
   - Example: `VITE_API_URL=https://your-backend.railway.app`

### Netlify

1. **Build the project**

   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy the `dist` folder**

   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository

3. **Configure environment variables**
   - Go to Site Settings > Environment Variables
   - Add `VITE_API_URL` with your backend URL

## 🔧 Backend Deployment

### Railway (Recommended)

1. **Connect GitHub repository**

   - Go to [Railway](https://railway.app)
   - Connect your GitHub account
   - Select the repository

2. **Configure environment variables**

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   PORT=3001
   ```

3. **Deploy**
   - Railway will automatically detect the Node.js app
   - Deploy from the `backend` directory

### Heroku

1. **Install Heroku CLI**

   ```bash
   npm install -g heroku
   ```

2. **Create Heroku app**

   ```bash
   heroku create your-app-name
   ```

3. **Set environment variables**

   ```bash
   heroku config:set MONGODB_URI=your_mongodb_connection_string
   heroku config:set JWT_SECRET=your_jwt_secret_key
   heroku config:set EMAIL_USER=your_email@gmail.com
   heroku config:set EMAIL_PASS=your_email_app_password
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended)

1. **Create MongoDB Atlas account**

   - Go to [MongoDB Atlas](https://mongodb.com/atlas)
   - Create a free cluster

2. **Configure database**

   - Create a database named `purejoy`
   - Create collections: `products`, `services`, `bookings`, `users`, `availability`

3. **Get connection string**
   - Copy the connection string
   - Replace `<password>` with your database password
   - Add to environment variables

### Local MongoDB

1. **Install MongoDB**

   ```bash
   # macOS
   brew install mongodb-community

   # Ubuntu
   sudo apt-get install mongodb
   ```

2. **Start MongoDB service**

   ```bash
   sudo systemctl start mongod
   ```

3. **Connection string**
   ```
   mongodb://localhost:27017/purejoy
   ```

## 🔐 Environment Variables

### Frontend (.env)

```env
VITE_API_URL=https://your-backend-url.com
```

### Backend (.env)

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/purejoy
JWT_SECRET=your_super_secret_jwt_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
PORT=3001
NODE_ENV=production
```

## 📧 Email Configuration

### Gmail Setup

1. **Enable 2-Factor Authentication**
2. **Generate App Password**

   - Go to Google Account Settings
   - Security > 2-Step Verification > App passwords
   - Generate password for "Mail"

3. **Use App Password**
   - Use the generated password in `EMAIL_PASS`
   - Not your regular Gmail password

## 🔄 Post-Deployment

### Update Frontend API URLs

1. **Update API base URL**

   - Change all API calls to use environment variable
   - Example: `process.env.VITE_API_URL + '/api/products'`

2. **Test all endpoints**
   - Use the Postman collection provided
   - Test all CRUD operations

### SSL Certificate

1. **Vercel/Netlify**: Automatic SSL
2. **Railway**: Automatic SSL
3. **Heroku**: Automatic SSL

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**

   - Ensure backend CORS is configured for frontend domain
   - Add frontend URL to allowed origins

2. **Database Connection**

   - Check MongoDB connection string
   - Ensure IP whitelist includes deployment server

3. **Email Not Working**

   - Verify Gmail app password
   - Check email configuration

4. **Build Errors**
   - Check Node.js version compatibility
   - Ensure all dependencies are installed

### Debug Commands

```bash
# Check backend logs
heroku logs --tail

# Check frontend build
npm run build

# Test API endpoints
curl https://your-backend-url.com/api/products
```

## 📊 Monitoring

### Health Check Endpoint

Add to backend:

```javascript
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date() });
});
```

### Performance Monitoring

- **Frontend**: Vercel Analytics or Google Analytics
- **Backend**: Railway/Heroku built-in monitoring
- **Database**: MongoDB Atlas monitoring

## 🔄 CI/CD (Optional)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

For deployment issues:

1. Check platform-specific documentation
2. Review error logs
3. Test locally first
4. Contact development team

---

**Happy Deploying! 🚀**
