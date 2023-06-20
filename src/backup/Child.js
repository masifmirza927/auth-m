

const Child = (props) => {
    return (
        <>
            <div>Child</div>
            <div>
                {
                    (props.isLogin == true) ? "You are Login" : "You are NOT login"
                }
                {
                    (props.isLogin == false) ? <button onClick={ () => { props.setIsLogin(true)} }>Login</button> : <button onClick={ () => { props.setIsLogin(false) } }>Logout</button>
                }
                
            </div>
        </>
    )
}

export default Child