// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const List = ({ token }) => {
  const [list, setList] = useState([]);

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
              <button onClick={() => removeProduct(item._id)}>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
