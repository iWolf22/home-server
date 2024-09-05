import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: "/",
            disallow: [],
            userAgent: "*",
        },
        sitemap:
            process.env.NODE_ENV === "production"
                ? "https://joshuadierickse.me/sitemap.xml"
                : "http://localhost/sitemap.xml",
    };
}
