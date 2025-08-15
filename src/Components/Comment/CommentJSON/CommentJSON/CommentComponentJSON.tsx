import type {ICommentJSONModel} from "../../../../Models/CommentModel/CommentJSONModel.ts";
import type {FC} from "react";
import '../../CSS/CommentComponentJSON.css'

interface CommentComponentJSONProps {
    comment: ICommentJSONModel
}

export const CommentComponentJSON:FC<CommentComponentJSONProps> = ({comment:{id, name, email, body}}) => {
    return (
        <div className='comment'>
            <h3>User ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>{body}</p>
        </div>
    );
};