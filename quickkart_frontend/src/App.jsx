import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import ProductListingPage from "./pages/ProductsListing/ProductListingPage"
import ProductDetails from '@/pages/ProductDetails/ProductDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={ <ProductListingPage /> }/>
      <Route path='/product-details' element={ <ProductDetails /> }/>
    </Routes>
  
  )
}

export default App
