# WishSpark

WishSpark is a festival and celebration web app built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- Node.js 18+
- npm 9+

## Getting Started

```sh
# 1) Install dependencies
npm install

# 2) Start the development server
npm run dev
```

The app will start on the local Vite dev URL shown in your terminal.

## Build

```sh
npm run build
```

The production output is generated in the `dist/` folder.

## Preview Production Build

```sh
npm run preview
```

## Test

```sh
npm run test
```

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Vitest

## Deployment

This project includes `vercel.json` and can be deployed to Vercel.

Basic flow:

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Vercel will detect Vite settings and build using `npm run build`.
4. Point your custom domain in Vercel project settings if needed.
