import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";
import { RiBallPenLine } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    subCategory: "",
    sizes: "",
    bestSeller: false,
  });

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/products/list");

      if (response.status === 200) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/products/remove", {
        data: { id },
        headers: { token },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setProductData({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      subCategory: product.subCategory,
      sizes: product.sizes.join(", "),
      bestSeller: product.bestSeller,
    });
    setShowModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        backendUrl + "/api/products/edit",
        { ...productData, productId: currentProduct._id },
        { headers: { token } }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        await fetchList();
        setShowModal(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>

      <div className="flex flex-col gap-2">
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {list.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border"
          >
            <img src={item.image[0]} className="w-12 h-16" alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency} {item.price}
            </p>
            <div className="text-right md:text-center cursor-pointer text-lg">
              <button onClick={() => openEditModal(item)}>
                <RiBallPenLine />
              </button>
              <button onClick={() => removeProduct(item._id)}>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for editing product */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg w-1/2">
            <h2 className="text-xl mb-4">Edit Product</h2>
            <form onSubmit={handleEditSubmit}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={productData.name}
                  onChange={handleChange}
                  className="w-full p-2 border"
                />
              </div>
              <div>
                <label>Price</label>
                <input
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  className="w-full p-2 border"
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                  className="w-full p-2 border"
                />
              </div>
              <div>
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={productData.category}
                  onChange={handleChange}
                  className="w-full p-2 border"
                />
              </div>
              <div>
                <label>Subcategory</label>
                <input
                  type="text"
                  name="subCategory"
                  value={productData.subCategory}
                  onChange={handleChange}
                  className="w-full p-2 border"
                />
              </div>
              <div>
                <label>Sizes (comma-separated)</label>
                <input
                  type="text"
                  name="sizes"
                  value={productData.sizes}
                  onChange={handleChange}
                  className="w-full p-2 border"
                />
              </div>
              <div>
                <label>Best Seller</label>
                <input
                  type="checkbox"
                  name="bestSeller"
                  checked={productData.bestSeller}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="mt-4 text-right">
                <button type="submit" className="bg-black text-white px-4 py-2">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="ml-2 bg-red-900 text-white px-4 py-2"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
