# Arvesta Financial Services Website

A modern, responsive financial services website built with React, Vite, and Tailwind CSS. Arvesta is a Non-Banking Financial Company (NBFC) that provides structured financing solutions for individuals, families, and institutions.

## 🏢 About Arvesta

Arvesta Financial Services Pvt Ltd is an NBFC established under the Neo Wealth & Asset Management Group. The company focuses on providing customized financing solutions with an emphasis on responsible lending, long-term growth, and client alignment.

**Key Features:**
- Structured financing for long-term growth
- Secured SME financing
- Lending against financial assets
- Customized credit solutions
- Disciplined credit evaluation and governance

## 🛠️ Technology Stack

### Frontend Framework
- **React 19.2.0** - Modern React with latest features
- **Vite 7.2.5** - Fast build tool with rolldown-vite
- **JavaScript ES6+** - Modern JavaScript features

### Styling & UI
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Custom Typography** - Instrument Serif, Montserrat, Playfair Display fonts
- **Responsive Design** - Mobile-first approach with breakpoints

### Icons & Assets
- **React Icons 5.5.0** - Comprehensive icon library
- **Lucide React 0.562.0** - Modern icon set
- **Custom Images** - Hero images, mandala decorations, and brand assets

### Development Tools
- **ESLint 9.39.1** - Code quality and linting
- **React Refresh** - Hot module replacement for development

## 📁 Project Structure

```
arvesta/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images and static files
│   │   ├── HeroImage/        # Hero section images
│   │   ├── logo.png          # Company logo
│   │   └── react.svg         # React logo
│   ├── components/           # Reusable UI components
│   │   ├── Footer.jsx        # Website footer
│   │   ├── Layout.jsx        # Main layout wrapper
│   │   └── Navbar.jsx        # Navigation header
│   ├── page/                 # Page components
│   │   └── LandingPage.jsx   # Main landing page
│   ├── Section/              # Landing page sections
│   │   └── LandingPage/
│   │       ├── AboutSectio.jsx        # About section
│   │       ├── CuratedSolutionsSection.jsx # Solutions showcase
│   │       ├── FinanceCard.jsx        # Finance card component
│   │       ├── FinancingSection.jsx   # Financing options
│   │       ├── GrowthSection.jsx      # Growth and vision
│   │       └── HeroSection.jsx        # Hero banner
│   ├── App.jsx               # Main application component
│   ├── App.css               # App-specific styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite build configuration
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arvesta
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Design System

### Color Palette
- **Primary Colors:**
  - `#050b1f` - Dark navy (navbar background)
  - `#231A3D` - Purple gradient (nav, cards)
  - `#b48b3c` - Gold accent (buttons, highlights)
  - `#1c1b3a` - Dark blue text

- **Gradient Colors:**
  - `#fff9ef` to `#FFECBC` - Warm background gradient
  - `#231A3D` to `#000000` - Dark gradient overlays

### Typography
- **Instrument Serif** - Headings and display text
- **Montserrat** - Body text and paragraphs
- **Playfair Display** - Alternative serif font

### Components Structure

#### Layout Components
- **Layout.jsx** - Main wrapper with navbar and footer
- **Navbar.jsx** - Split design with logo and navigation
- **Footer.jsx** - Company information and links

#### Page Sections
- **HeroSection.jsx** - Full-screen hero with background image
- **AboutSection.jsx** - Company introduction with image
- **FinancingSection.jsx** - Interactive financing options carousel
- **GrowthSection.jsx** - Vision and growth messaging
- **CuratedSolutionsSection.jsx** - Solution cards with CTA

#### Reusable Components
- **FinanceCard.jsx** - Card component for financing options

## 🌟 Key Features

### Interactive Elements
- **Financing Carousel** - Interactive card slider with navigation
- **Responsive Navigation** - Split-screen navbar design
- **Hover Effects** - Smooth transitions on interactive elements
- **Gradient Overlays** - Modern image treatment with text overlays

### Design Highlights
- **Mandala Decorations** - Subtle background patterns
- **Gradient Backgrounds** - Modern color transitions
- **Card-based Layout** - Clean, organized content presentation
- **Professional Typography** - Hierarchical text styling

### Responsive Design
- **Mobile-first approach** - Optimized for all screen sizes
- **Flexible Grid System** - Tailwind CSS grid utilities
- **Adaptive Images** - Responsive image handling
- **Touch-friendly Interactions** - Mobile-optimized UI elements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Configuration

### Tailwind CSS Configuration
The project uses custom Tailwind configuration with:
- Custom font families (Instrument Serif, Montserrat, Playfair Display)
- Standard utility classes
- No additional plugins required

### Vite Configuration
- React plugin for Fast Refresh
- Tailwind CSS plugin for utility processing
- Standard development server setup

## 📝 Code Standards

### ESLint Configuration
- React hooks linting
- React refresh plugin
- Standard JavaScript rules
- No TypeScript (plain JavaScript project)

### Component Patterns
- Functional components with hooks
- Props destructuring
- Consistent naming conventions
- Modular component structure

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Contact Information

**Arvesta Financial Services Private Limited**
- 📞 +91-22-66423600
- ✉️ info@neo-group.in
- 📍 B-903, Marathon Futurex, Lower Parel, Mumbai, Maharashtra - 400013
- 🔗 License No. 0000000000

## 📄 License

© Arvesta Financial Services Private Limited. All Rights Reserved.

---

**Note:** This is a proprietary project for Arvesta Financial Services. Unauthorized use or distribution is prohibited.
