import { useEffect, useState } from "react";
// import { restaurantData } from "../../api/restaurantData";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineSearch } from "react-icons/md";
import axios from "axios";
import useFetchCard from "../../hooks/useFetchCard";

const RestaurantLayout = () => {
  const { isLoading, filterData, restaurantCardData } = useFetchCard();
  const [searchData, setSearchData] = useState(restaurantCardData);

  if (isLoading) {
    <p>Loading</p>;
  } else {
    return (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 pb-5">
            <div className="flex  flex-col items-center justify-start gap-5 md:flex-row">
              <button
                onClick={() => {
                  const moreRating = restaurantCardData.filter((e) => {
                    return e.rating >= 4.5;
                  });
                  setFilterData(moreRating);
                }}
                className="px-4 py-2 bg-green-500 rounded text-white font-bold"
              >
                More than 4.5
              </button>
              <button
                onClick={() => {
                  const lessRating = restaurantCardData.filter((e) => {
                    return e.rating < 4.5;
                  });
                  setFilterData(lessRating);
                }}
                className="px-4 py-2 bg-red-500  rounded text-white font-bold"
              >
                Less than 4.5
              </button>
              <button
                onClick={() => {
                  setFilterData(restaurantCardData);
                }}
                className="px-4 py-2 bg-gray-500  rounded text-white font-bold"
              >
                All Resturants
              </button>
              <div className="flex items-center justify-center ">
                <input
                  type="text"
                  onChange={(e) => {
                    setSearchData(e.target.value);
                  }}
                  className="border border-cyan-400 px-4 py-2"
                />
                <button
                  onClick={() => {
                    const searchFilter = restaurantCardData.filter((e) => {
                      return e.title
                        .toLowerCase()
                        .includes(searchData.toLowerCase());
                    });
                    setFilterData(searchFilter);
                  }}
                  className="px-4 py-2 bg-slate-200 flex items-center justify-center gap-2"
                >
                  <MdOutlineSearch />
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4">
            {filterData.map((restaurant) => {
              return (
                <RestaurantCard
                  key={uuidv4()}
                  id={restaurant.id}
                  name={restaurant.title}
                  image={restaurant.image_url}
                  description={restaurant.title}
                  location={restaurant.brand}
                  rating={restaurant.rating}
                  reviews={restaurant.title}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
};

export default RestaurantLayout;
