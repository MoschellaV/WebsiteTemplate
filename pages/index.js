import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Test from "./components/test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.company.com" />

                {/* Meta, Title, SEO */}
                <title>Template</title>
                {/* Description should have max 160 characters */}
                <meta
                    name="description"
                    content="This is a basic template to an awesome react application. It is fast, clean, and awe inspiring. That's just my opinion though. "
                />
                <meta
                    name="keywords"
                    content="react app template, template, website template, awesome template, react template, seo template react"
                />

                {/* Social Media Display */}
                <meta property="og:title" content="An Engaging Title Here" />
                <meta property="og:description" content="An engaging, entertaining website description." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.yourwonderfulsite.com" />
                <meta property="og:image" content="/images/social.jpg" />
                <meta property="og:image:secure_url" content="/images/social.jpg" />

                {/* Favicons, Theme */}
                {/* Use https://realfavicongenerator.net/ to generate and download your favicons */}
                <meta name="theme-color" content="#ffffff" />

                {/* Stylesheet is loaded in the index.js */}

                {/* Add Google Analytics tag here */}
            </Head>
            <Test />
        </>
    );
}
