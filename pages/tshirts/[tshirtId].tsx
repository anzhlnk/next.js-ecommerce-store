import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';
import { getProduct, Product } from '../../util/database';
import { queryParamToNumber } from '../../util/queryParams';

const contentAll = css`
  margin: 100px 24px 96px;

  .contentMainBottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

const contentMain = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
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

const contentLeftSife = css``;

const contentRightSide = css`
  box-sizing: border-box;
  height: 393px;
  margin-left: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .productPrice {
    display: flex;
    flex-direction: row;
  }

  h1 {
    margin: 0px;
    font-size: 24px;
    color: #121314;
  }

  p {
    font-size: 13px;
    color: #121314;
  }

  .refferrence {
    margin-top: 2px;
    font-size: 13px;
    color: #b2b2b2;
  }

  .helpSize {
    height: 49px;
    font-weight: bold;
    text-decoration: underline;
  }

  .dropdown select {
    border-radius: 50px;
    height: 38px;
    border: 1px solid #d8d8d8;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    :focus {
      outline: none;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .buttons button {
    margin-right: 18px;
    padding: 1px 8px;
    height: 37px;
    border: 1px solid #d8d8d8;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .wishlist {
    border-radius: 100%;
    width: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }

  .addToBag {
    background-color: #ffa500;
  }
  .addToBag:hover {
    background-image: linear-gradient(#fcb32d, #ffa500);
    border: 1px solid #d8d8d8;
    text-decoration: none;
  }

  .quantityButtonParent {
    border-radius: 50px;
    height: 38px;
    width: 95px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #d8d8d8;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 18px;
  }

  .quantityInput {
    width: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    border: none;
    background-color: #ffffff;
  }

  .quantityButtonParent button {
    padding-right: 24px;
    width: 8px;
    border: none;
    background: none;
    outline: none;
    border-radius: 0;
    margin: 0px 0px 0px 0px;
  }
  .quantityButtonParent:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0.4px 0.4px 0.4px;
  }
  .additionalInfo {
    margin-top: 48px;
  }
`;

const contentBottom = css`
  margin-top: 64px;
  margin-bottom: 64px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 650px;
  font-size: 13px;
  .productDetailsButton,
  .reviews {
    margin-right: 18px;
    margin-bottom: 36px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 50px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #ffa500;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }
  .productDetailsButton > p {
    padding-top: 36px;
  }
`;

export type ItemInCart = {
  id: number;
  quantity: number;
};

type Props = {
  superTshirt: Product;
  setCartQ: React.FC;
};

export default function Tshirt(props: Props) {
  const [counter, setCounter] = useState(props.superTshirt.quantity || 1);
  const [size, setSize] = useState('');

  return (
    <>
      <Head>
        <title>Product page | orange orange</title>
        <meta name="description" content="Product page" />
      </Head>
      <div css={contentAll}>
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
          <p>/ All T-Shirts / {props.superTshirt.name}</p>
        </div>
        <div className="contentMainBottom">
          <div css={contentMain}>
            <div css={contentLeftSife}>
              <Image
                src={`/${props.superTshirt.id}.jpg`}
                alt="product image"
                width="262"
                height="393"
                data-test-id="product-image"
              />
            </div>
            <div css={contentRightSide}>
              <h1>{props.superTshirt.name} </h1>
              <div className="productPrice">
                €
                <div data-test-id="product-price">
                  {props.superTshirt.price}
                </div>
              </div>
              <p className="refferrence">REF:{props.superTshirt.id}</p>
              <p className="helpSize">Help about your size</p>
              <p className="dropdown">
                <select
                  value={size}
                  placeholder="Choose size"
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                >
                  <option>Choose size</option>
                  <option>{props.superTshirt.size}</option>;
                </select>
              </p>
              <div className="buttons">
                {/* Cookies start */}
                <div className="quantityButtonParent">
                  <button
                    type="button"
                    className="quantityButton"
                    onClick={() => {
                      if (counter > 1) {
                        setCounter((count) => count - 1);
                      }
                    }}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    className="quantityInput"
                    data-test-id="product-quantity"
                    min="1"
                    defaultValue="1"
                    value={counter}
                    onInput={(event) => {
                      if (!event.currentTarget.validity.valid) {
                        event.currentTarget.value = '';
                      }
                    }}
                    onChange={(event) =>
                      setCounter(Number(event.currentTarget.value))
                    }
                    disabled
                  />

                  <button
                    type="button"
                    className="quantityButton"
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  className="addToBag"
                  onClick={() => {
                    // get the original array from  the cookies
                    const currentCart = Cookies.get('cart')
                      ? getParsedCookie('cart')
                      : [];
                    let newCart;
                    const tshirtInCart = currentCart.find(
                      (currenttshirt: ItemInCart) =>
                        props.superTshirt.id === currenttshirt.id,
                    );
                    if (tshirtInCart) {
                      // increase quantity counter in the object that was fetched using cookie
                      tshirtInCart.quantity = tshirtInCart.quantity + counter;
                      newCart = currentCart;
                    } else {
                      //  add the value
                      newCart = [
                        ...currentCart,
                        { id: props.superTshirt.id, quantity: counter },
                      ];
                    }
                    // set the cookie to the new value
                    setStringifiedCookie('cart', newCart);
                    props.setCartQ(newCart);
                  }}
                  data-test-id="product-add-to-cart"
                >
                  Add to shopping bag
                </button>
                <button className="wishlist">♡</button>
              </div>
              {/* Cookies end */}
              <div className="additionalInfo">
                <p> ✓ Free delivery to store</p>
                <p> 📍 Store availability</p>
              </div>
            </div>
          </div>
          <div css={contentBottom}>
            <div>
              <button className="productDetailsButton">Product details</button>
              <button className="reviews">Reviews (2)</button>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // 1. Get the value of the cookie from the request object
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');
  // 2. get the id from the url and use it to match the single tshirt id in the database
  const productId = queryParamToNumber(context.query.tshirtId);
  const productFromDB = await getProduct(productId);
  // const clearedData = getReducedProductFromDB(productFromDB);
  console.log('here the product', productFromDB);
  console.log('here the product', typeof productFromDB);

  // If no tshirt is found, return null
  if (!productFromDB) {
    context.res.statusCode = 404;
    return {
      props: { superTshirt: null },
    };
  }

  // 3. Find the object that represents the tshirt in the url
  const currentTshirtInCart = currentCart.find(
    (tshirtInCart: ItemInCart) => productFromDB.id === tshirtInCart.id,
  );

  // 4. create a new object adding the properties from the cookie object to the tshirt in database
  const superTshirt = { ...productFromDB, ...currentTshirtInCart };

  console.log('superTshirt', superTshirt);

  return {
    props: {
      superTshirt: superTshirt,
    },
  };
}
