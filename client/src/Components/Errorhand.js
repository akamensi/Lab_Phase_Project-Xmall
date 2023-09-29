import { useSelector } from "react-redux"
import { Message } from "semantic-ui-react"



const Errorhand=()=>{
    const errors = useSelector(state=> state.ErrorReducer)
    return(
        <div>
    {
        errors.map(el=><Message size='huge' color='red'>{el.msg}</Message>)
    }
        </div>
    )
}

export default Errorhand