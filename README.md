<div align="center">

# 🌐 WingConsultants – Job Recruitment Platform

### A Full-Stack Freelance Solution for a Noida-based Job Recruiting Consultancy

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth.js-3ECF8E?style=for-the-badge&logo=next.js&logoColor=black)

</div>

---

<div align="center">

# 🚀 WingConsultants - Job Recruitment Platform

A **full-stack freelance project** built for **WingConsultants**, a Noida-based job recruitment consultancy. This platform empowers job seekers to browse and apply for opportunities with advanced filters and provides a secure admin dashboard for managing job listings and applicants.

![GitHub last commit](https://img.shields.io/github/last-commit/reallywasi/wingconsultants-platform?style=flat-square)
![License](https://img.shields.io/badge/License-Proprietary-blue?style=flat-square)

</div>



## 🌐 Overview

**WingConsultants** is a modern job portal designed to streamline recruitment for a Noida-based consultancy. Key highlights:
- **Job Seekers**: Browse jobs with advanced filters (category, location, experience) and apply seamlessly.
- **Administrators**: Manage job postings and applicant data via a secure, role-based dashboard.
- **Technology**: Built with a robust stack (Next.js, Node.js, MongoDB) for performance and scalability.
- **Authentication**: Secure Google OAuth login via NextAuth.js.
- **Responsive Design**: Optimized for all devices, ensuring accessibility and a smooth user experience.

This freelance project showcases a professional, scalable solution tailored to client needs.

---

## 🧰 Tech Stack

<div align="center">
<table style="width: 80%; border-spacing: 10px; text-align: center;">
  <tr>
    <th>Layer</th>
    <th>Technologies</th>
  </tr>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>
      <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/-transparent?logo=nextdotjs&logoColor=000000" alt="Next.js" height="40" /></a>
      <a href="https://www.tailwindcss.com/" target="_blank"><img src="https://img.shields.io/badge/-transparent?logo=tailwindcss&logoColor=38B2AC" alt="Tailwind CSS" height="40" /></a>
    </td>
  </tr>
  <tr>
    <td><strong>Backend</strong></td>
    <td>
      <a href="https://nodejs.org/" target="_blank"><img src="https://img.shields.io/badge/-transparent?logo=nodedotjs&logoColor=339933" alt="Node.js" height="40" /></a>
      <a href="https://expressjs.com/" target="_blank"><img src="https://img.shields.io/badge/-transparent?logo=express&logoColor=000000" alt="Express.js" height="40" /></a>
    </td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>
      <a href="https://www.mongodb.com/" target="_blank"><img src="https://img.shields.io/badge/-transparent?logo=mongodb&logoColor=47A248" alt="MongoDB" height="40" /></a>
    </td>
  </tr>
  <tr>
    <td><strong>Authentication</strong></td>
    <td>
      <a href="https://next-auth.js.org/" target="_blank"><img src="https://img.shields.io/badge/-transparent?logo=nextdotjs&logoColor=3ECF8E" alt="NextAuth.js" height="40" /></a>
    </td>
  </tr>
</table>
</div>

---

## 🎯 Features

### 👤 User Features
<div align="center">
<table style="width: 80%; border-spacing: 10px;">
  <tr>
    <th>Feature</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>🔍 Advanced Job Search</td>
    <td>Filter jobs by category, location, experience, and more using dynamic UI components.</td>
  </tr>
  <tr>
    <td>🔐 Google OAuth Login</td>
    <td>Secure sign-in via Google accounts using NextAuth.js.</td>
  </tr>
  <tr>
    <td>📄 Profile Management</td>
    <td>Update resumes and track application statuses.</td>
  </tr>
  <tr>
    <td>🧾 Job Applications</td>
    <td>Apply to jobs directly through interactive job cards.</td>
  </tr>
</table>
</div>

### 🧑‍💼 Admin Features
<div align="center">
<table style="width: 80%; border-spacing: 10px;">
  <tr>
    <th>Feature</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>🛡️ Secure Dashboard</td>
    <td>Role-based access for administrators to manage platform operations.</td>
  </tr>
  <tr>
    <td>📝 Job Management</td>
    <td>Create, update, and delete job listings via a user-friendly interface.</td>
  </tr>
  <tr>
    <td>👀 Applicant Insights</td>
    <td>View detailed candidate information and application details.</td>
  </tr>
</table>
</div>

---

## 📂 Project Structure



```plaintext
📦 WingConsultants
├── 📁 app/
│   ├── layout.js              # Root layout for Next.js
│   ├── page.jsx               # Homepage
│   ├── globals.css            # Global styles with Tailwind
│   ├── favicon.ico            # Site favicon
│   ├── Providers.js           # Context providers for state management
│   ├── 📁 jobs/
│   │   ├── page.jsx           # Job listings page
│   │   └── [id]/page.jsx      # Dynamic job detail page
│   ├── 📁 Employer/
│   │   └── page.jsx           # Admin dashboard
│   └── 📁 api/
│       ├── 📁 auth/[...nextauth]/route.js  # NextAuth routes
│       └── 📁 user/route.js                # User API endpoint
├── 📁 backend/
│   ├── server.js              # Express.js server
│   ├── database/connectDB.js  # MongoDB connection
│   ├── 📁 controllers/
│   │   ├── candidateController.js  # Candidate-related logic
│   │   └── employerController.js   # Employer-related logic
│   ├── 📁 models/
│   │   ├── candidateModel.js  # MongoDB schema for candidates
│   │   └── employerModel.js   # MongoDB schema for employers
│   └── 📁 routes/
│       ├── candidateRoutes.js # Candidate API routes
│       └── employerRoutes.js  # Employer API routes
├── 📁 components/
│   ├── CandidateForm.jsx      # Form for candidate applications
│   ├── JobCard.jsx            # Reusable job listing component
│   ├── Navbar.jsx             # Navigation bar
│   ├── SignInBtn.jsx          # Google OAuth sign-in button
│   ├── Testimonial.jsx        # User testimonials component
│   └── UserInfo.jsx           # User profile display
├── 📁 public/
│   ├── google-logo.png        # Google OAuth logo
│   ├── next.svg               # Next.js logo
│   └── vercel.svg             # Vercel logo
├── 📁 lib/
│   └── mongodb.js             # MongoDB connection utility
├── 📁 models/
│   └── user.js                # User model for authentication
├── .eslintrc.json             # ESLint configuration
├── jsconfig.json              # JavaScript/Next.js config
├── package.json               # Project dependencies
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
