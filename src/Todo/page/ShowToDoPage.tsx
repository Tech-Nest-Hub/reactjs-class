import AppTaskComp from "../components/AppTaskComp"
import type { Props } from "../types/types"



const ShowToDoPage = (props: Props) => {
  
  return (
    <>
    <div>{props.name}</div>
    <div>{props.height}</div>
    <AppTaskComp/>
    </>
  )
}

export default ShowToDoPage


