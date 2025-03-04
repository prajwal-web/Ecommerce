import React, { useState } from 'react';
import { ProductContext } from '../ProductContext';
import { products } from '../../mocks/products';
import { ProductList, TOmitImage } from '../../types/product/Product.types';

console.log(products)

type TProductProvider = {
  children: React.ReactNode;
};

const ProductProvider = ({ children }: TProductProvider) => {
  const [product, setProduct] = useState<TOmitImage>(products);
  return (
    <div>
      <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>
    </div>
  );
};

export default ProductProvider;
