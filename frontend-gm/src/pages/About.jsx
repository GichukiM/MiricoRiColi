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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            nisi voluptatibus nulla culpa odit velit dolorum, doloribus eius
            ipsum dolorem minus nesciunt facilis, tempore sed inventore
            accusantium omnis molestiae alias consequatur quia praesentium
            veritatis numquam deserunt? Nemo voluptatum itaque modi accusamus
            amet animi molestias officiis doloremque. Laudantium voluptates
            eveniet aperiam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            incidunt nihil exercitationem reiciendis voluptate, asperiores
            corporis quas earum quam odit ad, explicabo sunt officiis ratione
            dolores itaque enim maxime. Nobis iste magni velit dolores eius
            quisquam modi laudantium, placeat, animi at ipsa aperiam quod,
            ducimus voluptatem exercitationem veritatis consequatur nisi
            voluptate magnam minima repellat odit.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur aliquam, doloribus officiis adipisci tempore voluptate,
            ex maiores quasi voluptates animi temporibus in aperiam?
            Reprehenderit nostrum sed architecto error aliquid fugit!
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            non voluptatum, quae quidem commodi minus?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            non voluptatum, quae quidem commodi minus?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            non voluptatum, quae quidem commodi minus?
          </p>
        </div>
      </div>

    <Newsletter />

    </div>
  );
};

export default About;
