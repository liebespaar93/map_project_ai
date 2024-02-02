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
    },
    maxWidth: {
      '1/2': '50%',
      '1/3': '33.33%',
      '2/3': '33.33%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%'
    },
    colors: {
      "kakao-main-blue-color": '#9BBBD4',
      "kakao-main-white-color": '#FFFFFF',
      "kakao-main-gray-light-color": '#F0F0F0',
      "kakao-main-gray-dark-color": '#B7B7B7',
      "kakao-main-brown-color": '#371D1E',
      "kakao-main-yellow-color": '#F9E000',
      "kakao-text-color": '#000000',
      "kakao-text-time-color": '#556677',
      "kakao-req-msg-box-color": '#FFFFFF',
      "kakao-res-msg-box-color": '#F9E000',
      "kakao-input-box-color": '#B7B7B7',
      "kakao-button-color": '#1597F5',
    }
  },
  plugins: [],
};
export default config;
