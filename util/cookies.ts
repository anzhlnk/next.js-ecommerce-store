import Cookies from 'js-cookie';
import { ItemInCart } from '../pages/tshirts/[tshirtId]';

export function getParsedCookie(key: string) {
  const cookieValue = Cookies.get(key);
  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key: string, value: ItemInCart[]) {
  Cookies.set(key, JSON.stringify(value));
}

export function deleteCookie(key: string) {
  Cookies.remove(key);
}
