import "./App.css";
import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus.js";
import Contactus from "./components/Contactus.js";
import Error from "./components/Error.js";
import RestaurentMenu from "./components/RestaurentMenu.js";
import UserContext from "./Utils/UserContext.js";
import Login from "./components/Login.js";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore.js";
import Cart from "./components/Cart.js";
// import { appRouter  } from "./App";

const Groccry = lazy(() => import("./components/Groccry.js"));
export function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Outlet />
      </div>
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/FoodApp_Ract",
        element: <Body />,
      },
      {
        path: "/FoodApp_Ract/about",
        element: <Aboutus />,
      },
      {
        path: "/FoodApp_Ract/contact",
        element: <Contactus />,
      },
      {},
      {
        path: "/FoodApp_Ract/groccery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Groccry />,
          </Suspense>
        ),
      },
      {
        path: "/FoodApp_Ract/restaurent/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/FoodApp_Ract/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "FoodApp_Ract/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

export const Main = () => {
  const [userName, setuserName] = useState();
  const { logedinUser, loginbtn } = useContext(UserContext);
  const [btnname, setbtnname] = useState("LOGIN");
  console.log("logedinUser", logedinUser);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          logedinUser: userName,
          setuserName,
          loginbtn: btnname,
          setbtnname,
        }}
      >
        <RouterProvider router={appRouter} />
      </UserContext.Provider>
    </Provider>
  );
};
