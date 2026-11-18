# Ashok Naik — Portfolio

Personal portfolio built with React + Vite.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Project structure
```
src/
├── main.jsx                 # entry — loads global styles, mounts <App />
├── App.jsx                  # page layout (composes all sections)
├── data/portfolio.js        # ALL site content — edit this to update text/links
├── hooks/                   # reusable logic (useTheme, useTypewriter)
├── styles/                  # variables.css (theme tokens) + global.css (base, glass, buttons)
└── components/
    ├── layout/              # Navbar, Footer
    ├── sections/            # Hero (+ CodeWindow), About, Experience,
    │                        # Projects (+ ProjectCard), Skills, Contact
    └── ui/                  # Preloader (intro), Background, CursorGlow, Reveal, SectionTitle, Icons
```
Each component folder contains `Component.jsx`, its own `Component.css`, and an
`index.js` so it can be imported as `import Hero from './components/sections/Hero'`.

## Customize
- All content (text, projects, skills, links) lives in `src/data/portfolio.js`.
- Theme colours: `src/styles/variables.css`
- Resume: put your PDF at `public/Ashok_Naik_Resume.pdf`

## Deploy
Push to GitHub and import the repo on Vercel or Netlify (build command `npm run build`, output `dist`).
