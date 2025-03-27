# Pega Frontend Technical Assessment

## Live Demo

Deployment: [pega-take-home.vercel.app](https://pega-take-home.vercel.app)

## Project Structure

- `/src`
  - `/components` - Components
    - `/layout` - Layout components for desktop and mobile views
    - `/sidebar` - Navigation sidebar components
    - `/ui` - Basic UI elements
  - `/constants` - Types and constants including navigation items
  - `/context` - The context for sidebar state management
  - `/hooks` - Hooks
  - `/pages` - Pages for various routes
  - `/routes` - Routing configuration
  - `/styles` - Global CSS styles

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint
npm run format
```

## Development

My submission uses:

- React with TypeScript
- Tailwind CSS for styling
- Vite as the build tool

High level Approach:

- `SidebarContext` serves as the central state manager for all navigation logic
- All sidebar behavior logic (open/close, section views, search) is contained within this context
- Component files are purely presentational and interact with the context via the `useSidebar` hook
