
import React, {useState} from "react";
import data from './data'
import Tours from "./Components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
    //filter function -> jo tour.id given id ke equal nhi hoga usko show krega 
    //matlab jis tour pe click kro uska id rhega tour.id me aur wo filter out ho jaega
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;


// My code (Map undefined error)

// import React, { useState } from "react";
// import data from './data';
// import Tours from  './Components/Tours'
// const App = () => {

//   const [tours,setTours] = useState(data)

//   function removeTour(id){
//     const newTours = tours.filter(tour => tour.id !== id);
//     setTours(newTours);
//   }

//   if (tours.length ===0){
//     return (
//       <div className="refresh">
//         <h2>No Tours Left</h2>
//         <button onClick={() => setTours(data)}>
//           Refresh
//           </button>
//       </div>
//     );
//   }
  
//   return (
//     <div>
//       <Tours>tours={tours} removeTour={removeTour}</Tours>
//     </div>
//   )
// };

// export default App;

