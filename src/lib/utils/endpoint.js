export const BASEURL = 'http://localhost:3000/api';
export const LOGIN_ENDPOINT = `${BASEURL}/auth-service/login`;
export const PRODUCTS_ENDPOINT = `${BASEURL}/product-service/products`;
export const PRODUCT_DETAIL_ENDPOINT = (id) => `${BASEURL}/product-service/products/${id}`;