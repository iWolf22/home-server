import AnimatedBackground from "@/components/core/animated-background";
import MagneticGSAP from "@/components/core/gsap";
import DynamicThemeIcon from "@/components/custom/DynamicThemeIcon";
import ThemeUpdateButton from "@/components/custom/ThemeUpdateButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container } from "@mui/material";

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
                                className="mx-0.5 rounded-lg px-1 py-0.5 text-stone-600 transition-colors duration-150 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-50 sm:mx-2 sm:px-2"
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
        </Container>
    );
}
