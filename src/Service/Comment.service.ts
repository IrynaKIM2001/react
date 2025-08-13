import type {ICommentModel} from "../Models/CommentModel.ts";


const endpointComments = import.meta.env.VITE_API_BASE_URL + "/comments";

const loadComments = async ():Promise<ICommentModel[]> => {
    return await fetch(endpointComments)
        .then(value => value.json());
}

export {loadComments}