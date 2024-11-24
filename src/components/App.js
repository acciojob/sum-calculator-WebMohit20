
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
  let [sum,setSum] = useState(0);
  return (
    <div>
      <input type="number" onChange={(e)=>setSum(sum+ +(e.target.value))}/>
      <h1>{sum}</h1>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
