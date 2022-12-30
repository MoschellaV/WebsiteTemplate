import React, { useState, useEffect } from "react";
import { Tabs, SimpleGrid } from "@mantine/core";
import { Prism } from "@mantine/prism";

import styles from "../styles/FeaturesTabs.module.css";
import Image from "next/image";

import { IconBrandHtml5, IconBrandCss3, IconBrandJavascript } from "@tabler/icons";

const demoCodeHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>Google Rocks</title>
  </head>
  <body>
    <h1>Why google is the best</h1>
    <p>
      <a href="https://www.google.com"> Google is awesome!
    </p>
  </body>
</html>`;
const demoCodeCss = `h1 {
    font-size: 60px;
    text-align: center;
  }
  
  p,
  li {
    font-size: 16px;
    line-height: 2;
    letter-spacing: 1px;
  }`;
const demoCodeJs = `function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo").innerHTML = toCelsius;`;

const largeDisplay = () => {
    return (
        <section className={styles.tabsComponent}>
            <h3 className={styles.header}>
                Dream big, with <span className={styles.highlight}>infinite</span> possibilites
            </h3>

            {/* PANELS */}

            <Tabs color="orange" keepMounted={false} defaultValue="creation">
                <Tabs.Panel value="creation" className={styles.contentPanel}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image1}
                            fill
                            src="/images/tabs1.jpg"
                            alt="dynamic website template editor"
                        />
                    </div>
                </Tabs.Panel>

                <Tabs.Panel value="code" className={styles.contentPanel}>
                    <Tabs className={styles.codingComponent} defaultValue="html" color="gray" variant="outline">
                        <Tabs.List color="cyan">
                            <Tabs.Tab
                                className={styles.codeTab}
                                value="html"
                                icon={<IconBrandHtml5 color={"#e34c26"} />}
                            >
                                index.html
                            </Tabs.Tab>
                            <Tabs.Tab className={styles.codeTab} value="css" icon={<IconBrandCss3 color={"#264de4"} />}>
                                styles.css
                            </Tabs.Tab>
                            <Tabs.Tab
                                className={styles.codeTab}
                                value="js"
                                icon={<IconBrandJavascript color={"#F0DB4F"} />}
                            >
                                main.js
                            </Tabs.Tab>
                        </Tabs.List>

                        <Prism.Panel language="html" value="html" noCopy>
                            {demoCodeHTML}
                        </Prism.Panel>

                        <Prism.Panel language="css" value="css" noCopy>
                            {demoCodeCss}
                        </Prism.Panel>
                        <Prism.Panel language="js" value="js" noCopy>
                            {demoCodeJs}
                        </Prism.Panel>
                    </Tabs>
                </Tabs.Panel>

                <Tabs.Panel value="hosting" className={styles.contentPanel}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image2}
                            fill
                            src="/images/tabs3.png"
                            alt="cloud branching to multiple hosting features"
                        />
                    </div>
                </Tabs.Panel>

                {/* TABS */}

                <Tabs.List grow position="apart">
                    <Tabs.Tab value="creation">Unlimited Creation</Tabs.Tab>
                    <Tabs.Tab value="code">Write Custom Code</Tabs.Tab>
                    <Tabs.Tab value="hosting">Reliable and Scalable Hosting</Tabs.Tab>
                </Tabs.List>
            </Tabs>

            {/* Info Under Tabs */}
            <SimpleGrid
                cols={3}
                spacing="lg"
                breakpoints={[
                    { maxWidth: 980, cols: 3, spacing: "md" },
                    { maxWidth: 755, cols: 2, spacing: "sm" },
                ]}
            >
                <div>
                    <p className={styles.tabsText}>
                        Praesent vitae nisl ac velit sagittis ornare. Proin in quam dolor. Duis porttitor erat enim,
                        quis ultricies purus accumsan ut. Aenean placerat malesuada felis in viverra.{" "}
                    </p>
                </div>
                <div>
                    <p className={styles.tabsText}>
                        Pellentesque suscipit aliquam dapibus. Mauris ut mi id quam aliquet tempor. Integer efficitur
                        quis nisi sit amet congue.
                    </p>
                </div>
                <div>
                    <p className={styles.tabsText}>
                        Vestibulum ut ante dolor. Morbi est lacus, bibendum sed tempor sed, euismod ut neque. Aliquam
                        eget leo tortor. Quisque vel interdum justo.
                    </p>
                </div>
            </SimpleGrid>
        </section>
    );
};

const smallerDisplay = () => {
    return (
        <section className={styles.tabsComponentSM}>
            <SimpleGrid cols={1}>
                <h3 className={styles.header}>
                    Dream big, with <span className={styles.highlight}>infinite</span> possibilites
                </h3>
                <div>
                    <hr />
                    <h5 className={styles.subHeader}>Unlimted Creation</h5>
                    <p className={styles.tabsText}>
                        Praesent vitae nisl ac velit sagittis ornare. Proin in quam dolor. Duis porttitor erat enim,
                        quis ultricies purus accumsan ut. Aenean placerat malesuada felis in viverra.{" "}
                    </p>
                </div>
                <div>
                    {" "}
                    <hr />
                    <h5 className={styles.subHeader}>Write Custom Code</h5>
                    <p className={styles.tabsText}>
                        Pellentesque suscipit aliquam dapibus. Mauris ut mi id quam aliquet tempor. Integer efficitur
                        quis nisi sit amet congue.
                    </p>
                </div>
                <div>
                    <hr />
                    <h5 className={styles.subHeader}>Reliable and Scalable Hosting</h5>
                    <p className={styles.tabsText}>
                        Vestibulum ut ante dolor. Morbi est lacus, bibendum sed tempor sed, euismod ut neque. Aliquam
                        eget leo tortor. Quisque vel interdum justo.
                    </p>
                    <hr />
                </div>
            </SimpleGrid>
        </section>
    );
};

const FeaturesTabs = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(function mount() {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

        setWindowWidth(window.innerWidth);

        return function unMount() {
            window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
        };
    });

    return <>{windowWidth > 754 ? largeDisplay() : smallerDisplay()}</>;
};

export default FeaturesTabs;
