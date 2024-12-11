# Modern Portfolio Website

A professional portfolio website built with React, TypeScript, and modern web technologies. This project showcases best practices in modern web development while providing a performant, accessible, and visually appealing platform for displaying portfolio work.

## Project Structure

```
portfolio/
├── public/                 # Static files
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/        # Reusable components
│   │   ├── layout/       # Layout components
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── Sidebar/
│   │   │   └── Navigation/
│   │   ├── sections/     # Page sections
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Projects/
│   │   │   ├── Skills/
│   │   │   └── Contact/
│   │   └── ui/          # Shared UI components
│   │       ├── Button/
│   │       ├── Card/
│   │       ├── Input/
│   │       └── Modal/
│   ├── hooks/           # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   └── useTheme.ts
│   ├── pages/          # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   └── Contact/
│   ├── styles/         # Global styles and themes
│   │   ├── globals.css
│   │   └── themes/
│   ├── types/          # TypeScript type definitions
│   │   ├── project.ts
│   │   └── api.ts
│   ├── utils/          # Utility functions
│   │   ├── animations.ts
│   │   └── helpers.ts
│   ├── constants/      # Constants and configuration
│   │   ├── navigation.ts
│   │   └── theme.ts
│   ├── assets/         # Media and static assets
│   │   ├── images/
│   │   └── icons/
│   ├── context/        # React Context providers
│   │   └── ThemeContext.tsx
│   ├── App.tsx         # Root component
│   ├── main.tsx       # Entry point
│   └── vite-env.d.ts  # Vite type definitions
├── config/            # Configuration files
│   └── navigation.ts
├── .env.example      # Example environment variables
├── .eslintrc.json    # ESLint configuration
├── .gitignore        # Git ignore rules
├── .prettierrc       # Prettier configuration
├── index.html        # HTML template
├── package.json      # Project dependencies
├── postcss.config.js # PostCSS configuration
├── README.md         # Project documentation
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```

## File Structure Conventions

### Components

- Each component should have its own directory
- Include component file, styles (if needed), tests, and types
- Example structure:
  ```
  Button/
  ├── Button.tsx
  ├── Button.test.tsx
  ├── Button.types.ts
  └── index.ts
  ```

### Pages

- Each page should have its own directory
- Include page component, styles, and related components
- Example structure:
  ```
  Projects/
  ├── Projects.tsx
  ├── components/
  │   ├── ProjectCard.tsx
  │   └── ProjectFilter.tsx
  └── index.ts
  ```

## Getting Started

1. Clone the repository

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier

## Development Guidelines

1. **Component Creation**

   - Use functional components with TypeScript
   - Follow the component directory structure
   - Include proper type definitions
   - Write unit tests for components

2. **Styling**

   - Use Tailwind CSS for styling
   - Follow the project's design system
   - Ensure responsive design
   - Maintain consistent spacing

3. **State Management**

   - Use React Context for global state
   - Implement proper data flow
   - Follow React best practices

4. **Performance**
   - Implement code splitting
   - Optimize images and assets
   - Use proper caching strategies
   - Monitor bundle size

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

This project is licensed under the MIT License.
