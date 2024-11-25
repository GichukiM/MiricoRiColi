
const Footer = () => {
  return (
    
    <div className="">

        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

            <div className="">
               <h1 className="mb-5 w-32">MIRICO RI COLI</h1>
               <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sed delectus iste magni reiciendis eligendi.</p> 
            </div>

            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Products</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+254 712345765</li>
                    <li>info@miricoricoli.com</li>
                </ul>
            </div>

            </div>

            <div className="flex flex-col gap-1 text-gray-600">

                <hr />
                <p className="py-5 text-sm text-center">All rights reserved 2024 &copy miricoricoli.com - All rights reserved.</p>

        </div>

    </div>
  )
}

export default Footer