# Portfolio Website Architecture

## Overview

This is a full-stack TypeScript portfolio website built with React, Express.js, and styled with Tailwind CSS. The application showcases Tanishq Arun Ingole's cybersecurity expertise and projects through a modern, animated interface with smooth user interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with custom cybersecurity-themed color palette
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used)
- **API Design**: RESTful endpoints with proper error handling
- **Validation**: Zod schemas for request validation
- **Development**: Hot reload with Vite integration

### Component Structure
- **Modular Design**: Separate components for each portfolio section (Hero, About, Skills, Projects, Experience, Contact)
- **Reusable UI**: Consistent design system with shadcn/ui components
- **Responsive Layout**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated landing with gradient background and particle effects
2. **About Section**: Introduction with animated statistics cards
3. **Skills Section**: Interactive skill grid with hover tooltips
4. **Projects Section**: Project showcase with GitHub links and technology stacks
5. **Experience Section**: Timeline-based experience display
6. **Contact Section**: Working contact form with validation

### Core Features
- **Contact Form**: Full form validation with success/error handling
- **Animations**: Scroll-triggered animations using Framer Motion
- **Responsive Design**: Mobile-optimized layout with touch-friendly interactions
- **SEO Optimization**: Proper meta tags and semantic HTML structure

## Data Flow

### Client-Side Data Flow
1. **Form Submission**: Contact form data flows through React Hook Form → Zod validation → TanStack Query mutation
2. **Animation Triggers**: Intersection Observer API triggers animations as sections come into view
3. **State Management**: Local component state for UI interactions, server state managed by TanStack Query

### Server-Side Data Flow
1. **API Requests**: Express middleware handles request parsing and validation
2. **Contact Processing**: Form submissions are validated server-side and logged (email integration ready)
3. **Error Handling**: Centralized error handling with proper HTTP status codes

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Animation**: Framer Motion for complex animations
- **Forms**: React Hook Form + Hookform Resolvers
- **HTTP Client**: Fetch API with TanStack Query wrapper
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL support (@neondatabase/serverless)
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Linting**: ESLint configuration (implied by project structure)
- **Database Migration**: Drizzle Kit for schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public` directory
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Frontend assets served by Express in production

### Production Configuration
- **Environment Variables**: `DATABASE_URL` for PostgreSQL connection
- **Static Serving**: Express serves built React app from `dist/public`
- **Node Environment**: Production mode disables development features

### Database Strategy
- **ORM**: Drizzle configured for PostgreSQL with migration support
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Deployment**: Database migrations handled via `drizzle-kit push`

### Hosting Considerations
- **Full-Stack Deployment**: Single server handles both API and static file serving
- **Database**: PostgreSQL database (Neon serverless configured)
- **Environment**: Node.js runtime with ES modules support
- **Port Configuration**: Flexible port assignment for various hosting platforms

## Recent Changes

### January 10, 2025
- **Portfolio Content Update**: Updated all personal information with authentic details
  - CGPA updated from 6.00 to 6.4 in About and Experience sections
  - Email updated to tanishqingole766@gmail.com
  - Added phone number (+918600756454) as clickable contact link
  - Added CDAC virtual internship certificate as clickable link
  - Updated Cuckoo Sandbox project GitHub link
  - All external links now redirect to authentic profiles and repositories

- **Cybersecurity Hacker Theme Implementation**: Complete UI transformation to ethical hacker aesthetic
  - Changed color scheme to terminal green (#00FF00) on pure black background
  - Implemented terminal window components with realistic headers and command prompts
  - Added Matrix-style rain animation with hexadecimal characters
  - Added glitch effects and scanline animations for authentic hacker feel
  - Changed font to monospace (Courier New) for terminal aesthetic
  - All sections now use terminal command themes: whoami, ls, git status, cat, etc.
  - Contact form redesigned with [USERNAME], [EMAIL_ADDRESS], [MESSAGE_PAYLOAD] labels
  - Added typing effect animation in hero section showing "root@cybersec:~$ whoami"
  - Footer now displays system status indicators: [SYSTEM_SECURED] [PORTFOLIO_ONLINE]

The application follows modern web development best practices with a focus on performance, accessibility, and maintainability. The cybersecurity theme is reflected in both the content and the visual design with custom color schemes and professional presentation.