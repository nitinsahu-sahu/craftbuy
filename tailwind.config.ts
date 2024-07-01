import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'greencard': '-1px 1px 4px 3px green',
        'bluecard': '-1px 1px 4px 3px blue',
        'orangecard': '-1px 1px 4px 3px orange',
        'purplecard': '-1px 1px 4px 3px purple',
        'pinkcard': '-1px 1px 4px 3px pink',
      }
    },
  },
  plugins: [],
};
export default config;
