import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
      <Footer />
    </>
  );
};

export default appWithTranslation(App);
