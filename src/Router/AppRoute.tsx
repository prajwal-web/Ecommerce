
import { Route, Routes } from 'react-router'
import Home from '../components/feature/Home'
import ProductListingDetailsPage from '../Pages/ProductListingDetailsPage'

const AppRoute = () => {
  return (
    <>
    <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductListingDetailsPage />} />
    </Routes>
    </>
  )
}

export default AppRoute