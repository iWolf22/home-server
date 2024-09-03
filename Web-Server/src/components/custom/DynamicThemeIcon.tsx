"use client";

import { CreateThemeContext } from "@/components/custom/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useContext } from "react";

export default function DynamicThemeIcon() {
    const { theme } = useContext(CreateThemeContext);

    if (theme === "dark") return <DarkModeIcon />;
    return <LightModeIcon />;
}
