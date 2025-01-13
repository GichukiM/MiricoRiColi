import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const NewProducts = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 5));
  }, [products]);


  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={`FEATURED NEW `} text2={`PRODUCTS`} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Explore Our Curated Selection of Fresh Arrivals. Crafted for Excellence, Designed for the Modern Gentleman.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 y-6">
        {Object.values(latestProducts).map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
