import {useEffect, useState} from "react";
import {loadPosts} from "../../../../Service/JSONService/api.service.ts";
import type {IPostJSONModel} from "../../../../Models/PostModel/PostJSONModel.ts";
import {PostComponentJSON} from "../PostJSON/PostComponentsJSON.tsx";
import '../../CSS/PostsComponentsJSON.css'

export const PostsComponentsJSON = () => {
    const [posts, setPosts] = useState<IPostJSONModel[]>([]);
    useEffect(() => {
        loadPosts().then(posts => setPosts(posts));
    },[]);
    return (
        <div className='posts'>
            {
                posts.map(post => (<PostComponentJSON key={post.id} post={post}/>))
            }
        </div>
    );
};