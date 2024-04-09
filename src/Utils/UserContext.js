import React, { createContext } from "react";

const UserContext = createContext({
  logedinUser: "",
  loginbtn: "",
});

export default UserContext;
