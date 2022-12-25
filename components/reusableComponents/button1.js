import { createStyles } from "@mantine/core";

const button1 = createStyles((theme) => ({
    button: {
        color: theme.colors.winterBlue[3],
        backgroundColor: "#ffffff00",
        border: 1,
        borderStyle: "solid",
        borderColor: theme.colors.winterBlue[3],
        boxShadow: "0px 0px 25px rgba(88, 0, 255, 0.4)",
        maxWidth: 200,
        borderRadius: theme.radius.md,
        padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
        cursor: "pointer",
        margin: theme.spacing.md,
        fontFamily: theme.fontFamily,
        borderRadius: theme.radius.xl,

        // Use pseudo-classes just like you would in Sass
        "&:hover": {
            backgroundColor: "rgba(88, 0, 255, 0.05)",
        },
    },
}));

export default button1;
