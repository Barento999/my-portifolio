# Barento Hashum - Full-Stack Developer Portfolio

A modern, professional portfolio website showcasing full-stack development skills with React, Node.js, and MongoDB.

## Features

### Frontend

- **Modern React** with Vite for fast development
- **Tailwind CSS** for responsive, professional design
- **React Router** for seamless navigation
- **Smooth animations** and transitions
- **Fully responsive** design (mobile, tablet, desktop)
- **SEO optimized** with meta tags

### Backend

- **Node.js & Express** REST API
- **MongoDB** database with Mongoose
- **JWT authentication** for admin access
- **CRUD operations** for projects and messages
- **Protected routes** with middleware
- **Error handling** and validation

### Admin Dashboard

- **Secure login** with JWT
- **Manage projects** (Create, Read, Update, Delete)
- **View contact messages**
- **Dashboard statistics**
- **Responsive admin panel**

## Tech Stack

**Frontend:**

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React Icons
- React Icons

**Backend:**

- Node.js
- Express
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS
- dotenv

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd my-portifolio
```

2. **Install frontend dependencies**

```bash
npm install
```

3. **Install backend dependencies**

```bash
cd backend
npm install
```

4. **Configure environment variables**

Create `backend/.env` file:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

5. **Start MongoDB**

```bash
# If using local MongoDB
mongod
```

6. **Create admin user**

Run this once to create your admin account:

```bash
# In backend directory
node -e "
import('axios').then(axios => {
  axios.default.post('http://localhost:5000/api/auth/create-admin', {
    email: 'admin@example.com',
    password: 'admin123'
  }).then(() => console.log('Admin created')).catch(console.error)
})
"
```

Or use curl:

```bash
curl -X POST http://localhost:5000/api/auth/create-admin \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}'
```

### Running the Application

**Development Mode:**

1. Start backend server:

```bash
cd backend
npm run dev
```

2. Start frontend (in new terminal):

```bash
npm run dev
```

3. Open browser:

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Admin Login: http://localhost:5173/admin/login

**Production Build:**

```bash
# Build frontend
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
my-portifolio/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Project.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── projects.js
│   │   └── messages.js
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── AdminLogin.jsx
│   │       ├── DashboardHome.jsx
│   │       ├── ManageProjects.jsx
│   │       └── ManageMessages.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## API Endpoints

### Public Routes

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/messages` - Submit contact form
- `POST /api/auth/login` - Admin login

### Protected Routes (Require JWT)

- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `GET /api/messages` - Get all messages
- `DELETE /api/messages/:id` - Delete message

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)

   - Change name, title, description
   - Update tech stack badges

2. **About Section** (`src/components/About.jsx`)

   - Update bio and background
   - Modify soft skills

3. **Skills Section** (`src/components/Skills.jsx`)

   - Add/remove skills
   - Adjust skill levels

4. **Experience Section** (`src/components/Experience.jsx`)

   - Add education details
   - Include work experience
   - List certifications

5. **Footer** (`src/components/Footer.jsx`)
   - Update social media links
   - Change contact email

### Styling

Modify `tailwind.config.js` to change:

- Primary color scheme
- Fonts
- Spacing
- Breakpoints

## Deployment

### Frontend (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Update API URLs in components to production backend URL

### Backend (Railway/Render/Heroku)

1. Push backend folder to repository
2. Set environment variables
3. Deploy with MongoDB Atlas connection string

### MongoDB Atlas

1. Create cluster at mongodb.com/cloud/atlas
2. Get connection string
3. Update `MONGODB_URI` in `.env`

## Features to Add (Optional)

- [ ] Dark mode toggle
- [ ] Blog section with Markdown support
- [ ] GitHub API integration
- [ ] Email notifications (Nodemailer)
- [ ] Image upload for projects
- [ ] Analytics integration
- [ ] Resume/CV download
- [ ] Testimonials section
- [ ] Skills chart visualization

## License

MIT License - feel free to use this for your own portfolio!

## Contact

Barento Hashum

- Email: barentohashum11@gmail.com
- GitHub: https://github.com/Barento999
- LinkedIn: https://www.linkedin.com/in/barento-hashum-2a67221a6
- Telegram: https://t.me/barento11

---

Built with ❤️ using React, Node.js & MongoDB
