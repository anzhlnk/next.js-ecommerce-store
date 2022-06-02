import { css } from '@emotion/react';
import { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const headerPosition = css`
  position: fixed;
  top: 0;
  left: 0;
`;

export default function Layout(props) {
  // const cartProps = props.children;
  // const clearedProps = props.children.foundgoods;
  // const [cartProps, setCartProps] = useState(clearedProps);
  // console.log(props.children);
  return (
    <div>
      <Header css={headerPosition} />
      {props.children}
      <Footer />
    </div>
  );
}
