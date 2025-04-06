// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        animation: {
          text: "text 1s ease infinite",
        },
        keyframes: {
          text: {
            "0%, 100%": {
              "background-size": "200% 200%",
              "background-position": "left center",
            },
            "50%": {
              "background-size": "200% 200%",
              "background-position": "right center",
            },
          },
        },
      },
    },
    plugins: [],
  };





 

