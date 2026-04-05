# KLH Weddings & Events Website

A professional wedding coordination website for KLH Weddings & Events, based in Gloucestershire, UK.

## Project Structure

- `klh_weddings_website.jsx` — The main website component (React + Tailwind CSS)
- `src/App.jsx` — Root app that renders the website component
- `src/main.jsx` — React entry point
- `src/index.css` — Tailwind CSS imports
- `index.html` — HTML entry point
- `vite.config.js` — Vite configuration (port 5000, host 0.0.0.0)
- `tailwind.config.js` — Tailwind CSS configuration
- `postcss.config.js` — PostCSS configuration

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 3
- **Package Manager**: npm
- **Node Version**: 20

## Running Locally

The app runs on port 5000 via the "Start application" workflow using `npm run dev`.

## Deployment

Configured as a static site deployment:
- Build command: `npm run build`
- Output directory: `dist`
