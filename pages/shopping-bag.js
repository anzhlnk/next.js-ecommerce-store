import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import { useCartContext } from '../context/cartQuantity';
import { getParsedCookie, setStringifiedCookie } from '../util/cookies';
import { getProducts } from '../util/database';

const contentAll = css`
  margin: 100px 24px 96px;
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

const contentMain = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

const tshirtsInCartParent = css`
  width: 600px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #121314;

  .itemName {
    margin-top: 0px;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: bold;
  }
`;

const tshirtsInCart = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0px;

  .refferrence {
    margin-top: 0px;
    font-size: 13px;
    color: #b2b2b2;
  }

  .productInfo {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
  }

  .quantityButtonParent {
    margin-top: 13px;
    border-radius: 50px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    border: 1px solid #d8d8d8;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .quantityButton {
    border: none;
    background: none;
    outline: none;
    border-radius: 0;
    margin: 0px 8px;
  }
  .quantityButtonParent:active {
    box-shadow: rgba(0, 0, 0, 0.1) 0.4px 0.4px 0.4px;
  }
`;

const productImage = css`
  margin-right: 16px;
`;
const priceQuantityProductInfo = css`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: right;
  p,
  div {
    display: flex;
    justify-content: right;
    align-items: right;
  }
  p {
    margin-top: 12px;
    margin-bottom: 2px;
  }
  .totalPrice {
    font-size: 14px;
    color: #121314;
    margin-top: 2px;
  }
`;

const buttons = css`
  display: flex;
  flex-direction: row;
  align-items: center;

  .deleteButton {
    border-radius: 100%;
    border: 1px solid #d8d8d8;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }
  .deleteButton:hover {
    border-color: #dadce0;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px;
    color: #202124;
    background-color: #f7f7f7;
  }
  .deleteButton:active {
    border-color: #6e5f4b;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
const contentRightSide = css`
  width: 350px;
  background-color: #f7f7f7;
  box-sizing: border-box;
  margin-left: 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  padding: 36px 48px;
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-top: 0px;
    span {
      font-size: 14px;
    }
  }
  .additionalInfo {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    color: #121314;
    margin-top: 24px;
    p {
      margin: 8px 0px;
    }
  }
  .hiddenText {
    font-size: 11px;
    color: #b2b2b2;
  }
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

const checkoutButton = css`
  margin-right: 0px;
  padding: 1px 8px;
  height: 37px;
  border: 1px solid #d8d8d8;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffa500;
  border: 1px solid #d8d8d8;
  width: 220px;
  :hover {
    background-image: linear-gradient(#fcb32d, #ffa500);
    border: 1px solid #d8d8d8;
    text-decoration: none;
  }
`;

