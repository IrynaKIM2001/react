import type {IProductsModel} from "./ProductModel.ts";


export interface IProductResponseModel {
    products:IProductsModel[],
    total: number,
    skip: number,
    limit: number
}