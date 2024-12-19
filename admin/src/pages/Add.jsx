// import React from 'react'

import { useState } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
// import { FaCloudUploadAlt } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Add = ({token}) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Shoes');
  const [subCategory, setSubCategory] = useState('Oxford onChange{(e) => setImage(e.target.file[0])}');
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('sizes', JSON.stringify(sizes));
      formData.append('bestSeller', bestSeller);

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(backendUrl + "/api/products/add", formData, {headers: {token}})

      if (response.status === 200) {
        toast.success(response.data.message);
        setName('');
        setPrice('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        toast.error(response.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
        onChange={(e) => setName(e.target.value)}
        value={name}
          type="text"
          placeholder="Type here..."
          required
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
          type="text"
          placeholder="Type description here..."
          required
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className="w-full px-3 py-2">
            <option value="Oxford">Oxford</option>
            <option value="Derbies">Derbies</option>
            <option value="Monk Straps">Monk Straps</option>
            <option value="Loafers">Loafers</option>
            <option value="Boots">Boots</option>
            <option value="Belts">Belts</option>
            <option value="Wallets">Wallets</option>
            <option value="Gloves">Gloves</option>
            <option value="Bags">Bags</option>
            <option value="Shoe Care Products">Shoe Care Products</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Product Price</p>
          <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="Number"
            placeholder="12500"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div onClick={() => setSizes(prev => prev.includes("39") ? prev.filter(item => item !== "39") : [...prev, "39"])}>
            <p className={`${sizes.includes("39") ? "bg-red-900" : "bg-red-950" } text-white px-3 py-1 cursor-pointer`}>39</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("40") ? prev.filter(item => item !== "40") : [...prev, "40"])}>
            <p className={`${sizes.includes("40") ? "bg-red-900" : "bg-red-950" } text-white px-3 py-1 cursor-pointer`}>40</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("41") ? prev.filter(item => item !== "41") : [...prev, "41"])}>
            <p className={`${sizes.includes("41") ? "bg-red-900" : "bg-red-950" } text-white px-3 py-1 cursor-pointer`}>41</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("42") ? prev.filter(item => item !== "42") : [...prev, "42"])}>
            <p className={`${sizes.includes("42") ? "bg-red-900" : "bg-red-950" } text-white px-3 py-1 cursor-pointer`}>42</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("43") ? prev.filter(item => item !== "43") : [...prev, "43"])}>
            <p className={`${sizes.includes("43") ? "bg-red-900" : "bg-red-950" } text-white px-3 py-1 cursor-pointer`}>43</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("44") ? prev.filter(item => item !== "44") : [...prev, "44"])}>
            <p className={`${sizes.includes("44") ? "bg-red-900" : "bg-red-950" } text-white px-3 py-1 cursor-pointer`}>44</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("45") ? prev.filter(item => item !== "45") : [...prev, "45"])}>
            <p className={`${sizes.includes("45") ? "bg-red-900" : "bg-red-950" } text-white px-3 py-1 cursor-pointer`}>45</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("46") ? prev.filter(item => item !== "46") : [...prev, "46"])}>
            <p className={`${sizes.includes("46") ? "bg-red-900" : "bg-red-950" } text-white px-3 py-1 cursor-pointer`}>46</p>
          </div>
        </div>
      </div>

      <div className="gap-2 mt-2 flex">
        <input onChange={() => setBestSeller(prev => !prev)} checked={bestSeller} type="checkbox" id="bestSeller" />
        <label className="cursor-pointer" htmlFor="bestSeller">Add to bestSeller</label>
      </div>

      <button type="submit" className="w-28 py-3 mt-4 bg-black text-white ">ADD</button>

    </form>
  );
};

export default Add;
