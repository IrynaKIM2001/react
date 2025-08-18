import {useEffect, useState} from "react";
import type {IPostDummyModel} from "../../../../Models/PostModel/PostDummyModel.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";
import {loadDummyPost} from "../../../../Service/api.serviceDummy.ts";
import './PostsComponents.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostDummyModel[]>([]);
    useEffect(() => {
        loadDummyPost().then(posts => setPosts(posts));
    },[]);
    return (
        <div className='posts'>
            {
                posts.map(post => (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};