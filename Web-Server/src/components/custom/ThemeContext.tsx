"use client";

import {
    Dispatch,
    SetStateAction,
    createContext,
    useEffect,
    useState,
} from "react";

export const CreateThemeContext = createContext<{
    setTheme: Dispatch<SetStateAction<"dark" | "light" | undefined>> | null;
    theme: "dark" | "light";
}>({
    setTheme: null,
    theme: "light",
});

export default function ThemeContext({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<"dark" | "light">();

    useEffect(() => {
        if (theme) {
            localStorage.setItem("PERSONAL_WEBSITE_COLOR_THEME", theme);
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

    return (
        <main className={theme}>
            <div className="h-screen w-full bg-stone-100 dark:bg-stone-900">
                <CreateThemeContext.Provider
                    value={{ setTheme: setTheme, theme: theme || "light" }}
                >
                    {children}
                </CreateThemeContext.Provider>
            </div>
        </main>
    );
}
