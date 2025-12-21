# 🎓 Scholarstika - Multi-Tenant School Management System

A modern, scalable, cloud-based school management platform designed to streamline operations, enhance communication, and drive academic excellence across educational institutions.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🏢 **Multi-Tenancy & Branch Management**
- Manage multiple schools under one secure system
- Independent data isolation and custom branding per institution
- Multi-branch capability with centralized billing
- Branch-specific dashboards with local autonomy

### 📊 **Core Functionality**
- **Attendance Management** - Digital attendance tracking with real-time analytics
- **Exams & Assessments** - Create exams, enter marks, generate report cards
- **Fees & Billing** - Custom fee structures, automated invoices and reminders
- **Communication System** - Announcements, messaging, SMS/email alerts
- **Analytics & Reports** - Powerful dashboards for data-driven decisions
- **Mobile Apps** - iOS, Android, and PWA support for all user roles

### 🎨 **Modern UI/UX**
- Responsive design optimized for mobile, tablet, and desktop
- Beautiful gradient backgrounds and smooth animations
- Accessible components built with Radix UI
- Dark mode support with next-themes

## 🚀 Tech Stack

### **Frontend**
- **Framework:** Next.js 16.0 (App Router)
- **Language:** TypeScript 5
- **UI Library:** React 19.2
- **Styling:** Tailwind CSS 4.1
- **Components:** Radix UI, shadcn/ui
- **Icons:** Lucide React
- **Animations:** Tailwind Animate, tw-animate-css

### **Development Tools**
- **Form Handling:** React Hook Form + Zod validation
- **State Management:** React Hooks
- **Analytics:** Vercel Analytics
- **Charts:** Recharts
- **Date Handling:** date-fns


## 🏗️ Project Structure

```
scholarstika--saas-development/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── auth/                # Authentication pages (login, signup, etc.)
│   ├── blog/                # Blog section
│   ├── contact/             # Contact page
│   ├── features/            # Features showcase
│   ├── pricing/             # Pricing plans
│   ├── institutions/        # Institution details
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── common/              # Shared components (Header, Footer)
│   ├── home/                # Home page sections
│   └── ui/                  # shadcn/ui components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets
│   ├── hero/                # Hero section images
│   ├── features/            # Feature images
│   └── ...
└── styles/                  # Global styles
```

## 🎨 Key Pages

- **Home** (`/`) - Landing page with hero, features, institutions showcase
- **Features** (`/features`) - Comprehensive feature list
- **Pricing** (`/pricing`) - Pricing plans with enterprise calculator
- **About** (`/about`) - Company information and mission
- **Blog** (`/blog`) - Educational content and updates
- **Contact** (`/contact`) - Contact form and information
- **Authentication** (`/auth/*`) - Login, signup, password recovery

## 🎯 Key Features Implementation

### Responsive Design
All components are fully responsive with mobile-first approach:
- Mobile: Optimized layouts and touch-friendly interfaces
- Tablet: Balanced grid layouts
- Desktop: Full-featured experience with advanced interactions

### Multi-Tenant Architecture
- Isolated data per institution
- Custom branding and configuration
- Centralized management dashboard
- Branch-specific access controls

### Enterprise Features
- Dynamic pricing calculator
- Custom integrations support
- Dedicated account management
- 24/7 priority support
- SLA guarantees

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👥 Team

Developed by the Scholarstika team for modern educational institutions.

**Built with ❤️ for Schools & Education**
