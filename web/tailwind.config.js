module.exports = {
  theme: {
    extend: {}
  },
  variants: {},

 plugins: [require("@tailwindcss/typography"), require("daisyui")],

 content: ["./src/**/*.svelte", "./src/**/*.html"]
}
