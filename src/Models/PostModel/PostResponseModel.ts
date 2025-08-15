import type {IPostDummyModel} from "./PostDummyModel.ts";

export interface IPostResponseModel {
    posts:IPostDummyModel[],
    total: number,
    skip: number,
    limit: number
}