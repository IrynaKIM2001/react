import type {ITodoModel} from "../Models/TodoModel.ts";
import type {ITodoResponse} from "../Models/TodoResponse.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + "/todos";

const loadTodos = async ():Promise<ITodoModel[]> => {
    const response:ITodoResponse= await fetch(endpointTodos)
        .then(value => value.json());
    return response.todos;
}

export {loadTodos}