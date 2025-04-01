/* eslint-disable @typescript-eslint/no-unused-vars */
import { products } from './products';

export function getProducts(productId: string = '') {
  return new Promise((resolve, _reject) => {
    const singleProduct = products.find((product) => product.id === productId);
    setTimeout(() => {
      resolve({
        data: {
          products: singleProduct ? singleProduct : products
        }
      });
    }, 3500);
  });
}
