import React, { Component, useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../Utils/UserContext";

const Aboutus = () => {
  const { logedinUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 font-bold">
      <h1>About</h1>
      <h3>
        Hello ,{logedinUser}!!! This is about component inside swiggy
        application which show you whith help of router
      </h3>
      <User Contact={"9727561198"} />
      <UserClass />
    </div>
  );
};
export default Aboutus;
