# 🚀 HireFlow

<div align="center">

### AI-Powered Smart Recruitment Platform

### *Recruit Smarter. Hire Faster. Powered by AI.*

<br>

[![Live Demo](https://img.shields.io/badge/🌐_Live-Demo-success?style=for-the-badge)](https://hireflow-ke1s.onrender.com)
[![Project Demo](https://img.shields.io/badge/🎥_Demo_Video-4285F4?style=for-the-badge)](https://drive.google.com/file/d/1br8R-y_D--tyY8JPU2L0wdrsql1XtcrQ/view?usp=sharing)

<br>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge\&logo=google)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge\&logo=jsonwebtokens)

</div>

---

# 📖 About

**HireFlow** is a full-stack AI-powered recruitment platform that modernizes and simplifies the campus recruitment process.

It enables recruiters to create organizations, manage hiring drives, evaluate candidates, and leverage **Google Gemini AI** to automatically analyze resumes, generate ATS scores, identify missing skills, provide improvement suggestions, and generate interview questions.

Designed for hackathons and real-world recruitment workflows, HireFlow combines automation, intelligent resume screening, and role-based access into one seamless platform.

---

# 🌐 Live Demo

### 🚀 Deployed Application

**Live Website**

👉 https://hireflow-ke1s.onrender.com

---

### 🎥 Project Demonstration

Watch the complete walkthrough of HireFlow

👉 https://drive.google.com/file/d/1br8R-y_D--tyY8JPU2L0wdrsql1XtcrQ/view?usp=sharing

> **Note:** The application is deployed on **Render's Free Tier**. The first request may take **30–60 seconds** while the server wakes up.

---

# ✨ Features

## 🔐 Authentication

* JWT Authentication
* Secure Login & Registration
* Role-Based Access Control
* Admin
* Candidate
* Interviewer

---

## 🏢 Organization Management

* Create Organizations
* Manage Organizations
* View Organization Details

---

## 💼 Recruitment Drives

* Create Hiring Drives
* Manage Active Drives
* Application Deadlines
* Drive Status Management

---

## 👨‍🎓 Candidate Portal

* Browse Available Drives
* Apply to Recruitment Drives
* Resume Upload
* Application Tracking

---

## 🤖 AI Resume Analysis

Powered by **Google Gemini**

✔ ATS Score Generation

✔ Resume Parsing

✔ Skill Extraction

✔ Strength Analysis

✔ Weakness Detection

✔ Missing Skills Identification

✔ Resume Improvement Suggestions

✔ AI Generated Interview Questions

---

## 📄 Resume Management

* PDF Upload
* Resume Storage
* Resume Analysis History
* Resume linked with Applications

---

## 📊 Application Management

* Candidate Applications
* Resume Analysis Storage
* AI Score Management
* Resume Tracking

---

# 🛠 Tech Stack

| Layer              | Technologies                    |
| ------------------ | ------------------------------- |
| **Frontend**       | HTML5, CSS3, Vanilla JavaScript |
| **Backend**        | Node.js, Express.js             |
| **Database**       | PostgreSQL + Prisma ORM         |
| **Authentication** | JWT                             |
| **AI Engine**      | Google Gemini API               |
| **File Upload**    | Multer                          |
| **Resume Parser**  | PDF-Parse                       |

---

# 📂 Project Structure

```text
aiRecruitment/
│
├── server/
│   │
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── prompts/
│   ├── public/
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── admindashboard.html
│   │   ├── applicantdashboard.html
│   │   ├── interviewerdashboard.html
│   │   ├── managedrives.html
│   │   ├── organisations.html
│   │   ├── applytodrive.html
│   │   ├── resumeanalysis.html
│   │   └── ...
│   ├── routes/
│   ├── services/
│   ├── uploads/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

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

### Create Environment Variables

Create a **.env** file inside the `server` folder.

```env
PORT=5000

DATABASE_URL=YOUR_POSTGRESQL_DATABASE_URL

JWT_SECRET=YOUR_SECRET_KEY

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

### Start Development Server

```bash
npm run dev
```

Open the application:

```
http://localhost:5000
```

---

# 📡 API Overview

## Authentication

| Method | Endpoint             |
| ------ | -------------------- |
| POST   | `/api/auth/register` |
| POST   | `/api/auth/login`    |

---

## Organizations

| Method | Endpoint             |
| ------ | -------------------- |
| GET    | `/api/organizations` |
| POST   | `/api/organizations` |

---

## Recruitment Drives

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | `/api/drives`     |
| POST   | `/api/drives`     |
| PUT    | `/api/drives/:id` |
| DELETE | `/api/drives/:id` |

---

## Applications

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | `/api/applications` |
| GET    | `/api/applications` |

---

## Resume Analysis

| Method | Endpoint                   |
| ------ | -------------------------- |
| POST   | `/api/resume/upload`       |
| GET    | `/api/resume/analysis`     |
| GET    | `/api/resume/analysis/:id` |
| DELETE | `/api/resume/:id`          |

---

# 🤖 AI Resume Analysis Workflow

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
Linked with Candidate Application
```

---

# 🔑 Environment Variables

| Variable         | Description                       |
| ---------------- | --------------------------------- |
| `PORT`           | Backend Port                      |
| `DATABASE_URL`   | PostgreSQL Database URL           |
| `JWT_SECRET`     | Secret Key for JWT Authentication |
| `GEMINI_API_KEY` | Google Gemini API Key             |

---

# 🚀 Deployment

The project is deployed using:

* 🌐 Render Web Service
* 🐘 PostgreSQL Database
* 🤖 Google Gemini API
* 📂 Express Static Hosting

---

# 🗺 Future Scope

* AI Candidate Ranking
* Resume Keyword Matching
* Recruiter Analytics Dashboard
* Email Notifications
* Interview Scheduling
* Cloud File Storage
* Real-Time Application Tracking

---

# 👨‍💻 Team

### Team aiRecruitment

* Chirag Arora
* Team Members

---

# 📄 License

This project was developed for **educational and hackathon purposes**.

---

<div align="center">

## ⭐ If you found this project useful, don't forget to give it a Star!

### Built with ❤️ using Node.js, Express, PostgreSQL, Prisma & Google Gemini

</div>
