# 🌟 Raina Jay ENHYP - Portfolio Website

A modern and professional portfolio website for Jay from ENHYPEN, featuring Korean-inspired design, smooth animations, and comprehensive bilingual content (Korean & Indonesian). Created by **Raina Yulia Farani**.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)

## ✨ Features

### 🎨 **Design & Aesthetics**
- **Korean-inspired Design**: Beautiful gradient colors and typography inspired by Korean aesthetics
- **Modern Animations**: Smooth transitions and effects using Framer Motion and Tailwind CSS
- **Glass Morphism**: Modern glass-effect navigation and cards
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, scaling animations, and smooth scrolling

### 🖼️ **Content & Media**
- **Image Gallery**: Showcase of 7 Jay's photos with carousel and hover effects
- **Album Showcase**: 4 ENHYPEN albums with track listings and descriptions
- **Popular Songs**: 6 hit songs with view counts and interactive play buttons
- **Achievements**: 4 major awards and recognitions with detailed descriptions
- **Bilingual Content**: Korean and Indonesian language support throughout

### ⚡ **Performance & Technology**
- **Next.js 14**: Latest App Router with optimized performance
- **TypeScript**: Type-safe development for better code quality
- **Image Optimization**: Automatic image optimization and lazy loading
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Loading**: Optimized bundle size and code splitting

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.0.0 | React framework with App Router |
| **TypeScript** | 5.2.2 | Type-safe JavaScript |
| **Tailwind CSS** | 3.3.5 | Utility-first CSS framework |
| **Framer Motion** | 10.16.0 | Animation library |
| **Lucide React** | 0.292.0 | Beautiful icon library |
| **Noto Sans KR** | - | Korean typography |
| **Inter** | - | English typography |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/raina276/portofolio.git
   cd portofolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
raina-jay-enhyp-portfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page with all sections
├── public/
│   ├── jay1.jpg            # Portfolio images (optimized, no spaces)
│   ├── jay2.jpg
│   ├── jay3.jpg
│   ├── jay4.jpg
│   ├── jay5.jpg
│   ├── jay6.jpg
│   └── jay7.jpg
├── flowchart.md            # Complete project documentation
├── postcss.config.js       # PostCSS configuration
├── next-env.d.ts          # Next.js TypeScript declarations
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration with custom colors
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── README.md              # Project documentation
```

## 🎨 Design System

### Color Palette
```css
Korean Red:    #FF6B6B  /* Primary accent color */
Korean Pink:   #FF8E8E  /* Secondary accent */
Korean Coral:  #FFB3B3  /* Tertiary accent */
Korean Cream:  #FFF5E6  /* Background highlight */
Korean Gold:   #FFD700  /* Accent highlights */
Korean Navy:   #2C3E50  /* Text and dark elements */
```

### Typography
- **Korean Text**: Noto Sans KR (300, 400, 500, 700)
- **English Text**: Inter (300, 400, 500, 600, 700)

### Animations
- **Fade-in effects**: Smooth opacity transitions
- **Slide animations**: Directional movement effects
- **Hover scaling**: Interactive element scaling
- **Floating elements**: Subtle movement animations
- **Glow effects**: Highlighted element glows
- **Smooth transitions**: 300ms ease-in-out transitions

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| **Mobile** | < 768px | Single column, stacked layout |
| **Tablet** | 768px - 1024px | Two-column grid |
| **Desktop** | > 1024px | Multi-column grid (3-4 columns) |

## 🎵 Content Sections

### 1. **Hero Section**
- Auto-rotating image carousel
- Bilingual welcome message
- Call-to-action buttons
- Social media links

### 2. **Stats Cards**
- **2.5M+** Followers across all platforms
- **50M+** Total music streams
- **100+** Live performances
- **1M+** Fan interactions

### 3. **Gallery**
- 7 high-quality photos of Jay
- Hover effects with image scaling
- Smooth transitions between images
- Responsive grid layout

### 4. **About Section**
- Detailed personal introduction
- Musical journey and experience
- Artistic philosophy and goals
- Bilingual descriptions

### 5. **Albums Showcase**
- **DIMENSION : DILEMMA** (2021)
- **MANIFESTO : DAY 1** (2022)
- **DARK BLOOD** (2023)
- **ORANGE BLOOD** (2023)

### 6. **Popular Songs**
- **Given-Taken** (150M+ views)
- **Drunk-Dazed** (200M+ views)
- **Tamed-Dashed** (180M+ views)
- **Future Perfect** (220M+ views)
- **Bite Me** (300M+ views)
- **Sweet Venom** (250M+ views)

### 7. **Achievements**
- **Rookie of the Year** - Mnet Asian Music Awards 2021
- **Best New Male Artist** - Golden Disc Awards 2021
- **Worldwide Fans Choice** - Mnet Asian Music Awards 2022
- **Best Performance Award** - Seoul Music Awards 2023

## 🔧 Customization

### Adding New Images
1. Place new images in the `public/` directory
2. Update the `images` array in `app/page.tsx`
3. Ensure images are optimized (recommended: WebP format, max 1MB)

### Modifying Colors
Update the color palette in `tailwind.config.js` under the `korean` theme colors.

### Adding New Sections
1. Create new data arrays in `app/page.tsx`
2. Add new JSX sections with proper animations
3. Update navigation if needed

### Changing Content
- **Indonesian content**: Update text in `app/page.tsx`
- **Korean content**: Update Korean text sections
- **Metadata**: Modify `app/layout.tsx` for SEO

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 500KB (gzipped)

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

This project is created for portfolio and educational purposes. All images and content related to Jay ENHYPEN are used for demonstration only.

**Created by**: Raina Yulia Farani  
**Project Type**: Portfolio Website  
**Framework**: Next.js 14  
**Language**: TypeScript  

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please open an issue or contact the creator.

## 📞 Contact

**Raina Yulia Farani**  
- Portfolio: [GitHub Repository](https://github.com/raina276/portofolio)
- Project: Raina Jay ENHYP Portfolio Website

---

<div align="center">

**Made with ❤️ by Raina Yulia Farani for Jay ENHYPEN fans**

![GitHub stars](https://img.shields.io/github/stars/raina276/portofolio?style=social) ![GitHub forks](https://img.shields.io/github/forks/raina276/portofolio?style=social)

</div>#   p o r t o f o l i o  
 #   p o r t o f o l i o  
 #   p o r t o f o l i o  
 