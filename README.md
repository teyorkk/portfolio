# Moises' Portfolio

This is a personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. It showcases my projects, skills, and contact information in a modern, responsive design.

## Features

- Responsive layout for desktop and mobile
- Project showcase with images
- About, Skills, and Contact sections
- Built with React, TypeScript, Vite, and Tailwind CSS
- Easy to customize and deploy

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone https://github.com/teyorkk/portfolio.git
cd portfolio
```

2. Install dependencies:

```sh
npm install
# or
yarn install
```

### Running Locally

Start the development server:

```sh
npm run dev
# or
yarn dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/components/` – React components (Hero, About, Projects, Skills, Contact, etc.)
- `src/assets/` – Images and static assets
- `public/` – Public files
- `App.tsx` – Main app layout

## Customization

Edit the files in `src/components/` to update your information, projects, and skills. Replace images in `src/assets/` and `public/` as needed.

## Deployment

You can deploy this site to Vercel, Netlify, GitHub Pages, or any static hosting provider. To build for production:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
