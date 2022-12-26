import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Rox Auto Parts - Taiwan Automotive Parts</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
      <Footer />
    </>
  );
};

export default appWithTranslation(App);
