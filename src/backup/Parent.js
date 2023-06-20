import Child from "./Child";


function Parent (props) {
    return(
        <>
            <div>Parent</div>
            <Child isLogin={props.isLogin} setIsLogin={props.setIsLogin} />
        </>
    )
}

export default Parent;