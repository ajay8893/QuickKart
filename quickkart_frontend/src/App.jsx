import { Routes, Route } from "react-router-dom"
// import Footer from "./components/layout/footer"
// import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home/Home"
import ProductDetails from '@/pages/ProductDetails/ProductDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product-details' element={ <ProductDetails />}/>
    </Routes>
  
  )
}

export default App
