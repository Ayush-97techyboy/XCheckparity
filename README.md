# XCheckParity - Even or Odd Checker

## Overview
XCheckParity is a minimal, responsive web application built with React and Vite. It allows users to input any number and quickly determine its parity (whether it is an Even or Odd number) with a single click.

## Features
- **Dynamic Feedback:** Instant parsing and feedback indicating if a number is "even", "odd", or "invalid".
- **Responsive Layout:** Includes an elegant card design centered on screen, adapting smoothly to full screen formats across devices.
- **Accessibility Friendly:** Built with keyboard focus states and screen-reader supported attributes on inputs.
- **Error Handling:** Recognizes incorrect formatting such as alphabetical strings and gracefully alerts the user with proper warnings.

## Tech Stack
- Frontend Framework: React (via Vite)
- UI / Styling: Vanilla CSS

## Setup Instructions
1. Navigate to the project directory.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the local development server.

## Code Structure Highlights
- `/src/App.jsx` contains the core application state logic and view templating. Reusable parity checks execute locally on input strings.
- `/src/App.css` and `/src/index.css` outline project theming, global alignments, and isolated card layouts for modern rendering.
