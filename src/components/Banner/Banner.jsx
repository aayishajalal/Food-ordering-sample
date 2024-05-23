import { useEffect, useState } from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

const Banner = () => {
    const [count, setCount] = useState(0);
    
    // ---------------API call with Shimmer on Loading 
    //Step 1 : create loading and data useState 
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    //---------------useEffect at top level to get the response after re-rendering
    useEffect(() => {
        fetchData();
    },[])

    //Step2: fetchData function
    const fetchData = async () => {
        //try -- setLoading(true)
        try {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json()
            setData(data)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    if (loading) {
        return <ShimmerThumbnail height={250} rounded />;
    }
    else {
        return (
            <>
                <div className="2xl:container mx-auto">
                    <div className="w-[90%] mx-auto">
                        <div className="my-5">
                            <button className=" px-4 py-2 bg-blue-500 text-white hover:bg-blue-700">
                                Today's Offer
                            </button>
                            <p className="p-5 bg-slate-300">{count}</p>
                            <button onClick={() => {
                                setCount(count + 1)
                            }} className=" px-4 py-2 bg-green-500 text-white">
                                count++
                            </button>
                            <button onClick={() => {
                                setCount(count - 1)
                            }} className=" px-4 py-2 bg-red-500 text-white">
                                count--
                            </button>
                            <p>{ JSON.stringify(data)}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Banner;