export default function CartPage(props) {
  console.log('your props', typeof props.setCartQ);
  const [combinedData, setCombinedData] = useState(props.foundgoods);
  let totalP = 0;
  for (let i = 0; i < combinedData.length; i++) {
    totalP += combinedData[i].quantity * combinedData[i].price;
  }

  let totalQ = 0;
  for (let i = 0; i < combinedData.length; i++) {
    totalQ += combinedData[i].quantity;
  }

  return (
    <>
      <Head>
        <title>Shopping bag | orange orange</title>
        <meta name="description" content="Your shopping bag" />
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
          <p>/ Shopping bag </p>
        </div>
        <div css={contentMain}>
          {combinedData.length === 0 ? (
            <h2>Your Cart is Empty!</h2>
          ) : (
            <>
              <div css={tshirtsInCartParent}>
                {combinedData.map((item) => {
                  return (
                    <div
                      key={`cart-${item.id}`}
                      data-test-id={`cart-product-${item.id}`}
                    >
                      <div css={tshirtsInCart}>
                        <Link href={`/tshirts/${item.id}`}>
                          <div css={productImage}>
                            <Image
                              src={`/${item.id}.jpg`}
                              alt="product image"
                              width="131"
                              height="196"
                            />
                          </div>
                        </Link>
                        <div className="productInfo">
                          <p className="itemName">{item.name}</p>
                          <p className="refferrence">REF:{item.id} </p>
                          <p>Color: {item.color}</p>
                          {/* to be changed !!! */}
                          <p>Size: {item.size}</p>
                          <div css={buttons}>
                            <div className="quantityButtonParent">
                              <button
                                className="quantityButton"
                                onClick={() => {
                                  const newQuantity =
                                    item.quantity > 1 ? item.quantity - 1 : 1;

                                  const updatedArray = combinedData.map((p) =>
                                    p.id === item.id
                                      ? { ...p, quantity: newQuantity }
                                      : p,
                                  );
                                  props.setCartQ(updatedArray);

                                  setCombinedData(updatedArray);

                                  // 1. get the cookie
                                  const currentCart = getParsedCookie('cart');
                                  // 2. get the tshirt
                                  const currentTshirt = currentCart.find(
                                    (tshirtInCart) =>
                                      item.id === tshirtInCart.id,
                                  );
                                  // 3. update the counter inside the tshirt
                                  currentTshirt.quantity > 1
                                    ? (currentTshirt.quantity -= 1)
                                    : (currentTshirt.quantity = 1);
                                  // 4. set the new cookie
                                  setStringifiedCookie('cart', currentCart);
                                }}
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                className="quantityButton"
                                onClick={() => {
                                  const newQuantity = item.quantity + 1;
                                  const updatedArray = combinedData.map((p) =>
                                    p.id === item.id
                                      ? { ...p, quantity: newQuantity }
                                      : p,
                                  );
                                  setCombinedData(updatedArray);
                                  props.setCartQ(updatedArray);

                                  // 1. get the cookie
                                  const currentCart = getParsedCookie('cart');
                                  // 2. get the tshirt
                                  const currentTshirt = currentCart.find(
                                    (tshirtInCart) =>
                                      item.id === tshirtInCart.id,
                                  );
                                  // 3. update the counter inside the tshirt
                                  currentTshirt.quantity += 1;
                                  // 4. set the new cookie
                                  setStringifiedCookie('cart', currentCart);
                                }}
                                data-test-id="increase-button"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div css={priceQuantityProductInfo}>
                          <div css={buttons}>
                            <button
                              className="deleteButton"
                              onClick={() => {
                                // data
                                // 1. Set item quantity to -
                                item.quantity = 0;
                                // 2. create new array
                                const updatedArray = combinedData.filter(
                                  (i) => i.quantity !== 0,
                                );
                                // 3. update the state of the data
                                setCombinedData(updatedArray);
                                props.setCartQ(updatedArray);

                                // Cookie part
                                // 1. get the cookie
                                const currentCart = getParsedCookie('cart');
                                // 2. get the tshirt
                                const currentTshirt = currentCart.find(
                                  (tshirtInCart) => item.id === tshirtInCart.id,
                                );
                                // 3. update the counter inside the tshirt
                                currentTshirt.quantity = 0;
                                // 4. create new cart
                                const updatedCart = currentCart.filter(
                                  (t) => t.quantity !== 0,
                                );
                                // 5. set the new cookie
                                setStringifiedCookie('cart', updatedCart);
                              }}
                              data-test-id={`cart-product-remove-${item.id}`}
                            >
                              x
                            </button>
                          </div>
                          <p>
                            <span
                              data-test-id={`cart-product-quantity-${item.id}`}
                            >
                              {item.quantity}
                            </span>
                            x € {item.price}
                          </p>
                          <p className="totalPrice">
                            € {item.quantity * item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div css={contentRightSide}>
                <h2>
                  Shopping bag{' '}
                  <span>
                    ({totalQ} {totalQ > 1 ? 'items' : 'item'}){' '}
                  </span>
                </h2>
                <h2 className="total" data-test-id="cart-total">
                  Total: € {totalP}
                </h2>
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
                <div className="additionalInfo">
                  <p> 🚚 Free delivery for orders over €30</p>
                  <p>↩️ Free returns in 30 days</p>
                  <p>🔒 Secure payment</p>
                </div>
                <Link href="/checkout">
                  <div>
                    <button css={checkoutButton} data-test-id="cart-checkout">
                      Checkout
                    </button>{' '}
                  </div>
                </Link>
              </div>
            </>
          )}
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
