import { Route, Routes } from 'react-router';
import Home from '../components/feature/Home';
import ProductDisplay from '../Pages/ProductDisplay';
import Navbar from '../components/core/Navbar';
import FooterComponent from '../components/core/FooterComponent';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productdisplay" element={<ProductDisplay />} />
      </Routes>
      <FooterComponent />
    </>
  );
};

export default Layout;
