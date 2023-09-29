import { HANDELERROR, REMOVEERROR } from "../TypeActions/ErrorTypes"

export const handelError=(msg)=>async(dispatch)=>{
const id = Math.random()

dispatch(
    {
        type : HANDELERROR,
        payload : {msg, id}
    }
)
setTimeout(() => {
    dispatch(
        {
            type : REMOVEERROR,
            payload : id
        }
    )
}, 4000);
}