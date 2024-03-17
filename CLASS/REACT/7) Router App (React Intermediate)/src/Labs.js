import React from 'react'
import { useNavigate } from 'react-router-dom';

const Labs = () => {
    const navigate = useNavigate();
   function clickHandler (){
            navigate("/support");
    }
    //To go back just create a back button and function with navigate (-1)
    function backHandler(){
        navigate(-1);
    }
    return (
        <div>
           <div>This is Labs Page</div> 
           <button onClick={clickHandler}>Move to Support Page</button>
           <button onClick={backHandler}>Go Back</button>

        </div>
    )
}

export default Labs