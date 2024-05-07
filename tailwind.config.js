/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'custom-gradient': 'radial-gradient(50% 50% at 50% 50%, rgba(30,196,248,.23) 0, #1ec4f8 100%)',
      }),
      colors: {
        'custom-blue': '#122644',
        'custom-text-color': '#5e6282',
        'custom-text-color-1': '#14183e',
        'custom-shadow-clr': '#2a6a981a',
        'text-clr-grey': '#535151',
        'light-blue-custom': '#f3fbfb',
        'custom-pink': '#eb234d',
        'l-blue-questions': '#f5fbfe',
        'overl': 'rgba(0, 0, 0, 0.5)'
        
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/hero-img.jpg')",
        
      },
      boxShadow: {
        'custom': '0 0 25.5319px rgba(42,106,152,.1)',
      },
      keyframes: {
        rotation: { // Define your custom keyframes animation
          from: {
            transform: 'rotate(359deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
      },
      
      "animation": {
        "zoom-in": "zoom-in 0.6s ease-out"
      },
      "zoom-in": {
        "0%": {
          "opacity": "0",
          "transform": "scale(.5)"
        },
        "100%": {
          "opacity": "1",
          "transform": "scale(1)"
        }
      },
      animation: { // Define the animation shorthand
        wiggle: 'rotation 60s linear infinite',

      },
      
    },
  },
  plugins: [require("daisyui")],
}
