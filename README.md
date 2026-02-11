### Notion-like Editor

A lightweight Notion-inspired note-taking app focused on speed, simplicity, and real-time data handling.
Built as an experiment in modern full-stack architecture and editor design.

https://app-note-taking.vercel.app/
---

<img width="1122" height="672" alt="Screenshot 2026-02-11 035513" src="https://github.com/user-attachments/assets/0c586526-582c-48eb-814d-2faf66b83349" />


## Tech Stack

-   **Next.js**
    
-   **Zustand**
    
-   **Convex**
    
-   **Clerk**
    
-   **Tailwind CSS**
    

## Features

-   Block-based note structure
    
-   Real-time data persistence
    
-   Authenticated user sessions
    
-   Clean, minimal UI
    

## Installation

```
# clone the repository
git clone https://github.com/nix1707/notion-clone.git
cd notion-clone

# install dependencies
npm install

# start the dev server
npm run dev

#run convex
npx convex dev
```

### Environment Variables

Create a `.env.local` file and configure the following:

```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

Make sure Clerk and Convex projects are set up before running the app.

## Project Status

Actively developed. Core functionality is implemented, with improvements planned.

## Todo / Future Work

-   Refactor note editing logic on the backend
    
-   Add collaboration mode
    
-   Introduce templates
    

## Purpose

This project is built for learning, experimentation, and showcasing modern full-stack patterns. It is not intended to be a full Notion replacement.

___
