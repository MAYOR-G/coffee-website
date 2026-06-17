# Coffee Crafted - Premium Website Template

A premium, visually rich, and storytelling-based React website template tailored for a high-end coffee brand, café, or roastery.

## Features
- **Premium Aesthetic**: Warm whites, espresso browns, and elegant typography (Playfair Display + Inter).
- **Storytelling Sections**: Thoughtfully designed areas for brand story, menu, and the "Bean to Cup" journey.
- **Smooth Animations**: High-performance scrolling and micro-interactions powered by Framer Motion.
- **Pinned Horizontal Scroll**: A unique editorial section that scrolls horizontally as the user scrolls down, perfect for explaining the roasting or brewing process.
- **Responsive**: Fully responsive across mobile, tablet, and desktop devices.

## How to Run Locally

1. Make sure you have Node.js installed.
2. Navigate to the template directory:
   ```bash
   cd templates/coffee-website
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Key Sections & Where to Edit Content

All content is centralized in **`src/data/siteContent.ts`**. You do not need to hunt through components to change text or images!

- **Hero (`src/components/Hero.tsx`)**: Full-width fading image carousel. Edit headlines and images in `siteContent.ts`.
- **Our Story (`src/components/StorytellingAbout.tsx`)**: Editorial 2-column layout. 
- **Curated Menu (`src/components/FeaturedMenu.tsx`)**: Easily swap signature drinks and food items in `siteContent.ts`.
- **The Journey (`src/components/PinnedHorizontalScroll.tsx`)**: The horizontal scrolling section. Note: Due to its sticky nature, ensure the images used here have similar aspect ratios for the best visual flow.
- **Atmosphere & Products (`src/components/CafeAtmosphere.tsx`, `src/components/Products.tsx`)**: Immersive image blocks to showcase the physical location and merchandise.

## Animation Notes
- This template uses `framer-motion` for scroll-triggered animations (`whileInView`).
- The `PinnedHorizontalScroll.tsx` component relies on `useScroll` and `useTransform` to convert vertical scroll progress into horizontal movement.
- Reduced motion: Tailwind's base configuration respects the user's OS-level motion preferences, but you can explicitly add `motion-safe:` utility classes if you want to further lock down animations.

## Tech Stack
- React 18
- Vite
- Tailwind CSS v3
- Framer Motion
- Lucide React (Icons)
