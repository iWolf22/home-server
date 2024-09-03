import { helvetica } from "@/app/layout";
import AnimatedBackground from "@/components/core/animated-background";
import MagneticGSAP from "@/components/core/gsap";
import AnimatedBeam from "@/components/custom/AnimationBeam";
import BezierCurve from "@/components/custom/BezierCurve";
import DropDown from "@/components/custom/DropDown";
import DynamicThemeIcon from "@/components/custom/DynamicThemeIcon";
import SwiperComponent from "@/components/custom/SwiperComponent";
import ThemeUpdateButton from "@/components/custom/ThemeUpdateButton";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Marquee from "@/components/magicui/marquee";
import ShineBorder from "@/components/magicui/shine-border";
import { Glow, GlowCapture } from "@/components/react-glow";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const divIconsClass =
    "rounded-full md:p-1 py-1 hover:cursor-pointer text-stone-600 transition-all duration-150 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-50";

const techImages = [
    { image: "linux.png" },
    { alt: "Ubuntu Server", image: "ubuntu.png" },
    { image: "docker.png" },
    { image: "kubernetes.png" },
    { image: "c.png" },
    { alt: "C++", image: "cpp.png" },
    { image: "java.png" },
    { image: "python.png" },
    { alt: "HTML", image: "html.png" },
    { alt: "CSS", image: "css.png" },
    { alt: "JavaScript", image: "javascript.png" },
    { alt: "TypeScript", image: "typescript.png" },
    { alt: "ReactJS", image: "react.png" },
    { image: "redux.png" },
    { alt: "NextJS", image: "next.png" },
    { alt: "TailwindCSS", image: "tailwind.png" },
    { image: "prisma.png" },
    { alt: "NodeJS", image: "node.png" },
    { alt: "ExpressJS", image: "express.png" },
    { alt: "Socket.IO", image: "socket-io.png" },
    { alt: "Dotenv", image: "dotenv.png" },
    { alt: "jQuery", image: "jquery.png" },
    { image: "flask.png" },
    { alt: "PostgreSQL", image: "postgresql.png" },
    { alt: "MongoDB", image: "mongodb.png" },
    { image: "postman.png" },
    { alt: "VS Code", image: "vscode.png" },
    { image: "vim.png" },
    { image: "bash.png" },
    { image: "git.png" },
    { alt: "Material UI", image: "material-ui.png" },
    { image: "bootstrap.png" },
];

const workList = [
    {
        company: "SigmaXL Inc.",
        description: (
            <div>
                <p>• TBW</p>
            </div>
        ),
        image: "sigmaxl.png",
        location: "Kitchener, ON",
        role: "Software Developer",
        time: "05/2024 - 08/2024",
    },
    {
        company: "Art Vault",
        description: (
            <div>
                <p>• TBW</p>
            </div>
        ),
        image: "art-vault.jpg",
        location: "Remote",
        role: "Backend Developer",
        time: "04/2024 - 06/2024",
    },
    {
        company: "Venuiti Solutions Inc.",
        description: (
            <div>
                <p>
                    • Updated documentation on launching the T6 backend servers
                    to improve the <b>efficiency of onboarding</b>.
                </p>
                <p>
                    • Learned the basics of <b>computer networking</b> (IP, DNS,
                    HTTPS) as well as the companies backend structure (Spring
                    Boot, Gradle, Maven).
                </p>
            </div>
        ),
        image: "venuiti.png",
        location: "Waterloo, ON",
        role: "Software Intern",
        time: "08/2023",
    },
    {
        company: "HomeworkHub Tutoring",
        description: (
            <div>
                <p>
                    • Taught a series of lectures regarding the fundamentals of{" "}
                    <b>Python</b> to students from grades 4 to 8 over a virtual
                    setting.
                </p>
                <p>
                    • Delivered comprehensive PowerPoint lessons as well as
                    developed in-class and take-home assignments to{" "}
                    <b>solidify student understanding</b>.
                </p>
            </div>
        ),
        image: "homeworkhub.png",
        location: "Waterloo, ON",
        role: "Python Programming Instructor",
        time: "06/2023 - 08/2023",
    },
    {
        company: "Waterloo Collegiate Institute Robotics Club",
        description: (
            <div>
                <p>
                    • Led weekly lessons, teaching students how to build{" "}
                    <b>Arduino circuits</b> with various components such as{" "}
                    <b>LCD displays, ultrasonic sensors, piezo speakers</b>,
                    etc, and then taught students how to code their creations
                    with <b>C++</b>.
                </p>
                <p>
                    • Instructed club attendees through various mediums
                    including PowerPoints, hands-on circuits, and virtual
                    simulations.
                </p>
            </div>
        ),
        image: "wci.png",
        location: "Waterloo, ON",
        role: "Club Executive",
        time: "09/2022 - 06/2023",
    },
];

