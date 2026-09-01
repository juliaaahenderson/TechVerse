import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechVerse",
    short_name: "TechVerse",
    description: "TechVerse | Premium E-Commerce & Bitdefender Security Hub",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0284c7",
    icons: [
      {
        src: "/TechVerse favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/TechVerse favicon.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/TechVerse favicon.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/TechVerse favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/TechVerse favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
