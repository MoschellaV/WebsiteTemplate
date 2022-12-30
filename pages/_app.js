import { MantineProvider } from "@mantine/core";
import Navigation from "../components/navigation";
// importing css file
import "../styles/globals.css";

import { Inter, Roboto_Condensed } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
// importing roboto only for nav
const roboto_Condensed = Roboto_Condensed({ weight: ["400"], subsets: ["latin"] });

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
                    whites: ["#fff", "#FAF9F6"],
                    warmColors: ["#ec7272", "#f7a76c", "#e0d98c"],
                    winterBlue: ["#72FFFF", "#00D7FF", "#0096FF", "#5800FF"],
                    shadows: ["0px 0px 20px rgb(255,255,255)", "0px 0px 10px rgba(88, 0, 255, 0.4)"],
                },
                focusRingStyles: {
                    // focus styles applied to components that are based on Input
                    // styled are added with &:focus selector
                    inputStyles: (theme) => ({ outline: `2px solid ${theme.colors.warmColors[0]}` }),
                },
            }}
        >
            <main className={inter.className}>
                <Navigation roboto_Condensed={roboto_Condensed} />
                <Component {...pageProps} />
            </main>
        </MantineProvider>
    );
}
