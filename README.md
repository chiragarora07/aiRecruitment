<div align="center">

# 🚀 HireFlow

### AI-Powered Recruitment Platform

**Connecting the right talent with the right opportunity — intelligently.**

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)

</div>

---

## 📌 Overview

**HireFlow** is a full-stack AI-powered recruitment platform built to modernize and simplify the hiring pipeline. It bridges the gap between recruiters and candidates through intelligent job management, resume analysis, and AI-driven feedback — all in one seamless experience.

> Built for speed. Driven by AI. Designed for humans.

---

## ✨ Key Features

### 🔐 Secure Authentication
- User registration & login with **JWT-based authentication**
- Protected API routes with middleware-based session handling
- Role-aware access for recruiters and candidates

### 💼 Smart Job Management
- Recruiters can **create and manage job postings** in real time
- Candidates can **browse and apply** for available positions
- Intelligent candidate-job **matching workflow**

### 📄 Resume Management
- Upload and store candidate resumes securely
- Track full **resume version history**
- Easy deletion and management of resume records

### 🤖 AI Resume Analysis *(Powered by Google Gemini)*
- Deep resume **content analysis**
- Automated **ATS score generation**
- **Skill extraction** from resume text
- Resume quality evaluation with **actionable improvement suggestions**

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL + Prisma ORM |
| **AI Engine** | Google Gemini API |
| **Auth** | JWT (JSON Web Tokens) |

---

## 🏗 Project Architecture

```
aiRecruitment/
│
├── frontend/
│   ├── pages/          # HTML pages
│   ├── styles/         # CSS stylesheets
│   └── scripts/        # Vanilla JavaScript
│
├── backend/
│   ├── routes/         # API route definitions
│   ├── controllers/    # Business logic
│   ├── middleware/     # Auth & error handling
│   ├── prisma/         # Schema & migrations
│   └── server.js       # Entry point
│
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- PostgreSQL database
- Google Gemini API key

---

### 1. Clone the Repository

```bash
git clone https://github.com/chiragarora07/aiRecruitment.git
cd aiRecruitment
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `/backend` directory:

```env
PORT=5000
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Initialize the database:

```bash
npx prisma generate
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

> Backend runs at: `http://localhost:5000`

---

### 3. Frontend Setup

```bash
cd frontend
```

Open `index.html` directly in your browser, or serve it using **Live Server** (VS Code extension).

---

## 🔌 API Reference

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Log in and receive JWT token |

### Resume

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/resume/upload` | Upload a new resume |
| `GET` | `/api/resume/history` | Fetch resume upload history |
| `DELETE` | `/api/resume/:id` | Delete a specific resume |

### Jobs

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/jobs` | List all job postings |
| `POST` | `/api/jobs` | Create a new job posting |

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `GEMINI_API_KEY` | Google Gemini AI API key |
| `PORT` | Backend server port (default: 5000) |

---

## 🗺 Roadmap

- [ ] Advanced AI candidate-job matching engine
- [ ] Recruiter analytics dashboard
- [ ] Email notification system
- [ ] Enhanced resume parsing (multi-format support)
- [ ] Cloud deployment support (AWS / Railway / Render)
- [ ] Real-time application status tracking

---

## 👥 Team

<div align="center">

Built with ❤️ by **Team aiRecruitment**

*HireFlow — Smarter Hiring Starts Here*

</div>

---

## 📜 License

This project was developed for **educational and hackathon purposes**.

---

<div align="center">

⭐ If you found this project interesting, give it a star!

</div>
