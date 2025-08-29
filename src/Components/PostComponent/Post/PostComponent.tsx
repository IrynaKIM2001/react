import type {IPost} from "../../../Models/IPost.ts";
import type {FC} from "react";
import './PostComponent.css'

interface PostComponentProps {
    post: IPost
}

export const PostComponent:FC<PostComponentProps> =({post:{id,title,body }}) => {
    return (
        <div className='post'>
            <h3>Post ID: {id}</h3>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};