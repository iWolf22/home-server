import { helvetica } from "@/app/layout";
import AnimatedBackground from "@/components/core/animated-background";
import MagneticGSAP from "@/components/core/gsap";
import DynamicThemeIcon from "@/components/custom/DynamicThemeIcon";
import ThemeUpdateButton from "@/components/custom/ThemeUpdateButton";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Marquee from "@/components/magicui/marquee";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Tooltip } from "@mui/material";
import Image from "next/image";

const divIconsClass =
    "rounded-full md:p-1 py-1 hover:cursor-pointer text-stone-600 transition-all duration-150 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-50";

const techImages = [
    { image: "linux.png" },
    { image: "ubuntu.png", alt: "Ubuntu Server" },
    { image: "docker.png" },
    { image: "kubernetes.png" },
    { image: "c.png" },
    { image: "cpp.png", alt: "C++" },
    { image: "java.png" },
    { image: "python.png" },
    { image: "html.png", alt: "HTML" },
    { image: "css.png", alt: "CSS" },
    { image: "javascript.png", alt: "JavaScript" },
    { image: "typescript.png", alt: "TypeScript" },
    { image: "react.png", alt: "ReactJS" },
    { image: "redux.png" },
    { image: "next.png", alt: "NextJS" },
    { image: "tailwind.png", alt: "TailWindCSS" },
    { image: "prisma.png" },
    { image: "node.png", alt: "NodeJS" },
    { image: "express.png", alt: "ExpressJS" },
    { image: "socket-io.png", alt: "Socket.IO" },
    { image: "dotenv.png", alt: "Dotenv" },
    { image: "jquery.png", alt: "jQuery" },
    { image: "flask.png" },
    { image: "postgresql.png", alt: "PostgreSQL" },
    { image: "mongodb.png", alt: "MongoDB" },
    { image: "postman.png" },
    { image: "vscode.png", alt: "VS Code" },
    { image: "vim.png" },
    { image: "bash.png" },
    { image: "git.png" },
    { image: "material-ui.png", alt: "Material UI" },
    { image: "bootstrap.png" },
];

const TABS = ["Home", "Work", "Projects", "Blog"];

export default async function Home() {
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
            <div className="mt-6 grid grid-cols-11">
                <div className="h-16 w-full"></div>
                <div className="line-bt col-span-3 h-16 w-full"></div>
                <div className="line-bt col-span-3 h-16 w-full"></div>
                <div className="line-bt col-span-3 h-16 w-full"></div>
                <div className="line-bt relative right-[1px] h-16 w-full"></div>
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
                        className="p-8 [--duration:80s]"
                        pauseOnHover
                        reverse
                    >
                        {techImages.map(async ({ image, alt }, i) => {
                            const imageBlur = await fetch(
                                "http://localhost:3000//icons/out/" + image
                            ).then(async (res) => {
                                return Buffer.from(
                                    await res.arrayBuffer()
                                ).toString("base64");
                            });

                            const altText =
                                alt ||
                                image.charAt(0).toUpperCase() +
                                    image.slice(1).replace(".png", "");

                            return (
                                <Tooltip
                                    key={i}
                                    title={altText}
                                    placement="top"
                                    style={{ pointerEvents: "auto" }}
                                >
                                    <Image
                                        src={"/icons/out/" + image}
                                        width={50}
                                        height={30}
                                        alt={altText}
                                        blurDataURL={`data:image/png;base64,${imageBlur}`}
                                        className={
                                            "grayscale transition-all duration-150 hover:grayscale-0 dark:invert dark:hover:invert-0 " +
                                            ([
                                                "next.png",
                                                "express.png",
                                                "flask.png",
                                            ].includes(image)
                                                ? " dark:!invert"
                                                : "")
                                        }
                                    ></Image>
                                </Tooltip>
                            );
                        })}
                    </Marquee>
                </div>
                <div className="line-lr h-16 w-full"></div>
                <div className="line-rl relative bottom-[1px] h-16 w-full"></div>
                <div className="line-tb col-span-3 h-16"></div>
                <div className="line-tb col-span-3 h-16"></div>
                <div className="line-tb col-span-3 h-16"></div>
                <div className="line-lr relative bottom-[1px] right-[1px] col-span-1 h-16 w-16">
                    <div className="line-tb h-16"></div>
                </div>
            </div>
        </Container>
    );
}
