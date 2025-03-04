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
// import React, { useState } from 'react';
// import { MyContext } from './MyContext';
// import { products as productMock } from '../mocks/products';
// import { products } from '../mocks/products';
// import { ProductList } from '../types/product/Product.types';

// type TProductProvider = {
//   children: React.ReactNode;
// };

// const ProductProvider = ({ children }: TProductProvider) => {
//   const [products1, setProducts1] = useState<ProductList>(productMock);
//   const [product, setProduct] = useState<ProductList>(products);
//   return (
//     <div>
//       <MyContext.Provider value={{ products1, setProducts1 }}>{children}</MyContext.Provider>
//       <MyContext.Provider value={{ product, setProduct }}>{children}</MyContext.Provider>
//     </div>
//   );
// };
// export default ProductProvider;
