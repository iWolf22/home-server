"use client";

import project1Image from "@/../public/images/projects-1.png";
import project2Image from "@/../public/images/projects-2.png";
import project3Image from "@/../public/images/projects-3.png";
import project4Image from "@/../public/images/projects-4.png";
import project5Image from "@/../public/images/projects-5.png";
import project6Image from "@/../public/images/projects-6.png";
import project7Image from "@/../public/images/projects-7.png";
import project8Image from "@/../public/images/projects-8.png";
import { CreateThemeContext } from "@/components/custom/ThemeContext";
import ShineBorder from "@/components/magicui/shine-border";
import { Modal } from "@mui/material";
import Image from "next/image";
import { useContext, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projectList = [
    {
        image: project1Image,
        short: "Note Taking For Books",
        title: "BookNotes™",
    },
    {
        image: project2Image,
        short: "AI Cooking Assistant",
        title: "Cooking Mama",
    },
    {
        image: project3Image,
        short: "Piano Stairs Alternative",
        title: "Symphony Strips",
    },
    {
        image: project5Image,
        short: "Hackathon Team Matchmaker",
        title: "!Tinder",
    },
    {
        image: project4Image,
        short: "Chess, Flappy Bird, etc.",
        title: "Various Games",
    },
    {
        image: project6Image,
        short: "Face and Emotion Tracking",
        title: "Emotions",
    },
    {
        image: project8Image,
        short: "AI Physiotherapist",
        title: "Mobility+",
    },
    {
        image: project7Image,
        short: "For a Hypothetical Hackathon",
        title: "Events Catalogue",
    },
];

export default function SwiperComponent() {
    const [modal, setModal] = useState(-1);

    const { theme } = useContext(CreateThemeContext);

    return (
        <div>
            <Modal
                onClose={() => setModal(-1)}
                open={modal !== -1}
                style={{ backdropFilter: "blur(3px)" }}
            >
                <div
                    className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 rounded-xl border-rose-100 bg-stone-100 dark:bg-stone-900"
                    style={{ outline: "none" }}
                >
                    <ShineBorder
                        borderWidth={2}
                        className="rounded-lg border"
                        color={
                            theme === "dark"
                                ? ["#a8a29e", "#57534e"]
                                : "#1c1917"
                        }
                    >
                        <div className="p-4">
                            <Image
                                alt="Image"
                                placeholder="blur"
                                src={projectList[modal]?.image}
                                width={768}
                            />
                            <div className="flex gap-2 pt-2 text-xl">
                                <p className="font-bold text-stone-900 dark:text-stone-100">
                                    {projectList[modal]?.title}
                                </p>
                                <p className="text-stone-600 dark:text-stone-400">
                                    |
                                </p>
                                <p className="text-stone-600 dark:text-stone-400">
                                    {projectList[modal]?.short}
                                </p>
                            </div>
                        </div>
                    </ShineBorder>
                </div>
            </Modal>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                freeMode={true}
                loop={true}
                modules={[FreeMode, Autoplay]}
                slidesPerView="auto"
                spaceBetween={8}
            >
                {projectList.map(({ image, short, title }, i) => {
                    return (
                        <SwiperSlide
                            className="!w-[384px] sm:!w-[512px]"
                            key={i}
                            onClick={() => setModal(i)}
                        >
                            <Image
                                alt="Image"
                                placeholder="blur"
                                src={image}
                                width={512}
                            />
                            <div className="z-50 flex gap-2 pt-1">
                                <p className="font-bold text-stone-900 dark:text-stone-100">
                                    {title}
                                </p>
                                <p className="text-stone-600 dark:text-stone-400">
                                    |
                                </p>
                                <p className="text-stone-600 dark:text-stone-400">
                                    {short}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
