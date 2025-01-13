import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { CgProfile } from "react-icons/cg";

const MyProfile = () => {
  const { userData } = useContext(ShopContext);

  return (
    <div>
  <div className="text-center text-2xl pt-10 border-t">
    <Title text1={"YOUR "} text2={"PROFILE"} />
  </div>

  <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">

    <div className="w-full md:w-1/2">
      <CgProfile className="w-full md:max-w-[480px] h-60 md:w-1/2 flex justify-center items-center" />
    </div>

    <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
      <p className="font-semibold text-xl text-gray-600">Name:</p>
      <p className="text-gray-500">{userData.name}</p>

      <p className="font-semibold text-xl text-gray-600">Email:</p>
      <p className="text-gray-500">{userData.email}</p>

      <p className="font-semibold text-xl text-gray-600">Number of Items in Cart:</p>
      <p className="text-gray-500">
        {userData.cartData ? Object.keys(userData.cartData).length : 0}
      </p>
    </div>

  </div>
</div>

  );
};

export default MyProfile;
