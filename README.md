# Faveo Helpdesk ITSM Landing Page

An enterprise-grade ITSM & Helpdesk software landing page built with React, TypeScript, and Tailwind CSS.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Connecting to GitHub & Deployment

To push this repository to GitHub and deploy it (e.g. via GitHub Pages using the included GitHub Actions workflow):

1. **Create a new repository on GitHub** (e.g., `faveo-landing-page`).
2. **Link and push your local repository**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   git add .
   git commit -m "Initial commit - Faveo ITSM Landing Page"
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your GitHub repository settings -> **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** as the source.
   - The included workflow in `.github/workflows/deploy.yml` will automatically build and publish your app on every push to `main`.
