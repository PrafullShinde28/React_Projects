import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
      return(
        <div>
            <h1>
                custom app
            </h1>
        </div>
    )
}
  

    

// const ReactElement = {
//   type : 'a',
//   props :{
//     href : 'https://google.com',
//     target : '_blank'
//   } ,
//   Children : 'Click me to visit google'
// }

const Othername = "chai aur code"
const ReactElement = React.createElement(
    'a',
    {href : "http://google.com",target : '_blank'},
    'click to visit google',
    Othername 
)
const AnotherElement = (
   <a href="http://google.com" target ='_blacnk'>visit google
   </a>
)
createRoot(document.getElementById('root')).render(
//    AnotherElement
    ReactElement
)
