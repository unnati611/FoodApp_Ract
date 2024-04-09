import React, { useEffect, useState } from "react";
import { menuApi } from "../Utils/constant";

/// custome hook

const useRestaurentMenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      menuApi +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setresinfo(json.data);
  };
  return resinfo;
};

export default useRestaurentMenu;
