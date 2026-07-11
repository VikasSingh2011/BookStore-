# 📚 BookStore

> A Full Stack MERN Application for browsing, searching, and purchasing books online.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-blue?style=for-the-badge&logo=vercel)](https://book-store-x4ay-git-main-vikas-singhs-projects-b53a535f.vercel.app/)

## 📖 Description

BookStore is a comprehensive web application built with the MERN stack (MongoDB, Express.js, React, Node.js). It provides a seamless platform for users to discover books, manage their authentication, and access both free and paid course materials.

## ✨ Features

- **User Authentication**: Secure signup and login functionality.
- **Book Catalog**: Browse a wide variety of books.
- **Course Section**: Access both free and paid content.
- **Search**: Efficient search functionality to find books quickly.
- **Responsive Design**: Optimized UI for all screen sizes (Desktop, Tablet, Mobile).
- **Admin Management**: Manage the book inventory.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (powered by [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **UI Components**: [React Slick](https://react-slick.neostack.com/)

### Backend
- **Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Security**: [bcryptjs](https://www.npmjs.com/package/bcryptjs) (Password hashing)

## 📁 Project Structure

```text
BookStore/
│
├── Frontend/          # React application (Vite)
│   ├── public/        # Static assets
│   ├── src/           # Components, Pages, Assets
│   └── package.json   # Frontend dependencies
│
└── Backend/           # Express server
    ├── controller/    # Request handlers
    ├── models/        # Database schemas
    ├── routes/        # API endpoints
    └── index.js       # Entry point
```

## ▶️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/VikasSingh2011/BookStore-.git
cd BookStore-
```

### 2. Setup Environment Variables
Create a `.env` file in the `Backend` directory and configure your MongoDB connection and Port:
```env
PORT=4000
MongoDBURI=your_mongodb_connection_string
```

### 3. Start Backend Server
```bash
cd Backend
npm install
npm start
```

### 4. Start Frontend Development Server
Open a new terminal window:
```bash
cd Frontend
npm install
npm run dev
```

The application will typically run at `http://localhost:5173` (Frontend) and `http://localhost:4000` (Backend).

## 📄 License
This project is licensed under the ISC License.

