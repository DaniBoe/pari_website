# Pari Ludin - Personal Website

A static website for Pari Ludin, showcasing her work as a cultural worker, writer, musician, and singer.

## Features

- Clean, modern design with alternating lavender and yellow sections
- Responsive layout that works on all devices
- Smooth scrolling navigation
- Professional portfolio sections
- Contact information and social links

## Project Structure

```
pari_website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript for interactions
├── images/             # Image assets
│   ├── pari-portrait.jpg
│   ├── pari-singing.jpg
│   └── pari-piano.jpg
└── README.md           # This file
```

## Setup Instructions

### 1. Add Images
You'll need to add the following images to the `images/` folder:
- `pari-portrait.jpg` - Portrait photo for the hero section
- `pari-singing.jpg` - Photo of Pari singing for the About section
- `pari-piano.jpg` - Photo of Pari at piano for the Contact section

### 2. Deploy to Vercel

#### Option A: Deploy from GitHub
1. Push this code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Import the repository in Vercel
4. Deploy automatically

#### Option B: Deploy directly from Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### 3. GitHub Repository Setup

1. Create a new repository on GitHub
2. Initialize git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## Customization

- Update the content in `index.html` to match your information
- Modify colors in `styles.css` by changing the CSS variables
- Add or remove sections as needed
- Update contact information and social links

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- No JavaScript required for basic functionality

## License

This project is for personal use. Please respect copyright and image rights.
