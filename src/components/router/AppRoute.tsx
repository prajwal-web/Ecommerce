import { BrowserRouter } from 'react-router';
import Layout from '../Layout';
import ProductProvider from '../../context/providers/ProductProvider';

const AppRoute = () => {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Layout />
        </ProductProvider>
      </BrowserRouter>
    </>
  );
};

export default AppRoute;
