// tailwind.config.js
import colors from "tailwindcss/colors";

export default {
  purge: [],
  darkMode: false, // veya 'media' veya 'class'
  theme: {
    extend: {
      colors: {
        // Özel renkler ekleyebilirsiniz
        teal: colors.teal,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
