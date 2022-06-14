import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import Slider, { Range } from 'rc-slider';
import { getProducts, getSizes } from '../util/database';

const contentAll = css`
  margin: 100px 24px 96px;
`;

const heading = css`
  display: flex;
  flex-direction: row;
  padding: 29px 0 35px;
  Image {
    cursor: pointer;
  }

  p {
    padding-left: 18px;
    font-size: 13px;
    color: #b2b2b2;
  }
`;
const content = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const contentLeftSide = css`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const contentRighSide = css`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 970px;
  .contentTop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .contentTop h1 {
    font-size: 24px;
  }
  .contentTop span {
    font-size: 14px;
    margin-right: 18px;
  }

  .contentTop select {
    padding: 9px 38px 9px 12px;
    border: 1px solid #d8d8d8;
    border-radius: 50px;
  }
`;

const categoryCheckbox = css`
  display: flex;
  flex-direction: column;
  padding: 24px 0px 24px 0px;
  width: 310px;
  border: 1px solid #e6e6e6;
  padding: 10px 64px;
  margin-bottom: 13px;

  .checkboxContent {
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 16px;
    padding-bottom: 18px;
  }
  input {
    width: 26px;
    height: 26px;
  }
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 18px;
  }
  span {
    font-size: 14px;
    padding-left: 18px;
  }
`;

const tshirtListStyles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #fdfdfd;
`;

const tshirtListItemStyles = css`
  border-radius: 4px;
  padding: 12px 0px;
  background: #fdfdfd;
  font-size: 14px;

  & {
    margin-top: 10px;
    margin-right: 20px;
  }

  .itemInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const sizesAll = css`
  display: flex;
  flex-direction: row;
`;
const tshirts = (isAvailable) => css`
  color: ${isAvailable ? '#121314' : '#a9a8a8'};
  padding-right: 12px;
`;

export default function ListTshirts(props) {
  let isAvailable = false;
  return (
    <>
      <Head>
        <title>All T-shirts | orange orange</title>
        <meta name="description" content="All products" />
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
          <p>/ All T-Shirts</p>
        </div>
        <div css={content}>
          <div css={contentLeftSide}>
            <div css={categoryCheckbox}>
              <p>Category</p>
              <div className="checkboxContent">
                <label>
                  <input type="checkbox" />
                  <span>Women</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Men</span>
                </label>
              </div>
            </div>
            <div css={categoryCheckbox}>
              <p>Price</p>
              <div className="checkboxContent">
                <label>
                  <input type="checkbox" />
                  <span>€1- €30</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>€31-€40</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>€41-€50</span>
                </label>
              </div>
            </div>
            <div css={categoryCheckbox}>
              <p>Size</p>

              <div className="checkboxContent">
                <label>
                  <input type="checkbox" />
                  <span>XS</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>S</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>M</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>L</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>XL</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>XXL</span>
                </label>
              </div>
            </div>
            <div css={categoryCheckbox}>
              <p>Color</p>
              <div className="checkboxContent">
                <label>
                  <input type="checkbox" style={{ backgroundColor: 'red' }} />
                  <span>White</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Brown</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Grey</span>
                </label>
                <label>
                  <input type="checkbox" />
                  <span>Pink</span>
                </label>
              </div>
            </div>
          </div>
          <div css={contentRighSide}>
            <div className="contentTop">
              <h1>All T-shirts</h1>
              <div>
                <span>Sort by: </span>
                <select>
                  <option>Popular</option>
                  <option>New</option>
                  <option>Popular</option>
                </select>
              </div>
            </div>

            <div css={tshirtListStyles}>
              {props.productDatabase.map((tshirt) => {
                return (
                  <div key={`tshirt-${tshirt.id}`} css={tshirtListItemStyles}>
                    <a data-test-id={`product-${tshirt.id}`}>
                      <Link href={`/tshirts/${tshirt.id}`}>
                        <div>
                          <Image
                            src={`/${tshirt.id}.jpg`}
                            alt="product image"
                            width="262"
                            height="393"
                          />
                        </div>
                      </Link>
                      <div>{tshirt.name}</div>
                      <div className="itemInfo">
                        <div css={sizesAll}>
                          {/* {tshirt.size} */}
                          {props.sizeDatabase.map((oneSize) => {
                            oneSize.size === tshirt.size
                              ? (isAvailable = true)
                              : (isAvailable = false);
                            return (
                              <div
                                key={`availableSize-${oneSize.size}`}
                                css={tshirts(isAvailable)}
                              >
                                {oneSize.size}
                              </div>
                            );
                          })}
                        </div>
                        <div>€ {tshirt.price}</div>
                      </div>
                    </a>
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

export async function getServerSideProps() {
  const productDatabase = await getProducts();
  const sizeDatabase = await getSizes();
  console.log(sizeDatabase);
  return {
    props: { productDatabase: productDatabase, sizeDatabase: sizeDatabase },
  };
}
