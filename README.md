# Prashanth H M — Software Engineer Portfolio Website

A modern, visually impressive, responsive personal developer portfolio website engineered for **Prashanth H M**, Computer Science and Engineering student at UVCE, Bengaluru (Class of 2027).

Built with **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**, crafted with a high-end dark developer aesthetic.

---

## 🚀 Key Highlights & Sections

- **Developer Aesthetic Hero:**
  - Status indicator: `🟢 Available for Summer 2025 / 2026 Internships • UVCE '27 (8.67 CGPA)`
  - Headline, role titles, and introduction
  - Action triggers for Projects, Resume Modal, and Contact
  - Direct links to GitHub (`https://github.com/prashu26`) and LinkedIn
  - **Interactive Developer Terminal:** Interactive command prompt supporting `whoami`, `skills`, `projects`, `education`, `contact`, `sudo hire`, `clear`, and tab switching (`profile.ts`, `stack.json`, `status.log`).

- **About Me & Core Pillars:**
  - Education details: University Visvesvaraya College of Engineering (UVCE), Bengaluru | CGPA: 8.67/10 | Expected Graduation: 2027
  - Core philosophy: First-principles engineering, performance, reliability, and maintainability
  - **4 Visual Cards ("What I Enjoy Building"):**
    1. *Backend Systems & REST APIs*
    2. *AI-Powered Applications & LLMs*
    3. *Full-Stack Web Applications*
    4. *Cloud Infrastructure & DevOps*

- **Technical Skills Matrix:**
  - Filterable tabs & real-time search across 29+ technologies
  - Real technology badges (no arbitrary skill percentage bars)
  - Categories: Programming Languages, Backend & Database, Frontend Development, AI & Machine Learning, Cloud & DevOps

- **Featured Projects (Centerpiece):**
  - **Project 1: AI-Powered Specialist Recommendation & Chatbot** (Python, Node.js, WebSockets, MongoDB, LLMs)
  - **Project 2: HomeHub – Home Rental Platform** (React, Express, Node, MongoDB, JWT, OAuth 2.0)
  - **Project 3: Blockchain-Based Credential Verification System** (Smart India Hackathon National Finalist)
  - **Project 4: Driver Monitoring System** (Computer Vision, PERCLOS, MAR, ONNX Runtime Edge Inference)
  - **Project 5: Local DevOps Deployment Pipeline** (Docker, Docker Compose, Linux, AWS Architecture)
  - **Interactive Project Deep-Dive Modal:** In-depth architecture flow diagrams, system components, problem breakdown, and engineering contributions.

- **Professional Experience:**
  - MERN Stack Developer Intern at **Shishira Softbiz Pvt. Ltd.** (Jan 2024 – Apr 2024)
  - Responsibilities, REST API designs, reusable React components, and Agile workflows.

- **Hackathons & Achievements:**
  - Smart India Hackathon (SIH) – National Finalist
  - Google Bit N Build Hackathon – Top 4 at State Level (Karnataka)
  - Evolve & Explore Hackathon – Best Performer
  - IEEE Technical Event Organizer (UVCE)

- **GitHub Integration:**
  - Live API fetch from `https://api.github.com/users/prashu26` with graceful fallback
  - Visual GitHub-style commit activity calendar / heatmap
  - Direct repository cards with stars, forks, and tags

- **Functional Contact Section:**
  - Direct message form with client-side validation, loading feedback, celebratory confetti, and mailto fallback
  - One-click email copy with instant feedback (`prashanthhm26@gmail.com`)

- **Interactive Command Palette (`⌘K` / `Ctrl+K`):**
  - Instant keyboard shortcuts to jump across sections, view projects, copy email, or open links.

- **Built-in Resume Viewer Modal:**
  - Formatted Curriculum Vitae with Print/Save to PDF and direct download.

---

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom dark developer theme with glassmorphism, grid textures, and glows)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas-Confetti

---

## ⚙️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📝 Updating Portfolio Data

All personal information, project descriptions, GitHub URLs, skills, and achievements are organized centrally in:
```
src/data/portfolioData.ts
```
Simply edit this file to update your links, descriptions, or new projects—the entire UI updates automatically.
