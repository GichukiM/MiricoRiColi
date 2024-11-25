import { MdOutlineCurrencyExchange } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
        <MdOutlineCurrencyExchange className="w-8 h-8 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div>
        <MdHighQuality className="w-8 h-8 m-auto mb-5" />
        <p className="font-semibold">7 Day Return Policy</p>
        <p className="text-gray-400">We provide 7 day free return policy</p>
        </div>
        <div>
        <BiSupport className="w-8 h-8 m-auto mb-5" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 247 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy