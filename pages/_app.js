import { css, Global } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

const cookieBannerStyles = (isOpen) => css`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #f7f7f7;
  height: ${isOpen ? '60px' : 0};
  overflow: hidden;
  transition: all 200ms ease-in;
  font-size: 12px;

  .cookieBannerContent {
    padding: 12px 96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .cookieButtonsAccepted {
    background-color: #ffa500;
    border-color: #ffffff;
    margin-right: 18px;
    padding: 1px 8px;
    border-radius: 50px;
    border-style: solid;
    border-color: #d8d8d8;
  }

  .cookieButtonsSetting {
    border-color: #ffffff;
    margin-right: 18px;
    padding: 1px 8px;
    border-radius: 50px;
    border-style: solid;
    border-color: #d8d8d8;
  }
`;

function MyApp({ Component, pageProps }) {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);
  const [cartQ, setCartQ] = useState([]);

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

  // Cookies.get('cart')

  useEffect(() => {
    const fetchData = async () => {
      const newNewCart = await (Cookies.get('cart')
        ? JSON.parse(Cookies.get('cart'))
        : []);
      console.log('from inside UseEffect', newNewCart);
      setCartQ(newNewCart);
    };
    fetchData().catch(console.error);
  }, []);

  console.log('after pushing from useEffect', cartQ);

  console.log('initial state of the cart', cartQ);

  return (
    <>
      <Global
        styles={css`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: Inter, sans-serif;
          }

          * {
            box-sizing: border-box;
            text-decoration: none;
            color: #121314;
          }
        `}
      />
      <Head>
        {' '}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Layout cartQ={cartQ}>
        <Component {...pageProps} setCartQ={setCartQ} />
      </Layout>
      <div css={cookieBannerStyles(!areCookiesAccepted)}>
        <div className="cookieBannerContent">
          orange orange uses cookies to give you the best shopping
          experience.You can configure or block cookies by clicking on “Cookies
          settings.” You can also accept all cookies by clicking on “Accept all
          cookies.”
          <div>
            <button
              onClick={() => {
                cookieBannerButtonHandler();
              }}
              className="cookieButtonsAccepted"
            >
              Accept all cookies
            </button>
            <button
              onClick={() => {
                cookieBannerButtonHandler();
              }}
              className="cookieButtonsSetting"
            >
              Cookies settings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
