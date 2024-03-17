import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = (props) => {
let isLoggedIn = props.isLoggedIn;
let setIsLoggedIn = props.setIsLoggedIn ;

    return(
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto"> 
    <div>
        <Link to="/">
            <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </Link>
    </div>
        <nav> 
            <ul className="flex gap-6 text-white "> 
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className="flex items-center gap-x-4 text-richblack-100 ml-5 mr-3 gap-3 text-white">
            {/* if !setLoggedIn then only this button will appear */}
            {!isLoggedIn && 
                <Link to="/Login">
                    <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                        Login
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/Signup">
                    <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={()=> {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/Dashboard">
                    <button>
                        Sign Out
                    </button>
                </Link>
            }
            </div>
        </div>
    
    )
        }
export default Navbar;