import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "گنجور",
    short_name: "گنجور",
    description: "مجموعه‌ آثار سخنسرایان پارسی‌گو",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#bf3f2a",
    orientation: "portrait-primary",
    dir: "rtl",
    lang: "fa-IR",
    icons: [
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
    ],
  };
}
