import { cn } from "@/lib/utils";

interface MarqueeProps {
    [key: string]: any;
    children?: React.ReactNode;
    className?: string;
    pauseOnHover?: boolean;
    repeat?: number;
    reverse?: boolean;
    vertical?: boolean;
}

export default function Marquee({
    children,
    className,
    pauseOnHover = false,
    repeat = 4,
    reverse,
    vertical = false,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
                {
                    "flex-col": vertical,
                    "flex-row": !vertical,
                },
                className
            )}
        >
            {Array(repeat)
                .fill(0)
                .map((_, i) => (
                    <div
                        className={cn(
                            "flex shrink-0 justify-around [gap:var(--gap)]",
                            {
                                "[animation-direction:reverse]": reverse,
                                "animate-marquee flex-row": !vertical,
                                "animate-marquee-vertical flex-col": vertical,
                                "group-hover:[animation-play-state:paused]":
                                    pauseOnHover,
                            }
                        )}
                        key={i}
                    >
                        {children}
                    </div>
                ))}
        </div>
    );
}
