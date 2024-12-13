# Next.js 15 Progressive Web App (PWA) bySMA

A Progressive Web App built with Next.js 15 that showcases the power of PWAs by enabling offline support, fast loading speeds, and a native app-like experience. This project is designed to demonstrate best practices for building PWAs with Next.js, leveraging Service Workers, and optimizing performance.

## Features

- **Offline Support**: Allows access even when offline.
- **Add to Home Screen**: Installable on supported devices.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop.
- **Fast Loading**: Optimized for speed, with caching strategies.
- **Push Notifications**: (Optional) Enable to receive updates.

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm v9 or later (or yarn)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/imsma/nextjs-pwa
   cd nextjs-pwa
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

To build and start the project for production:

```bash
npm run build
npm start
```

### PWA Configuration

This app is configured as a PWA by setting up a `manifest.json` and a `service-worker.js` file. Adjust the following configuration files as needed:

- `public/manifest.json`: Metadata for the PWA, including name, theme color, and icons.
- `pages/_document.js`: Includes the meta tags and link tags for PWA functionality.
- `next.config.js`: Additional PWA settings, using [next-pwa](https://github.com/shadowwalker/next-pwa) (optional).

### Customizing Icons

To customize the PWA's icons, replace the existing files in `public/icons` with your custom icons, ensuring they follow the required dimensions and file names.

### Deployment

This project can be deployed on any platform that supports Node.js, such as Vercel, Netlify, or DigitalOcean.

#### Deploy to Vercel

To deploy this PWA on Vercel, simply connect the repository and Vercel will handle the rest, optimizing the app as a static PWA.

### Dependencies

- [Next.js](https://nextjs.org/) - The React framework for production.
- [next-pwa](https://github.com/shadowwalker/next-pwa) - A PWA plugin for Next.js.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Comprehensive guide on Next.js features and API.
- [PWA Documentation](https://web.dev/progressive-web-apps/) - Understanding PWAs and their best practices.

## Contributing

Contributions are welcome! Feel free to open issues, submit pull requests, or suggest new features.
````

### bySMA

Learn more at [https://sma.im](https://sma.im)
