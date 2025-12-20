# Solana Hardware Compatibility List

A modern web application showcasing compatible hardware for running Solana validators, built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI**: Solana-themed design with green/black color scheme
- **Organized Categories**: Browse hardware by validator type (Agave, Frankendancer, Firedancer)
- **Comprehensive Data**: CPU recommendations, storage solutions, and datacenter providers
- **Resources Page**: Curated list of tools and guides for validators
- **Responsive Design**: Mobile-first approach with smooth animations

## Tech Stack

- **Vite**: Fast build tool and dev server
- **React**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file handles SPA routing.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the Vite configuration and deploy

## Project Structure

```
solanahcl/
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── data/           # Structured hardware data
│   ├── styles/         # Global styles and Tailwind
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/              # Static assets
│   └── topology/       # CPU topology images
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## Data Structure

Hardware data is organized in TypeScript files:

- `src/data/agave.ts` - Agave CPU recommendations
- `src/data/frankendancer.ts` - Frankendancer CPU recommendations
- `src/data/storage.ts` - Storage drive recommendations
- `src/data/providers.ts` - Datacenter providers
- `src/data/resources.ts` - Resource links
- `src/data/contributors.ts` - Contributors and inspiration

## Contributing

Contributions are welcome! Please ensure all data is accurately represented and follows the existing structure.

## License

This project maintains the same license as the original Solana HCL repository.
