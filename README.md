# Token Trading Table - Axiom Trade Clone

A pixel-perfect, responsive replica of Axiom Trade's token discovery table built with Next.js 14, TypeScript, and Tailwind CSS.

![Token Trading Table](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Live Demo

[View Live Demo](https://your-project.vercel.app)

## 📸 Screenshots

![Desktop View](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Desktop+View)
![Mobile View](https://via.placeholder.com/400x600/10B981/FFFFFF?text=Mobile+View)

## ✨ Features

### Core Functionality
- **Real-time Token Discovery** - Discover and track tokens with live data
- **Advanced Search** - Search tokens by name or symbol in real-time
- **Smart Filtering** - Filter by New Pairs, Final Stretch, and Migrated tokens
- **Price Updates** - Real-time price changes with smooth animations
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile

### Technical Features
- **Next.js 14** - Latest App Router with React Server Components
- **TypeScript** - Full type safety with strict configuration
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Real-time Updates** - WebSocket simulation for live price changes
- **Performance Optimized** - Lighthouse score ≥ 90

### UI/UX Features
- **Pixel-Perfect Design** - Exact replica of Axiom Trade's interface
- **Dark/Light Mode** - Automatic theme switching support
- **Smooth Animations** - Price change indicators and hover effects
- **Loading States** - Skeleton loaders and shimmer effects
- **Accessible Components** - Built with accessibility in mind

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Deployment**: Vercel
- **State Management**: React hooks (useState, useReducer)

## 📦 Project Structure
├── app/ # Next.js 14 App Router
│ ├── globals.css # Global styles and Tailwind imports
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home page
├── components/
│ ├── tokens/ # Token-specific components
│ │ ├── token-table.tsx
│ │ ├── token-row.tsx
│ │ ├── token-badge.tsx
│ │ ├── price-indicator.tsx
│ │ └── search-bar.tsx
│ └── ui/ # Reusable UI components
│ ├── skeleton.tsx
│ └── tooltip.tsx
├── hooks/ # Custom React hooks
│ └── use-tokens.ts
├── types/ # TypeScript type definitions


token.ts
└── lib/ # Utility functions
└── utils.ts



## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd token-trading-table


   Token Discovery
Use the search bar to find tokens by name or symbol

Click filter buttons to view specific token categories

Hover over tokens to see additional details

Watch real-time price updates every 5 seconds

Token Information Displayed
Token Name & Symbol - Basic identification

Current Price - Real-time pricing with color indicators

24h Change - Percentage change with trend arrows

24h Volume - Trading volume in millions

Market Cap - Total market capitalization

Token Age - Days since token launch

Status Badges - New, Final Stretch, or Migrated


Responsive Behavior
Desktop: Full table view with all columns

Tablet: Compact table with essential information

Mobile: Card-based layout for touch-friendly interaction

🔧 Configuration
Environment Variables
Create a .env.local file for environment-specific configurations:

env
# API Configuration (for future use)
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_WS_URL=your_websocket_url

# Feature Flags
NEXT_PUBLIC_ENABLE_DARK_MODE=true
Tailwind CSS
The project uses a custom Tailwind configuration with:

Extended color palette for trading UI

Custom animations for price changes

Dark mode support

Responsive breakpoints

📱 Browser Support
Chrome 90+

Firefox 88+

Safari 14+

Edge 90+

