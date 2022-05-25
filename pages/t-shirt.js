import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import { tshirtDataBase } from '../util/database';

const tshirtListStyles = css`
  background: #dfd;
  padding: 10px;
`;

const tshirtListItemStyles = css`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 12px 16px;
  background: #fdfdfd;

  & + & {
    margin-top: 10px;
  }
`;

export default function listTshirts(props) {
  return (
    <div>
      <h1>All products</h1>
      <div css={tshirtListStyles}>
        {props.tshirts.map((tshirt) => {
          return (
            <div key={`tshirt-${tshirt.id}`} css={tshirtListItemStyles}>
              <Link href={`/${tshirt.id}`}>
                <Image
                  src={`/${tshirt.id}.jpg`}
                  alt="girl with white shirt"
                  width="392"
                  height="588"
                />
              </Link>
              <div>Category: {tshirt.category}</div>
              <div>Color:{tshirt.color}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function getServerSideProps() {
  console.log(tshirtDataBase);

  return {
    props: { tshirts: tshirtDataBase },
  };
}
