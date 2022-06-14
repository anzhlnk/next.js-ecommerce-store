import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { deleteCookie } from '../util/cookies';
// import { useCartContext } from '../context/cartQuantity';
import { getProducts } from '../util/database';

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

  p {
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
    :focus {
      outline-color: #ffa500;
    }
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
    width: 220px;
  }
  button:hover {
    background-image: linear-gradient(#fcb32d, #ffa500);
    border: 1px solid #d8d8d8;
    text-decoration: none;
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
  const combinedData = props.foundgoods;

  const [values, setValues] = useState({
    fname: '',
    lname: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    creditCard: '',
    expirationDate: '',
    securityCode: '',
  });

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  let totalP = 0;
  for (let i = 0; i < combinedData.length; i++) {
    totalP += combinedData[i].quantity * combinedData[i].price;
  }

  const onSubmit = (event) => {
    event.preventDefault();
    window.location.href = '/thankyou';
    // Cookies.remove('cart');
    deleteCookie('cart');
  };

  return (
    <>
      <Head>
        <title>Customer details | orange orange</title>
        <meta name="description" content="Payment and shipping details" />
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
          <p>/ Customer details </p1>
        </div>
        <div css={contentMain}>
          <div css={formParent}>
            <h2>Customer details</h2>
            <form className="form" onSubmit={onSubmit}>
              <div className="inputBoxes">
                <input
                  data-test-id="checkout-first-name"
                  placeholder="first name"
                  value={values.fname}
                  onChange={set('fname')}
                  required
                />
                <input
                  data-test-id="checkout-last-name"
                  placeholder="last name"
                  value={values.lname}
                  onChange={set('lname')}
                  required
                />
                <input
                  data-test-id="checkout-email"
                  placeholder="email"
                  value={values.email}
                  onChange={set('email')}
                  required
                />
                <input
                  data-test-id="checkout-address"
                  placeholder="address"
                  value={values.address}
                  onChange={set('address')}
                  required
                />
                <input
                  data-test-id="checkout-city"
                  placeholder="city"
                  value={values.city}
                  onChange={set('city')}
                  required
                />
                <input
                  data-test-id="checkout-postal-code"
                  placeholder="postal code"
                  value={values.postalCode}
                  onChange={set('postalCode')}
                  required
                />
                <input
                  data-test-id="checkout-country"
                  placeholder="country"
                  value={values.country}
                  onChange={set('country')}
                  required
                />
                <input
                  data-test-id="checkout-credit-card"
                  placeholder="credit card"
                  value={values.creditCard}
                  onChange={set('creditCard')}
                  type="number"
                  required
                />
                <input
                  data-test-id="checkout-expiration-date"
                  placeholder="expiration date"
                  value={values.expirationDate}
                  onChange={set('expirationDate')}
                  required
                />
              </div>
              <input
                data-test-id="checkout-security-code"
                placeholder="security code"
                value={values.securityCode}
                onChange={set('securityCode')}
                type="number"
                required
              />
              {/* <Link href="/thankyou"> */}
              <div>
                <button data-test-id="checkout-confirm-order">
                  Confirm order
                </button>
              </div>
              {/* </Link> */}
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
    </>
  );
}

export async function getServerSideProps(context) {
  // 1. Get the value of the cookies from the request object
  const currentCart = JSON.parse(context.req.cookies.cart || '[]');

  // 2. get the objects from the cookies in the database
  const productDatabase = await getProducts();

  const foundgoods = [];

  for (const cartItem of currentCart) {
    // query tshirtDataBase to find id of current cart item
    const productDataFromDB = productDatabase.find((product) => {
      return product.id === cartItem.id;
    });

    if (!productDataFromDB) {
      alert(
        `Error occured: Could not find cart item id ${cartItem.id} in DataBase`,
      );
      context.res.statusCode = 404;
      break;
    }
    // 4. create a new object adding the properties from the cookie object to the tshirt in database
    const superTshirt = { ...productDataFromDB, ...cartItem };

    // 5. add to list
    foundgoods.push(superTshirt);
  }

  return {
    props: {
      foundgoods: foundgoods,
    },
  };
}
