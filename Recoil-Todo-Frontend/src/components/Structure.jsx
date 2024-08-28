import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { todos } from "../store/atoms/todos"
import axios from "axios"


export function Structure() {
    const [title, setTitle] = useState("")
    const [description, setDesc] = useState("")
    const [id, setId] = useState(0)

    const [todo, setTodo] = useRecoilState(todos)

    async function addTodo() {
        let newTodo = {
            id: id + 1,
            title,
            description
        }
        try {
            // making axios call 
            let res = await axios.post('http://localhost:3000/app/addTodo', newTodo)
            // console.log(res);
            if (res.status !== 200) {
                console.error("Error: Invalid input or server issue");
                return;
            }
            setTodo([...todo, newTodo])
            setId(id + 1)
        } catch (e) {
            console.error("error occured", e)
        }
    }

    return (
        <>
            <input type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} /> <br /> <br />
            <input type="text" placeholder="Enter Description" onChange={(e) => setDesc(e.target.value)} /> <br /><br />

            <button onClick={addTodo}> Add Todo </button>
            {/* <button onClick={viewTodos}> View All Todo </button> */}

            {todo.map((x) => {

                return <div key={x.id}>
                    <br />{x.title} <br />
                    {x.description}
                </div>
            })}
        </>
    )
}