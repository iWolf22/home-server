"use client";

import { cn } from "@/lib/utils";

type TColorProp = string | string[];

interface ShineBorderProps {
    borderRadius?: number;
    borderWidth?: number;
    children: React.ReactNode;
    className?: string;
    color?: TColorProp;
    duration?: number;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export default function ShineBorder({
    borderRadius = 8,
    borderWidth = 1,
    children,
    className,
    color = "#000000",
    duration = 14,
}: ShineBorderProps) {
    return (
        <div
            className={cn(
                "relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] border-none bg-stone-100 dark:bg-stone-900",
                className
            )}
            style={
                {
                    "--border-radius": `${borderRadius}px`,
                } as React.CSSProperties
            }
        >
            <div
                className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
                style={
                    {
                        "--background-radial-gradient": `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(",") : color},transparent,transparent)`,
                        "--border-radius": `${borderRadius}px`,
                        "--border-width": `${borderWidth}px`,
                        "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                        "--shine-pulse-duration": `${duration}s`,
                    } as React.CSSProperties
                }
            ></div>
            <div className="z-50">{children}</div>
        </div>
    );
}
