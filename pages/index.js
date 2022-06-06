import { css } from '@emotion/react';
import Head from 'next/head';

const content = css`
  main {
    margin: 20px 0px;
  }
`;

const sectionOne = css`
  padding: 32px 24px 0px;
  background-image: url('/banner.jpeg');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 650px;

  h1 {
    font-size: 80px;
    color: #f7f7f7;
    width: 300px;
  }
`;

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>Home page</title>
        <meta name="description" content="Ecom store" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main css={content}>
        <section css={sectionOne}>
          <h1>Summer collection sale</h1>
        </section>
      </main>
    </div>
  );
}
