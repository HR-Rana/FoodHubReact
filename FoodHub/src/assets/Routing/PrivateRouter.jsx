import { Navigate } from "react-router-dom";



export const PrivateRouter=({children, state})=>{

    if(state){
        return children
    }
    else{
        return <Navigate to={'/Login'} />
    }

}