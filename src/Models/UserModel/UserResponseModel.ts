
import type {IUserDummyModel} from "./UserDummyModel.ts";

export interface IUserResponseModel {
    users:IUserDummyModel[],
    total: number,
    skip: number,
    limit: number
}
