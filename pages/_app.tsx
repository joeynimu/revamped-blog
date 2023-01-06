import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Sans } from "@next/font/google";
import Head from "next/head";
import Header from "../components/layout/header";

const ibm = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-IBM",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Joe Ng&apos;ethe - Javascript Engineer</title>
      </Head>
      <main className={`${ibm.variable} font-ibm px-4`}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
