import { useEffect, useState } from "react";

const useFetchCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [restaurantCardData, setRestaurantCardData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  
  //API call
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://apis.ccbp.in/products/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
        },
      });
      const data = await res.json();
      setRestaurantCardData(data.products);
      setFilterData(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {isLoading,filterData,restaurantCardData};
};

export default useFetchCard;
