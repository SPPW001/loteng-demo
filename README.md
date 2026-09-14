# LOTENG Malang — Demo Website

Static demo website for LOTENG Malang, built from supplied visual assets and the supplied Brunch & Dinner menu.

## Features

- Day / Night visual mode switch
- Loading screen
- Automatic event popup
- Event RSVP to WhatsApp
- Searchable + filterable menu board
- Video-led Night Shift section
- Demo reservation flow with simulated availability + clickable tables
- Day/Night WhatsApp routing
- Gallery lightbox
- Responsive mobile layout with sticky reservation CTA
- Instagram and Google Maps links

## Run locally

No build step is required.

```bash
cd Loteng-Malang-Demo
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

This folder can be deployed directly to GitHub Pages, Vercel, Netlify, Cloudflare Pages, or any static host.

## Important demo note

The reservation floor plan and availability are intentionally simulated for demonstration only. The final WhatsApp message explicitly asks LOTENG to reconfirm the reservation.


## Typography/layout fix
Display heading line-height, event popup sizing, reservation heading, visit heading, mobile wrapping, and header logo crop were adjusted to prevent overlapping or clipped text.
