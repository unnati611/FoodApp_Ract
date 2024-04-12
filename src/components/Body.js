import Restaurentcard, { withPromotedLabel } from "./Restaurentcard";
// import resObj from "../Utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filterlistOfRestaurents, setfilterListOfRestaurents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [searchText, setsearchText] = useState("");
  const RestaurentCardPromoted = withPromotedLabel(Restaurentcard);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284"
    );
    const jason = await data.json();
    // console.log(jason);
    // optional CHAINIng
    setListOfRestaurents(
      jason?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterListOfRestaurents(
      jason?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //check user internet Connection

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Ohhh!!!😟😟 Looks'Like You Have Bad Internet Connection , Please make
        Sure That Your Internet Connection is On.
      </h1>
    );
  }
  // console.log(listOfRestaurents);

  // conditional rendering
  if (listOfRestaurents.length === 0) {
    return <Shimmer />;
  }
  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex-cols justify-center  items-center ">
        <div className="filter flex justify-between items-center w-full">
          <div className="search">
            {/* <label className="font-bold p-2" htmlFor="">
              User Name:
            </label>
            <input
              type="text"
              className="search-box w-56  border m-2 p-2"
              value={logedinUser}
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            /> */}

            <input
              type="text"
              className="search-box w-96  border m-2 p-2"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <button
              className="border m-2 p-2 w-36  text-white bg-red-800 font-bold text-lg"
              onClick={() => {
                // console.log(searchText);
                const filterrestaurents = listOfRestaurents.filter((restro) => {
                  if (
                    restro.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) {
                    return true;
                  }
                });
                setfilterListOfRestaurents(filterrestaurents);
              }}
            >
              Search
            </button>

            <button
              className="border m-2 p-2   text-white bg-red-800 font-bold text-lg"
              onClick={() => {
                const filterOfRestaurents = listOfRestaurents.filter((res) => {
                  let resStarrating = res.info.avgRatingString;
                  resStarrating = parseFloat(resStarrating);
                  if (resStarrating >= 4) {
                    return true;
                  }
                });
                setListOfRestaurents(filterOfRestaurents);
              }}
            >
              Top Rated Restaurents
            </button>
          </div>
        </div>
        <div className="res-container flex flex-wrap w-full h-screen">
          {filterlistOfRestaurents.map((restro) => {
            return (
              <Link
                key={restro.info.id}
                to={"/FoodApp_Ract/restaurent/" + restro.info.id}
              >
                {/** if restro have more than 4.5 rating than adda promoted label on it */}
                {restro.info.avgRating >= 4.4 ? (
                  <RestaurentCardPromoted
                    resdata={restro}
                  ></RestaurentCardPromoted>
                ) : (
                  <Restaurentcard resdata={restro}></Restaurentcard>
                )}
                {/* <Restaurentcard resdata={restro}></Restaurentcard> */}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Body;
