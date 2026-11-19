import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://villas.example/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
<<<<<<< Updated upstream
    { url: "https://villas.example/#villas", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://villas.example/#gallery", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://villas.example/#faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://villas.example/villas/coral-island-house", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
=======
    { url: "https://villas.example/#house", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://villas.example/#space", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: "https://villas.example/#amenities", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://villas.example/#area", lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: "https://villas.example/#rates", lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: "https://villas.example/#journal", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://villas.example/#enquiry", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
>>>>>>> Stashed changes
  ];
}
