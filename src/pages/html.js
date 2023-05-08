import React from 'react';
import Header from '../comp/header';
import Main from '../comp/main';
import Footer from '../comp/footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Html = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>HTML</title>
        </Helmet>
      <Header />
      <Main namePage={'HTML'} />
      <Footer />
      </HelmetProvider>
  </>
  );
}

export default Html;
