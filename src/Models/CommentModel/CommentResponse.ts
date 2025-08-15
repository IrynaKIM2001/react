import type {ICommentDummyModel} from "./CommentDummyModel.ts";

export interface ICommentResponseModel {
    comments:ICommentDummyModel[],
    total: number,
    skip: number,
    limit: number
}