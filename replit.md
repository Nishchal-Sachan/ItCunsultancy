# TechFlow Consulting - IT Consulting Website

## Overview

TechFlow Consulting is a modern, multi-page React website for an IT consulting startup. The application features a beautifully designed frontend built with React, TypeScript, and Tailwind CSS, showcasing services like IT strategy consulting, cloud architecture, MVP development, and UI/UX design. The architecture is designed to be frontend-only initially but is structured to easily accommodate backend integration in the future.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: React Router DOM v6+ for client-side navigation
- **Styling**: Tailwind CSS with custom design system and dark/light theme support
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: React Context for theme management, React Query for data fetching
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture (Prepared for Future)
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Authentication**: Session-based authentication with connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful API structure with organized route handlers

## Key Components

### Frontend Components
1. **Layout System**: Consistent navigation, footer, and page structure
2. **UI Components**: Reusable cards for services, team members, testimonials, and technologies
3. **Theme System**: Context-based dark/light mode toggle with system preference detection
4. **Forms**: Contact form with validation and toast notifications
5. **Interactive Elements**: FAQ accordions, mobile-responsive navigation, scroll-to-top functionality

### Data Management
- **Static Data**: JSON files containing services, team information, FAQs, testimonials, and technologies
- **Future Database Schema**: User authentication schema prepared with Drizzle ORM
- **Query Management**: TanStack React Query setup for future API integration

### Pages Structure
- Home: Hero section, services overview, testimonials
- Services: Detailed service descriptions with feature lists
- About: Company vision, mission, and team information
- Technologies: Filterable technology showcase
- Contact: Contact form and company information
- FAQs: Searchable frequently asked questions
- Legal: Privacy policy and terms of service

## Data Flow

### Current (Frontend-Only)
1. Static JSON data imported into React components
2. Theme state managed through React Context
3. Form submissions handled with toast notifications (no backend persistence)
4. Client-side routing with React Router

### Future (With Backend)
1. API requests through React Query to Express.js server
2. Database operations via Drizzle ORM with PostgreSQL
3. Session management for user authentication
4. Form submissions persisted to database

## External Dependencies

### UI/UX Dependencies
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **Lucide React**: Modern icon library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library (embla-carousel-react for carousels)

### Development Dependencies
- **Vite**: Build tool and dev server
- **TypeScript**: Type checking and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind
- **ESBuild**: Fast JavaScript bundling for production

### Future Backend Dependencies
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL database
- **Express.js**: Web application framework
- **Session Management**: connect-pg-simple for PostgreSQL session storage

## Deployment Strategy

### Current Setup
- **Development**: Vite dev server with hot module replacement
- **Build Process**: Vite builds optimized static assets to `dist/public`
- **Production**: Static file serving through Express.js server
- **Environment**: Replit-optimized with development banner and cartographer integration

### Database Configuration
- **Migration System**: Drizzle Kit configured for PostgreSQL migrations
- **Schema Location**: Shared schema file at `shared/schema.ts` for type consistency
- **Environment Variables**: DATABASE_URL required for database connectivity

### Future Scaling Considerations
- Monorepo structure with shared types between client and server
- Modular component architecture allows for easy feature additions
- Prepared session management for user authentication features
- Type-safe API layer ready for backend integration

The application follows modern web development best practices with a mobile-first responsive design, accessibility considerations through Radix UI components, and a scalable architecture that can grow from a marketing website to a full-featured web application.