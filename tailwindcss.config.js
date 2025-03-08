const config = {
  important: true, // Ensures Tailwind classes override MUI styles
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    'node_modules/@mui/material/**/*.js', // Ensures MUI components are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
