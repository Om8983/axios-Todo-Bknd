
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navigate } from "./Navigate"
import { RecoilRoot } from "recoil"
import { Structure } from "./components/Structure"
import { FilterTodos } from "./components/FilterTodos"

function App() {


  return (

    <BrowserRouter>
      <Navigate></Navigate>
      <Routes>
        <Route path="/" element={
          <RecoilRoot>
            <Structure></Structure>
          </RecoilRoot> 
        }></Route>
        <Route path="/filterTodo" element={
          <RecoilRoot>
            <FilterTodos></FilterTodos>
          </RecoilRoot>
        }></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
