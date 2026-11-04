import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://villas.example/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://villas.example/#villas", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://villas.example/#gallery", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://villas.example/#faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
