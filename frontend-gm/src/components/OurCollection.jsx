// import React from 'react'

import Title from "./Title";

const OurCollection = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"OUR "} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Step into style with our expertly crafted footwear and accessories,
          designed to elevate your everyday look with timeless elegance.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 y-6">

        <div className="relative group h-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhpemguqv/image/upload/v1734935110/ahyjlekmc0mpscz7qpwi.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-xl font-semibold mb-2">Oxfords</p>
            <a
              href="/all-products?subCategory=Oxford"
              className="px-6 py-3 text-black bg-white font-semibold transform group-hover:scale-105 transition-all"
            >
              Shop Here
            </a>
          </div>
        </div>

        <div className="relative group h-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhpemguqv/image/upload/v1734936312/bp0r01jictqiaxsvvroe.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-xl font-semibold mb-2">Loafers</p>
            <a
              href="/all-products?subCategory=Loafers"
              className="px-6 py-3 text-black bg-white font-semibold transform group-hover:scale-105 transition-all"
            >
              Shop Here
            </a>
          </div>
        </div>

        <div className="relative group h-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhpemguqv/image/upload/v1734937195/ffoxcdwgdwdekswc13ez.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-xl font-semibold mb-2">Monk Straps</p>
            <a
              href="/all-products?subCategory=Monk Straps"
              className="px-6 py-3 text-black bg-white font-semibold transform group-hover:scale-105 transition-all"
            >
              Shop Here
            </a>
          </div>
        </div>

        <div className="relative group h-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhpemguqv/image/upload/v1734937601/s71kcz0fh35vn8nfuhta.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-xl font-semibold mb-2">Boots</p>
            <a
              href="/all-products?subCategory=Boots"
              className="px-6 py-3 text-black bg-white font-semibold transform group-hover:scale-105 transition-all"
            >
              Shop Here
            </a>
          </div>
        </div>

        <div className="relative group h-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhpemguqv/image/upload/v1734939912/jgycnfwbodrrqi6z40bl.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-xl font-semibold mb-2">Derbies</p>
            <a
              href="/all-products?subCategory=Derbies"
              className="px-6 py-3 text-black bg-white font-semibold transform group-hover:scale-105 transition-all"
            >
              Shop Here
            </a>
          </div>
        </div>

        <div className="relative group h-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dhpemguqv/image/upload/v1734944763/weg26heix4w7w7fkowfe.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white text-xl font-semibold mb-2">Accessories</p>
            <a
              href="/all-products?subCategory=Belts,Wallets,Gloves,Bags,Shoe%20Care%20Products"
              className="px-6 py-3 text-black bg-white font-semibold transform group-hover:scale-105 transition-all"
            >
              Shop Here
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurCollection;
