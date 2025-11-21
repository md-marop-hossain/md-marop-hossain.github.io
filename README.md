# Modern AI Engineer Portfolio

A sleek, responsive portfolio website built with React and Tailwind CSS, featuring dark mode, typing animations, and glassmorphism effects.

## 🚀 Features

- **Fixed Navigation Bar**: Smooth scrolling to different sections
- **Hero Section**: Animated typing effect showcasing multiple roles
- **Glassmorphism**: Beautiful glass-effect on profile image and cards
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Looks great on all devices
- **Project Showcase**: Grid layout with hover effects
- **Skills Section**: Organized by categories with colored badges
- **Education & Experience**: Timeline-style presentation
- **Contact Section**: Quick stats and social links

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS 3** - Styling
- **Vite** - Build tool and dev server

## 📦 Installation

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm preview
   ```

## 🎨 Customization Guide

### 1. Personal Information

Edit `src/App.jsx` and update:

- **Name**: Line 73 - Change `"Alex Chen"` to your name
- **Roles**: Lines 9-15 - Modify the `roles` array with your titles
- **Bio**: Lines 78-80 - Update the description paragraph
- **Email**: Line 644 - Replace `alex.chen@example.com`

### 2. Profile Image

Replace the placeholder image URL on line 67:

```jsx
src = "https://via.placeholder.com/200";
```

**Options:**

- Use a direct image URL: `src="https://yourdomain.com/photo.jpg"`
- Use a local image: Place image in `public/` folder and use `src="/your-photo.jpg"`
- Use image hosting services: [Imgur](https://imgur.com), [Cloudinary](https://cloudinary.com)

### 3. Education

Lines 119-142 - Update the `education` array:

```jsx
{
  degree: 'Your Degree',
  institution: 'Your University',
  year: '2020-2024',
  focus: 'Your focus area'
}
```

### 4. Experience

Lines 144-191 - Modify the `experience` array with your work history.

### 5. Projects

Lines 46-93 - Update the `projects` array. Each project has:

- `title`: Project name
- `description`: Brief overview
- `tech`: Array of technologies used
- `color`: Tailwind gradient colors

### 6. Skills

Lines 95-150 - Customize skill categories and badges:

```jsx
'Category Name': [
  { name: 'Skill Name', color: 'bg-blue-500' }
]
```

**Color options**: `bg-blue-500`, `bg-green-500`, `bg-purple-500`, `bg-orange-500`, `bg-red-500`, etc.

### 7. Social Links

Update links in the Contact section (lines 644-678):

- Email: Line 644
- LinkedIn: Line 651
- GitHub: Line 661

### 8. Stats

Lines 681-699 - Update your achievement numbers:

```jsx
<p className="text-4xl font-bold">Your Number</p>
<p className="text-gray-600">Your Metric</p>
```

## 🎨 Color Customization

Edit `tailwind.config.js` to change theme colors:

```js
theme: {
  extend: {
    colors: {
      primary: {
        light: '#60a5fa',
        DEFAULT: '#3b82f6',
        dark: '#2563eb',
      },
      // Add your custom colors
    },
  },
}
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. Install gh-pages:

   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:

   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:

   ```js
   base: "/portfolio/";
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Deploy to Vercel

1. Install Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:

   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Features

- **Typing Effect**: Auto-rotating role titles
- **Hover Effects**: Cards lift up on hover
- **Glassmorphism**: Backdrop blur effects
- **Smooth Scrolling**: Navigation links scroll smoothly
- **Dark Mode Transition**: Smooth theme switching

## 🐛 Troubleshooting

**Issue**: Tailwind styles not working

- **Solution**: Make sure you've run `npm install` and restarted the dev server

**Issue**: Images not loading

- **Solution**: Check image URLs are accessible or place images in the `public/` folder

**Issue**: Dark mode not persisting

- **Solution**: The current implementation doesn't save preference. To persist, add localStorage:

  ```jsx
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  ```

## 📄 License

MIT License - Feel free to use this template for your portfolio!

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to fork and submit PRs.

---

**Built with ❤️ using React & Tailwind CSS**
