import { useEffect, useState } from "react";

const useFetchDetails = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://apis.ccbp.in/products/" + id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
        },
      });
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, data };
};
export default useFetchDetails;
