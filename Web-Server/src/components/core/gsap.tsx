"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function MagneticGSAP({ children }: any) {
    const magnetic: any = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });
        const yTo = gsap.quickTo(magnetic.current, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
        });

        magnetic.current.addEventListener("mousemove", (e: any) => {
            const { clientX, clientY } = e;
            const { height, left, top, width } =
                magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        });
        magnetic.current.addEventListener("mouseleave", (e: any) => {
            xTo(0);
            yTo(0);
        });
    }, []);

    return React.cloneElement(children, { ref: magnetic });
}
