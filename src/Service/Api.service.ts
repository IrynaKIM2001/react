import type {IPostModel} from "../Models/PostModel.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + "/posts";

const loadPosts = async ():Promise<IPostModel[]> => {
    return await fetch(endpointPosts)
        .then(value => value.json());
}

export {loadPosts}