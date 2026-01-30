# 🎨 Arslan Asad - Professional Portfolio

A modern, responsive single-page portfolio website built with **React** and **Create React App**. Features smooth scrolling, dark/light theme toggle, and a clean, beginner-friendly codebase.

## ✨ Features

- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🌓 **Dark/Light Theme Toggle** - Smooth theme switching with persistent storage
- 🎯 **Smooth Scroll Navigation** - Seamless navigation between sections
- 🎨 **Beautiful UI** - Modern design with smooth animations
- 📧 **Contact Form** - Professional contact form with validation
- 🎬 **Project Showcase** - Display your projects with images and details
- ⚡ **Fast Performance** - Optimized React components with hooks
- 💾 **Theme Persistence** - Your theme preference is saved locally

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar (fixed at top)
│   ├── Navbar.css
│   ├── Home.jsx            # Hero section with intro
│   ├── Home.css
│   ├── Projects.jsx        # Projects grid showcase
│   ├── Projects.css
│   ├── ProjectCard.jsx     # Individual project card
│   ├── ProjectCard.css
│   ├── Contact.jsx         # Contact form section
│   ├── Contact.css
│   ├── Footer.jsx          # Footer with social links
│   └── Footer.css
├── App.js                  # Main app component
├── App.css                 # Global styles
├── index.js                # React entry point
├── index.css               # Global CSS
└── package.json            # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation

1. **Navigate to project folder:**
   ```bash
   cd d:\profile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

**Start development server:**
```bash
npm start
```

The application will open automatically at `http://localhost:3000`

## 🛠️ How to Customize

### 1. Update Your Information

**In `Home.jsx`:**
- Change name, title, and description
- Update your profile picture (replace placeholder image)
- Add/modify your skills

```javascript
<h2 className="name">Your Name</h2>
<p className="title">Your Title</p>
<img src="your-image.jpg" alt="Your Name" />
```

### 2. Add Your Projects

**In `Projects.jsx`:**
Edit the `projects` array with your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    tags: ['React', 'Node.js'],
    image: 'image-url-or-path',
    githubLink: 'https://github.com/yourusername/project',
  },
  // Add more projects...
];
```

### 3. Update Contact Information

**In `Contact.jsx` and `Footer.jsx`:**
Replace placeholder links with your actual contact details:

```javascript
// Replace these:
href="mailto:your-email@example.com"
href="https://linkedin.com/in/yourprofile"
href="https://github.com/yourprofile"
href="https://wa.me/1234567890"
```

### 4. Customize Colors & Theme

Edit color values in CSS files. Current accent color is blue (`#3b82f6`). Common colors to change:

- **Primary Color:** `#3b82f6` (blue)
- **Accent Color:** `#fbbf24` (yellow/gold)
- **Light Background:** `#ffffff`
- **Dark Background:** `#111827`

## 📝 Code Explanation for Beginners

### React Hooks Used

1. **`useState`** - Manages component state (form inputs, theme, etc.)
2. **`useEffect`** - Runs code when component loads or updates

### Example from Contact.jsx:
```javascript
const [formData, setFormData] = useState({ name: '', email: '', message: '' });

// This hook tracks form inputs and updates them when user types
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

### Smooth Scrolling:
```javascript
// Smooth scroll to section when button is clicked
const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};
```

## 🎨 Styling Approach

- **CSS Modules** - Each component has its own CSS file
- **Responsive Design** - Mobile-first approach with media queries
- **Animations** - Smooth transitions and fade-in effects

### Example Media Query (Mobile):
```css
@media (max-width: 768px) {
  .name {
    font-size: 2.5rem;  /* Smaller on mobile */
  }
}
```

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build/` folder with optimized files ready to deploy.

## 🌐 Deployment Options

### Deploy to Netlify (Free & Easy)
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `build` folder
4. Done! Your site is live

### Deploy to Vercel
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Auto-deploys on every push

### Deploy to GitHub Pages
```bash
npm install gh-pages
npm run build
npm run deploy
```

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm start -- --port 3001
```

### Module not found error?
```bash
npm install
```

### Changes not showing?
- Hard refresh browser: `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
- Clear browser cache

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript Info](https://javascript.info)

## 📄 License

This project is open source and available for personal use.

## 💡 Tips for Beginners

1. **Read Comments** - Code has helpful comments explaining logic
2. **Start Small** - Modify one section at a time
3. **Use Browser DevTools** - Press `F12` to inspect elements
4. **Test Responsiveness** - Press `F12`, click mobile device icon
5. **Keep File Organization** - Organize components and styles logically

## ✅ Next Steps

1. ✏️ Update your information in `Home.jsx`
2. 📸 Replace placeholder images with your photos
3. 🎯 Add your real projects to `Projects.jsx`
4. 📧 Update contact links in `Contact.jsx` and `Footer.jsx`
5. 🎨 Customize colors and fonts to match your style
6. 🚀 Deploy your portfolio!

## 🤝 Need Help?

- Check component comments for explanations
- Look at CSS files for styling details
- Test changes in browser DevTools
- Read React documentation for more complex features

---

**Happy coding! 🚀**

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
