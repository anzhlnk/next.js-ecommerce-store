import { css, Global } from '@emotion/react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
