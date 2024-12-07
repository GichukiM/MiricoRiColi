import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden h-48">
      
        {/* Set the desired height */}
        <img
          className="hover:scale-110 transition ease-in-out h-full w-full object-cover"
          src={image[0]}
          alt=""
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>

      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
