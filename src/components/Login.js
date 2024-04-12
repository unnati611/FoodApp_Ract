import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../Utils/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setuserName, setbtnname } = useContext(UserContext);
  const [userInputValue, setuserInputValue] = useState();
  const [userPassword, setuserPassword] = useState();

  const userdata = [
    {
      name: "unnati",
      password: "9727561198",
    },
    {
      name: "vandan",
      password: "8849649543",
    },
  ];
  const navigate = useNavigate();
  const idVarification = () => {
    const filterid = userdata.filter((element) => {
      if (
        element.name === userInputValue &&
        element.password === userPassword
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (filterid.length > 0) {
      setuserName(userInputValue);
      setbtnname("LOGOUT");
      navigate("/FoodApp_Ract");
    } else {
      navigate("/FoodApp_Ract/login");
      alert("PLEASE ,ENTER VALID ID PASSWORD");
      setbtnname("LOGIN");
    }
  };

  return (
    <div>
      <div className="font-bold p-2 m-2">
        <label className="" htmlFor="">
          User Name:
        </label>
        <input
          type="text"
          className="search-box w-96  border m-2 p-2"
          value={userInputValue}
          onChange={(e) => {
            setuserInputValue(e.target.value);
          }}
        />
      </div>
      <div className="font-bold p-2 m-2">
        <label className="" htmlFor="">
          Password:
        </label>
        <input
          type="password"
          className="search-box w-96  border m-2 p-2"
          value={userPassword}
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />
      </div>
      <button
        className="border m-4 p-2 w-36  text-white bg-red-800 font-bold text-lg"
        onClick={idVarification}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
