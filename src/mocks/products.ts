import { ProductList } from '../types/product/Product.types';

export const products: ProductList = [
  {
    size: {
      uk: 30,
      us: 'm'
    },
    id: '2106fcb3-107e-4846-ae4c-310f60e8bf7b',
    availability: {
      quantity: 2,
      shipping: 'Delivery in 2 days',
      available: true
    },
    category: 'narrow',
    image: {
      thumbnail: '/url',
      full: '/url',
      product: '/url'
    },
    largeDescription: 'dskjacnjksd',
    smallDescription: 'aksd ckcj',
    pricing: 1200,
    quality: 'blended',
    ratingAndReviews: {
      id: 'a95cc0d9-5757-4800-9210-ac913a836483',
      productId: '2106fcb3-107e-4846-ae4c-310f60e8bf7b',
      value: [
        {
          rating: 3.2,
          reviews: 'hjsdacbjhsd'
        }
      ]
    },
    suitability: '21-30'
  }
];
