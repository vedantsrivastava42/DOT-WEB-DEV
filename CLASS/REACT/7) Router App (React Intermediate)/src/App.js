//Notes
// Go to index.js -> To use Browser Router, wrap the App component in the browser router component
// Create a <Routes> in app.js to create different routes
import './App.css';
import Home from './Home.js';
import Support from './Support.js';
import About from './About.js';
import Labs from './Labs.js';
import Error from './Error.js';
import Mainheader from './Mainheader.js';
import { Route,Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; //Links the route to text

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to= "/about">About</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
        </ul>
      </nav>

{/* Home is the parent route and other are child routes
Create a mainheader parent class then add home to that with index keyword  */}
    <Routes>
      <Route path="/" element={<Mainheader/>}>
      <Route index element={<Home/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/labs" element={<Labs/>}/>
      <Route path="*" element={<Error/>}/>
      </Route>   
    </Routes>
    </div>
  );
}

export default App;
