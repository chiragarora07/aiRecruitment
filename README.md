# 🚀 HireFlow (Under Construction)

<div align="center">

### AI-Powered Smart Recruitment Platform

*Recruit Smarter. Hire Faster. Powered by AI.*

<br>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge\&logo=google)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=jsonwebtokens)

</div>

---

# 📖 About

**HireFlow** is a full-stack AI-powered recruitment platform that simplifies the hiring process for organizations and candidates.

The platform enables recruiters to create recruitment drives, manage organizations, review applications, and leverage **Google Gemini AI** to automatically analyze resumes, calculate ATS scores, identify missing skills, and generate interview questions.

Designed for modern hiring workflows, HireFlow combines automation, intelligent resume screening, and role-based access into one seamless platform.

---

# ✨ Features

## 🔐 Authentication

* Secure JWT Authentication
* User Registration & Login
* Role-Based Access (Admin, Candidate, Interviewer)

---

## 🏢 Organization Management

* Create Organizations
* Manage Recruitment Organizations
* Organization Dashboard

---

## 💼 Recruitment Drives

* Create Hiring Drives
* Manage Drive Status
* Set Application Deadlines
* View Active Drives

---

## 👨‍🎓 Candidate Portal

* Browse Available Drives
* Apply for Recruitment Drives
* Upload Resume
* Track Applications

---

## 🤖 AI Resume Analysis

Powered by **Google Gemini**

✔ ATS Score Generation

✔ Resume Parsing

✔ Strength Analysis

✔ Weakness Detection

✔ Missing Skills Identification

✔ Resume Improvement Suggestions

✔ AI Generated Interview Questions

---

## 📄 Resume Management

* PDF Resume Upload
* Resume Storage
* Resume History
* Resume linked to Applications

---

## 📊 Application Management

* Candidate Applications
* AI Resume Scores
* Resume Analysis Storage
* Application Tracking

---

# 🛠 Tech Stack

| Category       | Technologies            |
| -------------- | ----------------------- |
| Frontend       | HTML5, CSS3, JavaScript |
| Backend        | Node.js, Express.js     |
| Database       | PostgreSQL + Prisma ORM |
| Authentication | JWT                     |
| AI             | Google Gemini API       |
| File Upload    | Multer                  |
| Resume Parsing | PDF-Parse               |

---

# 📂 Project Structure

```text
aiRecruitment/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── prisma/
│   ├── prompts/
│   ├── public/
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/chiragarora07/aiRecruitment.git
```

```bash
cd aiRecruitment/server
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure Environment

Create a **.env** file

```env
PORT=5000

DATABASE_URL=YOUR_DATABASE_URL

JWT_SECRET=YOUR_SECRET

GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

### Generate Prisma Client

```bash
npx prisma generate
```

---

### Run Database Migration

```bash
npx prisma migrate dev
```

---

### Start Server

```bash
npm run dev
```

Open

```
http://localhost:5000
```

---

# 📡 API Overview

## Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

---

## Organizations

* GET `/api/organizations`
* POST `/api/organizations`

---

## Recruitment Drives

* GET `/api/drives`
* POST `/api/drives`
* PUT `/api/drives/:id`
* DELETE `/api/drives/:id`

---

## Applications

* POST `/api/applications`
* GET `/api/applications`

---

## Resume

* POST `/api/resume/upload`
* GET `/api/resume/analysis`
* GET `/api/resume/analysis/:id`
* DELETE `/api/resume/:id`

---

# 🤖 AI Workflow

```text
Candidate Uploads Resume
            │
            ▼
      PDF Text Extraction
            │
            ▼
     Google Gemini Analysis
            │
            ▼
 ATS Score • Skills • Suggestions
            │
            ▼
Resume Stored in PostgreSQL
            │
            ▼
Linked to Candidate Application
```

---

# 🔑 Environment Variables

| Variable       | Description             |
| -------------- | ----------------------- |
| PORT           | Backend Port            |
| DATABASE_URL   | PostgreSQL Database URL |
| JWT_SECRET     | JWT Secret              |
| GEMINI_API_KEY | Google Gemini API Key   |

---

# 🚀 Deployment

The project is deployed using:

* 🌐 Render
* 🐘 PostgreSQL
* 🤖 Google Gemini API

---

# 🌟 Future Improvements

* AI Candidate Ranking
* Email Notifications
* Interview Scheduling
* Recruiter Analytics
* Resume Keyword Matching
* Cloud Storage Integration
* Live Interview Dashboard

---

# 👨‍💻 Team

**Team aiRecruitment**

* Chirag Arora
* Team Members

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a star!

**Made with ❤️ for Hackathons & Smart Recruitment**

</div>
