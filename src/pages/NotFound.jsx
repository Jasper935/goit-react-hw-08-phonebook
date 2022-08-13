import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getLogin } from "redux/auth/auth-selectors"
export const  NotFound =()=>{

    const isLogged = useSelector(getLogin)
    return(
    <>  {isLogged?(<h3>Page not found, go to <Link to='/contacts'>contacts</Link></h3>):(<h3>Page not found, go to <Link to='/login'>login</Link></h3>)}  
      </> 
        
    )
}