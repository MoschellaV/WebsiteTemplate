import React, { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

import { Grid } from "@mantine/core";
import button1 from "./reusableComponents/button1";

const Hero = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const { classes } = button1();

    useEffect(function mount() {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

        setWindowWidth(window.innerWidth);

        return function unMount() {
            window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
        };
    });

    return (
        <section className={styles.heroWrapper}>
            <Grid columns={24} gutter="md">
                <Grid.Col md={13}>
                    <div className={styles.heroWrapperLeft}>
                        <h1 className={styles.heroHeaderText}>
                            The
                            <span className={styles.highlight}> best templates</span> you'll find on the web.
                        </h1>
                        <p className={styles.heroHeaderSubText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat turpis id arcu
                            tincidunt dictum. In condimentum mauris ac tincidunt.
                        </p>
                        <div>
                            <button type="button" className={`${classes.button} ${styles.viewMoreButton}`}>
                                View Templates
                            </button>
                        </div>
                    </div>
                </Grid.Col>
                {windowWidth > 991 ? (
                    <Grid.Col md={11} sx={{ position: "relative" }}>
                        <div className={styles.imageContainer}>
                            <div className={styles.image1Box}>
                                <Image
                                    fill
                                    className={`${styles.templateImages}`}
                                    src="/images/template1.jpg"
                                    alt="template one"
                                />
                            </div>
                            <div className={styles.image2Box}>
                                <Image
                                    fill
                                    className={`${styles.templateImages}`}
                                    src="/images/template2.jpg"
                                    alt="template one"
                                />
                            </div>
                            <div className={styles.image3Box}>
                                <Image
                                    fill
                                    className={`${styles.templateImages}`}
                                    src="/images/template3.jpg"
                                    alt="template one"
                                />
                            </div>{" "}
                        </div>
                    </Grid.Col>
                ) : (
                    ""
                )}
            </Grid>
        </section>
    );
};
export default Hero;
