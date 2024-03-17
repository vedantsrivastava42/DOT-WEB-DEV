import React from 'react'
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";

const Card = (props) => {
    let  review = props.review;



   return(
    <div className="flex flex-col md:relative ">
        <div className="absolute -top-[7rem] z-10">
            <img src={review.image} alt ="" className='w-[140px] h-[140px] rounded-full aspect-ratio z-25' ></img>
            <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
        </div>

        <div className="text-center">
            <p className="font-bold text-2xl tracking-wider capitalize">{review.name}</p>
            <p className="uppercase text-sm text-violet-400">{review.job}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft/>
        </div>

        <div className="text-center mt-4 text-slate-500">
            <p>{review.text}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight/>
        </div>

    </div>
   )
}

export default Card