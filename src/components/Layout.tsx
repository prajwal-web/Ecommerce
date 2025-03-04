import Navbar from './core/Navbar';
import { Route, Routes } from 'react-router';
import Landingpage from './pages/Landingpage';
import ProductListingPage from './pages/ProductListingPage';
import Footer from './feature/Footer';
import ProductDisplay from './pages/ProductDisplay';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Landingpage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/productDisplay" element={<ProductDisplay />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
