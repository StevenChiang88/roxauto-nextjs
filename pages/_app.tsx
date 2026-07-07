import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import BackgroundDecor from "../components/BackgroundDecor";
import "../styles/globals.css";
import "../styles/theme.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="font-sans">
        <BackgroundDecor />
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
