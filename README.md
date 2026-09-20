# AFFORDA Technologies

Premium field technology catalogue built with React, TypeScript and Vinext.

## Run locally

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
```

## Content

- `lib/catalogue.ts`: 15 catalogue products, nine categories, brand descriptions and equipment finder mappings.
- `public/afforda-catalogue.pdf`: supplied product catalogue.
- `public/images`: original logo, extracted catalogue imagery and project artwork.
- `app/products/[slug]`: addressable product detail pages with metadata, galleries, features and specifications.

## Inquiries

Quote forms validate details, prepare a message, and let the visitor review and send it through WhatsApp to +91 98183 20178. No form data is stored or sent automatically. A server-side CRM/email integration has not been configured. Phone links also include +91 95559 03186.

## Visuals and motion

The hero combines commissioned terrain artwork, a cleaned catalogue product image, CSS parallax and an interactive projected elevation mesh drawn with native Canvas. Coordinates and elevation are illustrative expedition graphics, not live telemetry. Mesh rendering is visibility-aware, pixel density is capped, and reduced-motion preferences are respected. The original supplied product images are retained in the catalogue.

## Validation

- TypeScript checking and production compilation pass.
- Product IDs, category membership, asset references, all 15 finder combinations and invalid selections checked.
- WhatsApp URL encoding and destination checked.
- Root, representative product pages, image and PDF routes return 200; an unknown product returns 404.
- Browser UI automation was unavailable in this session. The optional, feature-detected WebMCP equipment finder was not verified in a supporting browser.

## Catalogue caveats

All product information is based on the supplied catalogue; availability and configuration are confirmed at inquiry. The PDF's TOUGHBOOK specifications appear inconsistent with its model label, so only the catalogue model name and configuration consultation are presented. DGPS selection is handled by consultation rather than attributing survey-grade accuracy to handheld navigation units.
