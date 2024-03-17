import React ,{useState} from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = (props) =>{

    const navigate = useNavigate();
   const setIsLoggedIn = props.setIsLoggedIn;
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

   function changehandler(event){
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
   }
   function submiHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
   }
    return(
        <div>
             <form  className="flex flex-col w-full " onSubmit={submiHandler}>
                <label className="w-full relative  mt-[20px] text-richblack-5" >Email Address <sup className="text-pink-200">*</sup>
                <br></br>
                <input className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]" required 
                type="email"
                 placeholder="Enter your email address"
                id="email"
                name="email"
                onChange={changehandler}
                value={formData.email}/>
                </label>

                <label  className="w-full relative  mt-[20px] text-richblack-5">Password <sup className="text-pink-200">*</sup>
                <input className=" bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]" required 
                type=  {showPassword? ("text") : ("password")}
                placeholder="Enter your Password"
                id="password"
                name="password"
                onChange={changehandler}
                value={formData.password}/>
                <span className="absolute right-3 top-9 cursor-pointer " onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                </span>
                <Link to ="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">  Forgot Password</p>
                </Link>
                </label>

                <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-richblack-900">
                    Sign In
                </button>
            </form> 
        </div>
    );
}

export default LoginForm;