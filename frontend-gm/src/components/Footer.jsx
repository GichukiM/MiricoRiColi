
import { FaFacebookF, FaInstagram, FaPinterest, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    
    <div className="">

        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            <div className="">
               <h1 className="mb-5 w-32">MIRICO RI COLI</h1>
               <p className="w-full md:w-2/3 text-gray-600">Step into Style and Comfort with Timeless Leather products. Designed for the Modern Gentleman, Our Craftsmanship Combines Elegance and Durability to Keep You Ahead, One Step at a Time.</p> 

                <div className="mt-5">
                    <p className="w-full md:w-2/3 text-gray-600"> <span className="text-gray-900">Address: </span> 236 Harambee Hse, strt 5, Nairobi</p>
                    <p className="w-full md:w-2/3 text-gray-600"> <span className="text-gray-900"> Phone: </span>(254) 723-334-555</p>
                    <p className="w-full md:w-2/3 text-gray-600"> <span className="text-gray-900"> Email: </span> info@miricoricoli.com</p>
                    <p className="w-full md:w-2/3 text-gray-600"> <span className="text-gray-900">Hours: </span> 10:00 - 18:00 Mon-Sat</p>
                </div>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li><a href="/about" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                    <li><a href="/all-products" className="text-gray-600 hover:text-gray-800">Products</a></li>
                    <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                    <li><a href="/orders" className="text-gray-600 hover:text-gray-800">Orders</a></li>
                    <li><a href="/cart" className="text-gray-600 hover:text-gray-800">Cart</a></li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+254 712345765</li>
                    <li>info@miricoricoli.com</li>
                </ul>
                <div className="flex gap-2 mt-5">
                    <a href="#"><FaInstagram className="hover:text-pink-600" /></a>
                    <a href="#"><FaFacebookF className="hover:text-blue-700" /></a>
                    <a href="#"><FaXTwitter className="hover:text-black"/></a>
                    <a href="#"><FaPinterest className="hover:text-pink-600" /></a>
                    <a href="#"><FaYoutube className="hover:text-red-600" /></a>
                </div>
            </div>

            </div>

            <div className="flex flex-col gap-1 text-gray-600">

                <hr />
                <p className="py-5 text-sm text-center">All rights reserved 2025 &copy Mirico Ri Coli - All rights reserved.</p>

        </div>

    </div>
  )
}

export default Footer