# MediQueue

**MediQueue** is a full-stack tutor discovery and session booking platform. Students can browse tutors, book sessions, and manage appointments; tutors can list their profiles, set availability, and track bookings—all through a modern, responsive web app.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-Auth-47A248?style=flat-square&logo=mongodb)

---

## Live Demo

[Live Link](https://mediqueue-client-ck.vercel.app)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [API Integration](#api-integration)
- [Scripts](#scripts)

---

## Features

### Landing & Discovery

- **Hero carousel** — Three-slide banner with calls to action linking to the tutor catalog
- **Featured tutors** — Homepage grid of available tutors fetched from the API
- **Why Choose MediQueue** — Animated feature highlights (easy booking, verified tutors, flexible scheduling, affordable pricing)
- **How It Works** — Four-step guide: search → select slot → book → start learning

### Authentication & Security

- **Email & password** — Sign up and log in with validation (password strength, show/hide toggle)
- **Google OAuth** — One-click social sign-in via Better Auth
- **JWT sessions** — Cookie-based sessions with JWT plugin for protected API calls
- **Route protection** — Middleware redirects unauthenticated users from protected pages (`/my-tutors`, `/add-tutor`, `/all-tutors/*`, `/my-bookings`)
- **Bearer tokens** — Authorized requests to the backend for tutor and booking operations

### Browse & Book Tutors

- **All tutors page** — Responsive card grid with subject, fee, and session start date
- **Search & filters** — Filter by tutor name and session date range (start/end date)
- **Tutor detail page** — Full profile: institution, experience, location, mode, availability, remaining slots, hourly fee
- **Book session modal** — Pre-filled student name and email; captures phone, tutor ID, and booking details
- **Post-booking redirect** — Success toast and navigation to My Bookings

### Tutor Management (Providers)

- **Add tutor** — Rich form: name, photo URL, subject, availability, hourly fee, slots, session date, institution, experience, location, teaching mode (online/offline/both)
- **Subject picker** — Physics, Mathematics, Biology, English, ICT, Chemistry, and more
- **My tutors dashboard** — Table view of your listings with avatar, availability, fee, slots, and registration date
- **Update tutor** — Edit listing details via modal
- **Delete tutor** — Confirmation dialog before permanent removal

### Student Bookings

- **My bookings** — Table of booked sessions: tutor, student name, email, status badge
- **Cancel booking** — Confirmation modal with JWT-protected PATCH; status updates and page refresh
- **Empty states** — Friendly prompts when no tutors or bookings exist, with quick links to add or book

### User Profile

- **Profile page** — View name, email, and avatar with dynamic page title
- **Edit profile** — Update display name and photo URL via Better Auth

### UI & UX

- **Dark / light theme** — System-aware theme toggle with `next-themes`
- **Toast notifications** — Success and error feedback via `react-hot-toast`
- **Motion animations** — Scroll-triggered card animations on listings and landing sections
- **Loading states** — Route-level loading UI and session spinner in the navbar
- **Responsive layout** — Mobile dropdown nav, sticky blurred navbar, DaisyUI components
- **Custom 404** — Dedicated not-found page
- **Image upload help** — Modals explaining ImgBB / PostImg for profile and tutor photos

---

## Tech Stack

| Layer | Technologies |
|-------|----------------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router), React 19, React Compiler |
| **Styling** | Tailwind CSS 4, [DaisyUI](https://daisyui.com/), Animate.css |
| **Auth** | [Better Auth](https://www.better-auth.com/) + MongoDB adapter, JWT plugin |
| **Database** | MongoDB (user sessions & auth data) |
| **Animations** | Motion (Framer Motion) |
| **Utilities** | `date-fns`, `react-datepicker`, `react-icons`, `react-hot-toast` |
| **Backend** | External REST API (`NEXT_PUBLIC_SERVER_URL`) |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: latest LTS)
- **MongoDB** database (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Google Cloud Console** project (for OAuth credentials)
- **MediQueue API server** running and reachable (separate backend repo)

### Installation

```bash
# Clone the repository
git clone https://github.com/chandan-d-karmaker/mediqueue-client
cd mediqueue-client

# Install dependencies
npm install

# Create environment file (see below)
cp .env.local.example .env.local   # or create .env.local manually

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# MongoDB (Better Auth)
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/mediqueue-db

# Better Auth
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Backend API (Express / separate server)
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string for auth storage |
| `BETTER_AUTH_URL` | Base URL of this Next.js app (used by auth client) |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google OAuth app credentials |
| `NEXT_PUBLIC_SERVER_URL` | Base URL of the MediQueue REST API |

---

## Project Structure
```
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── (auth)
│   │   │   ├── login
│   │   │   │   └── page.jsx
│   │   │   ├── signup
│   │   │   │   └── page.jsx
│   │   │   └── layout.jsx
│   │   ├── (main)
│   │   │   ├── add-tutor
│   │   │   │   └── page.jsx
│   │   │   ├── all-tutors
│   │   │   │   ├── [id]
│   │   │   │   │   ├── loading.jsx
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── loading.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── my-bookings
│   │   │   │   └── page.jsx
│   │   │   ├── my-profile
│   │   │   │   └── page.jsx
│   │   │   ├── my-tutors
│   │   │   │   └── page.jsx
│   │   │   ├── layout.jsx
│   │   │   ├── loading.jsx
│   │   │   └── page.js
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...all]
│   │   │           └── route.js
│   │   ├── components
│   │   │   ├── main
│   │   │   │   ├── AvailableTutors.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── HowItWorks.jsx
│   │   │   │   └── WhyChoose.jsx
│   │   │   └── shared
│   │   │       ├── AddTutorForm.jsx
│   │   │       ├── BackButton.jsx
│   │   │       ├── BookedTutorTable.jsx
│   │   │       ├── BookingModal.jsx
│   │   │       ├── CancleAlert.jsx
│   │   │       ├── DatePicker.jsx
│   │   │       ├── DeleteAlert.jsx
│   │   │       ├── FeatTutorCard.jsx
│   │   │       ├── Footer.jsx
│   │   │       ├── MyTutorTable.jsx
│   │   │       ├── NavBar.jsx
│   │   │       ├── Navlink.jsx
│   │   │       ├── SearchFilter.jsx
│   │   │       ├── ThemeToggle.jsx
│   │   │       ├── TutorCard.jsx
│   │   │       ├── TutorDetailedCard.jsx
│   │   │       ├── TutorUpdateModal.jsx
│   │   │       └── UpdateProfileModal.jsx
│   │   ├── providers
│   │   │   └── ThemeProvider.jsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── not-found.jsx
│   ├── assests
│   │   ├── Error-404.svg
│   │   ├── WaveLine.svg
│   │   ├── Welcome.svg
│   │   ├── circle-bg-dark.svg
│   │   ├── circle-bg-light.svg
│   │   ├── footer-dark.svg
│   │   ├── login-img.svg
│   │   ├── slide-pic-1.jpg
│   │   ├── slide-pic-2.jpg
│   │   └── slide-pic-3.jpg
│   ├── lib
│   │   ├── auth-client.js
│   │   └── auth.js
│   └── proxy.js
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── postcss.config.mjs
```

---

## Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page |
| `/all-tutors` | Protected* | Browse and search tutors |
| `/all-tutors/[id]` | Protected* | Tutor details & booking |
| `/login` | Public | Sign in |
| `/signup` | Public | Register |
| `/add-tutor` | Protected | Create a tutor listing |
| `/my-tutors` | Protected | Manage your tutors |
| `/my-bookings` | Protected | View & cancel bookings |
| `/my-profile` | Protected | View & edit profile |

\*Protected via `proxy.js` middleware—users must be logged in.

---

## API Integration

The client talks to a separate backend. Main endpoints used:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/feat-tutors` | Homepage featured tutors |
| `GET` | `/all-tutors` | List tutors (search & date filters) |
| `GET` | `/all-tutors/:id` | Tutor details |
| `POST` | `/all-tutors` | Add new tutor |
| `PATCH` | `/all-tutors/:id` | Book a session |
| `GET` | `/my-tutors/:userId` | User's tutor listings |
| `PATCH` | `/my-tutors/:id` | Update tutor |
| `DELETE` | `/my-tutors/:id` | Delete tutor |
| `GET` | `/my-bookings/:userId` | User's bookings |
| `PATCH` | `/my-bookings/:bookingId` | Cancel booking |

Protected requests include `Authorization: Bearer <token>` from Better Auth.

---


## License

![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

<p align="center">
  Built with Next.js · Better Auth · MongoDB · DaisyUI
</p>
<p align="center">
  by Chandan Karmaker
</p>

