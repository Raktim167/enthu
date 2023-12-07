/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "enthu-purple": "#6300df",
        "gray-200": "#e5e7eb",
        "enthu-pink": "#ff1472",
        "text-grey": "#717171",
        "gray-900": "#111928",
        "text-darker": "#333",
        silver: "rgba(196, 196, 196, 0.5)",
        black: "#000",
        "enthu-lightestpink": "#fff1f7",
        "gray-500": "#6b7280",
        gold: "#ffbf00",
        deeppink: "rgba(255, 20, 114, 0.5)",
        "bg-grey3": "#fcfcfc",
        "enthu-textlightgray": "rgba(181, 181, 181, 0.5)",
        "gray-50": "#f9fafb",
        placeholder: "#c4c4c4",
        "gray-300": "#d1d5db",
        "enthu-green": "#27ae60",
        whitesmoke: "rgba(234, 234, 234, 0.5)",
        lemonchiffon: "#fff2cc",
        thistle: "#e0ccf9",
        mistyrose: "#ffd8e7",
        gray1: "#222",
        "primary-700": "#1a56db",
      },
      spacing: {},
      fontFamily: {
        metropolis: "Metropolis",
        "leading-tight-text-sm-font-normal": "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        sm: "14px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.88rem",
      lg: "1.13rem",
      xl: "1.25rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
