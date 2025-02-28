import React, { useState } from 'react';
import { ProductContext } from '../ProductContext';
import { products as productMock } from '../../mocks/products';
import { ProductList } from '../../types/product/Product.types';

type TProductProvider = {
  children: React.ReactNode;
};

const ProductProvider = ({ children }: TProductProvider) => {
  const [products, setProducts] = useState<ProductList>(productMock);
  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>{children}</ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;
