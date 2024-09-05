import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            priority: 1,
            url: "/",
        },
        {
            priority: 0.5,
            url: "/blog",
        },
        {
            priority: 0.1,
            url: "/sitemap.xml",
        },
        {
            priority: 0.1,
            url: "/robots.txt",
        },
    ].map((item) => {
        return {
            ...item,
            changeFrequency: "monthly",
            lastModified: new Date(),
            url:
                (process.env.NODE_ENV === "production"
                    ? "https://joshuadierickse.me"
                    : "http://localhost") + item.url,
        };
    });
}
