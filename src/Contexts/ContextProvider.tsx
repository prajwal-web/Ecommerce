import { MyContext } from './MyContext';
import { useState } from 'react';
import { products as mockProducts } from '../mocks/products';
import { ProductList } from '../types/product/Product.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ContextProvider = ({ children }: any) => {
  const [products, setProducts] = useState<ProductList>(mockProducts);
  console.log(products);

  return <MyContext.Provider value={{ products, setProducts }}>{children}</MyContext.Provider>;
};

export default ContextProvider;
