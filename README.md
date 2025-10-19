<div align="center">

# 🚀 Moises Theo - Portfolio

### A Modern, Fully Responsive Portfolio Website

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[🌐 Live Demo](https://moises-atienza.dev)

</div>

---

## ✨ Features

### 🎨 **Design & UX**

- 🌓 **Light/Dark Mode** - Smooth theme switching with localStorage persistence
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🎭 **Smooth Animations** - GSAP & Framer Motion powered animations
- 🎯 **Modern UI** - Clean, professional design with attention to detail

### 🎬 **Interactive Components**

- ⚡ **Dynamic Hero Section** - Typewriter effect with theme-aware profile images
- 🎵 **Last.fm Integration** - Real-time music listening status
- 🗂️ **Project Modals** - Interactive project showcases with detailed views
- 🏆 **Certification Display** - Professional certificates with modal previews
- 🔧 **Skills Filter** - Dynamic skill categorization and filtering
- 💼 **Services Section** - Highlighted expertise and offerings

### 🚀 **Performance & Tech**

- ⚡ **Lightning Fast** - Vite-powered dev server and build
- 🎯 **Type-Safe** - Full TypeScript implementation
- 📦 **Optimized Images** - Modern image loading standards
- 🎨 **Tailwind CSS v4** - Latest utility-first CSS framework
- 📧 **Email Integration** - EmailJS for contact form
- 🎪 **SEO Friendly** - Optimized meta tags and structure

---

## 🛠️ Tech Stack

### **Frontend**

```
React 19.1.1          ⚛️  Modern UI library
TypeScript 5.8.3      📘  Type-safe development
Tailwind CSS 4.1.13   🎨  Utility-first styling
Vite 7.1.2           ⚡  Lightning-fast tooling
```

### **Animation & Effects**

```
GSAP 3.12.5          🎬  Professional animations
Framer Motion 12.23  🎭  React animation library
```

### **Additional Libraries**

```
React Icons 5.5.0    🎯  Icon library
EmailJS 4.4.1        📧  Email service integration
```

---

## 🚀 Getting Started

### **Prerequisites**

Make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/teyorkk/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

### **Available Scripts**

| Command                 | Description                          |
| ----------------------- | ------------------------------------ |
| `npm run dev`           | Start development server             |
| `npm run build`         | Build for production                 |
| `npm run preview`       | Preview production build             |
| `npm run lint`          | Run ESLint                           |
| `npm run dev -- --host` | Start dev server with network access |

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero/                 # Hero section components
│   │   │   ├── ProfileImage.tsx  # Profile image with theme switching
│   │   │   ├── AnimatedText.tsx  # Typewriter animation
│   │   │   └── HeroContent.tsx   # Hero content and CTAs
│   │   ├── About/                # About section
│   │   │   ├── AboutContent.tsx
│   │   │   └── MusicPlayer.tsx   # Last.fm integration
│   │   ├── Skills/               # Skills section
│   │   │   ├── SkillsFilter.tsx
│   │   │   └── SkillsGrid.tsx
│   │   ├── Projects/             # Projects section
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   └── ProjectsGrid.tsx
│   │   ├── Certifications/       # Certifications section
│   │   │   ├── CertificationCard.tsx
│   │   │   └── CertificationModal.tsx
│   │   ├── Services/             # Services section
│   │   ├── Contact/              # Contact form
│   │   ├── Ui/                   # Reusable UI components
│   │   │   ├── Modal.tsx
│   │   │   ├── Reveal.tsx        # Scroll reveal animation
│   │   │   └── BackgroundEffects.tsx
│   │   ├── Header.tsx            # Navigation & theme toggle
│   │   └── Footer.tsx            # Footer component
│   ├── contexts/
│   │   └── ThemeContext.tsx      # Theme management
│   ├── data/
│   │   ├── projects.json         # Projects data
│   │   ├── skills.json           # Skills data
│   │   ├── services.json         # Services data
│   │   └── certifications.json   # Certifications data
│   ├── hooks/
│   │   └── useThemeToggle.ts     # Theme toggle animation hook
│   ├── lib/
│   │   └── last-fm.ts            # Last.fm API integration
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # App entry point
│   └── index.css                 # Global styles & animations
├── public/                        # Static assets
├── dist/                          # Production build
└── package.json                   # Dependencies
```

---

## 🎨 Customization

### **Update Personal Information**

1. **Edit Hero Section** - `src/components/Hero/HeroContent.tsx`

   - Update name, title, and status badges
   - Modify call-to-action buttons

2. **Update Projects** - `src/data/projects.json`

   ```json
   {
     "title": "Your Project",
     "description": "Project description",
     "image": "/your-image.png",
     "tags": ["React", "TypeScript"],
     "github": "https://github.com/...",
     "live": "https://..."
   }
   ```

3. **Update Skills** - `src/data/skills.json`

   - Add/remove skills and categories

4. **Update Services** - `src/data/services.json`

   - Modify your service offerings

5. **Update Certifications** - `src/data/certifications.json`
   - Add your professional certifications

### **Theme Customization**

Edit `src/index.css` to customize colors, animations, and styles:

```css
@theme {
  --breakpoint-xs: 475px;
}

body {
  @apply bg-white dark:bg-gray-900;
}
```

### **Add Profile Images**

- **Light Mode**: Place image at `public/2.jpg`
- **Dark Mode**: Place image at `public/3.jpg`

---

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### **Deployment Platforms**

#### **Vercel** (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### **Netlify**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

```bash
# Build command: npm run build
# Publish directory: dist
```

#### **GitHub Pages**

```bash
# Add to package.json
"homepage": "https://yourusername.github.io/portfolio"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🎯 Key Highlights

### **🌓 Advanced Theme System**

- System preference detection
- localStorage persistence
- Smooth transitions with GSAP
- Theme-aware images and components

### **🎬 Professional Animations**

- Scroll-triggered reveal animations (Framer Motion)
- Typewriter effects with GSAP TextPlugin
- Smooth theme toggle animations
- Modal open/close animations
- Hover and interaction effects

### **📱 Mobile-First Design**

- Dynamic viewport height (`100dvh`)
- Touch-optimized interactions
- Elastic scroll prevention
- Responsive navigation with burger menu

### **⚡ Performance Optimizations**

- Modern image loading (`decoding="async"`)
- Component code-splitting
- Optimized bundle size
- Fast page loads with Vite

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Moises Theo**

- GitHub: [@teyorkk](https://github.com/teyorkk)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [GSAP](https://greensock.com/gsap/) - Animation platform
- [Framer Motion](https://www.framer.com/motion/) - React animations
- [Vite](https://vitejs.dev/) - Build tool
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

**Made with ❤️ and ☕**

</div>
