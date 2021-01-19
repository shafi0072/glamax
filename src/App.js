import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import { createContext, useState } from 'react';
export const userContext = createContext();
function App() {
 
  const [details, setDetails] = useState({
    id:"1",
    val_brightness:'30'
  });
  return (
   <userContext.Provider value = {[details, setDetails]}>
      <Router className="">
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route  path="/bg/:Id">
            <Home/>
         </Route>
       </Switch>
    </Router>
   </userContext.Provider>
  );
}

export default App;
