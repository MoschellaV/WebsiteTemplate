import styles from "../styles/Navigation.module.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import button1 from "./reusableComponents/button1";
import { Burger } from "@mantine/core";

const Navigation = () => {
    const [scrollDistance, setScrollDistance] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [opened, setOpened] = useState(false);
    const title = opened ? "Close navigation" : "Open navigation";
    const { classes } = button1();

    // changing background of navbar when user scrolls lower
    const changeNavBackground = () => {
        document.getElementById("nav").style.backgroundColor = "#000";
    };

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
            <div id="nav" className={`${styles.nav} ${scrollDistance ? styles.active : ""}`}>
                <Link className={styles.link} href="/">
                    <img src="/images/temploLogo.png" height="36" width="150" alt="BestTemplate" />
                </Link>
                <div>
                    <Link className={`${styles.link} ${styles.away}`} href="/about">
                        About
                    </Link>
                    <Link className={`${styles.link} ${styles.away}`} href="/about">
                        Services
                    </Link>
                    <Link className={`${styles.link} ${styles.away}`} href="/shop">
                        Our Team
                    </Link>
                    <button type="button" className={classes.button}>
                        Contact
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className={`${styles.sideNavHeader} ${scrollDistance ? styles.active : ""} `}>
                    <div width="25" height="25">
                        <Burger opened={opened} onClick={handleSideNav} />
                    </div>
                    <img src="/images/temploLogo.png" height="36" width="150" alt="BestTemplate" />
                </div>

                <div id="sideNav" className={`${styles.sideNav} ${opened ? styles.open : ""}`}>
                    {/* <Burger sx={{ paddingTop: "30px", paddingLeft: "15%" }} opened={opened} onClick={handleSideNav} /> */}

                    <div>
                        <Link className={`${styles.link} ${styles.away}`} href="/about">
                            About
                        </Link>
                        <Link className={`${styles.link} ${styles.away}`} href="/about">
                            Services
                        </Link>
                        <Link className={`${styles.link} ${styles.away}`} href="/shop">
                            Our Team
                        </Link>
                        <button type="button" className={classes.button}>
                            Contact
                        </button>
                    </div>
                </div>
            </>
        );
    }
};

export default Navigation;
