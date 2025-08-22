import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";
import { AuthResourcesComponent } from "../components/AuthResourcesComponent/AuthResourcesComponent.tsx";
import type {IProduct} from "../models/IProduct.ts";

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
        <>{errorMessage && <div style={{ color: 'red', padding: '10px' }}>{errorMessage}</div>}
            {
                products.map(product => <AuthResourcesComponent key={product.id} product={product} />)
            }
        </>
    );
};