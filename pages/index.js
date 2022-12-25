import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.templo.com" />

                {/* Meta, Title, SEO & Theme*/}
                <title>Templo</title>
                {/* Description should have max 160 characters */}
                <meta
                    name="description"
                    content="This is a basic template to an awesome react application. It is fast, clean, and awe inspiring. That's just my opinion though. "
                />
                <meta
                    name="keywords"
                    content="react app template, template, website template, awesome template, react template, seo template react"
                />

                {/* link manifest.json */}
                <link rel="manifest" href="/manifest.json" />
                {/* apple icon */}
                <link rel="apple-touch-icon" href="/logo.png"></link>
                {/* this sets the color of url bar */}
                <meta name="theme-color" content="#fff" />

                {/* Social Media Display */}
                <meta property="og:title" content="An Engaging Title Here" />
                <meta property="og:description" content="An engaging, entertaining website description." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.template.com" />
                <meta property="og:image" content="/images/social.jpg" />
                <meta property="og:image:secure_url" content="/images/social.jpg" />

                {/* Preload Images */}
                <link rel="preload" href="/images/temploLogo.png" as="image" />

                {/* Stylesheet is loaded in the index.js */}

                {/* Add Google Analytics tag here */}
            </Head>
            <div style={{ minHeight: "1000px" }}></div>
        </>
    );
}
