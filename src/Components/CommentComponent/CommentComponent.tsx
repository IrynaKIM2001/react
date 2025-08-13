import type {ICommentModel} from "../../Models/CommentModel.ts";
import type {FC} from "react";
import './CommentComponent.css'

type CommentComponentProps = {
    comment: ICommentModel
}

export const CommentComponent: FC<CommentComponentProps> = ({ comment: { id, likes, body, user } }) => {
    return (
        <div className='comment'>
            <h3>{user.fullName} ({user.username})</h3>
            <p>ID - {id}, likes: {likes}</p>
            <p>{body}</p>
        </div>
    );
};