import {useState} from 'react';
import './App.css';
//Using react form , data is aaccumulated simultaneously while it is inputted.
function App() {

  // we created a object so that all the Data can be handled from a single function
  const [formData , setFormData] = useState( {firstName : "", lastName: "", email: "" 
                                              , comments:"",isVisible:true,mode:"",favCar:""} );
  //use state returns 2 things -> function and variable, setFormData is the function

  function changeHandler(event){
    const{name,value,checked,type} = event.target
    //New data = prev data copied + new data 
    // To acess new data we gave a name attribute to input field and accessed 
    // it using event.target.name and assigned that value to event.target.value
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();  // prevent default behaviour on submition
    console.log("Finally printing final data");
    console.log(formData);
  }
//Explanation of flow :- change in field -> on chnage triggered -> changeHandler called -> formData value updated -> formData created by useState hook so UI re-render
// when UI re-rendered -> value = formData.firstName

  return (
    <div className="App">
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="first name"
      onChange={changeHandler}
      name="firstName"
      value={formData.firstName}/>
      

      <br/>
      <br/>
      
      <input type="text" placeholder="last name"
      onChange={changeHandler}
      name="lastName"
      value={formData.lastName}/>

      <br/>
      <br/>

      <input type="text" placeholder="email id"
      onChange={changeHandler}
      name="email"
      value={formData.email}/>

      <br/>
      <br/>

     <textarea placeholder="Enter your comments"
     onChange={changeHandler}
     name="comments"
     value={formData.comments}/>

     <br/>
     <br/>

     <input
     type="checkbox"
     onChange={changeHandler}
     name="isVisible"
     id="isVisible"
     checked={formData.isVisible}/>

     <label htmlFor='isVisible'>Am I Visible?</label>

     <br/>
     <br/>
     {/* Fieldset - borders */}
     <fieldset>
      <legend>Mode:</legend>
    
      <input
     type="radio"
     onChange={changeHandler}
     name="mode"
     id="Online-Mode"
     value="Online-Mode"
      // if mode value is online mode then check online mode 
     checked={formData.mode === "Online-Mode"}/>
     <label htmlFor='Online-Mode'>Online Mode</label>

     <input
     type="radio"
     onChange={changeHandler}
     name="mode"
     id="Offline-Mode"
     value="Offline-Mode"
     checked={formData.mode === "Offline-Mode"}/>
     <label htmlFor='Offline-Mode'>Offline Mode</label>

     </fieldset>

     <label htmlFor='favCar'>Tell me Your favourite Car  </label>
    <select 
    name="favCar"
    id="favCar"
    value={formData.favCar}
    onChange={changeHandler}>
    
      <option value="scorpio">Scorpio</option>
      <option value="bmw">BMW</option>
      <option value="defender">defender</option>
      <option value="fortuner">fortuner</option>
      <option value="audi">audi</option>
      <option value="legender">legender</option>
      <option value="brezza">brezza</option>
    </select>
   
    <br/>
    <br/>
    {/* when we click button in a form, an onsubmit function will be triggered */}
   <button >
    SUBMIT
   </button>

    </form>
    </div>
  );
}

export default App;
