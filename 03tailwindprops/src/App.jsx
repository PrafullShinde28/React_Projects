import './App.css'
import Card from './components/Card'
function App() {
 
   let myObj = {
    userName : "Prafull",
    age  : 20
   }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind test</h1>
      <Card userName ="chai aur code" someObj={myObj}/>
      </>
  )
}

export default App
