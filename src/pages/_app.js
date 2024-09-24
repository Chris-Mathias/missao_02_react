import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Início</title>
                <link rel="icon" href="/icon-class.svg" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
