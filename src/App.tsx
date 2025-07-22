import { useEffect, useState } from "react"
import ShowToDoPage from "./Todo/page/ShowToDoPage";
import AppTaskComp from "./Todo/components/AppTaskComp";

type Props = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
} 




function App() {
  return (
  


    <>
    <ShowToDoPage/>
    <AppTaskComp/>
     
      
    </>
  )
}

export default App


