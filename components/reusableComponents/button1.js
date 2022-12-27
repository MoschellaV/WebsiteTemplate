import { createStyles } from "@mantine/core";

const button1 = createStyles((theme) => ({
    button: {
        color: theme.colors.whites[0],
        backgroundColor: "#ffffff00",
        border: 1,
        borderStyle: "solid",
        borderColor: theme.colors.whites[0],
        boxShadow: theme.colors.shadows[0],
        maxWidth: 200,
        padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
        cursor: "pointer",
        margin: theme.spacing.md,
        fontFamily: theme.fontFamily,
        borderRadius: theme.radius.xl,
        transition: "all 0.3s ease-in-out",

        // Use pseudo-classes just like you would in Sass
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            transform: "scale(0.8)",
        },
    },
    blackButton: {
        color: "#000",
        backgroundColor: "#ffffff00",
        border: 1,
        borderStyle: "solid",
        borderColor: "#000",
        maxWidth: 200,
        padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
        cursor: "pointer",
        margin: theme.spacing.md,
        fontFamily: theme.fontFamily,
        borderRadius: theme.radius.xl,
        transition: "all 0.3s ease-in-out",

        // Use pseudo-classes just like you would in Sass
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            transform: "scale(0.8)",
        },
    },
}));

export default button1;
