import { use, useEffect, useState } from "react"
import MyApp, { MyButton } from "./stuffs/buttons"
import AppTaskComp from "./Todo/components/AppTaskComp";

type Props = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}


import Task1 from "./Week1/Task1"
import Task2 from "./Week1/Task2"
import Home from "./Week1/Home"
import Task3 from "./Week1/Task3"
import Task4 from "./Week1/Task4"
import { BrowserRouter as Router , Routes, Route, Link  } from "react-router-dom";
function App() {
const [count, setcount] = useState(5);
const [data, setData] = useState<Props[]>([]);
function handleFetch (){
  setcount(count + 10);
}

useEffect(() => {
  fetch("https://67566fc611ce847c992cc7b5.mockapi.io/todo")
    .then((response) => response.json())
    .then((data) => {
      setData(data.slice(0, 5)); // Limit to first 5 items
    })
    .catch((error) => console.error("Error fetching data:", error));
}, [count]);


  return (
  


    <>

      
      <Router>
       <div>
       <nav>
        <Link to="/Task3">Task3</Link> 
        <Link to='/Task1'>Task1</Link>
       <Link to="/Task2">Task2</Link>
       <Link to="/Task4">Task4</Link>
       <Link to="/">Home</Link></nav>
       </div>
       <Routes>


       
      
      <Route path="/Task1" element={<Task1/>}></Route>
      <Route path="/Task4"element={<Task4/>}></Route>
      <Route path="/Task2" element={<Task2/>}></Route>
      <Route path="/Task3" element={<Task3/>}></Route>
      <Route index element={<Home/>}></Route>
      
      
      
      

      </Routes>
       
      </Router>
     
      
    </>
  )
}

export default App


