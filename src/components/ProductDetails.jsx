import React, { useState } from 'react'
import Star from "../assets/svg/Star 1.svg"
const ProductDetails = () => {
    const [count, setCount] = useState(0); 

    function increment() {
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }
  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-full">
    <article className="text-dark px-5">
      <ul className='sm:text-.8rem md:text-1rem lg:text-1.8rem'>
        <li className='mb-3'>Brand: LG</li>
        <li className='mb-3'>Model: OLED42C2PSA</li>
        <li className='mb-3'>Availability: Only 2 in Stock</li>
      </ul>
      <h1 className="text-1.3rem  sm:text-1.3rem md:text-20rem lg:text-3.2rem font-medium leading-normal">
        LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
      </h1>
      <ul className="flex my-5 gap-2">
        <li><img src={Star} className='sm:w-6 max-sm:w-6 md:w-7 lg:w-auto' alt=""/></li>
        <li><img src={Star} className='sm:w-6 max-sm:w-6 md:w-7 lg:w-auto' alt=""/></li>
        <li><img src={Star} className='sm:w-6 max-sm:w-6 md:w-7 lg:w-auto' alt=""/></li>
        <li><img src={Star} className='sm:w-6 max-sm:w-6 md:w-7 lg:w-auto' alt=""/></li>
        <li><img src={Star} className='sm:w-6 max-sm:w-6 md:w-7 lg:w-auto invert grayscale opacity-20' alt=""/></li>
      </ul>
      <ul className="list-disc sm:text-.8rem md-text-1rem lg:text-1.8rem ml-5 border-b-2 border-gray pb-5 my-8">
        <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
        <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
        <li>Hands-free Voice Control, Always Ready</li>
        <li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
        <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
      </ul>
      <ul className="flex flex-wrap whitespace-nowrap gap-5 text-text-dark border-b-2 border-gray pb-5 my-8 sm:text-.8rem md:text-1rem lg:text-1.8rem">
        <li><button className="w-48 py-3 border-red border text-red"> 106 cm (42)</button> </li>
        <li><button className="w-48 py-3"> 121 cm (48)</button> </li>
        <li><button className="w-48 py-3"> 139 cm (55)</button></li>
        <li><button className="w-48 py-3"> 164 cm (65)</button></li>
        <li><button className="w-48 py-3"> 196 cm (77)</button></li>
        <li><button className="w-48 py-3">210 cm (83)</button></li>
      </ul>
      <p>
        <span className="text-dark sm:text-.8rem md:text-1rem lg:text-1.6rem">USD(incl. of all taxes)</span>
        <h5 className="text-dark sm:text-1.3rem md:text-1.6rem lg:text-3.2rem">$600.72 <small className="opacity-30 sm:text-1rem md:text-1.5rem lg:text-2.4rem line-through">$800.00</small></h5>
      </p>
      <div className="flex gap-8">
        <div className='xs:text-1.2rem sm:text-1.4rem  md:text-2rem lg:text-3.2rem border-2 border-gray flex'>
            <button className='xs:px-5 sm:px-5 md:px-5 lg:px-7 hover:bg-red hover:text-white' onClick={decrement}>-</button>
            <label className='border-x-2 border-gray  xs:px-5 sm:px-5 md:px-5 lg:px-7'>{count}</label>
            <button  className='xs:px-5 sm:px-5 md:px-5 lg:px-7 hover:bg-red hover:text-white' onClick={increment}>+</button>
        </div>
        <button className="bg-red text-white sm:py-0 md:py-0 lg:p-4 min-w-1/6 sm:text-.8rem md:text-1.4rem lg:text-1.8rem whitespace-nowrap px-3">Buy Now</button>
        <button className="border-red border text-red sm:py-0 md:py-0 lg:p-4 min-w-1/6 sm:text-.8rem md:text-1.4rem lg:text-1.8rem whitespace-nowrap px-3">Add to cart</button>
      </div>
    </article>
  </div>
  )
}

export default ProductDetails
