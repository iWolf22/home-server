"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Transition } from "framer-motion";
import {
    Children,
    cloneElement,
    ReactElement,
    useEffect,
    useId,
    useState,
} from "react";

type AnimatedBackgroundProps = {
    children:
        | ReactElement<{ "data-id": string }>
        | ReactElement<{ "data-id": string }>[];
    className?: string;
    defaultValue?: string;
    enableHover?: boolean;
    onValueChange?: (newActiveId: null | string) => void;
    transition?: Transition;
};

export default function AnimatedBackground({
    children,
    className,
    defaultValue,
    enableHover = false,
    onValueChange,
    transition,
}: AnimatedBackgroundProps) {
    const [activeId, setActiveId] = useState<null | string>(null);
    const uniqueId = useId();

    const handleSetActiveId = (id: null | string) => {
        setActiveId(id);

        if (onValueChange) {
            onValueChange(id);
        }
    };

    useEffect(() => {
        if (defaultValue !== undefined) {
            setActiveId(defaultValue);
        }
    }, [defaultValue]);

    return Children.map(children, (child: any, index) => {
        const id = child.props["data-id"];

        const interactionProps = enableHover
            ? {
                  onMouseEnter: () => handleSetActiveId(id),
                  onMouseLeave: () => handleSetActiveId(null),
              }
            : {
                  onClick: () => handleSetActiveId(id),
              };

        return cloneElement(
            child,
            {
                "aria-selected": activeId === id,
                className: cn("relative inline-flex", child.props.className),
                "data-checked": activeId === id ? "true" : "false",
                key: index,
                ...interactionProps,
            },
            <>
                <AnimatePresence initial={false}>
                    {activeId === id && (
                        <motion.div
                            animate={{
                                opacity: 1,
                            }}
                            className={cn("absolute inset-0", className)}
                            exit={{
                                opacity: 0,
                            }}
                            initial={{ opacity: defaultValue ? 1 : 0 }}
                            layoutId={`background-${uniqueId}`}
                            transition={transition}
                        />
                    )}
                </AnimatePresence>
                <span className="z-10">{child.props.children}</span>
            </>
        );
    });
}
