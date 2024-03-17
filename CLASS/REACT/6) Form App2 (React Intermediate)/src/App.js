import './App.css';
import {useState} from 'react';
function App() {
  const [formData,setFormData] = useState ({firstName:"", lastName:"", email:"", country:"", address:"", state:"",
   mode:"",isVisible:false,candidates:true,comments:true});
   function changeHandler(event){
    const{name,value,checked,type} = event.target
    setFormData(prevFormData => {
      return{
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
  

  return (
    <div className="App">
    <form onSubmit={submitHandler}>
    <label htmlFor='firstName'>First name</label>
    <br/>
      <input type="text" placeholder="Vedant"
      onChange={changeHandler}
      name="firstName"
      id="input"
      value={formData.firstName}/>
      
      

      <br/>
      <br/>
      <label htmlFor='LastName'>Last name</label>
      <br/>
      
      <input type="text" placeholder="last name"
      onChange={changeHandler}
      name="lastName"
      id="input"
      value={formData.lastName}/>

      <br/>
      <br/>

      <label htmlFor='email'>Email Id</label>
      <br/>
      
      <input type="text" placeholder="email id"
      onChange={changeHandler}
      name="email"
      id="input"
      value={formData.email}/>

      <br/>
      <br/>
    
      <label htmlFor='country'>Country  </label>
      <br/>
    <select 
    name="country"
    id="country"
    value={formData.country}
    onChange={changeHandler}>
    
      <option value="scorpio">India</option>
      <option value="bmw">UAE</option>
      <option value="defender">USA</option>
      <option value="fortuner">Mexico</option>
      <option value="audi">Germany</option>
      <option value="legender">SwitzerLand</option>
      <option value="brezza">Brazil</option>
    </select>

<br/>
      <br/>

<label htmlFor='address'>Address</label>

      <br/>
      <input type="text" placeholder="Patna"
      onChange={changeHandler}
      name="address"
      id="input"
      value={formData.address}/>
      <br/>
      <br/>


      <label htmlFor='state'>State</label>
      
      <br/>
      <input type="text" placeholder="Bihar"
      onChange={changeHandler}
      name="state"
      id="input"
      value={formData.state}/>
      <br/>
      <br/>

      <label htmlFor='postal code'>Postal code</label>
      <br/>
      <input type="text" placeholder="postal code"
      onChange={changeHandler}
      name="postal code"
      id="input"
      value={formData.code}/>
     

     <br/>
     <br/>

    <h3>By Email</h3>
    <div>
      <input className="checkbox"
     type="checkbox"
     onChange={changeHandler}
     name="comments"
     id="comments"
     checked={formData.comments}
     />
     <label htmlFor='isVisible'>Comments<p>get notified</p></label>
    

     <input className="checkbox"
     type="checkbox"
     onChange={changeHandler}
     name="candidates"
     id="candidates"
     checked={formData.candidates}/>

     <label htmlFor='isVisible'>Candidates </label>
     <br/>
     <input className="checkbox"
     type="checkbox"
     onChange={changeHandler}
     name="isVisible"
     id="isVisible"
     checked={formData.isVisible}/>

     <label htmlFor='isVisible'>Others </label>
</div>
     <br/>
     <br/>
     
  <h3> Push Notification </h3>
  <div id="mode">
    <div>
  <input
     type="radio"
     onChange={changeHandler}
     name="mode"
     id="Yes"
     value="Yes"
      // if mode value is online mode then check online mode 
     checked={formData.mode === "Yes"}/>
     <label htmlFor='Online-Mode'>Yes</label>
     </div>
     <div>
     <input
     type="radio"
     onChange={changeHandler}
     name="mode"
     id="No"
     value="No"
     checked={formData.mode === "No"}/>
     <label htmlFor='No'>No</label>
     </div>
 </div>
    
  

    
   
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
