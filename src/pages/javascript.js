import React from "react";
import Header from '../comp/header';
import Main from '../comp/main';
import Footer from '../comp/footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Javascript = () => {
  return (
    <>
      <HelmetProvider>
      <Helmet>
        <title>Javascript</title>
      </Helmet>
        <Header />
        <Main namePage={'JAVASCRIPT'}/>
        <Footer />
      </HelmetProvider>
    </>
  );
};

export default Javascript;
