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
  padding: 24px 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const heading = css`
  display: flex;
  flex-direction: row;
  padding: 29px 0 35px;

  h1 {
    padding-left: 18px;
    font-size: 13px;
    color: #b2b2b2;
  }
`;

const images = css`
  .textRightSide {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #fdfdfd;
    div {
      margin-bottom: 12px;
    }

    .gallery__img {
      width: 100%;
      height: 100%;
    }
  }
`;
export default function Inspiration() {
  return (
    <>
      <Head>
        <title>Inspiration| orange orange</title>
        <meta name="description" content="Inspiration" />
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
          <h1>/ Inspiration </h1>
        </div>
        <div css={content}>
          <div css={contentMain}>
            <div css={images}>
              <div className="textRightSide">
                <div className="gallery__item gallery__item--1">
                  <Image
                    src="/inspiration1.jpg"
                    alt="product image"
                    width="492"
                    height="736"
                    className="gallery__img"
                  />
                </div>

                <div className="gallery__item gallery__item--2">
                  <Image
                    src="/inspiration2.jpg"
                    alt="product image"
                    width="492"
                    height="736"
                    className="gallery__img"
                  />
                </div>
                <div className="gallery__item gallery__item--3">
                  <Image
                    src="/inspiration6.jpg"
                    alt="product image"
                    width="999"
                    height="645"
                    className="gallery__img"
                  />
                </div>
                <div className="gallery__item gallery__item--4">
                  <Image
                    src="/inspiration4.jpg"
                    alt="product image"
                    width="492"
                    height="736"
                    className="gallery__img"
                  />
                </div>
                <div className="gallery__item gallery__item--5">
                  <Image
                    src="/inspiration3.jpg"
                    alt="product image"
                    width="492"
                    height="736"
                    className="gallery__img"
                  />
                </div>
                <div className="gallery__item gallery__item--6">
                  <Image
                    src="/inspiration5.jpg"
                    alt="product image"
                    width="999"
                    height="645"
                    className="gallery__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
