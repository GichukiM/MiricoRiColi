import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, getCartAmount } = useContext(ShopContext);

  // Define delivery fee constants
  const deliveryFee = 250;
  const freeDeliveryThreshold = 25000;

  // Calculate the effective delivery fee based on cart amount
  const effectiveDeliveryFee = getCartAmount() > freeDeliveryThreshold ? 0 : deliveryFee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART "} text2={"TOTALS"} />
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {effectiveDeliveryFee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + effectiveDeliveryFee}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
