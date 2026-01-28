# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

- **Framework**: Next.js 15 with App Router (src/app/)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom utility classes in globals.css
- **Animations**: Framer Motion for scroll and interaction animations
- **Icons**: Lucide React

## Key Patterns

- Use `"use client"` directive for components with interactivity or Framer Motion
- Import path alias: `@/*` maps to `./src/*`
- Utility function `cn()` in `src/lib/utils.ts` for conditional Tailwind classes
- Custom component classes defined in `@layer components` in globals.css (btn-primary, btn-secondary, card, section-padding, container-custom, text-gradient)
- Google Fonts loaded via CSS variables (--font-display, --font-body)

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable components
└── lib/           # Utility functions
```
