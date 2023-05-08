import React from "react";
import Header from "../comp/header";
import Main from "../comp/main";
import Footer from "../comp/footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Header />
        <Main namePage={"HOME"} />
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default Home;
