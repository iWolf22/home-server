"use client";

import DropDown from "@/components/custom/DropDown";
import React, {
    ComponentPropsWithoutRef,
    CSSProperties,
    useEffect,
    useRef,
    useState,
} from "react";

interface GlowCaptureProps extends ComponentPropsWithoutRef<"div"> {
    size?: number;
}

export const GlowCapture = (props: GlowCaptureProps) => {
    const { className = "", size = 400, ...rest } = props;

    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const move = (e: PointerEvent) => {
            if (e.pointerType === "mouse") {
                requestAnimationFrame(() => {
                    if (!element.current) return;

                    const bounds = element.current.getBoundingClientRect();

                    const x = e.clientX - bounds.left;
                    const y = e.clientY - bounds.top;

                    element.current.style.setProperty("--glow-x", `${x}px`);
                    element.current.style.setProperty("--glow-y", `${y}px`);
                });
            }
        };

        const leave = () => {
            element.current?.style.removeProperty("--glow-x");
            element.current?.style.removeProperty("--glow-y");
        };

        element.current?.addEventListener("pointermove", move, {
            passive: true,
        });
        element.current?.addEventListener("pointerleave", leave, {
            passive: true,
        });
        return () => {
            element.current?.removeEventListener("pointermove", move);
            element.current?.removeEventListener("pointerleave", leave);
        };
    }, []);

    return (
        <div
            className={`glow-capture ${className}`}
            ref={element}
            style={
                {
                    "--glow-size": `${size}px`,
                    position: "relative",
                } as CSSProperties
            }
            {...rest}
        />
    );
};

const mask = `
radial-gradient(var(--glow-size) var(--glow-size) at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
calc(var(--glow-y, -99999px) - var(--glow-top, 0px)), #000000 1%, transparent 50%)
`;

interface GlowProps extends ComponentPropsWithoutRef<"div"> {
    color?: string;
    company: string;
    debug?: boolean;
    description: JSX.Element;
    i: number;
    image: string;
    length: number;
    location: string;
    role: string;
    time: string;
}

export const Glow = (props: GlowProps) => {
    const {
        className = "",
        color = "#f50057",
        company,
        debug = false,
        description,
        i,
        image,
        length,
        location,
        role,
        style,
        time,
        ...rest
    } = props;

    const element = useRef<HTMLDivElement>(null);

    useEffect(() => {
        element.current?.style.setProperty(
            "--glow-top",
            `${element.current?.offsetTop}px`
        );
        element.current?.style.setProperty(
            "--glow-left",
            `${element.current?.offsetLeft}px`
        );
    });

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            requestAnimationFrame(() => {
                element.current?.style.setProperty(
                    "--glow-top",
                    `${element.current?.offsetTop}px`
                );
                element.current?.style.setProperty(
                    "--glow-left",
                    `${element.current?.offsetLeft}px`
                );
            });
        });

        const capture = element.current?.closest(".glow-capture");
        if (capture) observer.observe(capture);

        return () => observer.disconnect();
    }, []);

    const [open, setOpen] = useState(false);

    return (
        <div className="glow" ref={element} style={{ display: "grid" }}>
            <div
                className={className}
                style={{
                    ...style,
                    gridArea: "1/1/1/1",
                }}
                {...rest}
            >
                <div onClick={() => setOpen(!open)}>
                    <DropDown
                        company={company}
                        description={description}
                        i={i}
                        image={image}
                        length={length}
                        location={location}
                        open={open}
                        role={role}
                        time={time}
                    />
                </div>
            </div>
            <div
                className={`glow-mask ${className}`}
                // @ts-ignore
                glow="true"
                style={
                    {
                        ...style,
                        "--glow-color": color,
                        gridArea: "1/1/1/1",
                        mask: debug ? undefined : mask,
                        pointerEvents: "none",
                        WebkitMask: debug ? undefined : mask,
                    } as CSSProperties
                }
                {...rest}
            >
                <div onClick={() => setOpen(!open)}>
                    <DropDown
                        company={company}
                        description={description}
                        i={i}
                        image={image}
                        length={length}
                        location={location}
                        open={open}
                        role={role}
                        time={time}
                    />
                </div>
            </div>
        </div>
    );
};
