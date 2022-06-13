import Cookies from 'js-cookie';
import {
  deleteCookie,
  getParsedCookie,
  setStringifiedCookie,
} from '../cookies';

// Cookie test N1/ Setting, getting, deleting the cookie
test('set, gets and delete a cookie', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: 1, quantity: 2 }],
  };
  // 1. Make sure that the return value of the function is undefined
  // Use .toBe to compare primitive values or to check referential identity of object instances
  expect(getParsedCookie(cookie.key)).toBe(undefined);

  // 2. Set the cookie value and test that the value was updated
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();

  // 3. Use .toStrictEqual to test that objects have the same types as well as structure
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  // 4. Test deletion of cookies
  expect(deleteCookie(cookie.key)).toBe(undefined);
  expect(getParsedCookie(cookie.key)).toBe(undefined);
});

// Cookie test N2/ Updating the values
function updatingCookies() {
  const currentCart = Cookies.get('cart') ? getParsedCookie('cart') : [];
  let newCart;
  const tshirtInCart = currentCart.find(
    (currenttshirt) => 1 === currenttshirt.id,
  );
  if (tshirtInCart) {
    // increase quantity counter in the object that was fetched using cookie
    tshirtInCart.quantity = tshirtInCart.quantity + 3;
    newCart = currentCart;
  } else {
    //  add the value
    newCart = [...currentCart, { id: 1, quantity: 3 }];
  }
  setStringifiedCookie('cart', newCart);
}

test('updating quantity in item of cookie', () => {
  const cookie = {
    key: 'cart',
    value: [{ id: 1, quantity: 2 }],
  };

  const cookieResult = {
    key: 'cart',
    value: [{ id: 1, quantity: 5 }],
  };

  // 1. Set the cookie value and test that the value was updated
  expect(() => setStringifiedCookie(cookie.key, cookie.value)).not.toThrow();

  // 2. Use .toStrictEqual to test that objects have the same types as well as structure
  expect(getParsedCookie(cookie.key)).toStrictEqual(cookie.value);

  // 3. Update the value
  expect(() => updatingCookies()).not.toThrow();

  // 4. Check the result
  expect(getParsedCookie(cookieResult.key)).toStrictEqual(cookieResult.value);
});
