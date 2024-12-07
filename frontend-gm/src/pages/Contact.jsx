// import React from 'react'

import Newsletter from "../components/Newsletter";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact "} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src="/Hero-2.jpg" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            8928 Gichuki Lane <br /> Suite 123, Nanyuki, Kenya{" "}
          </p>
          <p className="text-gray-500">
            {" "}
            Tel: (254) 723-334-555 <br /> Email: admin@miricoricoli.com{" "}
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Mirico Ri Coli
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Contact;
