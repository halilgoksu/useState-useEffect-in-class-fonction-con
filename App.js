import React, { Component } from 'react'
import './App.css';
import UseEffectClass from './context/UseEffectClass';
import UseEffectFunction from './context/UseEffectFunction';

import UseStateClass from './useState/UseStateClass';
import UseStateFunction from './useState/UseStateFunction';

class App extends Component {
  render() {
    return (
      <div className='container'>

        <p>UseState</p>
        <div className='usestate'>
           <UseStateClass></UseStateClass>
           <UseStateFunction></UseStateFunction>
        </div>
    
         <br/>  
         <hr/>
         <p>UseEffect</p>
         <div className='usestate'>
          <UseEffectClass></UseEffectClass>
          <UseEffectFunction></UseEffectFunction>
         </div>
         
         <br/>  
         <hr/>

         
      </div>
    );
  }
}
export default App;
