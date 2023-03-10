import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import BackToTop from "../components/BackToTop";

const emotioncache = createCache({
  key: "emotionstyle",
  prepend: true,
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <CacheProvider value={emotioncache}>
        <ChakraProvider>
          <Head>
            <title>Rox Auto Parts - Taiwan Automotive Parts</title>
            <meta
              name="description"
              content="Rox Auto Parts provides all brands of Taiwan auto parts, and has been engaged in the automotive parts business since 1976 and has proven itself to be one of the best in Taiwan automotive parts industry.
"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.png" />
          </Head>
          <BackToTop />
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
        <Footer />
      </CacheProvider>
    </>
  );
};

export default appWithTranslation(App);
