# Tasklyf – Frontend (PWA Task Management System)

Tasklyf is a **Progressive Web Application (PWA)** that allows users to submit tasks (file or link) and enables admins to review, approve, or reject them.  
This repository contains the **HTML/CSS/JavaScript-based frontend** for users and admins.

---

## 🚀 Features

### 👤 User Panel
- Secure JWT-based login
- Domain-specific task visibility
- File or link submission
- Real-time upload progress
- Submission history with status (Pending / Approved / Rejected)

### 🛡️ Admin Panel
- Add Users (with roles & domain)
- Create Domain-wise Tasks
- View submissions & approve/reject
- Protected routes (Token + Role validation)

### 📱 PWA Capabilities
- Installable on Desktop & Mobile
- Offline caching via Service Worker
- App-like UI without Play Store/App Store

---

## 💻 Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML, CSS, JavaScript | UI & App Logic |
| Service Worker | Offline Support |
| Web Manifest | PWA Installation |
| Fetch API | Backend Communication |

---

## 📂 Folder Structure

```
frontend/
│── css/
│── js/
│── images/
│── index.html
│── admin.html
│── user.html
│── manifest.json
│── service-worker.js
```

---

## 🔐 Authentication Flow
- Token stored in `localStorage`
- Role checked in token payload
- Unauthorized access auto-redirects to login
- Session timeout + context menu disabled for security

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repo
```bash
git clone <repo-url>
cd frontend
```

### 2️⃣ Start a Live Server
You can use VS Code extension or run:
```bash
npx serve .
```

### 3️⃣ Configure Backend URL
Open `auth.js`, `admin.js`, and `user.js` and set your backend API endpoints.

---

## 📌 Environment Notes
- Service worker only works on **HTTPS** or `localhost`.
- Cloud uploads are handled by backend; no keys on frontend.

---

## 🎯 Future Enhancements
- Animations & UI improvements
- Native push notifications
- Multi-admin support

---

## 🤝 Contribution
Pull requests are welcome! For major changes, open a discussion first.

---

## 📄 License
This project is licensed under the MIT License.
