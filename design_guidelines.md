# Social Impact Investment Calculator - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from modern fintech dashboards (Stripe, Plaid) combined with impact-focused platforms for a professional yet purpose-driven aesthetic.

## Core Design Elements

### A. Color Palette
**Primary Theme: Blue-Green-White**
- Primary Blue: 200 85% 55% (trust, professionalism)
- Accent Green: 160 75% 50% (sustainability, growth)
- Background White: 0 0% 98%
- Dark Mode Background: 220 15% 12%
- Card Backgrounds: Glassmorphism with backdrop blur

### B. Typography
**Font Stack:**
- Primary: Inter or Poppins (modern, clean)
- Headings: 2xl-4xl, font-semibold to font-bold
- Body: base to lg, font-normal
- Numbers/Metrics: tabular-nums for alignment

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20
- Form padding: p-6 to p-8
- Card spacing: p-6
- Section gaps: gap-6 to gap-8
- Container max-width: max-w-7xl

**Responsive Grid:**
- Desktop: 2-column layout (form left, dashboard right)
- Mobile: Stacked single column

### D. Component Library

**Input Form:**
- Investment Amount (₹) - number input
- Expected Return (%) - number input  
- Jobs Created - number input
- CO₂ Reduced (tons) - number input
- % Women Employed - number input
- Primary CTA: "Calculate Impact" button with gradient bg

**Dashboard Cards:**
- ROI Summary Cards: Profit, Total Return, Impact Score
- Glassmorphism effect: bg-white/20 backdrop-blur-lg
- Soft shadows: shadow-xl
- Rounded corners: rounded-2xl

**Data Visualization:**
- Pie Chart (Chart.js/Recharts): People/Planet/Profit scores
- Color-coded segments matching theme
- Interactive tooltips on hover
- Smooth animation on data update

**UN SDG Badges:**
- Static display of SDG 5, 8, 13
- Icon grid layout
- Small, non-intrusive placement

**CSV/Excel Upload:**
- Drag-and-drop zone with dashed border
- File type indicator
- Bulk data processing capability
- Progress indicator during upload

**Export Options:**
- PNG image download button
- PDF report generation
- Shareable link creation
- Embed code snippet

### E. Visual Effects
**Glassmorphism:**
- Cards: backdrop-filter blur-lg
- Semi-transparent backgrounds
- Subtle border: border border-white/20

**Gradient Header:**
- Background: gradient from blue to green
- Logo/title: text-white
- Smooth transition effects

**Animations:**
- Framer Motion or Tailwind transitions
- Chart appears with smooth scale-in
- Results cards fade-in sequence
- Hover effects: scale-105 transition-all duration-300

**Interactive States:**
- Input focus: ring-2 ring-blue-500
- Button hover: brightness-110
- Card hover: shadow-2xl transform

## Header & Footer

**Header:**
- Gradient background (blue to green)
- Title: "Social Impact Investment Calculator"
- Clean, minimal navigation

**Footer:**
- Fixed text: "Prototype — Social Impact Investment Calculator © 2025"
- Centered, subtle text color
- Minimal padding

## Responsiveness
- Desktop (lg+): Side-by-side form and dashboard
- Tablet (md): 2-column grid maintained
- Mobile (base): Full-width stacked layout
- Touch-friendly inputs: min-height 44px

## Sample Demo State
**Default Input Values:**
- Investment: ₹100,000
- Expected Return: 10%
- Jobs Created: 50
- CO₂ Reduced: 100 tons
- Women Employed: 40%

## Images
No hero images required. Focus on data visualization and clean form interfaces. Icon library for SDG badges and UI elements only.