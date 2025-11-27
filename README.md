# Astra - Social Fitness App

A modern social fitness mobile app that combines workout tracking with social sharing — think BeReal meets Strava for the gym.

![Astra](https://img.shields.io/badge/Astra-Social%20Fitness-00D4AA?style=for-the-badge)

## Overview

Astra is a social fitness platform designed to help users track their workouts, share their fitness journey, and connect with like-minded athletes. The app features a unique blend of workout logging, social interaction, and progress tracking.

## Features

### 📱 Feed
- View workout posts from friends and suggested lifters
- Fist bump (like) and comment on posts
- See workout details including type, duration, and location
- Interactive workout highlights overlay on photos
- Location map popup for geotagged workouts

### 🔍 Search
- Search for users by name or handle
- Browse workout templates (Beginner, Intermediate, Advanced)
- Filter by workout type: Upper Body, Lower Body, Core
- Discover new lifters based on mutual connections

### 💪 Workout Tracking
- Real-time workout timer with start, pause, and reset
- Log exercises with sets, reps, and weight
- Toggle between kg and lbs units
- Search from predefined exercise library
- Capture workout photos with front-facing camera
- Add captions and share to feed

### 📊 Logbook
- Weekly workout dashboard and stats
- Complete workout history with detailed views
- Save and edit workout templates
- Track community workouts from friends

### 👤 Account
- Customizable profile (name, handle, bio)
- Workout calendar with activity tracking
- Progress dashboard showing rep/weight improvements
- Referral system for inviting friends
- Settings for:
  - Light/Dark mode
  - Weight unit preferences (kg/lbs)
  - Feedback submission
  - Account management

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **State Management**: TanStack React Query
- **Routing**: React Router DOM
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd astra

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── account/          # Profile & settings components
│   ├── feed/             # Feed post & suggested user components
│   ├── ui/               # Reusable UI components (shadcn)
│   └── workout/          # Workout template cards
├── data/
│   └── workoutTemplates.ts  # Predefined workout templates
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── pages/                # Main app pages
│   ├── Feed.tsx
│   ├── Search.tsx
│   ├── Workout.tsx
│   ├── Logbook.tsx
│   └── Account.tsx
└── index.css             # Global styles & design tokens
```

## Design System

Astra uses a custom design system with:
- **Primary Color**: Teal/Cyan (#00D4AA)
- **Secondary Color**: Coral (#FF6B6B)
- **Typography**: Outfit font family
- **Dark/Light mode support**

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is owned by Shyaaam Balasegaram. 
