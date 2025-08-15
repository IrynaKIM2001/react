import {useEffect, useState} from "react";
import type {IPostDummyModel} from "../../../../Models/PostModel/PostDummyModel.ts";
import {PostComponentDummy} from "../PostDummy/PostComponentDummy.tsx";
import {loadDummyPost} from "../../../../Service/DummyService/api.serviceDummy.ts";
import '../../CSS/PostsComponentsJSON.css'

export const PostsComponentDummy = () => {
    const [posts, setPosts] = useState<IPostDummyModel[]>([]);
    useEffect(() => {
        loadDummyPost().then(posts => setPosts(posts));
    },[]);
    return (
        <div className='posts'>
            {
                posts.map(post => (<PostComponentDummy key={post.id} post={post}/>))
            }
        </div>
    );
};