# 🎉 Shree Celebration — Angular Frontend

Premium event lawn website built with **Angular 17** (standalone components architecture).

---

## 📁 Project Structure

```
shree-celebration/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/        ← Fixed navbar with scroll detection
│   │   │   ├── hero/          ← Hero section with parallax bg
│   │   │   ├── facilities/    ← Facilities grid cards
│   │   │   ├── gallery/       ← Filterable gallery + lightbox
│   │   │   ├── pricing/       ← 3 pricing plans
│   │   │   ├── contact/       ← Enquiry form
│   │   │   ├── about/         ← About section
│   │   │   └── footer/        ← Footer with links
│   │   ├── pages/
│   │   │   ├── home/          ← Main home page
│   │   │   └── about/         ← About route
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.scss             ← Global styles & design tokens
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Angular CLI installed globally

```bash
npm install -g @angular/cli
```

### Installation

```bash
# 1. Navigate to project folder
cd shree-celebration

# 2. Install dependencies
npm install

# 3. Run dev server
ng serve

# 4. Open browser at
http://localhost:4200
```

### Build for Production

```bash
ng build --configuration=production
# Output in: dist/shree-celebration/
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#C9A84C` | Accents, CTAs, icons |
| `--burgundy-dark` | `#4A0D1C` | Primary brand, navbar |
| `--cream` | `#FAF6EF` | Page backgrounds |
| `--ff-display` | Playfair Display | Headings, titles |
| `--ff-serif` | Cormorant Garamond | Subtitles, body emphasis |
| `--ff-sans` | Outfit | Body text, UI elements |

---

## 📄 Pages & Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen parallax background with animated title, stats bar |
| **Facilities** | 9 facility cards (capacity, parking, catering, lighting, etc.) |
| **Gallery** | Category-filtered masonry grid with lightbox viewer |
| **Pricing** | 3 packages: Silver / Gold / Diamond with feature lists |
| **About** | Story, highlights, event types with image collage |
| **Contact** | Enquiry form with validation + contact info |
| **Footer** | Links, socials, address |

---

## 🔌 Backend Integration (ASP.NET)

The contact form is ready for API integration. In `contact.component.ts`, replace the `setTimeout` in `onSubmit()` with an HTTP call:

```typescript
import { HttpClient } from '@angular/common/http';

// Inject HttpClient in constructor
constructor(private http: HttpClient) {}

onSubmit() {
  this.loading = true;
  this.http.post('https://your-api.com/api/enquiry', this.formData)
    .subscribe({
      next: () => { this.loading = false; this.submitted = true; },
      error: () => { this.loading = false; alert('Something went wrong.'); }
    });
}
```

Also add `provideHttpClient()` to `app.config.ts` providers.

---

## 📱 Responsive Breakpoints

- **Desktop**: 1180px container, 3-column grids
- **Tablet**: 900px — 2-column grids, collapsed navbar
- **Mobile**: 480px — single column, touch-friendly buttons

---

## 🌱 Future Enhancements (Phase 2)

- [ ] Real-time booking availability calendar
- [ ] Admin dashboard for managing bookings
- [ ] WhatsApp chatbot integration
- [ ] Reviews & testimonials section
- [ ] Virtual 360° venue tour
- [ ] Online payment gateway
- [ ] Multilingual support (Hindi / Marathi)

---

**Built for Shree Celebration, Nagpur** 🎊
