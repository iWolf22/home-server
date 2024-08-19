import { cn } from "@/lib/utils";
import { CSSProperties, FC, ReactNode } from "react";

interface AnimatedShinyTextProps {
    children: ReactNode;
    className?: string;
    shimmerWidth?: number;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
    children,
    className,
    shimmerWidth = 1000,
}) => {
    return (
        <p
            className={cn(
                "mx-auto text-stone-900/70 dark:text-stone-100/70",

                // Shimmer effect
                "animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_0s_cubic-bezier(.6,.6,0,1)_infinite]",

                // Shimmer gradient
                "bg-gradient-to-r from-transparent via-black via-50% to-transparent dark:via-white",

                className
            )}
            style={
                {
                    "--shimmer-width": `${shimmerWidth}px`,
                } as CSSProperties
            }
        >
            {children}
        </p>
    );
};

export default AnimatedShinyText;
