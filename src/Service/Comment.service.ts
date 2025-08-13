import type {ICommentModel} from "../Models/CommentModel.ts";
import type {ICommentResponse} from "../Models/CommentResponse.ts";


const endpointComments = import.meta.env.VITE_API_BASE_URL + "/comments";

const loadComments = async ():Promise<ICommentModel[]> => {
    const response:ICommentResponse=await fetch(endpointComments)
        .then(value => value.json());
    return response.comments;
}

export {loadComments}