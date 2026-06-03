import localFont from "next/font/local";

export const vazir = localFont({
  src: [
    {
      path: '../assets/fonts/vazir/Vazir-FD.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/vazir/Vazir-Medium-FD.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/vazir/Vazir-Bold-FD.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-vazir',
  display: 'swap'
});
