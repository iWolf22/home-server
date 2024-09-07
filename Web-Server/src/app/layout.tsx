import type { Metadata } from "next";

import ThemeContext from "@/components/custom/ThemeContext";
import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/Navbar";
import { WEBSITE_URL } from "@/lib/constants";
import Head from "next/head";
import Script from "next/script";

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
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `const htmlBody = document.getElementById('body'); function setBrowserLight() { if (htmlBody && htmlBody.classList) { htmlBody.classList.remove('bg-stone-900'); htmlBody.classList.remove('dark'); htmlBody.classList.add('bg-stone-100'); htmlBody.classList.add('light'); } } function setBrowserDark() { if (htmlBody && htmlBody.classList) { htmlBody.classList.remove('bg-stone-100'); htmlBody.classList.remove('light'); htmlBody.classList.add('bg-stone-900'); htmlBody.classList.add('dark'); } } const localStorageTheme = localStorage.getItem('PERSONAL_WEBSITE_COLOR_THEME'); if (localStorageTheme) { if (localStorageTheme === 'dark') { setBrowserDark(); } else { setBrowserLight(); } } else { const browserTheme = window.matchMedia('(prefers-color-scheme: dark)'); if (browserTheme.matches) { setBrowserDark(); } else { setBrowserLight(); } }`,
                    }}
                    id="theme-flash"
                    strategy="beforeInteractive"
                />
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
