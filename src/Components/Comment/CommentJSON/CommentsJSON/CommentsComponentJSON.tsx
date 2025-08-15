import {useEffect, useState} from "react";
import {loadComments} from "../../../../Service/JSONService/api.service.ts";
import type {ICommentJSONModel} from "../../../../Models/CommentModel/CommentJSONModel.ts";
import {CommentComponentJSON} from "../CommentJSON/CommentComponentJSON.tsx";
import '../../CSS/CommentsComponentJSON.css'

export const CommentsComponentJSON = () => {
    const [comments, setComments] = useState<ICommentJSONModel[]>([]);
    useEffect(() => {
        loadComments().then(comments => setComments(comments));
    },[]);
    return (
        <div className='comments'>
            {
                comments.map(comment => (<CommentComponentJSON key={comment.id} comment={comment}/>))
            }
        </div>
    );
};