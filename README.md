# 🚀 HireFlow

<div align="center">

### **AI-Powered Recruitment Platform**

**Connecting the right talent with the right opportunity — intelligently.**

---

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FFD43B?style=for-the-badge\&logo=javascript\&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge\&logo=prisma\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge\&logo=jsonwebtokens)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge\&logo=google\&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge\&logo=render\&logoColor=black)

---

### 💡 *Smarter Hiring Starts Here.*

</div>

---

# 📖 Overview

**HireFlow** is a Full Stack AI Recruitment Platform that streamlines the hiring process for recruiters while providing candidates with an AI-assisted recruitment experience.

The platform enables organizations to create recruitment drives, candidates to apply for jobs, upload resumes, receive AI-powered resume analysis, and track applications—all through a clean, modern web interface.

---

# ✨ Features

## 🔐 Authentication

* Secure Login & Registration
* JWT Authentication
* Role-Based Access Control
* Protected Routes

---

## 🏢 Organization Management

* Create Organizations
* Manage Organization Details
* Organization Dashboard

---

## 💼 Recruitment Drives

* Create Recruitment Drives
* Open / Close Drives
* View Active Drives
* Manage Applicants

---

## 👨‍💻 Candidate Portal

* Browse Available Drives
* Apply to Drives
* Track Applications
* Resume Upload

---

## 📄 Resume Management

* Upload PDF Resume
* Store Resume
* Resume History
* Resume Parsing

---

## 🤖 AI Resume Analysis

Powered by **Google Gemini AI**

Features include:

* ✅ ATS Score
* ✅ Resume Evaluation
* ✅ Skill Extraction
* ✅ Missing Skills Detection
* ✅ Strength Analysis
* ✅ Weakness Detection
* ✅ Resume Suggestions
* ✅ AI Interview Questions

> Includes a mock fallback when Gemini API quota is exceeded.

---

## 📊 Admin Dashboard

* Dashboard Analytics
* Manage Organizations
* Manage Recruitment Drives
* View Applications
* Resume Insights

---

## 👨‍💼 Interviewer Dashboard

* Assigned Candidates
* Candidate Details
* Resume Review
* Interview Feedback

---

# 🛠 Tech Stack

| Category       | Technology                |
| -------------- | ------------------------- |
| Frontend       | HTML5 • CSS3 • JavaScript |
| Backend        | Node.js • Express.js      |
| Database       | PostgreSQL                |
| ORM            | Prisma                    |
| Authentication | JWT                       |
| AI             | Google Gemini             |
| File Upload    | Multer                    |
| Resume Parsing | pdf-parse                 |
| Deployment     | Render                    |

---

# 🏗 Architecture

```text
                          HireFlow

                    ┌─────────────────┐
                    │     Frontend    │
                    │ HTML CSS JS     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Express Server  │
                    │    app.js       │
                    └────────┬────────┘
                             │
      ┌──────────────┬──────────────┬──────────────┐
      ▼              ▼              ▼              ▼
 Authentication   Controllers     Services     Middleware
      │              │              │              │
      ▼              ▼              ▼              ▼
 JWT Auth      Business Logic   Gemini AI    Route Protection
                             │
                             ▼
                       Resume Analysis
                             │
                             ▼
                         Prisma ORM
                             │
                             ▼
                       PostgreSQL DB
```

---

# 📂 Project Structure

```text
aiRecruitment/
│
└── server/
    │
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── prisma/
    │   ├── migrations/
    │   └── schema.prisma
    │
    ├── prompts/
    ├── public/
    ├── routes/
    ├── services/
    ├── uploads/
    ├── utils/
    ├── validators/
    │
    ├── app.js
    ├── package.json
    └── package-lock.json
```

---

# 🤖 AI Workflow

```text
Candidate Uploads Resume
            │
            ▼
      PDF Parsing
       (pdf-parse)
            │
            ▼
     Google Gemini AI
            │
            ▼
 Resume Evaluation & ATS
            │
            ▼
 Store Analysis in DB
            │
            ▼
 Display Results
```

---

# 📸 Application Preview

> Replace these placeholders with screenshots of your application.

### 🏠 Landing Page

```
docs/images/index.png
```

---

### 📊 Admin Dashboard

```
docs/images/admin-dashboard.png
```

---

### 👨‍💻 Candidate Dashboard

```
docs/images/candidate-dashboard.png
```

---

### 💼 Recruitment Drives

```
docs/images/drives.png
```

---

### 🤖 Resume Analysis

```
docs/images/resume-analysis.png
```

---

# 🚀 Installation

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

Create a `.env` file.

```env
PORT=5000

DATABASE_URL=YOUR_DATABASE_URL

JWT_SECRET=YOUR_SECRET

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Run Database Migrations

```bash
npx prisma migrate dev
```

---

## Start Development Server

```bash
npm run dev
```

Runs at

```
http://localhost:5000
```

---

# 🌐 Deployment

Backend deployed using **Render**.

Deployment Steps:

* Push project to GitHub
* Connect GitHub Repository
* Root Directory → `server`
* Add Environment Variables
* Deploy

---

# 📡 API Modules

### Authentication

* Register
* Login
* JWT Verification

### Organizations

* Create Organization
* View Organizations

### Recruitment Drives

* Create Drive
* View Drives
* Update Drive
* Delete Drive

### Applications

* Apply to Drive
* Manage Applications

### Resume

* Upload Resume
* AI Analysis
* Resume History
* Delete Resume

---

# 🎯 Future Scope

* Email Notifications
* AI Candidate Ranking
* Interview Scheduling
* Analytics Dashboard
* Cloud Storage
* Resume Versioning
* Skill Matching
* AI Interview Assistant

---

# 👥 Team

### Team aiRecruitment

Developed as a Full Stack AI Recruitment Platform for hackathons and educational purposes.

---

# ❤️ Acknowledgements

* Google Gemini AI
* Prisma ORM
* PostgreSQL
* Express.js
* Node.js
* Render
* Open Source Community

---

# 📜 License

This project is intended for **educational and hackathon purposes**.

---

<div align="center">

## ⭐ If you like this project, consider giving it a star!

### **HireFlow — Smart Hiring. Powered by AI.**

</div>
