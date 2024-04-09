import { Link } from "react-router-dom";
import { Logo_Url } from "../Utils/constant";
import { useState, useContext } from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { logedinUser, loginbtn } = useContext(UserContext);
  // redux Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between size-full ...">
      <div className="logo-container">
        <img src={Logo_Url} alt="" className="w-28" />
      </div>
      <div className="flex  w-7/12 items-center  ">
        <ul className="flex p-4 m-4 justify-between w-full   text-red-800 font-bold text-lg">
          <li>OnlineStatus:{onlineStatus ? "✅" : "🛑"}</li>
          <li>
            <Link to="/FoodApp_Ract">HOME</Link>
          </li>
          <li>
            <Link to="/FoodApp_Ract/contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/FoodApp_Ract/groccery">GROCCERY</Link>
          </li>
          <li>
            <Link to="/FoodApp_Ract/about">ABOUT US</Link>
          </li>
          <li className="font-bold">
            <Link to="/FoodApp_Ract/cart">Cart({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to="/FoodApp_Ract/login">{loginbtn}</Link>
          </li>

          <li className="font-bold">{logedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
