import { WEBSITE_URL } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            allow: "/",
            disallow: [],
            userAgent: "*",
        },
        sitemap: WEBSITE_URL + "/sitemap.xml",
    };
}
