import {useAppDispatch} from "../../../Redux/Hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../../Redux/Hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {commentActions} from "../../../Redux/Slices/commentSlice.ts";
import {CommentComponent} from "../Comment/CommentComponent.tsx";
import type {IComment} from "../../../Models/IComment.ts";
import './CommentsComponent.css'

export const CommentsComponent = () => {
    const dispatch=useAppDispatch();
    const comments=useAppSelector(state => state.commentStoreSlice.comments)
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, []);
    return (
        <div className='comments'>
            {
                comments.map((comment:IComment) => <CommentComponent key={comment.id} comment={comment} />)
            }
        </div>
    );
};