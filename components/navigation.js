import styles from "../styles/Navigation.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import button1 from "./reusableComponents/button1";
import { Burger } from "@mantine/core";

const Navigation = ({ roboto_Condensed }) => {
    const [scrollDistance, setScrollDistance] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [opened, setOpened] = useState(false);
    const { classes } = button1();

    // opening and closing the side nav
    const handleSideNav = () => {
        setOpened(!opened);
    };

    // useEffect hook is used here so to prevent the event listener from
    // running on the server -- since useEffect only runs at the rendering phase
    useEffect(function mount() {
        const onScroll = () => {
            if (window.scrollY >= 40) {
                setScrollDistance(true);
            } else {
                setScrollDistance(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

        setWindowWidth(window.innerWidth);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
        };
    });

    if (windowWidth > 768) {
        return (
            <nav id="nav" className={`${styles.nav} ${scrollDistance ? styles.active : ""}`}>
                <Link href="/">
                    <h2 className={`${roboto_Condensed.className} ${styles.brandName}`}>Templo</h2>
                </Link>
                <div>
                    <Link className={styles.linkAway} href="/about">
                        About
                    </Link>
                    <Link className={styles.linkAway} href="/about">
                        Services
                    </Link>
                    <Link className={styles.linkAway} href="/shop">
                        Our Team
                    </Link>
                    {scrollDistance ? (
                        <button type="button" className={classes.blackButton}>
                            Contact
                        </button>
                    ) : (
                        <button type="button" className={classes.button}>
                            Contact
                        </button>
                    )}
                </div>
            </nav>
        );
    } else {
        return (
            <>
                <nav>
                    <div className={`${styles.sideNavHeader} ${scrollDistance ? styles.active : ""} `}>
                        <div width="25" height="25">
                            <Burger opened={opened} onClick={handleSideNav} />
                        </div>
                        <Link href="/">
                            <h2 className={`${roboto_Condensed.className} ${styles.brandName}`}>Templo</h2>
                        </Link>
                    </div>

                    <div id="sideNav" className={`${styles.sideNav} ${opened ? styles.open : ""}`}>
                        <div className={styles.linkContainer}>
                            <Link className={styles.linkAway} href="/about">
                                About
                            </Link>
                            <Link className={styles.linkAway} href="/about">
                                Services
                            </Link>
                            <Link className={styles.linkAway} href="/shop">
                                Our Team
                            </Link>
                            <Link className={styles.linkAway} href="/shop">
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
};

export default Navigation;
