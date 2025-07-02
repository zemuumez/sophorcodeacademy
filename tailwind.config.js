/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e88e5",
        },
        secondary: {
          DEFAULT: "#ffffff",
        },
        accent: {
          DEFAULT: "#1565c0",
        },
        background: {
          DEFAULT: "#f9f9f9",
        },
        textPrimary: {
          DEFAULT: "#212121",
        },
        textSecondary: {
          DEFAULT: "#616161",
        },
      },
      fontSize: {
        "heading-1": ["48px", { lineHeight: "56px", fontWeight: "700" }],
        "heading-2": ["36px", { lineHeight: "44px", fontWeight: "700" }],
        "heading-3": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-4": ["20px", { lineHeight: "28px", fontWeight: "700" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
      },
      borderRadius: {
        DEFAULT: "8px",
        button: "8px",
        card: "8px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.1)",
        button: "0 2px 4px rgba(0,0,0,0.15)",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        section: "64px",
        "section-tablet": "48px",
        "section-mobile": "32px",
        "element-gap": "16px",
        gutter: "24px",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
        primary: theme("colors.primary.DEFAULT"),
      }),
    },
  },
  plugins: [],
};
