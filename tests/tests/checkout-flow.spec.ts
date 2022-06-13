import { expect, test } from '@playwright/test';

const baseUrl = 'http://localhost:3000/';

test('Checkout flow, payment page, thank you page', async ({ page }) => {
  // go to a random product page
  await page.goto(`${baseUrl}tshirts/${Math.floor(Math.random() * 9) + 1}`);
  // click on an "add to cart" button
  await page.locator('text=Add to shopping bag').click();
  // define the cart link
  const cartInHeader = await page.locator('data-test-id=cart-link');
  // click on the cart link
  await cartInHeader.click();
  // go to the cart page
  await page.waitForNavigation({ url: `${baseUrl}shopping-bag` });
  // find the checkoutt button  by id
  const checkoutButton = await page.locator('data-test-id=cart-checkout');
  // click on the + button
  await checkoutButton.click();
  await page.waitForNavigation({ url: `${baseUrl}checkout` });
  //  check the url
  await expect(page).toHaveURL(`${baseUrl}checkout`);
  // press confirm the order button before entering the info
  const confirmOrderButton = await page.locator(
    'data-test-id=checkout-confirm-order',
  );
  // fill the data in
  await page.fill('data-test-id=checkout-first-name', 'Marry');
  await page.fill('data-test-id=checkout-last-name', 'Peterson');
  await page.fill('data-test-id=checkout-email', 'marry@gmail.com');
  await page.fill('data-test-id=checkout-address', 'Dresdner strasse 2');
  await page.fill('data-test-id=checkout-city', 'Wien');
  await page.fill('data-test-id=checkout-postal-code', '1220');
  await page.fill('data-test-id=checkout-country', 'Austria');
  await page.fill('data-test-id=checkout-credit-card', '12345678');
  await page.fill('data-test-id=checkout-expiration-date', '12/24');
  await page.fill('data-test-id=checkout-security-code', '123');

  // after entering the data, press confirm order
  await confirmOrderButton.click();
  await page.waitForNavigation({ url: `${baseUrl}thankyou` });
  //  check the url
  await expect(page).toHaveURL(`${baseUrl}thankyou`);
});
