import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export function decodeJWT(token: string) {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export function getTokenFromCookie() {
  return Cookies.get('token');
}

export function removeTokenCookie() {
  Cookies.remove('token');
}
