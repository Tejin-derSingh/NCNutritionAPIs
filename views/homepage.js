import React,{useEffect,useState} from "react";
import axios from 'axios'


    function Homepage() {
        const [userdata, setData]=useState([]);
        useEffect(()=>{
            axios.get("https://admin.quoteboard.in/public/api/allCategory")
            .then((response)=>{
                console.log(response)
                setData(response.data.data)
            })
        },[])
    return(
    <div className="Home w-full main py-16 bg-gradient-to-r from-gray-300 to-slate-50 flex">
        <h2 className="text-3xl font-semibold">Get Api</h2>


        <div className="Image-Container background mt-5 py-16 flex justify-center ">
        {userdata.map((data)=>
            <div   key={data.id} className=" services border cursor-pointer
                                             hover:bg-slate-300 space-y-3 
                                             shadow-xl rounded-xl p-16
                                             bg-slate-200 text-center 
                                             ">
                                                  {data.category_id}
                   <h1>{data.category_name}</h1> 
                    {/* {data.text} */}
                  <div className=""><img src={"https://admin.quoteboard.in/storage/app/public/quote_category/"+ data.image} width="150" height="150"></img></div>
            {/* <div className='w-full flex justify-center'><img className='size-10' src={data.image} alt="WebDEvImage" /></div> */}
           
            </div>
            
           
        )}
        </div>
    </div>
    )
    }

export default Homepage;