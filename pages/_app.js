import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(App);
