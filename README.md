# 🚀 HireFlow

<div align="center">

# 🤖 AI-Powered Recruitment Platform

### *Smarter Hiring • Better Candidates • Faster Recruitment*

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-FFD43B?style=for-the-badge\&logo=javascript\&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge\&logo=prisma\&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge\&logo=jsonwebtokens)
![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge\&logo=google\&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge\&logo=render\&logoColor=black)

</p>

### 📌 Full Stack AI Recruitment Platform built using Node.js, Express, PostgreSQL, Prisma & Google Gemini AI

**HireFlow** simplifies recruitment by allowing organizations to create recruitment drives, candidates to apply online, upload resumes, and receive AI-powered resume analysis with ATS scoring and improvement suggestions.

---

⭐ **If you like this project, don't forget to star the repository!**

</div>

---

# 📑 Table of Contents

* Overview
* Features
* Technology Stack
* Project Architecture
* AI Workflow
* Installation
* Environment Variables
* Deployment
* API Modules
* Future Scope
* Team

---

# 📖 Overview

Hiring candidates manually is time-consuming and inefficient.

**HireFlow** provides an AI-assisted recruitment platform where recruiters can manage hiring while candidates receive intelligent resume feedback before interviews.

The platform includes:

* Secure Authentication
* Organization Management
* Recruitment Drives
* Resume Upload
* AI Resume Analysis
* ATS Score Generation
* Candidate Tracking
* Interview Workflow

---

# ✨ Features

## 🔐 Authentication

* JWT Authentication
* Secure Login & Registration
* Protected Routes
* Role-Based Access Control

---

## 🏢 Organization Module

* Create Organizations
* View Organizations
* Organization Management
* Recruiter Dashboard

---

## 💼 Recruitment Drive Module

* Create Recruitment Drives
* Open / Close Drives
* Manage Active Drives
* Application Deadlines
* Candidate Applications

---

## 👨‍💻 Candidate Module

* Browse Recruitment Drives
* Apply to Jobs
* Upload Resume
* Track Applications

---

## 📄 Resume Module

* Upload PDF Resume
* Resume Parsing
* Resume Storage
* Resume Management

---

## 🤖 AI Resume Analysis

Powered by **Google Gemini AI**

Automatically generates:

* ✅ ATS Score
* ✅ Resume Strengths
* ✅ Resume Weaknesses
* ✅ Missing Skills
* ✅ Improvement Suggestions
* ✅ Interview Questions

Includes a fallback response when Gemini API quota is exceeded.

---

## 📊 Admin Dashboard

* Dashboard Analytics
* Organization Management
* Recruitment Drive Management
* Candidate Management
* Resume Analytics

---

## 👨‍💼 Interviewer Dashboard

* Assigned Candidates
* Resume Review
* Candidate Details
* Interview Feedback

---

# 🛠 Technology Stack

| Category        | Technology              |
| --------------- | ----------------------- |
| Frontend        | HTML5, CSS3, JavaScript |
| Backend         | Node.js, Express.js     |
| Database        | PostgreSQL              |
| ORM             | Prisma ORM              |
| Authentication  | JWT                     |
| AI              | Google Gemini           |
| Resume Parser   | pdf-parse               |
| File Upload     | Multer                  |
| Deployment      | Render                  |
| Version Control | Git & GitHub            |

---

# 🏗 Project Architecture

```text
HireFlow
│
├── DataBase/
│
└── server/
    │
    ├── config/                # Database & application configuration
    │
    ├── controllers/           # Business logic
    │
    ├── middleware/            # JWT authentication & middleware
    │
    ├── models/                # Database models
    │
    ├── prisma/
    │   ├── schema.prisma
    │   └── migrations/
    │
    ├── prompts/               # AI prompt templates
    │
    ├── public/                # Frontend (HTML, CSS & JavaScript)
    │
    ├── routes/                # Express routes
    │
    ├── services/              # AI, Email & Business services
    │
    ├── uploads/               # Uploaded resumes
    │
    ├── utils/                 # Utility functions
    │
    ├── validators/            # Request validation
    │
    ├── app.js                 # Express entry point
    ├── package.json
    ├── package-lock.json
    └── prisma.config.ts
```

---

# 🤖 AI Workflow

```text
Candidate Uploads Resume
            │
            ▼
      Resume Upload
            │
            ▼
      PDF Text Extraction
        (pdf-parse)
            │
            ▼
     Google Gemini AI
            │
            ▼
    ATS Score Generation
            │
            ▼
 Skill Extraction & Analysis
            │
            ▼
 Suggestions & Interview Questions
            │
            ▼
 Saved in PostgreSQL Database
            │
            ▼
 Displayed on Dashboard
```

---

# 🔄 System Workflow

```text
Recruiter
    │
    ▼
Create Organization
    │
    ▼
Create Recruitment Drive
    │
    ▼
Candidate Registers
    │
    ▼
Candidate Applies
    │
    ▼
Resume Upload
    │
    ▼
AI Resume Analysis
    │
    ▼
Application Stored
    │
    ▼
Interviewer Reviews Candidate
```

---

# 📸 Screenshots

> Add screenshots of your project here.

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
docs/images/manage-drives.png
```

---

### 🤖 Resume Analysis

```
docs/images/resume-analysis.png
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/chiragarora07/aiRecruitment.git
```

Move into the server folder

```bash
cd HireFlow/server
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a **.env** file inside the server directory.

```env
PORT=5000

DATABASE_URL=YOUR_DATABASE_URL

JWT_SECRET=YOUR_SECRET_KEY

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# 🗄 Database Setup

Generate Prisma Client

```bash
npx prisma generate
```

Run Database Migration

```bash
npx prisma migrate dev
```

---

# ▶ Run Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

Application runs on

```
http://localhost:5000
```

---

# 🌐 Deployment

Backend deployed on **Render**

Deployment Steps

* Push code to GitHub
* Connect GitHub Repository
* Select Root Directory as **server**
* Add Environment Variables
* Deploy

---

# 📡 API Modules

### Authentication

* Register
* Login
* JWT Authentication

### Organizations

* Create Organization
* Get Organizations

### Recruitment Drives

* Create Drive
* Update Drive
* Delete Drive
* View Drives

### Applications

* Apply to Drive
* View Applications

### Resume

* Upload Resume
* AI Analysis
* Resume History
* Delete Resume

---

# 🎯 Future Scope

* AI Candidate Ranking
* AI Interview Assistant
* Email Notifications
* Interview Scheduling
* Cloud Resume Storage
* Analytics Dashboard
* Resume Versioning
* Skill Matching Engine
* Recruiter Reports

---

# 👨‍💻 Team

### Team aiRecruitment

Built with ❤️ during a Hackathon using modern Full Stack technologies.

---

# 🙏 Acknowledgements

* Google Gemini AI
* Prisma ORM
* PostgreSQL
* Node.js
* Express.js
* Render
* GitHub

---

<div align="center">

# ⭐ Thank You!

### **HireFlow — Smart Hiring Powered by Artificial Intelligence**

Made with ❤️ by **Team aiRecruitment**

</div>
