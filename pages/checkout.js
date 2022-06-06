import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import { useCartContext } from '../context/cartQuantity';
import { getParsedCookie, setStringifiedCookie } from '../util/cookies';
import { tshirtDataBase } from '../util/database';

const contentAll = css`
  margin: 100px 24px 96px;
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
const formParent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form {
    width: 390px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    height: 45px;
    padding-left: 15px;
    padding-right: 15px;
    border: 1px solid #d8d8d8;
    margin: 8px 0px;
    font-size: 12px;
  }
  button {
    margin-top: 12px;
    padding: 1px 8px;
    height: 37px;
    border: 1px solid #d8d8d8;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #ffa500;
    border-color: #ffffff;
    width: 220px;
  }
`;

const contentRightSide = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 96px;
  .total {
    margin-top: 24px;
    font-size: 18px;
    font-weight: bold;
  }
  .grandTotal {
    font-size: 24px;
    font-weight: bold;
    margin-top: 0px;
  }
  hr {
    border-width: 0.5px;
    border-color: #666;
    border-top: 0.98px;
    margin: 24px 0px;
  }
`;

export default function CheckOut(props) {
  const [combinedData, setCombinedData] = useState(props.foundgoods);
  let totalP = 0;
  for (let i = 0; i < combinedData.length; i++) {
    totalP += combinedData[i].quantity * combinedData[i].price;
  }

  return (
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
        <h1>/ Customer details </h1>
      </div>
      <div css={contentMain}>
        <div css={formParent}>
          <h2>Customer details</h2>
          <form className="form">
            <div className="inputBoxes">
              <input
                data-test-id="checkout-first-name"
                placeholder="first name "
              />
              <input
                data-test-id="checkout-last-name"
                placeholder="last name "
              />
              <input data-test-id="checkout-email" placeholder="email" />
              <input data-test-id="checkout-address" placeholder="address" />
              <input data-test-id="checkout-city" placeholder="city" />
              <input
                data-test-id="checkout-postal-code"
                placeholder="postal code"
              />
              <input ata-test-id="checkout-country" placeholder="country" />
              <input
                data-test-id="checkout-credit-card"
                placeholder="credit card"
              />
              <input
                data-test-id="checkout-expiration-date"
                placeholder="expiration date"
              />
            </div>
            <input
              data-test-id="checkout-security-code"
              placeholder="security code"
            />
            <Link href="/thankyou">
              <div>
                <button data-test-id="checkout-confirm-order">
                  Confirm order
                </button>
              </div>
            </Link>
          </form>
        </div>
        <div css={contentRightSide}>
          <div>
            <h2 className="total">Total: € {totalP}</h2>
            {totalP < 30 && (
              <span className="hiddenText">
                Free delivery if you add €{30 - totalP} to the shopping bag
              </span>
            )}
            {totalP < 30 ? (
              <span> Delivery costs: €30 </span>
            ) : (
              <span>Delivery costs: free of charge </span>
            )}
            <hr />
            <h2 className="grandTotal">
              Total: € {totalP < 30 ? totalP + 30 : totalP}{' '}
            </h2>
          </div>
          <div>
            {combinedData.map((item) => {
              return (
                <div key={`checkout-${item.id}`}>
                  <Image
                    src={`/${item.id}.jpg`}
                    alt="product image"
                    width="65"
                    height="98"
                  />{' '}
                  x {item.quantity}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  // 1. Get the value of the cookies from the request object
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');

  // 2. get the objects from the cookies in the database
  let foundgoods = [];

  for (const item of currentCart) {
    // query tshirtDataBase to find id of current cart item
    const tshirtData = tshirtDataBase.find((tshirt) => {
      return tshirt.id === item.id;
    });

    if (!tshirtData) {
      alert(
        `Error occured: Could not find cart item t shirt id ${item.id} in tshirtDataBase`,
      );
      context.res.statusCode = 404;
      break;
    }
    // 4. create a new object adding the properties from the cookie object to the tshirt in database
    const superTshirt = { ...tshirtData, ...item };

    // 5. add to list
    foundgoods.push(superTshirt);
  }

  return {
    props: {
      foundgoods: foundgoods,
    },
  };
}
