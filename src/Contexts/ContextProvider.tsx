import { MyContext } from './myContext';
import { useState } from 'react';
import { products } from '../mocks/products';
const ContextProvider = () => {
  const [product, setProduct] = useState(products);
  console.log(product);
  return (
    <>
      <MyContext.Provider value={{ product, setProduct }}></MyContext.Provider>
    </>
  );
};

export default ContextProvider;
