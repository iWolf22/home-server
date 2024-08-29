"use client";

import { CreateThemeContext } from "@/components/custom/ThemeContext";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";
import { Tooltip, tooltipClasses } from "@mui/material";
import React, { forwardRef, ReactElement, useContext, useRef } from "react";

// eslint-disable-next-line react/display-name
const Circle = forwardRef<
    HTMLDivElement,
    { children?: React.ReactNode; className?: string }
>(({ children, className }, ref) => {
    return (
        <div
            className={cn(
                "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-stone-200 bg-stone-100 p-[9px] dark:border-stone-800 dark:bg-stone-900",
                className
            )}
            ref={ref}
        >
            {children}
        </div>
    );
});

export default function AnimatedBeamComponent({
    image1,
    image2,
}: {
    image1: React.ReactNode;
    image2: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);

    const { theme } = useContext(CreateThemeContext);

    return (
        <div
            className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden"
            ref={containerRef}
        >
            <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row justify-between">
                    <Circle ref={div1Ref}>
                        <Tooltip
                            placement="top"
                            title="Home server running a dockerized NextJS application"
                        >
                            {image1 as ReactElement}
                        </Tooltip>
                    </Circle>
                    <Circle ref={div2Ref}>
                        {" "}
                        <Tooltip
                            placement="top"
                            title="Oracle VPS with a Wireguard VPN to bypass a CGNAT"
                        >
                            {image2 as ReactElement}
                        </Tooltip>
                    </Circle>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                curvature={-20}
                endYOffset={10}
                fromRef={div1Ref}
                gradientStartColor={theme === "dark" ? "#f5f5f4" : "#1c1917"}
                gradientStopColor={theme === "dark" ? "#57534e" : "#a8a29e"}
                pathColor="#78716c"
                startYOffset={10}
                toRef={div2Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                curvature={20}
                endYOffset={-10}
                fromRef={div1Ref}
                gradientStartColor={theme === "dark" ? "#f5f5f4" : "#1c1917"}
                gradientStopColor={theme === "dark" ? "#57534e" : "#a8a29e"}
                pathColor="#78716c"
                reverse
                startYOffset={-10}
                toRef={div2Ref}
            />
        </div>
    );
}
