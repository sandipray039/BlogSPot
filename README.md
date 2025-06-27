# 📰 Full-Stack Blog Platform

([https://gentle-semifreddo-831a5e.netlify.app/])

This is a full-stack blog publishing platform where users can read blogs and admins can create, update, and delete them. Built using React and ASP.NET Core Web API, it includes image uploads, secure authentication, and modern UI components.

---

## 🚀 Features

### Public Users
- 🧾 View all blog posts
- 🔎 Read individual blog content
- 🖼 Blogs include title, image, author, category, and published date

### Admin (Authenticated)
- ✍️ Create new blog posts (with image upload)
- 🛠 Update existing posts
- 🗑 Delete blog posts
- 🔐 Login system with password encryption

---

## 🛠 Technology Stack

### Frontend
- **React.js (TypeScript)**
- **React Router DOM** – Routing between blog pages
- **React Context API** – Blog state management
- **Axios** – API communication
- **Bootstrap 5** – UI styling

### Backend
- **ASP.NET Core Web API**
- **Layered Architecture** – Controllers, Services, Repositories, DTOs
- **Entity Framework Core**
- **SQL Server**
- **BCrypt.NET** – For secure password hashing
- **MIME/File Upload Handling** – Stores image paths in DB

---

## 🔐 Authentication & Security

- Admin login with **email and password**
- Passwords are **hashed using BCrypt**
- Protected endpoints for blog creation, update, and deletion

---

## 📂 Project Structure

```
/frontend-blog
  ├── components/
  ├── pages/
  ├── context/ (BlogContext.tsx)
  ├── services/ (API logic)
  └── App.tsx

/backend-blog
  ├── Controllers/
  ├── DTOs/
  ├── Models/
  ├── Repositories/
  ├── Services/
  └── Program.cs
```

## 👥 Contributor

- **Sandip Kumar Ray** – Frontend (React), Backend (.NET Core), Password security (BCrypt), Image upload handling


