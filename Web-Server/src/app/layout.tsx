import type { Metadata } from "next";

import ThemeContext from "@/components/custom/ThemeContext";
import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/Navbar";
import { WEBSITE_URL } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
    description: "My personal website where I store my projects and my blog!",
    metadataBase: new URL(WEBSITE_URL),
    title: {
        default: "Joshua Dierickse",
        template: "%s | Joshua Dierickse",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <ThemeContext>
                <div className="flex min-h-[calc(100vh)] flex-col justify-between">
                    <div>
                        <Navbar />
                        {children}
                    </div>
                    <Footer />
                </div>
            </ThemeContext>
        </html>
    );
}
