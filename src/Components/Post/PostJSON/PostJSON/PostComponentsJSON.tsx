import type {FC} from "react";
import type {IPostJSONModel} from "../../../../Models/PostModel/PostJSONModel.ts";
import '../../CSS/PostComponentsJSON.css'

type PostComponentJSONProps = {
    post: IPostJSONModel
}

export const PostComponentJSON:FC<PostComponentJSONProps> = ({post:{id,title,body }}) => {
    return (
        <div className='post'>
            <h3>User ID: {id}</h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};