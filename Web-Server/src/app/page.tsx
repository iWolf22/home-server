import AnimatedBeam from "@/components/custom/AnimationBeam";
import BezierCurve from "@/components/custom/BezierCurve";
import SwiperComponent from "@/components/custom/SwiperComponent";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Marquee from "@/components/magicui/marquee";
import ShineBorder from "@/components/magicui/shine-border";
import { Glow, GlowCapture } from "@/components/react-glow";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Container, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
                <p>
                    • Developed a new full-stack web portal and user database
                    using <b>TypeScript</b>, <b>NextJS</b>, and{" "}
                    <b>PostgreSQL</b>; decreasing deployment costs from
                    <b>$120/month</b> to <b>$8/month</b>.
                </p>
                <p>
                    • Migrated over <b>6,000+ users</b> from the old MySQL
                    database to the new PostgreSQL database.
                </p>
                <p>
                    • Engineered a <b>RAG AI</b> customer support chatbot on a{" "}
                    <b>Flask</b> backend with over 2 million words of context by
                    leveraging <b>GPT-4o mini</b>, <b>LangChain</b>, and a
                    ChromaDB vector database.
                </p>
                <p>
                    • Engineered a <b>RAG AI</b> customer support chatbot on a{" "}
                    <b>Flask</b> backend with over 2 million words of context by
                    leveraging <b>GPT-4o mini</b>, <b>LangChain</b>, and a
                    ChromaDB vector database.
                </p>
                <p>
                    • Implemented an automated email verification system,
                    programmatically sending emails with <b>AWS SES</b>.
                </p>
                <p>
                    • Created a customer support messaging system using an{" "}
                    <b>Express</b> backend with <b>Socket.IO</b> for real-time
                    bidirectional low-latency communication.
                </p>
                <p>
                    • <b>Dockerized</b> the NextJS, Express, and Flask
                    applications; worked locally with <b>docker-compose</b> and
                    deployed to the cloud on a <b>Linux VPS</b> using{" "}
                    <b>Bash</b> scripts to automate <b>CI/CD</b>.
                </p>
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
                <p>
                    • Developed backend API endpoints in <b>NextJS</b> to upload
                    images to a Vercel Blob (similar to an <b>AWS S3 bucket</b>
                    ).
                </p>
                <p>
                    • Stored user data in a <b>PostgreSQL</b> database,
                    leveraging <b>Prisma ORM</b> for improved development speed.
                </p>
                <p>
                    • Collaborated with a small team of developers to coordinate
                    our project&apos;s development.
                </p>
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
                <p>
                    <b>GPA:</b> 3.8
                </p>
                <p>
                    <b>Activities and societies:</b> Computer Science Club, Math
                    Society, Hockey Intramurals Referee, Volleyball
                    ClubActivities
                </p>
                <p className="pt-4">
                    • University of Waterloo President&apos;s Scholarship of
                    Distinction
                </p>
                <p>
                    • Professional Institute Legacy Foundation Scholarship Award
                </p>
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
                <p>
                    <b>Grade:</b> 98.33%
                </p>
                <p>
                    <b>Leadership:</b> Robotics Club Executive, Chess Club
                    Executive
                </p>
                <p>
                    <b>Sports:</b> Cross Country, Track and Field, Ultimate
                    Frisbee, Varsity Hockey
                </p>
                <p>
                    <b>Clubs:</b> Astronomy Club, Computer Science Club, Debate
                    Club, DECA, Fed Prov
                </p>
            </div>
        ),
        image: "wci.png",
        location: "Waterloo, ON",
        role: "High School Diploma",
        time: "09/2019 - 06/2023",
    },
];

export default async function Home() {
    return (
        <div>
            <Container>
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
                            <span className="block w-full pt-2 font-sans text-2xl font-black">
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
                                        disableInteractive
                                        key={i}
                                        placement="top"
                                        style={{ pointerEvents: "auto" }}
                                        title={altText}
                                    >
                                        <Image
                                            alt={altText}
                                            className={
                                                "px-1 grayscale transition-all duration-150 hover:grayscale-0 dark:invert dark:hover:invert-0 " +
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
                                    href="/blog"
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
                                            src={"/other/wireguard.png"}
                                            width={100}
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </ShineBorder>
                </div>
                <div className="relative top-[132px]">
                    <BezierCurve />
                </div>
            </Container>
            <GlowCapture className="absolute">
                <div className="py-48">
                    <Container>
                        {[
                            { header: "Education", list: schoolList },
                            { header: "Experience", list: workList },
                        ].map(({ header, list }, j) => {
                            return (
                                <div key={j}>
                                    <p
                                        className="mb-1 mt-8 text-2xl font-extrabold"
                                        id={header.toLowerCase()}
                                    >
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
            <Container className="mt-[-94px]">
                <p className="mb-1 text-2xl font-extrabold" id="projects">
                    Projects
                </p>
                <SwiperComponent />
            </Container>
        </div>
    );
}
