import { createContext, Dispatch, SetStateAction } from 'react';
import { ProductList } from '../types/product/Product.types';


const initialProductsState: ProductList = [];

const setProducts: Dispatch<SetStateAction<ProductList>> = () => initialProductsState;

export const MyContext = createContext({
  products: initialProductsState,
  setProducts
});