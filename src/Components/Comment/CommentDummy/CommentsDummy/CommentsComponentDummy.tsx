import '../../CSS/CommentsComponentJSON.css'
import {useEffect, useState} from "react";
import {loadDummyComment} from "../../../../Service/DummyService/api.serviceDummy.ts";
import type {ICommentDummyModel} from "../../../../Models/CommentModel/CommentDummyModel.ts";
import {CommentComponentDummy} from "../CommentDummy/CommentComponentDummy.tsx";

export const CommentsComponentDummy = () => {
    const [comments, setComments] = useState<ICommentDummyModel[]>([]);
    useEffect(() => {
        loadDummyComment().then(comments => setComments(comments));
    },[]);
    return (
        <div className='comments'>
            {
                comments.map(comment => (<CommentComponentDummy key={comment.id} comment={comment}/>))
            }
        </div>
    );
};