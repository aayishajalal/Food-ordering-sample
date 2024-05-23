import { useState } from "react";

const Comments = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [data, setData] = useState({                //  -- object useState
        name: "",
        message: ""
    });
    const [comments, setComments] = useState([]);
    return (
        <>
            <div className="2xl:container mx-auto">
                <div className="w-[90%] mx-auto space-x-2 space-y-4">
                    <h1 className=" text-2xl text-bold">Comments Page</h1>
                    <input type="text" id="name" onChange={(e) => {
                        setName(e.target.value);
                        // setData({...data, name: e.target.value})       -- to set without individual useState
                        console.log(e.target.value)
                    }}  className=" border border-red-500 "/>
                    <input type="text" id="message" onChange={(e) => {
                        setMessage(e.target.value)
                    //  setData({...data, message: e.target.value});     -- to set without individual useState
                        console.log(e.target.value)
                    }} className=" border border-red-500 " />
                    <button onClick={() => {
                        setComments((e)=>[...e,{ name: name, message: message }])
                    }} className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>
                    <pre>{ JSON.stringify(comments)}</pre>
                    <p>Name: {data.name}</p>

                    <p>Message: { data.message}</p>
                </div>
            </div>
        </>
    );
}

export default Comments;