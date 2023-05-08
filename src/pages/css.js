import React from "react";
import Header from "../comp/header";
import Main from "../comp/main";
import Footer from "../comp/footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>CSS</title>
        </Helmet>
        <Header />
        <Main namePage={"CSS"} />
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default Css;
