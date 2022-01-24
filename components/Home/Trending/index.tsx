import ProductItem from "components/common/ProductItem/ProductItem";
import React from "react";

const Trending = () => {
  return (
    <div className="w-fit mx-auto py-24">
      <div className="flex items-center">
        <div className="w-12 h-[2px] bg-gray-800"></div>
        <h2 className="uppercase mx-6 font-semibold text-2xl">trending</h2>
        <div className="w-12 h-[2px] bg-gray-800"></div>
      </div>
      <p className="font-libre italic text-sm text-gray-500 text-center mb-5">
        Top view in this week
      </p>
      <ProductItem />
    </div>
  );
};

export default Trending;
