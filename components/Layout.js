import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const headerPosition = css`
  position: fixed;
  top: 0;
  left: 0;
`;

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="Ecom store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header css={headerPosition} cartQ={props.cartQ} />
      {props.children}
      <Footer />
    </div>
  );
}
