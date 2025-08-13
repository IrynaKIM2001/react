import './TodosComponent.css'
import type {ITodoModel} from "../../Models/TodoModel.ts";
import {useEffect, useState} from "react";
import {loadTodos} from "../../Service/Todo.service.ts";
import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";


export const TodosComponent = () => {
    const [todos, setTodos] = useState<ITodoModel[]>([]);

    useEffect(() => {
        loadTodos().then(value=>setTodos(value))
    })
    return (
        <div>{
            todos.map(todo=><TodoComponent todo={todo} key={todo.id}/>)
        }
        </div>
    );
};