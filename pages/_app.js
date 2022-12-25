import { MantineProvider } from "@mantine/core";
import Navigation from "../components/navigation";
// importing css file
import "../styles/globals.css";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                /** Put your mantine theme override here */
                colorScheme: "light",
                fontFamily: "inherit",
                defaultRadius: 0,
                colors: {
                    // Add your color
                    winterBlue: ["#72FFFF", "#00D7FF", "#0096FF", "#5800FF"],
                    // or replace default theme color
                    blue: ["#72FFFF", "#00D7FF", "#0096FF", "#5800FF"],
                },
                focusRingStyles: {
                    // focus styles applied to components that are based on Input
                    // styled are added with &:focus selector
                    inputStyles: (theme) => ({ outline: `2px solid ${theme.colors.deepBlue[1]}` }),
                },
            }}
        >
            <main className={inter.style.fontFamily}>
                <Navigation />
                <Component {...pageProps} />
            </main>
        </MantineProvider>
    );
}
