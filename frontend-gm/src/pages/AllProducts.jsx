// import React from 'react'

import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { IoMdArrowDropdown } from "react-icons/io";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleAccessories = (e) => {
    if (accessories.includes(e.target.value)) {
      setAccessories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setAccessories((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search ) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (accessories.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        accessories.includes(item.accessories)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, accessories, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <IoMdArrowDropdown
            className={`h-8 sm:hidden ${showFilter ? "rotate-180" : ""}`}
          />
        </p>

        <div
          className={`border border-gray-300 pl-5 py-5 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SHOE CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Oxford"}
                onChange={toggleCategory}
              />
              Oxford
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Derbies"}
                onChange={toggleCategory}
              />
              Derbies
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Monk Straps"}
                onChange={toggleCategory}
              />
              Monk Straps
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Loafers"}
                onChange={toggleCategory}
              />
              Loafers
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Boots"}
                onChange={toggleCategory}
              />
              Boots
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">ACCESSORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Belts"}
                onChange={toggleAccessories}
              />
              Belts
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Wallets"}
                onChange={toggleAccessories}
              />
              Wallets
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Gloves"}
                onChange={toggleAccessories}
              />
              Gloves
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Bags"}
                onChange={toggleAccessories}
              />
              Bags
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="flex gap-2"
                value={"Shoe Care Products"}
                onChange={toggleAccessories}
              />
              Shoe Care Products
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All "} text2={"PRODUCTS"} />

          <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
