import type {IUserModel} from "./IUserModel.ts";

export interface IUserResponseModel {
    users: IUserModel[];
    total: number;
    skip: number;
    limit: number;
}