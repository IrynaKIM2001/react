import {useEffect, useState} from "react";
import {loadDummyProduct} from "../../../../Service/DummyService/api.serviceDummy.ts";
import type {IProductsModel} from "../../../../Models/ProductModel/ProductModel.ts";
import {ProductComponentDummy} from "../ProductDummy/ProductComponentDummy.tsx";
import './ProductsComponentDummy.css'

export const ProductsComponentDummy = () => {
    const [products, setProducts] = useState<IProductsModel[]>([]);
    useEffect(() => {
        loadDummyProduct().then(products => setProducts(products));
    },[]);
    return (
        <div className='products'>
            {
                products.map(product => (<ProductComponentDummy key={product.id} product={product}/>))
            }
        </div>
    );
};