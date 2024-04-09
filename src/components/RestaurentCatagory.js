import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCatagory = ({ data, showItems, setShowindex }) => {
  // console.log(props.data);
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowindex();
  };
  return (
    <div>
      <div
        onClick={handleClick}
        className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between cursor-pointer"
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>

        <span>▿</span>
      </div>
      {showItems && (
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between cursor-pointer">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurentCatagory;
