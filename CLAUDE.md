# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14 and deployed at khushg.vercel.app. It's a single-page application showcasing Khush Gupta's professional profile, research publications, and software projects.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build production version 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture

This is a Next.js 14 app using the new App Router architecture:

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with PostCSS
- **Structure**: App Router with `src/app/` directory
- **Key Files**:
  - `src/app/layout.js` - Root layout with Inter font and global styles
  - `src/app/page.js` - Main homepage component with embedded PublicationCard and ProjectCard components
  - `src/app/globals.css` - Global CSS styles

## Tech Stack

- **Core**: Next.js 14, React 18
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer  
- **Icons**: Lucide React, React Icons
- **Animation**: Framer Motion
- **Code Quality**: ESLint with Next.js config

## Project Structure

- Single-page application with all content in `src/app/page.js`
- Static assets in `public/` directory (images, resume PDF, favicon)
- Component architecture uses inline components (PublicationCard, ProjectCard) rather than separate files
- Responsive design with mobile-first approach using Tailwind classes

## Development Notes

- The site uses Next.js Image component for optimized image loading
- Tailwind configuration includes custom gradient utilities
- All external links use Next.js Link component for optimal performance
- ESLint configuration extends Next.js recommended rules