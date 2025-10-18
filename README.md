# My Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience in web development.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional interface
- **Contact Form**: Functional contact form with EmailJS integration
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Accessible**: Follows web accessibility best practices
- **MIT Licensed**: Open source and free to use

## 🚀 Live Demo

[View Live Demo](https://github.com/KumarChandan05/my-portfolio) <!-- Update with your actual deployment URL -->

## 🛠️ Built With

- **React 19** - UI library
- **Vite** - Build tool and development server
- **EmailJS** - Contact form email functionality
- **CSS3** - Styling and animations
- **ESLint** - Code linting and formatting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/KumarChandan05/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. **Configure EmailJS** (for contact form functionality):
   - See [EMAILJS_SETUP.md](EMAILJS_SETUP.md) for detailed setup instructions
   - Copy `.env.example` to `.env` and add your EmailJS credentials

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/)

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Update vite.config.js base to your repo name: `base: '/my-portfolio/'`
4. Run: `npm run build && npm run deploy`

## 📂 Project Structure

```
my-portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Icons and images
│   ├── components/     # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   ├── index.css       # Base styles
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md          # Project documentation
```

## 🎨 Customization

1. **Update Personal Information**: Edit the content in each component file
2. **Change Colors**: Modify CSS variables in `src/index.css`
3. **Add New Sections**: Create new components and import them in `App.jsx`
4. **Update Metadata**: Change meta tags in `index.html`

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**KumarChandan05**

- GitHub: [@KumarChandan05](https://github.com/KumarChandan05)
- LinkedIn: [Your LinkedIn Profile] <!-- Update with your actual LinkedIn -->
- Email: [Your Email] <!-- Update with your actual email -->

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - For the amazing UI library
- [Vite](https://vitejs.dev/) - For the fast build tool
- [MIT License](https://opensource.org/licenses/MIT) - For the open source license

---

⭐ Star this repo if you found it helpful!
