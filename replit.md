# Overview

This is a Chat SDK - an AI-powered chatbot application built with Next.js 14 and the AI SDK. It provides a comprehensive platform for building conversational AI experiences with support for multiple LLM providers, real-time chat functionality, document creation/editing capabilities, and user authentication. The application features a modern interface with artifact-based content creation (text documents, code, images, spreadsheets) and persistent chat history.

## Current Status (Updated: September 08, 2025)

**Application Status**: ✅ Fully operational and running
- **Environment**: Successfully configured for Replit with all required secrets and database
- **Development Server**: Running on port 5000 with host 0.0.0.0 for Replit proxy compatibility
- **Database**: PostgreSQL database created and migrated with all required tables
- **Authentication**: Auth.js configured with guest mode functionality
- **AI Integration**: Configured to use AI Gateway with xAI models

**Recent Changes**:
- 2025-09-08: Initial Replit environment setup completed
- 2025-09-08: Database migrations successfully applied
- 2025-09-08: Next.js configuration updated for Replit proxy compatibility
- 2025-09-08: Deployment configuration set to autoscale for production readiness

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **Next.js 14 with App Router**: Modern React framework with server-side rendering and client-side routing
- **React Server Components (RSCs)**: Server-side rendering for improved performance
- **TypeScript**: Full type safety across the application
- **TailwindCSS + shadcn/ui**: Component-based styling with Radix UI primitives for accessibility

## AI Integration
- **AI SDK by Vercel**: Unified interface for multiple LLM providers with streaming support
- **Vercel AI Gateway**: Centralized access to AI models with built-in authentication via OIDC tokens
- **Default Provider**: xAI models with fallback support for OpenAI, Anthropic, and other providers
- **Tool Calling**: Support for function calling and structured outputs

## Authentication & Authorization
- **Auth.js (NextAuth)**: Comprehensive authentication system
- **Guest Mode**: Temporary sessions for unauthenticated users with guest- prefixed identifiers
- **Credential Provider**: Email/password authentication with bcrypt hashing
- **Middleware Protection**: Route-level authentication checks

## Database Architecture
- **Drizzle ORM**: Type-safe database queries and schema management
- **PostgreSQL**: Primary database via Neon Serverless Postgres
- **Schema Design**: 
  - Users, chats, messages for core chat functionality
  - Documents, suggestions, votes for artifact management
  - Visibility controls (private/public) for chat sharing

## Real-time Features
- **Streaming Responses**: Real-time AI response streaming using the AI SDK
- **WebSocket-like Experience**: Server-sent events for live updates
- **Optimistic Updates**: Immediate UI feedback with SWR for state management

## Content Management (Artifacts)
- **Multi-format Support**: Text documents, code files, images, and spreadsheets
- **Version Control**: Document versioning with diff viewing capabilities
- **Live Editing**: Real-time collaborative editing with ProseMirror (text) and CodeMirror (code)
- **Suggestion System**: AI-powered content suggestions with inline annotations

## File Storage & Processing
- **Vercel Blob**: Efficient file storage for attachments and generated content
- **Image Generation**: AI-powered image creation with base64 encoding
- **Code Execution**: Client-side Python execution using Pyodide for code artifacts
- **CSV Processing**: Papa Parse for spreadsheet data manipulation

## State Management
- **SWR**: Data fetching, caching, and synchronization
- **React Hooks**: Custom hooks for artifact management, chat visibility, and scroll behavior
- **Context Providers**: Data stream handling and theme management
- **Local Storage**: User preferences and temporary state persistence

## Development Tools
- **ESLint + Biome**: Code linting and formatting
- **Playwright**: End-to-end testing framework
- **TypeScript**: Static type checking
- **Hot Module Replacement**: Fast development iteration with Turbopack

# External Dependencies

## AI Services
- **Vercel AI Gateway**: Primary AI model access with automatic authentication
- **xAI API**: Default language model provider (Grok models)
- **OpenAI API**: Alternative provider for GPT models (configurable)
- **Anthropic API**: Claude model access (configurable)

## Database & Storage
- **Neon Postgres**: Serverless PostgreSQL database hosting
- **Vercel Blob**: File storage service for attachments and artifacts
- **Redis** (optional): Session storage and caching layer

## Authentication
- **Auth.js Providers**: Extensible authentication with multiple provider support
- **bcrypt-ts**: Password hashing and validation
- **JWT**: Token-based session management

## UI & Styling
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Framer Motion**: Animation and transitions
- **next-themes**: Dark/light mode support

## Development & Deployment
- **Vercel Platform**: Hosting, deployment, and serverless functions
- **Vercel Analytics**: Application performance monitoring
- **OpenTelemetry**: Observability and tracing
- **Playwright**: Browser automation for testing