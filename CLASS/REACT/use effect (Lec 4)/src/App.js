import logo from './logo.svg';
import './App.css';
import {useState} from'react';
import {useEffect} from'react';

function App() {

  const[text,setText]=useState('');
  const[name,setName]=useState('Vedant');

  function ChangeHandler(event){
    setText(event.target.value);
  }
  //Variation 1 -> Ever Render
  // useEffect(() => 
  // {
  //   console.log("UI RENDERING DONE");
  // });

  //variation 2 -> First Render
  // useEffect(() => 
  // {
  //   console.log("UI RENDERING DONE");
  // },[]);

  //variation 3 -> 1st render and then  whenever dependencies change
  // useEffect(() => 
  // {
  //   console.log("Change Observed");
  // },[name]);

  //variation 4 -> To Handler Unmounting of Component
  useEffect(() => 
  {
    //add event listener
    console.log("listener added");
// Return will be run first
    return () =>{
      console.log("listener removed");
    }
  },[text]); 



  return (
    <div className="App">
   <input type="text" onChange={ChangeHandler}></input>
    </div>
  );
}

export default App;
