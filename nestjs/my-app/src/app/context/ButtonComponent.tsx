import { useContext } from "react";
import { ActionContext } from "./TestContext";

export default function ButtonComponent() {
    const actions = useContext(ActionContext)
    return (
        <div>
            <a href="#" onClick={()=>actions!({ 'type': 'increase', 'text': 'Increasing' })}> INCREASE </a> 
            <a href="#" onClick={()=>actions!({ 'type': 'decrease', 'text': 'Decreasing' })}> DECREASE </a>
        </div>
    )
}