import ProductInfo from "./components/ProductInfo"
import ReviewSection from "./components/ReviewSection"
import NavBar from '../../components/layout/Navbar'
import ProductCarousel from '../Home/components/ProductCarousel'
import Footer from '../../components/layout/Footer'
import products, { reviews } from '../../constants/data'

export default function ProductDetails() {
  return (
    <main className="relative w-[100%]">
      <section>
        <NavBar/>
      </section>

      <section>
        <ProductInfo/>
      </section>

      <section className="mx-10">
        <ReviewSection reviews={reviews}/>
      </section>

      <section className="mx-10">
        <ProductCarousel
        title="Related Products"
        products={products}
        link="/products/recommended"
      />
      </section>
      <section>
        <Footer/>
      </section>

    </main>
  )
}

