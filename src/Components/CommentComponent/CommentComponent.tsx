import type {ICommentModel} from "../../Models/CommentModel.ts";
import type {FC} from "react";
import './CommentComponent.css'

type CommentComponentProps = {
    comment: ICommentModel
}

export const CommentComponent:FC<CommentComponentProps> = ({comment:{id, name, email, body}}) => {
    return (
        <div className='comment'>
            <h3>{name}</h3>
            <p>ID - {id}, email: {email}</p>
            <p>{body}</p>
        </div>
    );
};