import React from 'react'
import frame from '../assets/frame.png'
import SignupForm from './SignUpForm'
import LoginForm from './LoginForm'
import {FcGoogle} from "react-icons/fc"


const Template = (props)=> {
    const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex w-11/12 max-w-[1160px] py-8 mx-auto gap-y-0 gap-x-12 justify-between text-richblack-100'>
      <div  className="w-11/12 max-w-[450px] flex flex-col">
     <div className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
        <h1>{props.title}</h1>
     </div>
        <div  className="text-[1.125rem] mt-4 leading-[1.625rem]">
            <span className="text-richblack-100">{props.desc1}</span>
            <span className="text-blue-100 italic">{props.desc2}</span>
        </div>
        {props.formType==="login"?
        <LoginForm setIsLoggedIn={setIsLoggedIn}/>:
        <SignupForm setIsLoggedIn={setIsLoggedIn}/>
        }
        
        <div className='flex w-full items-center gap-x-2 my-2'>
            <div  className="h-[1px] bg-richblack-700 w-full"></div>
            <p className="uppercase text-richblack-700 font-medium leading-[1.375rem]">OR</p>
            <div  className="h-[1px] bg-richblack-700 w-full"></div>
        </div>
       
        <button className="flex rounded-md items-center justify-center border border-richblack-700 font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 ">
          <FcGoogle />
          <p>Sign in with Google</p>
        </button>
      </div>
      
    <div className='relative  w-11/12 max-w-[450px]'>
      <img src={frame}
      alt="pattern"
      width={558}
      height={504}
      loading='lazy'
      /> 

       <img 
       className="absolute z-10 -top-4 right-4 "
       src={props.image}
      alt="student"
      width={558}
      height={504}
      loading='lazy'/> 
    </div>
    </div>
  )
}

export default Template
