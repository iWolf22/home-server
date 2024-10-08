"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { RefObject, useEffect, useId, useState } from "react";

export interface AnimatedBeamProps {
    className?: string;
    containerRef: RefObject<HTMLElement>; // Container ref
    curvature?: number;
    delay?: number;
    duration?: number;
    endXOffset?: number;
    endYOffset?: number;
    fromRef: RefObject<HTMLElement>;
    gradientStartColor?: string;
    gradientStopColor?: string;
    pathColor?: string;
    pathOpacity?: number;
    pathWidth?: number;
    reverse?: boolean;
    startXOffset?: number;
    startYOffset?: number;
    toRef: RefObject<HTMLElement>;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
    className,
    containerRef,
    curvature = 0,
    delay = 0,
    duration = Math.random() * 3 + 4,
    endXOffset = 0,
    endYOffset = 0,
    fromRef,
    gradientStartColor = "#ffaa40",
    gradientStopColor = "#9c40ff",
    pathColor = "gray",
    pathOpacity = 0.2,
    pathWidth = 2,
    reverse = false, // Include the reverse prop
    startXOffset = 0,
    startYOffset = 0,
    toRef,
}) => {
    const id = useId();
    const [pathD, setPathD] = useState("");
    const [svgDimensions, setSvgDimensions] = useState({ height: 0, width: 0 });

    // Calculate the gradient coordinates based on the reverse prop
    const gradientCoordinates = reverse
        ? {
              x1: ["90%", "-10%"],
              x2: ["100%", "0%"],
              y1: ["0%", "0%"],
              y2: ["0%", "0%"],
          }
        : {
              x1: ["10%", "110%"],
              x2: ["0%", "100%"],
              y1: ["0%", "0%"],
              y2: ["0%", "0%"],
          };

    useEffect(() => {
        const updatePath = () => {
            if (containerRef.current && fromRef.current && toRef.current) {
                const containerRect =
                    containerRef.current.getBoundingClientRect();
                const rectA = fromRef.current.getBoundingClientRect();
                const rectB = toRef.current.getBoundingClientRect();

                const svgWidth = containerRect.width;
                const svgHeight = containerRect.height;
                setSvgDimensions({ height: svgHeight, width: svgWidth });

                const startX =
                    rectA.left -
                    containerRect.left +
                    rectA.width / 2 +
                    startXOffset;
                const startY =
                    rectA.top -
                    containerRect.top +
                    rectA.height / 2 +
                    startYOffset;
                const endX =
                    rectB.left -
                    containerRect.left +
                    rectB.width / 2 +
                    endXOffset;
                const endY =
                    rectB.top -
                    containerRect.top +
                    rectB.height / 2 +
                    endYOffset;

                const controlY = startY - curvature;
                const d = `M ${startX},${startY} Q ${
                    (startX + endX) / 2
                },${controlY} ${endX},${endY}`;
                setPathD(d);
            }
        };

        // Initialize ResizeObserver
        const resizeObserver = new ResizeObserver((entries) => {
            // For all entries, recalculate the path
            for (let entry of entries) {
                updatePath();
            }
        });

        // Observe the container element
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Call the updatePath initially to set the initial path
        updatePath();

        // Clean up the observer on component unmount
        return () => {
            resizeObserver.disconnect();
        };
    }, [
        containerRef,
        fromRef,
        toRef,
        curvature,
        startXOffset,
        startYOffset,
        endXOffset,
        endYOffset,
    ]);

    return (
        <svg
            className={cn(
                "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
                className
            )}
            fill="none"
            height={svgDimensions.height}
            viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
            width={svgDimensions.width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={pathD}
                stroke={pathColor}
                strokeLinecap="round"
                strokeOpacity={pathOpacity}
                strokeWidth={pathWidth}
            />
            <path
                d={pathD}
                stroke={`url(#${id})`}
                strokeLinecap="round"
                strokeOpacity="1"
                strokeWidth={pathWidth}
            />
            <defs>
                <motion.linearGradient
                    animate={{
                        x1: gradientCoordinates.x1,
                        x2: gradientCoordinates.x2,
                        y1: gradientCoordinates.y1,
                        y2: gradientCoordinates.y2,
                    }}
                    className="transform-gpu"
                    gradientUnits={"userSpaceOnUse"}
                    id={id}
                    initial={{
                        x1: "0%",
                        x2: "0%",
                        y1: "0%",
                        y2: "0%",
                    }}
                    transition={{
                        delay,
                        duration,
                        ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
                        repeat: Infinity,
                        repeatDelay: 0,
                    }}
                >
                    <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
                    <stop stopColor={gradientStartColor}></stop>
                    <stop offset="32.5%" stopColor={gradientStopColor}></stop>
                    <stop
                        offset="100%"
                        stopColor={gradientStopColor}
                        stopOpacity="0"
                    ></stop>
                </motion.linearGradient>
            </defs>
        </svg>
    );
};
