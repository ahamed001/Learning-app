import React from "react";
import './App.css';
import Home from "./codehub/homepage";
import Navbar from "./codehub/navbar";

import Htmlunits from "./codehub/htmlunits";
import Cssunits from "./codehub/cssunits";

import {Routes, Route} from "react-router-dom";
import Intro from "./HTML/intro"
import { Forms } from "./HTML/forms";
import { Tables } from "./HTML/tables";
import { Graphics } from "./HTML/graphics";
import { Lists } from "./HTML/lists";

import { Flex } from "./CSS/flex";
import { Cssintro } from "./CSS/cssintro";
import { Grid } from "./CSS/grid";
import { Animation } from "./CSS/animation";
import { Tooltip } from "./CSS/tooltip";
import Quizcss from "./CSS/quizcss";
import Quizhtml from "./HTML/quizhtml";
import Login from "./codehub/login";
import Signup from "./codehub/signup";



function App() {
  return (
    <div className="App">

      
      <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          
            <Route path='/htmlunits' element={<Htmlunits/>}>

              <Route path="/htmlunits/intro" element={<Intro />} />
              <Route path='/htmlunits/forms'    element={<Forms/>}/> 
              <Route path='/htmlunits/tables'   element={<Tables/>}/>
              <Route path='/htmlunits/graphics' element={<Graphics/>}/>
              <Route path='/htmlunits/lists'    element={<Lists/>}/> 
              <Route path='/htmlunits/quizhtml'  element={<Quizhtml/>}/> 

            </Route>

            <Route path='/cssunits' element={<Cssunits/>}>

              <Route path="cssintro"  element={<Cssintro />} />
              <Route path='animation' element={<Animation/>}/>
              <Route path='grid'      element={<Grid/>}/> 
              <Route path='flex'      element={<Flex/>}/>
              <Route path='tooltip'   element={<Tooltip/>}/> 
              <Route path='quizcss'   element={<Quizcss/>}/> 

            </Route>
            <Route path="signup" element={<Signup/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
        
    

    </div>
  );
}

export default App;
