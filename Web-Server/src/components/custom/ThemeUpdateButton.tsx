"use client";

import { CreateThemeContext } from "@/components/custom/ThemeContext";
import { useContext } from "react";

export default function ThemeUpdateButton({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) {
    const { setTheme } = useContext(CreateThemeContext);

    return (
        <div
            className={className}
            onClick={() => {
                if (setTheme)
                    setTheme((theme) => {
                        return theme === "dark" ? "light" : "dark";
                    });
            }}
        >
            {children}
        </div>
    );
}
