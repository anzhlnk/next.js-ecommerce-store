import { css } from '@emotion/react';
import Link from 'next/link';

const footer = css`
  padding: 8px 24px;
  background: #f2f2f2;
  border-radius: 4px;
`;

const footerUpperPart = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;
const footerContentLeft = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 400px;

  .logoFooter {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    display: flex;
    font-size: 18px;
    margin-right: 36px;
    .colorLogo {
      color: #ffa500;
    }
  }
`;

export const social = css`
  a {
    text-decoration: none;
    color: #000;
  }
  svg {
    margin: 20px 20px 20px 0px;
    height: 22.75px;
    width: 22.75px;
  }
`;

const textFooter = css`
  margin-top: 24px;
  font-size: 13px;
  width: 400px;
  line-height: 190%;
`;

const footerList = css`
  font-size: 13px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  line-height: 190%;

  ul {
    list-style-type: none;
  }
`;

const footerLowerPart = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  font-size: 13px;
`;

export const lineStyle = css`
  border-width: 0.5px;
  border-color: #666;
  border-top: 0.98px;
  margin: 36px 0px;
`;

export default function Footer() {
  return (
    <footer css={footer}>
      <div css={footerUpperPart}>
        <div css={footerContentLeft}>
          <div className="logoFooter">
            <span className="colorLogo">orange</span>
            <span>orange</span>
          </div>
          <div css={textFooter}>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
          <div css={social}>
            <Link href="/">
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin"
                className="svg-inline--fa fa-linkedin fa-w-14 fa-fw"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </Link>
            <Link href="/">
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-square"
                className="svg-inline--fa fa-facebook-square fa-w-14 fa-fw"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
                />
              </svg>
            </Link>
            <Link href="/">
              <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter-square"
                className="svg-inline--fa fa-twitter-square fa-w-14 fa-fw"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div css={footerList}>
          <ul>
            <li>Shopping online</li>
            <li>
              <Link href="/">Order Status</Link>
            </li>
            <li>
              <Link href="/">Shipping and Delivery</Link>
            </li>
            <li>
              <Link href="/">Returns</Link>
            </li>
            <li>
              <Link href="/">Payment options</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>Information</li>
            <li>
              <Link href="/">Gift Cards</Link>
            </li>
            <li>
              <Link href="/">Find a store</Link>
            </li>
            <li>
              <Link href="/">Newsletter</Link>
            </li>
            <li>
              <Link href="/">Become a member</Link>
            </li>
            <li>
              <Link href="/">Site feedback</Link>
            </li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>
              <Link href="/">orangeorange@gmail.com</Link>
            </li>
            <li>
              <Link href="/">Hotline: +1 111 11 1 11</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr css={lineStyle} />
      <div css={footerLowerPart}>
        <span>© 2022 orange orange. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
