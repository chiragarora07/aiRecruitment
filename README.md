# 🚀 HireFlow (Under Construction)

### AI-Powered Recruitment Platform

**HireFlow** is an AI-powered recruitment platform that streamlines the complete hiring process—from organization management and recruitment drives to candidate applications and AI-based resume analysis.

---

# ✨ Features

## 🔐 Authentication

* User Registration & Login
* JWT Authentication
* Role-based Access Control (Admin, Candidate, Interviewer)

## 🏢 Organization Management

* Create Organizations
* View Organizations
* Manage Organization Details

## 💼 Recruitment Drives

* Create Recruitment Drives
* View Active Drives
* Manage Drive Status
* Application Deadlines

## 👨‍🎓 Candidate Portal

* Browse Available Drives
* Apply to Drives
* Upload Resume
* Track Applications

## 📄 Resume Analysis (AI)

* PDF Resume Upload
* Resume Text Extraction
* Google Gemini AI Analysis
* ATS Score Generation
* Strengths & Weaknesses
* Missing Skills Detection
* Improvement Suggestions
* AI-generated Interview Questions

## 📊 Application Management

* Candidate Applications
* Resume Linked to Applications
* AI Score Storage
* Resume Analysis History

---

# 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

### AI

* Google Gemini API

### Authentication

* JWT

### File Upload

* Multer
* PDF-Parse

---

# 📂 Project Structure

```text
aiRecruitment/
│
├── server/
│   │
│   ├── config/
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── prompts/
│   │
│   ├── public/
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── managedrives.html
│   │   ├── organisations.html
│   │   ├── applytodrive.html
│   │   ├── candidatedashboard.html
│   │   ├── interviewerdashboard.html
│   │   └── ...
│   │
│   ├── routes/
│   │
│   ├── services/
│   │
│   ├── uploads/
│   │
│   ├── utils/
│   │
│   ├── validators/
│   │
│   ├── app.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/chiragarora07/aiRecruitment.git
cd aiRecruitment/server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Migrations

```bash
npx prisma migrate dev
```

Start the Server

```bash
npm run dev
```

Open

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

## Organizations

| Method | Endpoint           |
| ------ | ------------------ |
| GET    | /api/organizations |
| POST   | /api/organizations |

## Drives

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /api/drives     |
| POST   | /api/drives     |
| PUT    | /api/drives/:id |
| DELETE | /api/drives/:id |

## Applications

| Method | Endpoint          |
| ------ | ----------------- |
| POST   | /api/applications |
| GET    | /api/applications |

## Resume

| Method | Endpoint                 |
| ------ | ------------------------ |
| POST   | /api/resume/upload       |
| GET    | /api/resume/analysis     |
| GET    | /api/resume/analysis/:id |
| DELETE | /api/resume/:id          |

---

# 🤖 AI Resume Analysis

After a candidate uploads a resume:

1. Resume PDF is uploaded.
2. Text is extracted using PDF-Parse.
3. Google Gemini analyzes the resume.
4. ATS Score is generated.
5. Resume strengths are identified.
6. Weaknesses are highlighted.
7. Missing skills are detected.
8. Suggestions for improvement are generated.
9. Interview questions are generated automatically.
10. Analysis is stored in PostgreSQL.

---

# 🔑 Environment Variables

```env
PORT=

DATABASE_URL=

JWT_SECRET=

GEMINI_API_KEY=
```

---

# 🚀 Deployment

The application is deployed on **Render**.

Deployment includes:

* Node.js Backend
* PostgreSQL Database
* Static Frontend served from Express
* AI Resume Analysis using Google Gemini

---

# 👥 Team

Built by **Team aiRecruitment**

* Chirag Arora
* Team Members

---

# 📄 License

This project was developed for educational and hackathon purposes.

---

⭐ **If you like this project, don't forget to give it a star!**
