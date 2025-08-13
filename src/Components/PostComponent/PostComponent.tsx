import type {IPostModel} from "../../Models/PostModel.ts";
import type {FC} from "react";
import './PostComponent.css'

type PostComponentProps = {
    post: IPostModel
}

export const PostComponent:FC<PostComponentProps> = ({post:{title, body, id}} ) => {
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p>ID - {id}</p>
            <p>{body}</p>
        </div>
    );
};