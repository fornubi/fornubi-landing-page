# fornubi landing page

Landing page portfolio untuk fornubi, dibangun dengan React Router dan Cloudflare Workers. Project ini menampilkan profil developer, layanan, portfolio, dan CTA untuk kerja sama.

## Overview

- Modern agency-style landing page
- Responsive layout untuk desktop dan mobile
- Menampilkan portfolio proyek pilihan
- Integrasi tombol CV, email, dan social links
- Built with React Router + TypeScript + Tailwind

## Tech Stack

- React Router
- TypeScript
- Vite
- Tailwind CSS
- Cloudflare Workers

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Then open:

```bash
http://localhost:5173
```

## Build for production

```bash
npm run build
```

## Preview production build locally

```bash
npm run preview
```

## Deploy

```bash
npm run deploy
```

This project is configured for Cloudflare Workers deployment.

## Project structure

```bash
app/
  routes/
  welcome/
public/
workers/
```

## Notes

- Main landing page content is in `app/welcome/welcome.tsx`
- Route setup is in `app/routes/home.tsx`
- Cloudflare configuration is in `wrangler.json`

## Contact

- Email: dev@fornubi.my.id
- GitHub: https://github.com/fornubi
