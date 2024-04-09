import React from "react";
import { imgSrc } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemList = (props) => {
  const dispatch = useDispatch();
  const handlAdditem = (item) => {
    //dispath an action
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {props.items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex "
          >
            <div>
              <div className="absolute">
                <button
                  className=" p-2  text-white shadow-lg  rounded-lg bg-slate-900"
                  onClick={() => handlAdditem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={imgSrc + item.card.info.imageId}
                className="w-36 m-4"
                alt=""
              />
            </div>
            <div className="py-2">
              <span className="text-bold m-4">{item.card.info.name} - </span>
              <span>
                RS.
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs m-4">{item.card.info.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
