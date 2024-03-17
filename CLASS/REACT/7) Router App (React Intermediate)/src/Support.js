import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate("/about");
    }
    function backHandler(){
        navigate(-1);
    }
    return (
        <div>
        <div>This is Support Page</div>
        <button onClick={clickHandler}>Move to About Page</button>
        <button onClick={backHandler}>Go Back</button>
    </div>
    )
}

export default Support