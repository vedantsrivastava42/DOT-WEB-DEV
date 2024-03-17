import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const SignUpForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prev) => ({
      //old data -> ...prev + new data -> event.target.value
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  const [showPassword, setShowPassword] = useState({
    createPassword: false,
    confirmPassword: false,
  });
  const handleClick = (buttonName) => {
    setShowPassword({
      ...showPassword,
      //if show button on-> it will off the button and vice versa
      [buttonName]: !showPassword[buttonName],
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.createPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const finalData = {
        ...formData,
          accountType
      }
  
      console.log(finalData);
      setIsLoggedIn(true);
  
      toast.success("Account Create Successfull");
  
      navigate("/dashboard");
    }
    return (
      <div>
        {/* student-Instructor tab */}
        <div className="flex bg-richblack-800 max-w-max rounded-full p-2 gap-x-1">
            <button className={`${accountType === "student" 
        ? "bg-richblack-900 text-richblack-5"
           : "bg-transparent text-richblack-200"}py-2 px-5 rounded-full transition-all duration-200`}
           onClick={() => setAccountType("student")}>
            Student
            </button>
            <button className={`${accountType === "instructor" 
        ? "bg-richblack-900 text-richblack-5"
           : "bg-transparent text-richblack-200"}py-2 px-5 rounded-full transition-all duration-200`}
           onClick={() => setAccountType("instructor")}>
            Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
            <div className="flex gap-x-8 mt-4">
            <label >
                <p className="text-richblack-5 mt-1 text-[0.875rem] leading-[1.375rem]">First Name<sup className="text-pink-200" >*</sup></p>
                <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type="text"
              name="firstName"
              id="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              placeholder="Enter first name"
            />
            </label>
            <label  >
            <p className="text-richblack-5 mt-1 text-[0.875rem] leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type="text"
              name="lastName"
              id="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              placeholder="Enter last name"
            />
          </label>
          </div>
          <label  className="bg-richblack-800 rounded-[4px] w-full ">
          <p className="text-richblack-5 mt-1 text-[0.875rem] leading-[1.375rem] mt-[20px]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800  rounded-[4px] w-full px-[12px] py-[8px]"
            required
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter email address"
            onChange={changeHandler}
          />
        </label>

        <div className="flex gap-x-4  mt-[20px]">
          <label className="w-full relative">
            <p className="text-richblack-5 mt-1 text-[0.875rem] leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showPassword.createPassword ? "text" : "password"}
              name="createPassword"
              id="createPassword"
              onChange={changeHandler}
              value={formData.createPassword}
              placeholder="Enter Password"
            />

            <span
              className="absolute top-[38px] right-3 z-10 cursor-pointer"
              onClick={() => handleClick("createPassword")}
            >
              {showPassword.createPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-richblack-5 mt-1 text-[0.875rem] leading-[1.375rem]">
               Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="Confirm Password"
            />

            <span
              className="absolute z-10 right-3 top-9 cursor-pointer"
              onClick={() => handleClick("confirmPassword")}
            >
              {showPassword.confirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
          </div>
          <button className="w-full bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-richblack-900">
            Create Account
          </button>
        </form>
      </div>
    );
  }

export default SignUpForm;
  