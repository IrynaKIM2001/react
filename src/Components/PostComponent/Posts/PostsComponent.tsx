import {useAppDispatch} from "../../../Redux/Hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../../Redux/Hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {postActions} from "../../../Redux/Slices/postSlice.ts";
import type {IPost} from "../../../Models/IPost.ts";
import {PostComponent} from "../Post/PostComponent.tsx";
import './PostsComponent.css'

export const PostsComponent = () => {
    const dispatch=useAppDispatch();
    const posts=useAppSelector(state => state.postStoreSlice.posts)
    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, []);
    return (
        <div className='posts'>
            {
                posts.map((post:IPost) => <PostComponent key={post.id} post={post} />)
            }
        </div>
    );
};