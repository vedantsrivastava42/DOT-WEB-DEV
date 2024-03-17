import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
    const navigate = useNavigate();
    function clickHandler() {
        navigate("/");
    }
    function backHandler(){
        navigate(-1);
    }
    return (
        <div>
            <div>This is About Page</div>
            <button onClick={clickHandler}>Move to Home Page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default About