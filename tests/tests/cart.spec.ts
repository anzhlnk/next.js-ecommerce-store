import { expect, test } from '@playwright/test';

const baseUrl = 'http://localhost:3000/';

// E2E: Add to cart, change quantity and remove from cart
test('add to cart test', async ({ page }) => {
  // go to a random product page
  await page.goto(`${baseUrl}tshirts/${Math.floor(Math.random() * 9) + 1}`);
  // click on an "add to cart" button
  await page.locator('text=Add to shopping bag').click();
  // check the Q in the header
  const countInHeader = await page.locator('data-test-id=cart-count');
  await expect(countInHeader).toHaveText('1');
  // define the cart link
  const cartInHeader = await page.locator('data-test-id=cart-link');
  // click on the cart link
  await cartInHeader.click();
  //  go to the cart page, check the url
  await expect(page).toHaveURL(`${baseUrl}shopping-bag`);
  // find increase Q button  by id
  const increaseQInCart = await page.locator('data-test-id=increase-button');
  // click on the + button
  await increaseQInCart.click();
  await increaseQInCart.click();
  await increaseQInCart.click();
  // check the Q in the header
  await expect(countInHeader).toHaveText('4');

  // check the quantity in the cart
  const productQ = await page.locator(
    '[data-test-id^="cart-product-quantity-"]',
  );
  await expect(productQ).toHaveText('4');
  // find the delete button by  its id and delete the product
  const deleteQ = await page.locator('[data-test-id^="cart-product-remove-"]');
  await deleteQ.click();
  await expect(countInHeader).toHaveText('0');
  const titleLocator = await page.locator('data-test-id=empty-cart-text');
  await expect(titleLocator).toHaveText('Your Cart is Empty!');
});

// Set up GitHub Actions to automatically test your code
