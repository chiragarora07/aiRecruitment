# 🚀 HireFlow

### AI-Powered Recruitment Platform

**HireFlow** is a full-stack AI-powered recruitment platform designed to simplify the hiring process for organizations while helping candidates showcase their skills through AI-driven resume analysis.

---

## ✨ Features

### 🔐 Authentication

* JWT-based Login & Registration
* Secure password hashing
* Role-based access control

  * Admin
  * Candidate
  * Interviewer

### 🏢 Organization Management

* Create Organizations
* Manage Recruitment Drives
* View Organization Dashboard

### 💼 Recruitment Drives

* Create Recruitment Drives
* Manage Drive Status
* View Active & Closed Drives
* Candidate Applications

### 👨‍💻 Candidate Portal

* Browse Available Drives
* Apply to Recruitment Drives
* Resume Upload
* Application Tracking

### 📄 Resume Management

* PDF Resume Upload
* Resume Storage
* Resume History
* Resume Analysis

### 🤖 AI Resume Analysis

Powered by **Google Gemini**

Features include:

* ATS Score
* Resume Strengths
* Weaknesses
* Missing Skills
* AI Suggestions
* Interview Questions

> A mock AI fallback is available if the Gemini API quota is exceeded.

### 📊 Admin Dashboard

* Dashboard Statistics
* Recruitment Drive Management
* Organization Management
* Candidate Management
* Resume Analytics

---

# 🛠 Tech Stack

| Category       | Technology              |
| -------------- | ----------------------- |
| Frontend       | HTML5, CSS3, JavaScript |
| Backend        | Node.js, Express.js     |
| Database       | PostgreSQL              |
| ORM            | Prisma                  |
| Authentication | JWT                     |
| AI             | Google Gemini API       |
| File Upload    | Multer                  |
| PDF Parsing    | pdf-parse               |

---

# 📁 Project Structure

```text
aiRecruitment/
│
└── server/
    │
    ├── config/
    │
    ├── controllers/
    │
    ├── middleware/
    │
    ├── prisma/
    │   ├── schema.prisma
    │   └── migrations/
    │
    ├── prompts/
    │
    ├── public/
    │   ├── index.html
    │   ├── login.html
    │   ├── admindashboard.html
    │   ├── applicantdashboard.html
    │   ├── interviewerdashboard.html
    │   ├── applytodrive.html
    │   ├── organisations.html
    │   ├── orghub.html
    │   └── ...
    │
    ├── routes/
    │
    ├── services/
    │
    ├── uploads/
    │
    ├── utils/
    │
    ├── validators/
    │
    ├── app.js
    ├── package.json
    └── package-lock.json
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/chiragarora07/aiRecruitment.git
cd aiRecruitment/server
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000

DATABASE_URL=YOUR_DATABASE_URL

JWT_SECRET=YOUR_SECRET_KEY

GEMINI_API_KEY=YOUR_GEMINI_KEY
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Run Database Migration

```bash
npx prisma migrate dev
```

---

## Start Development Server

```bash
npm run dev
```

Application will run at:

```
http://localhost:5000
```

---

# 🚀 Deployment

The project is deployed on **Render**.

Deployment Steps:

1. Push code to GitHub.
2. Connect GitHub repository with Render.
3. Set Root Directory to:

```
server
```

4. Add all Environment Variables.
5. Deploy.

---

# 🔑 API Modules

### Authentication

* Register
* Login
* JWT Verification

### Organizations

* Create Organization
* Get Organizations

### Recruitment Drives

* Create Drive
* View Drives
* Update Drive
* Delete Drive

### Applications

* Apply to Drive
* View Applications

### Resume

* Upload Resume
* AI Resume Analysis
* View Analysis
* Delete Analysis

---

# 🤖 AI Workflow

```text
Candidate Uploads Resume
          │
          ▼
Resume Parsed using pdf-parse
          │
          ▼
Google Gemini Analysis
          │
          ▼
ATS Score Generated
          │
          ▼
Resume Analysis Saved
          │
          ▼
Linked to Candidate Application
```

---

# 👨‍💻 Team

**Team aiRecruitment**

Developed as a Full Stack AI Recruitment Portal using modern web technologies.

---

# 📜 License

This project was built for educational and hackathon purposes.

---

⭐ If you found this project useful, consider giving it a star on GitHub!
