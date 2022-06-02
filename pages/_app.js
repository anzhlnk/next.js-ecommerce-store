import { css, Global } from '@emotion/react';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookie } from '../util/cookies';
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

const cookieBannerStyles = (isOpen) => css`
  height: ${isOpen ? 'auto' : 0};
  overflow: hidden;
  transition: all 200ms ease-in;
  font-size: 13px;
`;

// export const CartContext = React.createContext();
// const cartFromCookie = Cookies.get('cart')
//   ? JSON.parse(Cookies.get('cart'))
//   : [];
// console.log('cart from cookie', cartFromCookie);

function MyApp({ Component, pageProps }) {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  // 2. function for setting the value for the cookieBanner
  function cookieBannerButtonHandler() {
    setLocalStorage('areCookiesAccepted', true);
    setAreCookiesAccepted(true);
  }

  // 1.check if there is already a value for the cookieBanner
  useEffect(() => {
    if (getLocalStorage('areCookiesAccepted')) {
      setAreCookiesAccepted(getLocalStorage('areCookiesAccepted'));
    }
  }, []);

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Inter, Haettenschweiler, 'Arial Narrow Bold',
              sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
            text-decoration: none;
            color: #121314;
          }
        `}
      />
      {/*
      <CartContext.Provider value={cartFromCookie}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div css={cookieBannerStyles(!areCookiesAccepted)}>
        orange orange uses cookies to give you the best shopping experience.You
        can configure or block cookies by clicking on “Cookies settings.” You
        can also accept all cookies by clicking on “Accept all cookies.”
        <button>Cookies setting</button>
        {/* Call the cookieBannerButtonHandler function onClick */}
        <button
          onClick={() => {
            cookieBannerButtonHandler();
          }}
        >
          Accept all cookies
        </button>
      </div>
      {/* </CartContext.Provider> */}
    </>
  );
}

export default MyApp;
