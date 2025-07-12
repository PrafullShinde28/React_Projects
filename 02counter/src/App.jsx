import { useState } from 'react'

import './App.css'

function App() {
 
 let [counter,setCounter] = useState(15)
  // let counter = 5;
  const decreaseValue = ()=>{
    if(counter>0)
    {
     console.log("value decreased",counter)
    setCounter(counter-1)
    }
    else{
       console.log(`cannot decerase couter below ${counter}`)
    }
  }

  const addValue = ()=>{
    if(counter<20){
      
    console.log("value added ",counter);
    // counter=counter+1;
    setCounter(counter+1)
    }
    else{
        console.log(`cannot increase couter above ${counter}`)

    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button 
      onClick={decreaseValue}
      >Decrease value</button>
    </>
  )
}

export default App
