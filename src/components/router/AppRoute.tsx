import { BrowserRouter } from 'react-router';
import Layout from '../Layout';
import ProductProvider from '../../context/providers/ProductProvider';

const AppRoute = () => {
  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ProductProvider>
    </>
  );
};

export default AppRoute;
