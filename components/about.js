import { Grid, Card, Button, Input, Checkbox } from "@mantine/core";
import { IconAt, IconUser } from "@tabler/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../styles/About.module.css";
import AnimatedArrow from "./reusableComponents/animatedArrow";

const About = () => {
    const [heightOfSection, setHeightOfSection] = useState(0);

    /* since there is a large image that has an absolute position we must get make space so
    other components can fit. So I use offset height to grab the height of the section
    than just add the height of the image to the height of the section using inline css.
    This make a space for the next component */
    useEffect(() => {
        setHeightOfSection(document.getElementById("about").offsetHeight);
    }, []);

    return (
        <>
            <section
                id="about"
                className={styles.aboutTextWrapper}
                style={{ minHeight: `calc(${heightOfSection}px + 65vh)` }}
            >
                <Grid grow gutter="xl" justify="center" align="center">
                    <Grid.Col md={6}>
                        <h3 className={styles.aboutHeader}>Create your own digital experience</h3>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <p className={styles.aboutText}>
                            Praesent quis nulla sed nisl tempor consequat. Aliquam risus magna, ultricies in purus nec,
                            laoreet laoreet erat. Fusce aliquet sem a imperdiet feugiat.
                        </p>
                    </Grid.Col>
                </Grid>
                <Grid grow gutter="xl">
                    <Grid.Col md={6}>
                        <div>
                            <AnimatedArrow />{" "}
                            <div className={styles.captionWrapper}>
                                <p className={styles.caption}>
                                    Built by <span className={styles.highlight}> David Martinez </span>
                                    <br /> using Templo{" "}
                                </p>
                            </div>
                            <div className={styles.picContainer}>
                                <Image
                                    className={styles.pic}
                                    fill
                                    src="/images/websiteDesign.png"
                                    alt="picture of website template"
                                />
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Card className={styles.subscribeCard} shadow="sm" p="lg" radius="md" withBorder>
                            <h5 className={styles.cardHeader}>Join the Mailing List</h5>
                            <div className={styles.inputWrapper}>
                                <Input icon={<IconUser />} placeholder="Name" radius="md" />
                            </div>
                            <div className={styles.inputWrapper}>
                                <Input icon={<IconAt />} placeholder="Email" radius="md" />
                            </div>
                            <Checkbox className={styles.checkbox} label="I agree to sell my privacy" size="xs" />
                            <Button fullWidth radius="md" size="md" sx={{ backgroundColor: "#f7a76c" }}>
                                Subscribe
                            </Button>
                        </Card>
                    </Grid.Col>
                </Grid>
            </section>
        </>
    );
};

export default About;
