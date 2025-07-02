import { Button } from "@/components/ui/button"


type Props = {}

const AppTaskComp = (props: Props) => {
  function maClickBhaye() {
    alert("Ko garib tichexa")
  }

  return (
    <>
    <section>
      <Button  onClick={maClickBhaye} variant='link'> Go Back</Button>
    </section>
    </>

  )
}

export default AppTaskComp