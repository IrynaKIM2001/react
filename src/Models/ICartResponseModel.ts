import type {ICartModel} from "./ICartModel.ts";

export interface ICartResponseModel {
    carts: ICartModel[];
    total: number;
    skip: number;
    limit: number;
}