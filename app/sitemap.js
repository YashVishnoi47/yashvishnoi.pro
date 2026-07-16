export default function sitemap() {
  const baseUrl = "https://yashvishnoi.pro";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add new entries here as you add real pages, e.g.:
    {
      url: `${baseUrl}/bookCall`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/privacy`,
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.3,
    // },
  ];
}