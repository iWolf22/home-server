import { helvetica } from "@/app/layout";
import AnimatedBackground from "@/components/core/animated-background";
import MagneticGSAP from "@/components/core/gsap";
import DynamicThemeIcon from "@/components/custom/DynamicThemeIcon";
import ThemeUpdateButton from "@/components/custom/ThemeUpdateButton";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Marquee from "@/components/magicui/marquee";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/material";
import Image from "next/image";

const divIconsClass =
    "rounded-full md:p-1 py-1 hover:cursor-pointer text-stone-600 transition-all duration-150 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-50";

export default function Home() {
    const TABS = ["Home", "Work", "Projects", "Blog"];

    return (
        <Container>
            <div className="flex items-start justify-between pt-4 md:pt-8">
                <div className="flex justify-center">
                    <AnimatedBackground
                        className="rounded bg-stone-200 dark:bg-stone-800"
                        defaultValue={TABS[0]}
                        enableHover
                        transition={{
                            bounce: 0,
                            duration: 0.3,
                            type: "spring",
                        }}
                    >
                        {TABS.map((tab, index) => (
                            <button
                                className={
                                    (index === 0
                                        ? "mr-0.5 sm:pr-2"
                                        : "mx-0.5 sm:mx-2") +
                                    " rounded-lg px-1 py-0.5 text-stone-600 transition-colors duration-150 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-50 sm:px-2"
                                }
                                data-id={tab}
                                key={index}
                                type="button"
                            >
                                {tab}
                            </button>
                        ))}
                    </AnimatedBackground>
                </div>
                <div className="relative bottom-[15px]">
                    <div className="flex">
                        <ThemeUpdateButton className={divIconsClass}>
                            <MagneticGSAP>
                                <svg
                                    height="48"
                                    viewBox="0 0 31.5 58"
                                    width="48"
                                >
                                    <DynamicThemeIcon />
                                </svg>
                            </MagneticGSAP>
                        </ThemeUpdateButton>
                        <a
                            className={divIconsClass}
                            href="https://www.linkedin.com/in/joshua-dierickse-360741207/"
                            target="_blank"
                        >
                            <MagneticGSAP>
                                <svg
                                    height="48"
                                    viewBox="0 0 31.5 58"
                                    width="48"
                                >
                                    <LinkedInIcon />
                                </svg>
                            </MagneticGSAP>
                        </a>
                        <a
                            className={divIconsClass}
                            href="https://github.com/iWolf22"
                            target="_blank"
                        >
                            <MagneticGSAP>
                                <svg
                                    height="48"
                                    viewBox="0 0 31.5 58"
                                    width="48"
                                >
                                    <GitHubIcon />
                                </svg>
                            </MagneticGSAP>
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-11">
                <div className="h-16 w-full"></div>
                <div className="line-bt col-span-3 h-16 w-full"></div>
                <div className="line-bt col-span-3 h-16 w-full"></div>
                <div className="line-bt col-span-3 h-16 w-full"></div>
                <div className="line-bt h-16 w-full"></div>
                <div className="line-rl h-16 w-full"></div>
                <div
                    className={
                        "col-span-9 w-full border-[1px] border-dashed border-stone-300 p-8 text-center text-6xl font-black dark:border-stone-700 " +
                        helvetica.style.fontFamily
                    }
                    style={{ borderWidth: "1px 1px 0px 1px" }}
                >
                    <AnimatedShinyText>
                        Hi, I am Joshua Dierickse
                        <span
                            className={
                                "block w-full pt-2 font-sans text-2xl font-black " +
                                helvetica.style.fontFamily
                            }
                        >
                            Full Stack, DevOps, and Linux Enthusiast
                        </span>
                    </AnimatedShinyText>
                </div>
                <div className="line-lr h-16 w-full"></div>
                <div className="line-rl h-16 w-full"></div>
                <div className="col-span-9 w-full border-[1px] border-dashed border-stone-300 dark:border-stone-700">
                    <Marquee
                        className="p-8 [--duration:20s]"
                        pauseOnHover
                        reverse
                    >
                        {[
                            "css.svg",
                            "html.svg",
                            "javascript.svg",
                            "typescript.svg",
                            "python.svg",
                            "java.png",
                            "c.png",
                            "cpp.png",
                            "bash.png",
                            "react.png",
                            "redux.png",
                        ].map((image, i) => (
                            <div key={i}>
                                <Image
                                    src={"/icons/" + image}
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                    className="grayscale transition-all duration-150 hover:grayscale-0"
                                ></Image>
                            </div>
                        ))}
                    </Marquee>
                </div>
                <div className="line-lr h-16 w-full"></div>
            </div>
        </Container>
    );
}
