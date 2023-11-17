import { FooterPage } from '@/src/components/footer/footer-page';
import { HeaderPage } from '@/src/components/header/header-page';
import React from 'react';
import '@/styles/general.sass'

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <HeaderPage></HeaderPage>
      <Component {...pageProps} />
      <FooterPage></FooterPage>
    </div>

  );
}

export default MyApp;