const schoolList = [
    {
        company: "University of Waterloo",
        description: (
            <div>
                <p>• TBW</p>
            </div>
        ),
        image: "uwaterloo.svg",
        location: "Waterloo, ON",
        role: "Computer Science",
        time: "09/2023 - 04/2028",
    },
    {
        company: "Waterloo Collegiate Institute",
        description: (
            <div>
                <p>• TBW</p>
            </div>
        ),
        image: "wci.png",
        location: "Waterloo, ON",
        role: "High School Diploma",
        time: "09/2019 - 06/2023",
    },
];

const TABS = ["Home", "Work", "Projects", "Blog"];

export default async function Home() {
    return (
        <div>
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
                        className="col-span-9 w-full border-[1px] border-dashed border-stone-300 p-8 text-center text-6xl font-black dark:border-stone-700"
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
                            className="p-8 [--duration:100s]"
                            pauseOnHover
                            reverse
                        >
                            {techImages.map(async ({ alt, image }, i) => {
                                const altText =
                                    alt ||
                                    image.charAt(0).toUpperCase() +
                                        image.slice(1).replace(".png", "");

                                return (
                                    <Tooltip
                                        key={i}
                                        placement="top"
                                        style={{ pointerEvents: "auto" }}
                                        title={altText}
                                    >
                                        <Image
                                            alt={altText}
                                            className={
                                                "grayscale transition-all duration-150 hover:grayscale-0 dark:invert dark:hover:invert-0 " +
                                                ([
                                                    "express.png",
                                                    "flask.png",
                                                    "next.png",
                                                ].includes(image)
                                                    ? " dark:!invert"
                                                    : "") +
                                                (image === "linux.png"
                                                    ? "!invert-0"
                                                    : "")
                                            }
                                            height={30}
                                            src={"/icons/out/" + image}
                                            width={50}
                                        />
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
                    <div className="line-lr relative bottom-[1px] right-[1px] col-span-1 h-16 w-full">
                        <div className="line-tb h-16 w-full"></div>
                    </div>
                </div>
                <div className="mt-16 flex justify-center">
                    <ShineBorder
                        className="rounded-lg border"
                        color={["#a8a29e", "#57534e"]}
                    >
                        <div className="max-w-[512px] p-4">
                            <p className="text-center text-stone-900 dark:text-stone-100">
                                Click{" "}
                                <Link
                                    className="group text-stone-600 decoration-1 hover:text-stone-700 hover:underline dark:text-stone-400 dark:hover:text-stone-300"
                                    href="www.google.com"
                                >
                                    <span>here</span>
                                    <span className="relative bottom-[1px] left-[1px] group-hover:bottom-[2px] group-hover:left-[2px]">
                                        <ArrowOutwardIcon className="text-base" />
                                    </span>
                                </Link>{" "}
                                to check out out how I host this website on a
                                home server using free and open source software!
                            </p>
                            <div className="flex justify-center px-6 pb-2 pt-6">
                                <AnimatedBeam
                                    image1={
                                        <Image
                                            alt="Linux"
                                            className="grayscale transition-all duration-150 hover:grayscale-0"
                                            height={100}
                                            src={"/icons/linux.png"}
                                            width={100}
                                        />
                                    }
                                    image2={
                                        <Image
                                            alt="Wireguard"
                                            className="grayscale transition-all duration-150 hover:grayscale-0 dark:invert dark:hover:invert-0"
                                            height={100}
                                            src={"/icons/wireguard.png"}
                                            width={100}
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </ShineBorder>
                </div>
                <div className="mt-24">
                    <BezierCurve />
                </div>
            </Container>

            <GlowCapture>
                <div className="py-48">
                    <Container>
                        {[
                            { header: "Education", list: schoolList },
                            { header: "Experience", list: workList },
                        ].map(({ header, list }, j) => {
                            return (
                                <div key={j}>
                                    <p className="mb-1 mt-8 text-2xl font-extrabold">
                                        {header}
                                    </p>
                                    {list.map(
                                        (
                                            {
                                                company,
                                                description,
                                                image,
                                                location,
                                                role,
                                                time,
                                            },
                                            i
                                        ) => {
                                            return (
                                                <div key={i}>
                                                    <Glow
                                                        company={company}
                                                        description={
                                                            description
                                                        }
                                                        i={i}
                                                        image={image}
                                                        length={list.length - 1}
                                                        location={location}
                                                        role={role}
                                                        time={time}
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            );
                        })}
                    </Container>
                </div>
            </GlowCapture>
            <Container>
                <p className="mb-1 text-2xl font-extrabold">Projects</p>
                <SwiperComponent />
            </Container>
        </div>
    );
}
