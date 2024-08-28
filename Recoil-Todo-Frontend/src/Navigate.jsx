import {useNavigate } from "react-router-dom"
export function Navigate(){
    const navigate = useNavigate();
    return(
        <>
            <button onClick={() => {
                navigate ("/")
            }}>Landing</button>  
            <button style= {{marginLeft : '0.5rem'}}onClick={() => {
                navigate("/filterTodo")
            }}>Filter Todo</button><br /> <br />
        </>
    )
}
