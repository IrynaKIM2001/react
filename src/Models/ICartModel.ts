import type {Products} from "./IProductModel.ts";

export interface ICartModel {
  id: number;
  products: Products[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}