import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// import { useCartContext } from '../context/cartQuantity';

const contentAll = css`
  margin: 100px 24px 96px;
`;

const content = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const contentMain = css`
  width: 600px;
  padding: 24px 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
`;

const heading = css`
  display: flex;
  flex-direction: row;
  padding: 29px 0 35px;

  p {
    padding-left: 18px;
    font-size: 13px;
    color: #b2b2b2;
  }
`;

const textLogo = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg {
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
  img {
  }

  .textRightSide {
    margin-left: 48px;
    font-size: 24px;
  }
`;

export default function CheckOut() {
  return (
    <>
      <Head>
        <title>Thank you for your order | orange orange</title>
        <meta name="description" content="Order completed" />
      </Head>
      <div css={contentAll}>
        {/* prevent submission with any of the above fields being empty */}
        {/* Show total */}
        {/* shipping and payment information */}

        <div css={heading}>
          <Link href="/">
            <div>
              <Image
                src="/homeLogo.png"
                width="30"
                height="30"
                alt=" home Logo"
              />
            </div>
          </Link>
          <p>/ Order complete </p>
        </div>
        <div css={content}>
          <div css={contentMain}>
            <div css={textLogo}>
              <Image
                src="/homeLogo.png"
                width="120"
                height="120"
                alt=" home Logo"
              />
              <div className="textRightSide">
                Thank you <br />
                for your
                <br />
                order!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
