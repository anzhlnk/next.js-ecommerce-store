import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getParsedCookie } from '../util/cookies';

const headerStyle = css`
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  margin-bottom: 10px;
`;
const upperBanner = css`
  padding: 5px;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  border-bottom: solid 0.5px #666;
  width: 100%;
`;

const headerContentStyles = css`
  padding: 8px 24px;
  background: #f7f7f7;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 13px;
  height: 64px;
  min-height: 64px;
  width: 100%;

  .navContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    div {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      display: flex;
      font-size: 18px;
      margin-right: 36px;
    }
    .colorLogo {
      color: #ffa500;
    }
  }
  nav > a {
    margin-left: 16px;
  }
  .headerActions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    img {
      width: 17px;
      height: 18px;
    }
    div {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      justify-content: center;
      align-items: center;
      span {
        padding-top: 8px;
      }
    }
  }
`;

export default function Header(props) {
  // const [cart, setCart] = useState(props.quantityInCart);
  // console.log(props);

  // const clearedProps = props.cartProps.props.foundgoods;

  // let totalQ = 0;
  // for (let i = 0; i < clearedProps.length; i++) {
  //   totalQ += clearedProps[i].quantity;
  // }

  // useEffect(() => {
  //   for (let i = 0; i < clearedProps.length; i++) {
  //     totalQ += clearedProps[i].quantity;
  //   }
  // }, [clearedProps]);

  // console.log(totalQ);
  return (
    <header css={headerStyle}>
      <div css={upperBanner}>Free delivery from 30€ and free returns</div>
      <div css={headerContentStyles}>
        <div className="navContainer">
          <Link href="/">
            <div>
              <span className="colorLogo">orange</span>
              <span>orange</span>
            </div>
          </Link>
          <nav>
            <a href="/women">Women</a>
            <a href="/men">Men</a>
            <a href="/t-shirt">All T-shirts</a>
            <a href="/products">Inspiration</a>
          </nav>
        </div>

        <div className="headerActions">
          <div className="searchfield">
            <img src="/search.jpeg" className="searchIcon" alt="search icon" />
            <span>Search</span>
          </div>
          <div>
            <Link href="/login">
              <div>
                <img
                  src="/icon.jpeg"
                  className="signinIcon"
                  alt="account icon"
                />
                <span>Sign in</span>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/">
              <div>
                <img
                  src="/heart.jpeg"
                  className="wishlistIcon"
                  alt="wishlist icon"
                />
                <span>Wishlist</span>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/cartPage">
              <div>
                <img
                  src="/shopping.jpeg"
                  className="cartIcon"
                  alt="shopping bag icon"
                />
                <span>Shopping bag</span>
                {/* {totalQ > 0 && <span> {totalQ}</span>} */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

// export function getServerSideProps(context) {
//   // 1. Get the value of the cookie from the request object
//   const originalCart = JSON.parse(context.req.cookies.cart || '[]');
//   const quantityInCart = originalCart.map((item) => {
//     return item.quantity;
//   });
//   console.log('here it is', quantityInCart);
//   return {
//     props: {
//       quantityInCart: quantityInCart,
//     },
//   };
// }
