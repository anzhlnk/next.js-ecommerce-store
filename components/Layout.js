import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

const headerPosition = css`
  position: fixed;
  top: 0;
  left: 0;
`;

export default function Layout(props) {
  return (
    <div>
      <Header css={headerPosition} cartQ={props.cartQ} />
      {props.children}
      <Footer />
    </div>
  );
}
