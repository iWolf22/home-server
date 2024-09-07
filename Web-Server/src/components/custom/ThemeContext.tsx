"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useMemo,
    useState,
} from "react";

export const CreateThemeContext = createContext<{
    setTheme: Dispatch<SetStateAction<"dark" | "light" | undefined>> | null;
    theme: "dark" | "light";
}>({
    setTheme: null,
    theme: "light",
});

const inter = Inter({ subsets: ["latin"] });

export default function ThemeContext({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<"dark" | "light">();

    useEffect(() => {
        function setBrowserLight() {
            if (htmlBody && htmlBody.classList) {
                htmlBody.classList.remove("bg-stone-900");
                htmlBody.classList.remove("dark");
                htmlBody.classList.add("bg-stone-100");
                htmlBody.classList.add("light");
            }
        }

        function setBrowserDark() {
            if (htmlBody && htmlBody.classList) {
                htmlBody.classList.remove("bg-stone-100");
                htmlBody.classList.remove("light");
                htmlBody.classList.add("bg-stone-900");
                htmlBody.classList.add("dark");
            }
        }

        const htmlBody = document.getElementById("body");

        if (theme) {
            localStorage.setItem("PERSONAL_WEBSITE_COLOR_THEME", theme);
            if (theme === "dark") setBrowserDark();
            else setBrowserLight();
            return;
        }

        const localStorageTheme = localStorage.getItem(
            "PERSONAL_WEBSITE_COLOR_THEME"
        );

        if (localStorageTheme) {
            setTheme(localStorageTheme === "dark" ? "dark" : "light");
            return;
        }

        const browserTheme = window.matchMedia("(prefers-color-scheme: dark)");
        setTheme(browserTheme.matches ? "dark" : "light");
    }, [theme]);

    const materialTheme = useMemo(() => {
        return createTheme({
            components: {
                MuiChip: {
                    variants: [
                        {
                            props: { variant: "filled" },
                            style: {
                                background:
                                    theme === "dark" ? "#292524" : "##e7e5e4",
                                color:
                                    theme === "dark" ? "#a8a29e" : "##57534e",
                            },
                        },
                    ],
                },
            },
            palette: {
                mode: theme,
            },
        });
    }, [theme]); // useMemo for on `theme` for better performance.

    return (
        <body className={inter.className} id="body">
            <main>
                <CreateThemeContext.Provider
                    value={{ setTheme: setTheme, theme: theme || "light" }}
                >
                    <ThemeProvider theme={materialTheme}>
                        {children}
                    </ThemeProvider>
                </CreateThemeContext.Provider>
            </main>
        </body>
    );
}
