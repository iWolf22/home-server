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
import GitHubIcon from "@mui/icons-material/GitHub";
import { Chip, Modal } from "@mui/material";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projectList = [
    {
        description:
            "BookNotes™ allows you to easily track and save all the wonderful books you have read using the power of NodeJS, Express, Axios, and PostgreSQL! Add a new book to your catalogue by simply searching for it and filling in the prompted information. Happy reading!",
        image: project1Image,
        languages: ["Node", "Express", "EJS", "Postgres", "Axios", "Ajax"],
        link: "https://github.com/iWolf22/The-Complete-2023-Web-Development-Bootcamp/tree/main/Section%2034%20-%20Capstone%20Project%20Book%20Notes",
        short: "Note Taking For Books",
        title: "BookNotes™",
    },
    {
        description:
            "Cooking Mama is an AI-powered voice assistant that is trained on a specific website's recipe. Simply enter the website's url, and Cooking Mama will be able to answer questions about the recipe like Siri or a Google Home with it's speech-to-text and text-to-speech capabilities.",
        image: project2Image,
        languages: [
            "Node",
            "Express",
            "EJS",
            "OpenAI",
            "BootStrap",
            "Puppeteer",
            "Cheerio",
        ],
        link: "https://github.com/iWolf22/cooking-mama",
        short: "AI Cooking Assistant",
        title: "Cooking Mama",
    },
    {
        description:
            "Symphony strips turns any ordinary staircase into a playable piano by transforming each step into a piano key that can be played by walking on it. Symphony strips cuts down on the cost of piano stairs by using ultrasonic sensors instead of expensive tactile sensors.",
        image: project3Image,
        languages: [
            "C++",
            "Arduino",
            "Breadboard",
            "Ultrasonic Sensors",
            "Piezo Speaker",
        ],
        link: "https://github.com/iWolf22/Symphony_Strips_Program",
        short: "Piano Stairs Alternative",
        title: "Symphony Strips",
    },
    {
        description:
            "Using a simple swiping mechanism and matching algorithm, !Tinder shows you potential teammates as well as their interests, hackathons attended, and technological skill sets. Once you've found four teammates, you can connect and plan in the built-in chat.",
        image: project5Image,
        languages: [
            "TypeScript",
            "React",
            "Vite",
            "Express",
            "TailwindCSS",
            "MaterialUI",
        ],
        link: "https://github.com/Dissonant101/hawk-hacks-2024",
        short: "Hackathon Team Matchmaker",
        title: "!Tinder",
    },
    {
        description:
            'The initial spark that brought life to my computer science journey came from good old game development. I have still yet to develop or conceptualize my "dream video game," but one day I\'ll hopefully get around to it. Above are some video games I made as a child mostly using Python and Pygame (the best video game engine of all time).',
        image: project4Image,
        languages: ["Python", "Pygame", "Java", "Java Swing"],
        link: "https://github.com/iWolf22/Java-Chess",
        short: "Chess, Flappy Bird, etc.",
        title: "Various Games",
    },
    {
        description:
            "A technical challenge aimed at tracking a user's face and emotions in real time utilizing free and open source technologies like tensorflow.",
        image: project6Image,
        languages: ["Tensorflow", "TypeScript", "React", "MaterialUI", "CSS"],
        link: "https://github.com/iWolf22/face-tracking-software",
        short: "Face and Emotion Tracking",
        title: "Emotions",
    },
    {
        description:
            "Mobility+ is an AI-powered physiotherapist. Through a combination of computer vision and large language models, Mobility+ can accurately assess a patient's form, all while providing them with live feedback through auditory and visual queues. If a user is confused about an exercise or wants to learn more, they can talk to a physiotherapist voice assistant in real-time.",
        image: project8Image,
        languages: [
            "TypeScript",
            "Next",
            "React",
            "NextAuth",
            "Tensorflow",
            "OpenAI",
        ],
        link: "https://github.com/iWolf22/ignition-hacks-2024",
        short: "AI Physiotherapist",
        title: "Mobility+",
    },
    {
        description:
            'A frontend technical challenge where I was tasked with creating an events catalogue for a hypothetical hackathon called "Hackathon Global Inc." The events catalogue includes a search and filter feature as well as a sign in page that gives users access to authentication gated events.',
        image: project7Image,
        languages: ["TypeScript", "React", "MaterialUI", "Axios", "CSS"],
        link: "https://github.com/iWolf22/hack-the-north-2024-frontend-developer-challenge",
        short: "For a Hypothetical Hackathon",
        title: "Events Catalogue",
    },
];

export default function SwiperComponent() {
    const [modal, setModal] = useState(-1);

    const { theme } = useContext(CreateThemeContext);
    const swiperRef: any = useRef(null);

    return (
        <div>
            <Modal
                onClose={() => {
                    if (swiperRef.current) {
                        swiperRef.current.swiper.autoplay.start();
                    }
                    setModal(-1);
                }}
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
                        <div className="p-5">
                            <Image
                                alt="Image"
                                placeholder="blur"
                                src={projectList[modal]?.image}
                                width={512}
                            />
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                                <p className="font-bold text-stone-900 dark:text-stone-100">
                                    {projectList[modal]?.title}
                                </p>
                                <p className="text-stone-600 dark:text-stone-400">
                                    |
                                </p>
                                <p className="text-stone-600 dark:text-stone-400">
                                    {projectList[modal]?.short}
                                </p>
                                <a
                                    href={projectList[modal]?.link}
                                    target="_blank"
                                >
                                    <GitHubIcon className="relative bottom-[2px] text-stone-600 transition-colors duration-150 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100" />
                                </a>
                            </div>
                            <p className="w-[512px] pt-1 text-sm">
                                {projectList[modal]?.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-3">
                                {projectList[modal]?.languages.map(
                                    (language, i) => {
                                        return (
                                            <Chip
                                                key={i}
                                                label={language}
                                                size="small"
                                                variant="filled"
                                            />
                                        );
                                    }
                                )}
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
                freeMode={true}
                modules={[FreeMode, Autoplay]}
                ref={swiperRef}
                slidesPerView="auto"
                spaceBetween={8}
            >
                {projectList.map(({ image, short, title }, i) => {
                    return (
                        <SwiperSlide
                            className="!w-[384px] cursor-pointer sm:!w-[512px]"
                            key={i}
                            onClick={() => {
                                if (swiperRef.current) {
                                    swiperRef.current.swiper.autoplay.stop();
                                }
                                setModal(i);
                            }}
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
