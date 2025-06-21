import { useContext } from "react"
import { InfoContext } from "../hooks/InfoContext"

const Services = () => {
    const info=useContext(InfoContext)
  return (
    <div>
        <h1>Services</h1>
        <h1>I am {info.name} and my age is {info.age} from {info.dep} department</h1>
    </div>
  )
}
export default Services