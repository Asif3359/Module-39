import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() {

  function handelClick (){
    alert ("Button Clicked");
  }
 const handelClick_2 = ()=>{
    alert ("Button Clicked 2");
  }

  const addtoFive = (num) =>{
    alert(num+5);
  }
  return (
    <>
      <h1>Vite + React</h1>
      {/* button 1 */}
      <button 
        style=
        {
          {
            backgroundColor:"gray",
            marginLeft:"8px"
          }
        } 
        onClick={handelClick} >Click me
      </button>
{/* button 2  */}
      <button 
        style=
        {
          {
            backgroundColor:"green",
            color:"white",
            marginLeft:"8px"
          }
        } 
        onClick={handelClick_2} >Click me 2
      </button>
{/* button 3 */}
      <button 
        style=
        {
          {
            backgroundColor:"green",
            color:"white",
            marginLeft:"8px"
          }
        } 
        onClick={() =>{alert("third Click")}} >Click me 3
      </button>
      {/* button 4 */}
      <button 
        style=
        {
          {
            backgroundColor:"green",
            color:"white",
            marginLeft:"8px"
          }
        } 
        onClick={() => addtoFive (3)} >Click me 4
      </button>


      <Counter></Counter>

      <Team></Team>

      <User></User>
      
      <Friends></Friends>

    </>
  )
}

export default App
