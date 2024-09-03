"use client";

import { useEffect, useRef } from "react";

interface MouseEvent {
    clientX: number;
    movementY: number;
}

export default function BezierCurve() {
    // Define a reference to an SVGPathElement
    const path = useRef<SVGPathElement>(null);

    const refContainer = useRef<HTMLDivElement>(null);

    // Initialize progress, x, time, and reqId variables
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId: null | number = null;

    // Use the useEffect hook to set the path on component mount
    useEffect(() => {
        setPath(progress);
    }, []);

    // Define a function to set the path of the SVG element
    const setPath = (progress: number) => {
        // Get the width of the window
        const width = refContainer.current?.offsetWidth || 600;

        // Set the "d" attribute of the SVG path element using a quadratic Bézier curve
        path.current?.setAttributeNS(
            null,
            "d",
            `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
        );
    };

    // Define a linear interpolation function
    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

    // Define a function to handle mouse enter events
    const manageMouseEnter = () => {
        // If there is an animation frame request, cancel it and reset the animation
        if (reqId) {
            cancelAnimationFrame(reqId);
            resetAnimation();
        }
    };

    // Define a function to handle mouse move events
    const manageMouseMove = (e: MouseEvent) => {
        // Get the movementY and clientX properties from the event object
        const { clientX, movementY } = e;

        // Get the bounding rectangle of the SVG path element
        const pathBound = path.current?.getBoundingClientRect();

        // If the bounding rectangle exists, update x and progress and set the path
        if (pathBound) {
            x = (clientX - pathBound.left) / pathBound.width;
            progress += movementY;
            setPath(progress);
        }
    };

    // Define a function to handle mouse leave events
    const manageMouseLeave = () => {
        // Start animating out
        animateOut();
    };

    // Define a function to animate out
    const animateOut = () => {
        // Calculate newProgress using sine of time
        const newProgress = progress * Math.sin(time);

        // Update progress using linear interpolation towards zero
        progress = lerp(progress, 0, 0.025);

        // Increment time by 0.2
        time += 0.2;

        // Set the path using newProgress
        setPath(newProgress);

        // If progress is greater than a threshold, request another animation frame,
        // otherwise reset the animation.
        if (Math.abs(progress) > 0.75) {
            reqId = requestAnimationFrame(animateOut);
        } else {
            resetAnimation();
        }
    };

    // Define a function to reset the animation variables
    const resetAnimation = () => {
        time = Math.PI / 2;
        progress = 0;
    };

    return (
        <div className="relative h-px w-full" ref={refContainer}>
            <div
                className="relative top-[-40px] z-10 h-10 w-full"
                onMouseEnter={() => {
                    manageMouseEnter();
                }}
                onMouseLeave={() => {
                    manageMouseLeave();
                }}
                onMouseMove={(e) => {
                    manageMouseMove(e);
                }}
            ></div>
            <div className="relative bottom-[60px]">
                <svg className="absolute top-[-250px] h-[500px] w-full">
                    <path
                        className="fill-none stroke-current stroke-[1px] text-stone-400 dark:text-stone-600"
                        ref={path}
                    ></path>
                </svg>
            </div>
        </div>
    );
}
