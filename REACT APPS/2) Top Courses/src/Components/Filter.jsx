import React from 'react';

const Filter = (props) => {
  //  let filterData = props.filterData;
    const  category = props.category;
    const setCategory = props.setCategory;

    const filterHandler = (title) => {
       setCategory(title);
    }
    return (
        <div className="w-11/12 gap-y-4 flex flex-wrap space-x-4 mx-auto py-4 justify-center ">
           {
           props.filterData.map((data)=> {
           return  <button className={ `text-lg px-2 py-1 rounded-md bg-black border-2 bg-opacity-60 hover:bg-opacity-50 
           text-white transition-all duration-300 font-medium
           ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-60 border-transparent"}`
           }
            onClick ={() => filterHandler(data.title)}>{data.title}
           
           </button>
           }
            )} 
        </div>
    )
}

export default Filter;