import { createContext, SetStateAction, Dispatch } from 'react';
import { ProductList } from '../types/product/Product.types';

const initialProductsState: ProductList = [];

const setProducts: Dispatch<SetStateAction<ProductList>> = () => initialProductsState;

export const ProductContext = createContext({
  products: initialProductsState,
  setProducts
});
