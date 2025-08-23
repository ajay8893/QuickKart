import NavBar from '../../components/layout/Navbar'
import CategoryNav from '../../components/layout/CategoryNav'
import HeroCarousel from './components/HeroCarousel';
import Section from "./components/Section"
import ProductCarousel from './components/ProductCarousel'
import Footer from '../../components/layout/Footer'

import hero1 from '../../assets/banner/hero1.jpg'
import hero2 from '../../assets/banner/hero2.jpg'


const products = [
  {
    id: 1,
    name: "Joyalukkas Pride Diamond Rose Gold Pendant",
    price: 250,
    oldPrice: 299,
    discount: 14,
    image: hero1,
    rating: 4,
  },
  {
    id: 2,
    name: "Georg Stainless Steel Wall Clock with White Dial",
    price: 100,
    image: hero2,
    rating: 5,
  },
  {
    id: 1,
    name: "Joyalukkas Pride Diamond Rose Gold Pendant",
    price: 250,
    oldPrice: 299,
    discount: 14,
    image: hero1,
    rating: 4,
  },
  {
    id: 2,
    name: "Georg Stainless Steel Wall Clock with White Dial",
    price: 100,
    image: hero2,
    rating: 5,
  },
  {
    id: 1,
    name: "Joyalukkas Pride Diamond Rose Gold Pendant",
    price: 250,
    oldPrice: 299,
    discount: 14,
    image: hero1,
    rating: 4,
  },
  {
    id: 1,
    name: "Joyalukkas Pride Diamond Rose Gold Pendant",
    price: 250,
    oldPrice: 299,
    discount: 14,
    image: hero1,
    rating: 4,
  },

];

export default function Home() {
  return (
    <div className='w-[100%]'>
      <NavBar/>
      <CategoryNav/>
      <div className='w-[100%] p-2'>
        <HeroCarousel/>
      </div>

      <Section title="Latest Products" link="/products/latest" products={products} />
      <Section title="Electronics" link="/products/electronics" products={products} />

      <div className='w-[98%] mx-4 '>
        <ProductCarousel
        title="Recommended for You"
        products={products}
        link="/products/recommended"
      />
      </div>

      <Footer/>
    </div>
  );
}
