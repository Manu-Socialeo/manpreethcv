# Srinatha Yoga School Integrated Platform
> **Enterprise Next.js 14 & Supabase Yoga Education Platform with Custom Admin CMS**

| Specification | Details |
| :--- | :--- |
| **Role** | Full-Stack Developer & Product Architect |
| **Timeline** | 2025 – Present |
| **Category** | Full-Stack Web & Mobile App |
| **Status** | Live in Production |
| **Live Link** | [https://srinathayogaschoolex.vercel.app](https://srinathayogaschoolex.vercel.app) |
| **Repository** | Private Client Repo |
| **Core Stack** | Next.js 14 (App Router) • Supabase (PostgreSQL) • TypeScript • Tailwind CSS • Vercel Edge • Cloud Storage |

---

## 📖 Executive Summary & Impact
A comprehensive digital ecosystem for Srinatha Yoga School integrating international student course enrollment, digital product sales, custom multi-tier admin dashboards, and live schedule announcements without recurring third-party SaaS fees.

---

## 📄 1. Product Requirements Document (PRD)

### 1.1 Problem Statement & Market Opportunity
Traditional yoga schools rely on fragmented third-party tools (Eventbrite, Wix, Google Forms, Mailchimp) leading to high monthly SaaS costs, disconnected student records, and slow mobile experience for international applicants.

### 1.2 Proposed Solution & Value Proposition
A unified custom web portal with centralized database management for courses, teachers, announcements, and promotional banners, paired with a sub-second mobile-first interface.

### 1.3 Target User Personas
- Prospective International Students: Seeking authenticated course details, teacher credentials, and straightforward registration.
- Yoga Instructors: Showcasing lineage, teaching styles, and class schedules.
- School Administrators: Managing website alerts, instructor rosters, course offerings, and inquiries from an intuitive zero-maintenance dashboard.

### 1.4 Core Functional Features
- **Public Showcase**:  Responsive hero, teacher roster with rich bios, verified curriculum outlines, and emergency notification banners.
- **Admin Dashboard**:  Secure CRUD operations for Instructors, Promotional Banners, and Notice Alerts directly updating live production.
- **Course Enrollment Funnel**:  Streamlined multi-step inquiry and registration flow.
- **Dynamic Content Delivery**:  Server-side rendering combined with client caching for instant worldwide load times.

---

## 🛠️ 2. Technical Requirements Document (TRD)

### 2.1 System Architecture
Next.js 14 App Router architecture deployed on Vercel's global edge network, paired with Supabase PostgreSQL for relational data and Supabase Storage for high-res media.

### 2.2 Data Schema & State Management
Entities include 'teachers' (id, name, bio, image_url, specialties, order_index), 'announcements' (id, message, active, link, created_at), and 'banners' (id, title, image, cta_url, is_active).

### 2.3 API & Service Integration
RESTful API routes under /api/admin/* with payload validation, secure service role execution, and immediate edge revalidation.

### 2.4 Security, Performance & Reliability Standards
Row-Level Security (RLS) on PostgreSQL, environment-variable isolation, automated image optimization via next/image, achieving 95+ Google Lighthouse scores.

---

## 🎨 3. UI/UX Design System & Experience

### 3.1 Design System & Aesthetic Direction
Warm earthy elegance blending traditional yoga serenity with high-precision modern typography (Plus Jakarta Sans).

### 3.2 Color Palette & Typography Hierarchy
Deep terracotta (#B45309), soft sand ivory (#FDFBF7), forest accents, and dark obsidian text (#1C1917).

### 3.3 Interactions & Micro-Animations
Smooth accordion transitions, subtle glassmorphic alert cards, responsive touch-optimized teacher carousels.

---

## 🏆 Engineering Credits & Portfolio Highlights
- **Architecture Ownership**: Full design, implementation, and deployment handled end-to-end.
- **Live Verification**: Actively deployed and optimized for production traffic.
- **Code Quality**: Built to modern standards with responsive performance and zero bloat.

*Engineered by Manpreeth N — Operations & AI-Assisted Full-Stack Developer*