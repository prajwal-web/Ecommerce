import { productsJSON } from './data/productImages';
export function getImages(productId: string) {
  //https://res.cloudinary.com/dd8im2juc/image/upload/v1740543959/logo-zune_odse5p.svg
  return new Promise((resolve, _reject) => {
    const imagesJSON = productsJSON();
    const singleImage = productId ? imagesJSON[productId] : undefined;
    setTimeout(() => {
      resolve({
        data: {
          images: singleImage ? singleImage : imagesJSON
        }
      });
    }, 2500);
  });
}
