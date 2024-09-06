import { Container } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
};

export default function Blog() {
    return (
        <Container>
            <p className="mt-8 text-2xl font-extrabold text-stone-900 dark:text-stone-100">
                Blog
            </p>
            <p className="mt-2 text-stone-900 dark:text-stone-100">
                Coming soon :)
            </p>
        </Container>
    );
}
