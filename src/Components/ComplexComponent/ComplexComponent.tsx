import {useAppDispatch} from "../../Redux/Hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../Redux/Hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {userActions} from "../../Redux/Slices/userSlice.ts";
import {postActions} from "../../Redux/Slices/postSlice.ts";
import {commentActions} from "../../Redux/Slices/commentSlice.ts";
import type {IUser} from "../../Models/IUser.ts";
import {UserComponent} from "../UserComponent/User/UserComponent.tsx";
import type {IPost} from "../../Models/IPost.ts";
import {PostComponent} from "../PostComponent/Post/PostComponent.tsx";
import type {IComment} from "../../Models/IComment.ts";
import {CommentComponent} from "../CommentComponent/Comment/CommentComponent.tsx";
import '../UserComponent/Users/UsersComponent.css';
import '../PostComponent/Posts/PostsComponent.css';
import '../CommentComponent/Comments/CommentsComponent.css';
import './ComplexComponent.css'

export const ComplexComponent = () => {
    const dispatch = useAppDispatch();
    const {userStoreSlice:{users}, postStoreSlice:{posts}, commentStoreSlice:{comments}} = useAppSelector(state => state);
    useEffect(() => {
        if(!users.length) dispatch(userActions.loadUsers());
        if(!posts.length) dispatch(postActions.loadPosts());
        if(!comments.length) dispatch(commentActions.loadComments());
    }, []);
    return (
        <div className='complex'>
            <b>Users:</b>
            <div className='users'>
                {
                    users.map((user:IUser) => <UserComponent key={user.id} user={user} />)
                }
            </div>
            <b>Posts:</b>
            <div className='posts'>
                {
                    posts.map((post:IPost) => <PostComponent key={post.id} post={post} />)
                }
            </div>
            <b>Comments:</b>
            <div className='comments'>
                {
                    comments.map((comment:IComment) => <CommentComponent key={comment.id} comment={comment} />)
                }
            </div>
        </div>
    );
};