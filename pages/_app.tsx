import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/header";
import { IBM_Plex_Sans } from "@next/font/google";

const ibm = IBM_Plex_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-IBM",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ibm.variable} font-ibm`}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
