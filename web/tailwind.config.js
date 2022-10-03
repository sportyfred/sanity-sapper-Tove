module.exports = {
   daisyui: {
      themes: [
        {
          skog: {
          
 "primary": "#127369",
          
 "secondary": "#10403B",
          
 "accent": "#8AA6A3",
          
 "neutral": "#1F2937",
          
 "base-100": "#ffffff",
          
 "info": "#4C5958",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
          },
        },
      ],
    },
  theme: {
    extend: {}
  },
  variants: {},

 plugins: [require("@tailwindcss/typography"), require("daisyui")],

 content: ["./src/**/*.svelte", "./src/**/*.html"]
}
