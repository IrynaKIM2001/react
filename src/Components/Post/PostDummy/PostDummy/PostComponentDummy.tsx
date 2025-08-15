import type {FC} from "react";
import type {IPostDummyModel} from "../../../../Models/PostModel/PostDummyModel.ts";
import '../../CSS/PostComponentsJSON.css'

interface PostComponentDummyProps {
    post: IPostDummyModel
}

export const PostComponentDummy: FC<PostComponentDummyProps> = ({post: {id, title, body, reactions, views}}) => {
    return (
        <div className='post'>
            <h3>User ID: {id}</h3>
            <p>{title}</p>
            <p>{body}</p>
            <p>Likes: {reactions.likes}</p>
            <p>Dislikes: {reactions.dislikes}</p>
            <p>Views: {views}</p>
        </div>
    );
};