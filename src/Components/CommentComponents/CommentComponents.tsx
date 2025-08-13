import type {ICommentModel} from "../../Models/CommentModel.ts";
import {useEffect, useState} from "react";
import {loadComments} from "../../Service/Comment.service.ts";
import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";
import './CommentComponents.css'


export const CommentComponents = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(()=>{
        loadComments().then(value => setComments(value));
    },[]);
    return (
        <div className='comments'>
            {
                comments.map(comment => (<CommentComponent key={comment.id} comment={comment}/>))
            }
        </div>
    );
};