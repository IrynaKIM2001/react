import type {IPostModel} from "../Models/PostModel.ts";
import type {IPosTResponse} from "../Models/PostResponse.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + "/posts";

const loadPosts = async ():Promise<IPostModel[]> => {
    const response:IPosTResponse=await fetch(endpointPosts)
        .then(value => value.json());
    return response.posts;
}

export {loadPosts}