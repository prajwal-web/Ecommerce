import { createContext, SetStateAction, Dispatch } from 'react';
import { ProductList, TOmitImage } from '../types/product/Product.types';

const initialProductsState: ProductList = [];

const setProducts: Dispatch<SetStateAction<TOmitImage>> = () => initialProductsState;

export const ProductContext = createContext({
  products: initialProductsState,
  setProducts
});
