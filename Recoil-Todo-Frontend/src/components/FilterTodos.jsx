import { useState } from "react"
import axios from "axios"

export function FilterTodos(){
    const [filter, setFilter] = useState('')
    const [data, setData] = useState([])

    async function filterClick(){

        try{
            let res = await axios.get(`http://localhost:3000/app/todos/filter/${filter}`)
            if(res.status !== 200){
                console.error("err occured");
                return;
            }
            setData(res.data.todo)
        }catch(e){
            console.error("some went wrong", e);
            
        }
    }
    return(
        <>
            <input type="text" placeholder="Enter Filter" onChange={(e) => setFilter(e.target.value)} /> <br /> <br />
            <button onClick={filterClick}> Filter Todos</button>
            {data.map((x) => {
                return <div key={x.id}>
                    {x.title} <br />
                    {x.description}
                </div>
            })}
        </>
    )
}