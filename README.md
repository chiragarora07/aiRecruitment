# 🚀 HireFlow — AI Recruitment Platform

HireFlow is an AI-powered recruitment platform that simplifies the hiring process by connecting recruiters and candidates through intelligent job management, resume analysis, and AI-driven insights.

The platform helps recruiters find suitable candidates faster and helps candidates improve their resumes using AI-powered feedback.

---

## ✨ Features

### 🔐 Authentication

* Secure user registration and login
* JWT-based authentication
* Protected API routes
* User session handling

---

### 💼 Job Management

* Recruiters can create job postings
* Candidates can browse available jobs
* Job application management
* Candidate-job matching workflow

---

### 📄 Resume Management

* Upload resumes
* Store candidate resumes
* Resume history tracking
* Delete uploaded resumes

---

### 🤖 AI Resume Analysis

Powered by Google Gemini AI:

* Resume content analysis
* ATS score generation
* Skill extraction
* Resume quality evaluation
* AI improvement suggestions

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

### AI

* Google Gemini API

### Authentication

* JWT Authentication

---

## 🏗 Project Architecture

```
aiRecruitment
│
├── frontend
│   ├── HTML Pages
│   ├── CSS
│   └── JavaScript
│
├── backend
│   ├── Routes
│   ├── Controllers
│   ├── Middleware
│   ├── Prisma
│   └── Server
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/chiragarora07/aiRecruitment.git
```

Move into project:

```bash
cd aiRecruitment
```

---

## Backend Setup

Go to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

---

### Setup Database

Generate Prisma client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

---

### Start Backend

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

## Frontend Setup

Open frontend folder:

```bash
cd frontend
```

Run using Live Server or open:

```
index.html
```

---

## 🔌 API Modules

### Authentication

```
POST /api/auth/register

POST /api/auth/login
```

---

### Resume

```
POST /api/resume/upload

GET /api/resume/history

DELETE /api/resume/:id
```

---

### Jobs

```
GET /api/jobs

POST /api/jobs
```

---

## 🔑 Environment Variables

| Variable       | Purpose                 |
| -------------- | ----------------------- |
| DATABASE_URL   | PostgreSQL connection   |
| JWT_SECRET     | Authentication security |
| GEMINI_API_KEY | AI resume analysis      |
| PORT           | Backend server port     |

---

## 👥 Team

Built by:

**Team aiRecruitment**

---

## 📌 Future Improvements

* Advanced AI candidate matching
* Recruiter dashboard analytics
* Email notifications
* Better resume parsing
* Deployment support

---

## 📜 License

This project is developed for educational and hackathon purposes.
