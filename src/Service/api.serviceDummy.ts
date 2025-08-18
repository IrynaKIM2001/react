import type {IUserResponseModel} from "../Models/UserModel/UserResponseModel.ts";
import type {IUserDummyModel} from "../Models/UserModel/UserDummyModel.ts";
import type {IPostResponseModel} from "../Models/PostModel/PostResponseModel.ts";
import type {IPostDummyModel} from "../Models/PostModel/PostDummyModel.ts";

const endpointUsersDummy = import.meta.env.VITE_API_BASE_DUMMY_URL + "/users";
const endpointPostsDummy = import.meta.env.VITE_API_BASE_DUMMY_URL + "/posts";

const loadDummyUser = async ():Promise<IUserDummyModel[]> => {
    const response:IUserResponseModel=await fetch(endpointUsersDummy)
        .then(value => value.json());
    return response.users;
}

const loadDummyPost = async ():Promise<IPostDummyModel[]> => {
    const response:IPostResponseModel=await fetch(endpointPostsDummy)
        .then(value => value.json());
    return response.posts;
}

export {loadDummyUser, loadDummyPost}