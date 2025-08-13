import './TodoComponent.css'
import type {FC} from "react";
import type {ITodoModel} from "../../Models/TodoModel.ts";

type PropType={
    todo:ITodoModel
};

export const TodoComponent:FC<PropType> = ({todo:{todo, id, completed}}) => {
    return (
        <div>
            <h3>ID-{id} Completed: {completed.toString()}</h3>
            <p>{todo}</p>
        </div>
    );
};