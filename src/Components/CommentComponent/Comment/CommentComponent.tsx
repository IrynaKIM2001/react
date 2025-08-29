import type {IComment} from "../../../Models/IComment.ts";
import type {FC} from "react";
import './CommentComponent.css'

interface CommentComponentProps {
    comment: IComment
}

export const CommentComponent:FC<CommentComponentProps> = ({comment:{id, name, email, body}}) => {
    return (
        <div className='comment'>
            <h3>Comment ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Body: {body}</p>
        </div>
    );
};