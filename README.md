# Android App Review Analyzer UI

This is the frontend user interface for the Android App Analyzer application. It provides a modern, responsive web interface for analyzing and visualizing Android app reviews and metrics.

## Features

- Modern Vue.js 3 based UI with TypeScript
- Responsive design using Tailwind CSS
- Interactive data visualization
- Font Awesome icons integration
- State management with Pinia
- Client-side routing with Vue Router

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd app-review-analyzer-ui
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server with hot module replacement (HMR) enabled. The application will be available at `http://localhost:5173` by default.

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `src/` - Source code directory
  - `components/` - Vue components
  - `views/` - Page components
  - `stores/` - Pinia state management
  - `router/` - Vue Router configuration
  - `assets/` - Static assets
- `public/` - Public static files
- `index.html` - Main HTML file
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## Technologies Used

- Vue.js 3
- TypeScript
- Vite
- Tailwind CSS
- Pinia
- Vue Router
- Font Awesome
- Axios

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
