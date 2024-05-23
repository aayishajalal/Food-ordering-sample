import { IoStar } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

const RestaurantCard = (restaurant) => {
  return (
    <>
      <div key={restaurant.id} className="max-w-sm rounded overflow-hidden">
        <LazyLoadImage
          effect="blur"
          height={200}
          src={restaurant.image} // use normal <img> attributes as props
          width={400}
          alt="dish"
          className="w-full h-52 object-fill rounded-xl"
        />
        {/* <img
          src={restaurant.image}
          alt="dish"
          className="w-full h-52 object-fill rounded-xl"
        /> */}
        <div className="px-6 py-4  space-y-2">
          <h1 className=" font-bold text-xl mb-2">{restaurant.name}</h1>
          <p className=" text-gray-700 text-base">{restaurant.city}</p>
          <p className=" text-gray-700 text-base">{restaurant.description}</p>
          <p className=" text-gray-700 text-base">{restaurant.location}</p>
          <div className="flex items-center gap-2">
            <IoStar className="fill-yellow-500" />
            <p className=" text-yellow-500 text-base">{restaurant.rating}</p>
            <p className=" text-gray-600 text-xs ">
              ({restaurant.reviews} reviews)
            </p>
          </div>
          <Link to={"/restaurants/"+restaurant.id}>
            <button className="px-4 py-2 bg-blue-500 text-white text-xs font-semibold rounded flex gap-2 items-center">
              <FaCartShopping />
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
