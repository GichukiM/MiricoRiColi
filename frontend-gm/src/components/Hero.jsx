
// import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">Our BESTELLERS</p>
                </div>
                <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Timeless Elegance</h1>
                <p className="text-sm sm:text-sm lg:text-base py-2 text-[#616161]">Discover timeless designs </p>
                <p className="text-sm sm:text-sm lg:text-base py-2 text-[#616161]">
                Crafted for comfort and built to last.</p>
                <div className="flex items-center gap-2">
                    <a href="all-products" className="font-semibold text-sm md:text-base hover:p-3">SHOP NOW</a>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                </div>
            </div>
        </div>

        <img className="w-full sm:w-1/2" src="/Hero-2.jpg" alt="" />
    </div>
  )
}

export default Hero