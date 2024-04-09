import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../Utils/useRestaurentMenu";
import { useParams } from "react-router-dom";
import RestaurentCatagory from "./RestaurentCatagory";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurentMenu(resId);
  const [showIndex, setShowindex] = useState(0);
  if (resinfo === null || !resinfo.cards || resinfo.cards.length < 3) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, availability } =
    resinfo.cards[2].card.card.info;
  const { itemCards } =
    resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  //   .itemCards[0].card.info;

  // console.log(resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
  const catagories =
    resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (category) => {
        if (
          category.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return true;
        } else {
          return false;
        }
      }
    );
  const showIndexFunction = (index) => {
    return () => {
      if (index === showIndex) {
        setShowindex(null);
      } else {
        setShowindex(index);
      }
    };
  };
  // console.log(catagories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <div className="flex justify-center align-middle items-center ">
        <h4 className="mx-8  my-4">
          Closing Time-{availability.nextCloseTime}
        </h4>
        <h4 className="  text-green-600 font-extrabold text-end">
          {availability.opened === true ? "OPEN NOW" : "CLOSED"}
        </h4>
      </div>
      {/* categories accordian */}
      {catagories.map((catagory, index) => {
        return (
          //controlled component
          <RestaurentCatagory
            key={catagory.card.card.title}
            data={catagory.card.card}
            showIndex={showIndex}
            showItems={index === showIndex ? true : false}
            setShowindex={showIndexFunction(index)}
          />
        );
      })}

      <img src="" alt="" />
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- Rs.{" "}
            {Number(item.card.info.defaultPrice || item.card.info.price) / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurentMenu;
