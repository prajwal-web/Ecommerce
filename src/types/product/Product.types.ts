import { TRatingReviews } from './Ratings.types';

export type Product = {
  id: string;
  size: {
    uk: 28 | 30 | 32 | 34 | 36;
    us: 's' | 'm' | 'l' | 'xl' | '2xl';
  };
  quality: 'cotton' | 'blended' | 'spandex';
  suitability: '14-20' | '21-30' | '31-40';
  pricing: number;
  image: {
    thumbnail: string;
    product: string;
    full: string;
  };
  category: 'baggy' | 'narrow' | 'bootcut' | 'straight';
  largeDescription: string;
  smallDescription: string;
  availability: {
    available: boolean;
    quantity: number;
    shipping: string;
  };
  ratingAndReviews: TRatingReviews;
};

export type ProductList = Product[];
export type TProductListComponent = Omit<Product, 'quality' & 'suitability' & 'largeDescription' & 'category'>;
