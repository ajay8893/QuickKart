import Navbar from "../../components/layout/Navbar"
import SidebarFilters from '../ProductsListing/components/SidebarFilters'
import ProductSection from '../ProductsListing/components/ProductSection'

function ProductListingPage() {
  return (
    <main className="w-[100%]">
        <section>
            <Navbar />
        </section>
        <section className="flex flex-col-2 mt-4 gap-2 mx-4">
            <SidebarFilters/>
            <ProductSection/>
        </section>
    </main>
  )
}

export default ProductListingPage
