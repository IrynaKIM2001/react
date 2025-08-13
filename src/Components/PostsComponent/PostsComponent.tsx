import {useEffect, useState} from "react";
import type {IPostModel} from "../../Models/PostModel.ts";
import {loadPosts} from "../../Service/Api.service.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";
import './PostsComponent.css'

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        loadPosts().then(value=>setPosts(value))
    })
    return (
        <div className='posts'>{
            posts.map(post=><PostComponent post={post} key={post.id}/>)
        }
        </div>
    );
};