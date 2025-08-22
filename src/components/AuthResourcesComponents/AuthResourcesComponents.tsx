import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";
import {AuthResourcesComponent} from "../AuthResourcesComponent/AuthResourcesComponent.tsx";
import './AuthResourcesComponents.css';

export const AuthResourcesComponents = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>("");
    useEffect(() => {
        loadAuthProducts().then(products =>setProducts(products))
            .catch(reason => {
                setErrorMessage("Помилка: Повтор аутентифікації");
                console.log(reason);
                setTimeout(() => {
                    setErrorMessage("");
                }, 1000);
                refresh()
                    .then(() => loadAuthProducts())
                    .then(products => setProducts(products))
            })

    }, []);

    return (
        <div className='products'>
            {errorMessage && <div className='error'>{errorMessage}</div>}
            {products.map(product => <AuthResourcesComponent key={product.id} product={product} />)}
        </div>
    );
};