import { WEBSITE_URL } from "@/lib/constants";
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
    ].map(({ priority, url }) => {
        return {
            changeFrequency: "monthly",
            lastModified: new Date(),
            priority,
            url: WEBSITE_URL + url,
        };
    });
}
