import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
// import Slider, { Range } from 'rc-slider';
import { tshirtDataBase } from '../util/database';

const contentAll = css`
  margin: 100px 24px 8px;
`;

const heading = css`
  display: flex;
  flex-direction: row;
  padding: 29px 0 35px;
  Image {
    cursor: pointer;
  }

  h1 {
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

const priceSlider = css`
  padding: 24px 0px 24px 0px;
  width: 310px;
  border: 1px solid #e6e6e6;
  padding: 10px 64px;
  margin-bottom: 13px;
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

export default function listTshirts(props) {
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
        <h1>/ Men</h1>
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
          <div css={priceSlider}>Price</div>
          {/* <Slider min="0" max="50" defaultValue={[0, 50]} minDistance={3} /> */}
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
            <h1>Men T-shirts</h1>
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
            {props.tshirts.map((tshirt) => {
              if (tshirt.category === 'man') {
                return (
                  <div key={`tshirt-${tshirt.id}`} css={tshirtListItemStyles}>
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
                      <div>{tshirt.size.join(' ')}</div>
                      <div>€ {tshirt.price}</div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
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
