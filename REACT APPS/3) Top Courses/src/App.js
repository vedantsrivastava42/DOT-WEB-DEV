import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import {toast} from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => { 
  const [courses,setCourses] = useState(null);
  const [category, setCategory] = useState("All");
  const [loading,setLoading] = useState(true);  

const fetchData= async()=> {
  setLoading(true); //phle loading spinner dikha rahe hai, jb data aa jaega toh show kr rhe
  try{
            const res=await fetch(apiUrl);
            const output =await res.json();
            //Save data into a variable
            setCourses(output.data);
          }
          catch(error){
            toast.error("Something went wrong");
          }
        setLoading(false)
      }

useEffect(()=> {
  fetchData();
},[])

  return (
    <div className="flex flex-col ">
      <div>
      <Navbar/>
      </div>
      <div className="bg-bgDark2 min-h-screen">
        <div>
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
        />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap items-center justify-center">
     {
      loading ? <Spinner/>:<Cards  courses={courses}  category={category}/>
     }
    </div>
    </div>
    </div>
  )
};

export default App;
