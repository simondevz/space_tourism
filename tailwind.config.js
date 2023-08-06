/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "intro-text": "#D0D6F9",
        "body-text": "#D0D6F9",
        "explore-btn": "#0B0D17",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        homeMobile: "url('./assets/home/background-home-mobile.jpg')",
        homeDesktop: "url('./assets/home/background-home-desktop.jpg')",
        homeTablet: "url('./assets/home/background-home-tablet.jpg')",
        crewMobile: "url('./assets/crew/background-crew-mobile.jpg')",
        crewDesktop: "url('./assets/crew/background-crew-desktop.jpg')",
        crewTablet: "url('./assets/crew/background-crew-tablet.jpg')",
        technologyTablet:
          "url('./assets/technology/background-technology-tablet.jpg')",
        technologyMobile:
          "url('./assets/technology/background-technology-mobile.jpg')",
        technologyDesktop:
          "url('./assets/technology/background-technology-desktop.jpg')",
        destinationMobile:
          "url('./assets/destination/background-destination-mobile.jpg')",
        destinationDesktop:
          "url('./assets/destination/background-destination-desktop.jpg')",
        destinationTablet:
          "url('./assets/destination/background-destination-tablet.jpg')",
      },
      fontFamily: {
        bellefair: ["bellefair"],
        barlow: ["barlow"],
        barlowCondenced: ["barlowCondenced"],
      },
      fontSize: {
        "home-header": [
          "5rem",
          {
            lineHeight: "6.25rem",
            fontWeight: "400",
          },
        ],
        "tech-header": [
          "1.5rem",
          {
            fontWeight: "400",
          },
        ],
        "destination-header": [
          "3.5rem",
          {
            fontWeight: "400",
          },
        ],
        "home-intro": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.16875rem",
            fontWeight: "400",
          },
        ],
        "destination-text": [
          "0.875rem",
          {
            letterSpacing: "0.14763rem",
            fontWeight: "400",
          },
        ],
        "destination-attr": [
          "1.75rem",
          {
            fontWeight: "400",
          },
        ],
        "tech-intro": [
          "0.875rem",
          {
            letterSpacing: "0.14763rem",
            fontWeight: "400",
          },
        ],
        "crew-intro": [
          "1rem",
          {
            fontWeight: "400",
          },
        ],
        "content-body": [
          "0.9375rem",
          {
            lineHeight: "1.5625rem",
            fontWeight: "400",
          },
        ],
        "explore-btn": [
          "1.25rem",
          {
            letterSpacing: "0.07813rem",
            fontWeight: "400",
          },
        ],
        "destination-nav": [
          "0.875rem",
          {
            letterSpacing: "0.0.14763rem",
            fontWeight: "400",
          },
        ],
      },
    },
    plugins: [],
  },
};
