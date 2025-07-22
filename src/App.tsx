import { use, useEffect, useState } from "react"
import MyApp, { MyButton } from "./stuffs/buttons"
import AppTaskComp from "./Todo/components/AppTaskComp";

type Props = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}

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
    {data.map((item) => (
      <div key={item.id}>
        <h2 className="text-3xl">{item.name}</h2>
        <p>{item.createdAt}</p>
        <p>{item.avatar}</p>
      </div>
    ))}
    <button className="" onClick={handleFetch}>Fetch call</button>
    <AppTaskComp/>
    </>
  )
}

export default App


