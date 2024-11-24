
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
  let [sum,setSum] = useState(0);
  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={(e)=>setSum(sum+ +(e.target.value))}/>
      <p>Sum: {sum}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
