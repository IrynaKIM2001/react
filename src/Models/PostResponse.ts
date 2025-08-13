import type {IPostModel} from "./PostModel.ts";

export interface IPosTResponse{
    posts:IPostModel[],
    "total": number,
    "skip": number,
    "limit": number
}