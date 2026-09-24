# AFFORDA Technologies

Premium field technology catalogue built with Next.js, React, and TypeScript.

## Run locally

```sh
npm install
npm run dev
```

## Production Build

```sh
npm run build
```

This generates an optimized static export in the `out/` directory with pre-rendered HTML for all routes.

## Deployment on Hostinger

This project is configured as a fully static Next.js export (`output: 'export'`), making it 100% compatible with Hostinger Web Hosting, Cloud Hosting, and Node.js Web Apps without requiring a database, backend, or dynamic server runtime.

### Deployment Method 1: Hostinger Static Web Hosting / Git Deployment (Recommended)
1. **GitHub Connection**: In Hostinger hPanel, navigate to **Websites** -> **Git**.
2. **Repository**: Connect your GitHub repository (`main` branch).
3. **Target / Deployment**:
   - Hostinger serves static files directly from `public_html`.
   - Build output directory: `out`.
   - The included `public/.htaccess` automatically configures directory indexing, caching, compression, and clean 404 routing on Hostinger's LiteSpeed/Apache servers.

### Deployment Method 2: Hostinger Node.js Web App
If using Hostinger's Node.js Application manager in hPanel:
- **Node.js version**: 20.x or 22.x LTS
- **Application root**: `/`
- **Application startup file**: `server.js`
- **Build command**: `npm run build`
- **Start command**: `npm start` (runs `node server.js` to serve `out/`)

## Content & Routes

- `/`: Home page with hero, interactive category slider, mission grid, and equipment finder.
- `/products`: Full equipment selection with category and type filters.
- `/products/[slug]`: Dynamic product detail pages with specifications and WhatsApp inquiry.
- `/categories/forest-wildlife`: Specialized Forest & Wildlife category page with 4 focused subcategories.
- `/categories/forest-wildlife/[subcategory]`: 4 pre-rendered subcategory pages (Forest Measurement & Inventory; GPS, Survey & Mapping Products; Forest Fire-Fighting Products; Wildlife Monitoring & Surveillance).
- `/category/[id]`: 9 pre-rendered primary category pages (Forestry, Geology, Surveying, Navigation, Thermal, Optics, Inspection, Computing, Communication).
- `/about`: Company overview and mission.
- `/careers`: Career inquiries and WhatsApp link.
- `public/afforda-catalogue.pdf`: Official product catalogue PDF.
- `public/images`: Product and equipment photography.

## Inquiries & WhatsApp Integration

Quote forms validate details, prepare an inquiry message, and allow the user to send it via WhatsApp to +91 98183 20178. No database or server-side CRM is required.
