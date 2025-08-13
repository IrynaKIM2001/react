import './TodoComponent.css'
import type {FC} from "react";
import type {ITodoModel} from "../../Models/TodoModel.ts";

type PropType={
    todo:ITodoModel
};

export const TodoComponent:FC<PropType> = ({todo:{title, id, completed}}) => {
    return (
        <div>{id} {title} {completed.toString()}</div>
    );
};