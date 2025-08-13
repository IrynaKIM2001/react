import type {IProductsModel} from "./ProductModel.ts";

export interface IProductsResponse{
    products:IProductsModel[],
    total: number,
    skip: number,
    limit: number
}