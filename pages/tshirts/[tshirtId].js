import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../util/cookies';
import { tshirtDataBase } from '../../util/database';

const contentAll = css`
  margin: 100px 24px 8px;

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

  h1 {
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

  .yourSize select {
    border-radius: 50px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #d8d8d8;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    border-color: #ffffff;
  }

  .quantityButtonParent {
    border-radius: 50px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #d8d8d8;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 18px;
  }

  .quantityButtonParent button {
    border: none;
    background: none;
    outline: none;
    border-radius: 0;
    margin: 0px 8px;
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

export default function Tshirt(props) {
  const [counter, setCounter] = useState(props.superTshirt.quantity || 1);

  return (
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
        <h1>/ All T-Shirts / {props.superTshirt.name}</h1>
      </div>
      <div className="contentMainBottom">
        <div css={contentMain}>
          <div css={contentLeftSife}>
            <Image
              src={`/${props.superTshirt.id}.jpg`}
              alt="product image"
              width="262"
              height="393"
            />
          </div>
          <div css={contentRightSide}>
            <h1>
              {props.superTshirt.name}
              <br />€ {props.superTshirt.price}
            </h1>
            <p className="refferrence">REF:{props.superTshirt.id}</p>
            <p className="helpSize">Help about your size</p>
            <p className="yourSize">
              <select>
                <option>Choose size</option>
                {props.superTshirt.size.map((size) => {
                  return <option key={`tshirt-${size}`}> {size} </option>;
                })}
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
                <span>{counter}</span>
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
                  //get the original array from  the cookies
                  const currentCart = Cookies.get('cart')
                    ? getParsedCookie('cart')
                    : [];
                  let newCart;
                  const tshirtInCart = currentCart.find(
                    (currenttshirt) =>
                      props.superTshirt.id === currenttshirt.id,
                  );
                  if (tshirtInCart) {
                    // console.log(
                    //   `Found t shirt with id ${tshirtInCart.id} in cart with quantity ${tshirtInCart.quantity}`,
                    // );
                    // console.log(
                    //   `Current counter that will be added for t shirt: ${counter}`,
                    // );
                    // increase quantity counter in the object that was fetched using cookie
                    tshirtInCart.quantity = tshirtInCart.quantity + counter;
                    // console.log(
                    //   `Updated tShirtInCart ${JSON.stringify(tshirtInCart)}`,
                    // );
                    newCart = currentCart;
                  } else {
                    //add the value
                    newCart = [
                      ...currentCart,
                      { id: props.superTshirt.id, quantity: counter },
                    ];
                  }
                  //set the cookie to the new value
                  setStringifiedCookie('cart', newCart);
                }}
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  // 1. Get the value of the cookie from the request object
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');
  // 2. get the id from the url and use it to match the single tshirt id in the database
  const tshirtId = context.query.tshirtId;
  const foundtshirt = tshirtDataBase.find((tshirt) => {
    return tshirt.id === tshirtId;
  });

  if (!foundtshirt) {
    context.res.statusCode = 404;
  }

  // 3. Find the object that represents the tshirt in the url
  const currentTshirtInCart = currentCart.find(
    (tshirtInCart) => foundtshirt.id === tshirtInCart.id,
  );

  // 4. create a new object adding the properties from the cookie object to the tshirt in database
  const superTshirt = { ...foundtshirt, ...currentTshirtInCart };

  return {
    props: {
      superTshirt: superTshirt,
    },
  };
}
