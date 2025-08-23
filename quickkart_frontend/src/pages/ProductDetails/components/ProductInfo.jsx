import { ShoppingCart, Heart } from 'lucide-react'
import model1 from '../../../assets/product/model1.jpg'
import Button from '../../../components/ui/Button'
import QuantitySelector from '../../../components/ui/QuantitySelector'
import ColorSelector from '../../../components/ui/ColorSelector'
import SizeSelector from '../../../components/ui/SizeSelector'
import PriceDisplay from '../../../components/ui/PriceDisplay'

const images = [
    model1,
    model1,
    model1,
    model1,
    model1,
    model1,
    model1,

]

function ProductInfo() {
  return (
    <section className='relative w-[100%] h-[90vh] flex flex-row'>

      {/* left content */}
      <div className='w-[50%] flex flex-row-reverse justify-center items-center ml-15 mb-15 mt-30 '>
        {/* main model */}
        <div className=' ml-10'>
            <img src={model1} alt="product"
                className='w-[460px] h-[580px] aspect-square object-cover rounded-xl'
            />
        </div>
          {/* thumbnails */}
          <div className='flex-row space-y-2 w-[80px] h-[45%] ml-4  overflow-scroll no-scrollbar'>
            {images.map((img, index) =>(
                <img
                    key={index}
                    src={img}
                    alt={`thumbnail-${index}`}
                    className='w-[70px] h-[80px]'
                />
            ))}
          </div>
      </div>


      {/* right content */}
      <div className='relative w-[40%] flex flex-col gap-6 justify-start left-18 top-30'>
        {/* brand and  title */}
        <div className='flex flex-col'>
          <h1 className='flex  text-[1rem] font-semibold text-jordy-blue-700'>THE BARE HOUSE</h1>
          <h2 className='flex  text-[1.8rem]'>Men Slim Fit Spread-Collar Shirt</h2>
        </div>
        {/* description */}
        <div className=' flex flex-wrap bottom-5 w-[50%]'>
          <p className=' '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia provident illo, quisquam minima cupiditate aliquid voluptate? Laboriosam, praesentium totam.</p>
        </div>
        {/* price */}
        <div className='h-[1%]'>
          <PriceDisplay price={800} discount={20}/>
        </div>
        {/* size and color selector */}
        <div className=''>
          <div>
            <ColorSelector
              colors={[
                  { name: "Putty", hex: "#D3C7B8" },
                  { name: "Black", hex: "#000000" },
                  { name: "Navy", hex: "#1D3557" }
                ]}
            />
          </div>
          <div>
            <SizeSelector
              sizes={["XS", "S", "M", "L", "XL"]} />
          </div>
        </div>
        {/* quantity and add to cart button */}
        <div className="flex flex-row gap-6">
          <div>
            <QuantitySelector/>
          </div>
          <div className='flex'>
            <Button className=' flex justify-center items-center gap-3 text-[1.2rem] w-[300px] h-[50px] hover:text-yellow-300'>
              <ShoppingCart/>
              Add to cart
            </Button>
          </div>
          <div className=' flex bg-jordy-blue-600 text-white w-[50px] justify-center items-center rounded-[20px] hover:bg-jordy-blue-700 hover:text-yellow-300'>
            <Heart size={30}/>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default ProductInfo
