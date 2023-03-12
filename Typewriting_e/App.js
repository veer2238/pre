
import React from 'react';
  

import Typewriter from "typewriter-effect";
import './App.css';
  
function App() {
  return (
    <div className="App">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Welcome To Our Website")
         
       .pauseFor()
       .deleteAll()
       .typeString("All The Best !")
       .start();
       }}
       />
    </div>
  );
}
  
export default App;