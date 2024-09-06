"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import Image from "next/image";

export default function DropDown({
    company,
    description,
    i,
    image,
    length,
    location,
    open,
    role,
    time,
}: {
    company: string;
    description: JSX.Element;
    i: number;
    image: string;
    length: number;
    location: string;
    open: boolean;
    role: string;
    time: string;
}) {
    function backgroundColor() {
        if (image === "uwaterloo.svg") return "bg-[#666745]";
        if (image === "homeworkhub.png") return "bg-fuchsia-200";
        if (image === "venuiti.png") return "bg-red-200";
        return "";
    }

    return (
        <div
            className={
                "cursor-pointer border-[1px] border-stone-400 p-4 text-stone-900 glow:border-black glow:bg-stone-300 glow:text-black dark:border-stone-600 dark:text-stone-100 dark:glow:border-white dark:glow:bg-stone-700 dark:glow:text-white " +
                (i == 0 ? "rounded-t-lg" : "") +
                (length === i ? "rounded-b-lg" : "")
            }
            style={{
                borderWidth: length === i ? "1px" : "1px 1px 0px 1px",
            }}
        >
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <ExpandMoreIcon
                        className={
                            "-rotate-90 text-stone-600 transition-all glow:text-black dark:text-stone-400 dark:glow:text-white " +
                            (open ? " !rotate-0" : " !-rotate-90")
                        }
                    />
                    <Image
                        alt={image}
                        className={"rounded-sm " + backgroundColor()}
                        height="38"
                        quality={100}
                        src={"/work/" + image}
                        width="38"
                    />
                    <div>
                        <p className="text-lg font-bold">{company}</p>
                        <p className="text-sm text-stone-600 glow:text-black dark:text-stone-400 dark:glow:text-white">
                            {role}
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="mb-1 text-base font-semibold">{location}</p>
                    <p className="text-sm text-stone-600 glow:text-black dark:text-stone-400 dark:glow:text-white">
                        {time}
                    </p>
                </div>
            </div>
            <Collapse in={open}>
                <div className="ml-[94px] mt-2 text-sm text-stone-900 glow:text-black dark:text-stone-100 dark:glow:text-white">
                    {description}
                </div>
            </Collapse>
        </div>
    );
}
