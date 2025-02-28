import { TRatingReviews } from './Ratings.types';

export type Product = {
  id: string;
  size: {
    uk: 28 | 30 | 32 | 34 | 36;
    us: 's' | 'm' | 'l' | 'xl' | 'xxl';
  };
  quality: 'premium' | 'standard' | 'luxury' | 'blended';
  suitability: '14-20' | '21-30' | '31-40';
  pricing: number;
  image: {
    thumbnail: string;
    product: string;
    full: string;
  };
  category: 'wide' | 'casual' | 'formal' | 'sporty' | 'narrow';
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
export type TCarousel = Pick<Product, 'pricing' | 'smallDescription' | 'image' | 'id'>