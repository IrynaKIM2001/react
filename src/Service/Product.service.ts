import type {IProductsResponse} from "../Models/ProductResponse.ts";
import type {IProductsModel} from "../Models/ProductModel.ts";


const endpointProducts = import.meta.env.VITE_API_BASE_URL + "/products";

const loadProducts = async ():Promise<IProductsModel[]> => {
    const response:IProductsResponse=await fetch(endpointProducts)
        .then(value => value.json());
    return response.products;
}

export {loadProducts}