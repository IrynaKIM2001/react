import type {IUserResponseModel} from "../../Models/UserModel/UserResponseModel.ts";
import type {IUserDummyModel} from "../../Models/UserModel/UserDummyModel.ts";
import type {IPostResponseModel} from "../../Models/PostModel/PostResponseModel.ts";
import type {IPostDummyModel} from "../../Models/PostModel/PostDummyModel.ts";
import type {ICommentDummyModel} from "../../Models/CommentModel/CommentDummyModel.ts";
import type {ICommentResponseModel} from "../../Models/CommentModel/CommentResponse.ts";
import type {IProductResponseModel} from "../../Models/ProductModel/ProductResponse.ts";
import type {IProductsModel} from "../../Models/ProductModel/ProductModel.ts";


const endpointUsersDummy = import.meta.env.VITE_API_BASE_DUMMY_URL + "/users";
const endpointPostsDummy = import.meta.env.VITE_API_BASE_DUMMY_URL + "/posts";
const endpointCommentsDummy = import.meta.env.VITE_API_BASE_DUMMY_URL + "/comments";
const endpointProductsDummy = import.meta.env.VITE_API_BASE_DUMMY_URL + "/products";

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

const loadDummyComment = async ():Promise<ICommentDummyModel[]> => {
    const response:ICommentResponseModel=await fetch(endpointCommentsDummy)
        .then(value => value.json());
    return response.comments;
}

const loadDummyProduct = async ():Promise<IProductsModel[]> => {
    const response:IProductResponseModel=await fetch(endpointProductsDummy)
        .then(value => value.json());
    return response.products;
}
export {loadDummyUser, loadDummyPost,loadDummyComment,loadDummyProduct}