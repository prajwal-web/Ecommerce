import Navbar from './core/Navbar';
import { Route, Routes } from 'react-router';
import Landingpage from './pages/Landingpage';
import ProductListingPage from './pages/ProductListingPage';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path="/products" element={<ProductListingPage />} />
      </Routes>
    </>
  );
};

export default Layout;
