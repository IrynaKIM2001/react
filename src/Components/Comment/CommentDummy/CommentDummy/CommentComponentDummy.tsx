import type {FC} from "react";
import type {ICommentDummyModel} from "../../../../Models/CommentModel/CommentDummyModel.ts";
import '../../CSS/CommentComponentJSON.css'

interface CommentComponentDummyProps {
    comment: ICommentDummyModel
}

export const CommentComponentDummy: FC<CommentComponentDummyProps> = ({comment: {id, body, likes, user}}) => {
    return (
        <div className='comment'>
            <h3>User ID: {id}</h3>
            <p>Name: ({user.username}) {user.fullName}</p>
            <p>Likes: {likes}</p>
            <p>Comment: {body}</p>
        </div>
    );
};