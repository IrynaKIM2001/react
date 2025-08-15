import type {IUserJSONModel} from "../../Models/UserModel/UserJSONModel.ts";
import type {IPostJSONModel} from "../../Models/PostModel/PostJSONModel.ts";
import type {ICommentJSONModel} from "../../Models/CommentModel/CommentJSONModel.ts";

const endpointUsers = import.meta.env.VITE_API_BASE_JSONPLACEHOLDER_URL + "/users";
const endpointPosts = import.meta.env.VITE_API_BASE_JSONPLACEHOLDER_URL + "/posts";
const endpointComments = import.meta.env.VITE_API_BASE_JSONPLACEHOLDER_URL + "/comments";


const loadUsers = async ():Promise<IUserJSONModel[]> => {
    return await fetch(endpointUsers)
        .then(value => value.json());
}

const loadPosts = async ():Promise<IPostJSONModel[]> => {
    return await fetch(endpointPosts)
        .then(value => value.json());
}

const loadComments = async ():Promise<ICommentJSONModel[]> => {
    return await fetch(endpointComments)
        .then(value => value.json());
}

export {loadUsers, loadPosts, loadComments}