import {useEffect, useState} from "react";
import './ProductComponents.css'
import type {IProductsModel} from "../../Models/ProductModel.ts";
import {loadProducts} from "../../Service/Product.service.ts";
import {ProductComponent} from "../ProductComponent/ProductComponent.tsx";


export const ProductComponents = () => {
    const [products, setProducts] = useState<IProductsModel[]>([]);
    useEffect(()=>{
        loadProducts().then(value => setProducts(value));
    },[]);
    return (
        <div className='products'>
            {
                products.map(product => (<ProductComponent key={product.id} product={product}/>))
            }
        </div>
    );
};