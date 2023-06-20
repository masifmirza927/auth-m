import { useContext } from "react"
import { authContext } from "./App"


const Child = () => {

    const {isLogin, setIsLogin } = useContext(authContext);
    
    return (
        <>
            <div>Child</div>
            <div>
                {
                    (isLogin == true) ? "You are Login" : "You are NOT login"
                }

                {
                    (isLogin == true) ? <button onClick={ () => {setIsLogin(false)} }>Logout</button> : <button onClick={ () => {setIsLogin(true)} }>Login</button>
                }
                
            </div>
        </>
    )
}

export default Child