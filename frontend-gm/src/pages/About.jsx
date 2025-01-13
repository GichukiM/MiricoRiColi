// import React from 'react'
import Newsletter from "../components/Newsletter";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src="/Hero-2.jpg" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
          At Mirico Ri Coli, we believe that the foundation of style lies in timeless craftsmanship and luxurious materials. Our passion for delivering the finest leather footwear drives us to create shoes that offer the perfect blend of elegance, comfort, and durability. Every pair is crafted with meticulous attention to detail, ensuring our customers step out in confidence, ready to make a statement.
          </p>
          <p>
          From classic designs to modern trends, we strive to bring the finest options to the modern gentleman. Join us on our journey to redefine what it means to walk in style.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
          Our mission is simple: to provide every customer with shoes that combine exceptional craftsmanship, lasting comfort, and timeless design. We aim to deliver footwear that not only complements your style but enhances your everyday experiences.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
          We use only the finest materials and take pride in the precision of our craftsmanship. Each pair of shoes undergoes rigorous quality checks to ensure they meet the highest standards of durability and style.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className="text-gray-600">
          Shopping with us is a breeze, whether online or in-store. We offer hassle-free returns, easy exchanges, and fast shipping, ensuring you get your perfect pair with minimal effort.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
          Our commitment to customer satisfaction goes beyond a transaction. We are here to assist you with personalized advice, quick responses, and ongoing support, making sure you have a smooth and enjoyable shopping experience.
          </p>
        </div>
      </div>

    <Newsletter />

    </div>
  );
};

export default About;
