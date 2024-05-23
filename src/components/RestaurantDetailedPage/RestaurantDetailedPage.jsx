import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { ShimmerContentBlock } from "react-shimmer-effects";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import useFetchDetails from "../../hooks/useFetchDetails";
import { useCart } from "../../hooks/useCart";

const RestaurantDetailedPage = () => {
  const data2 = useParams();
  const { isLoading, data } = useFetchDetails(data2.id);
  const { addCart } = useCart();
  {
    return isLoading ? (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 ">
            <ShimmerContentBlock
              title
              text
              cta
              thumbnailWidth={350}
              thumbnailHeight={370}
              className="w-full"
            />
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 ">
            <div className="flex gap-10">
              <div>
                <img
                  src={data.image_url}
                  alt="dish"
                  className="h-72 rounded-xl"
                />
              </div>
              <div className=" w-1/2">
                <h1 className=" font-bold text-2xl">{data.title}</h1>
                <p>{data.style}</p>
                <p>{data.price}</p>
                <p className=" text-wrap">{data.description}</p>
                <p>{data.brand}</p>
                <p>{data.total_reviews}</p>
                <div className="flex items-center gap-2">
                  <IoStar className="fill-yellow-500" />
                  <p className=" text-yellow-500 text-base">{data.rating}</p>
                  <p className=" text-gray-600 text-xs ">
                    ({data.reviews} reviews)
                  </p>
                </div>
                <p>{data.availability}</p>
                <button
                  onClick={() => {
                    addCart(data);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded flex gap-2 items-center"
                >
                  <FaCartShopping />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-[90%] mx-auto grid grid-cols-1 pt-16 pb-5 ">
            <div className="text-2xl font-bold">Similar Products</div>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-5">
            {!data.similar_products || data.similar_products.length === 0 ? (
              <p>No Similar Products</p>
            ) : (
              data.similar_products.map((restaurant) => {
                return (
                  <div key={restaurant.id}>
                    <RestaurantCard
                      id={restaurant.id}
                      name={restaurant.title}
                      image={restaurant.image_url}
                      description={restaurant.title}
                      location={restaurant.brand}
                      rating={restaurant.rating}
                      reviews={restaurant.title}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
};

export default RestaurantDetailedPage;
