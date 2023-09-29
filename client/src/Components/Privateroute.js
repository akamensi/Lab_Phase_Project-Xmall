import { Navigate } from "react-router"


const Privateroute=({children})=>{
    const token  = localStorage.getItem('token')
    return(
        <div>
        {
            token ? children : <Navigate to='/' />
        }
        </div>
    )
}

export default Privateroute