import {useEffect, useState} from "react";
import {cartService} from "../../Services/api.service.ts";
import type {ICartResponseModel} from "../../Models/ICartResponseModel.ts";
import type {ICartModel} from "../../Models/ICartModel.ts";
import {useParams} from "react-router";
import {CartComponent} from "../CartComponent/CartComponent.tsx";
import './CartsComponent.css'

export const CartsComponent = () => {
    const {id}=useParams();
    const [carts, setCarts] = useState<ICartModel[]>([]);
    useEffect(() => {
        if (id) {
            cartService.getCartsOfUser(id)
                .then((response: ICartResponseModel) => {
                    setCarts(response.carts);
                });}
    }, [id]);
    return (
        <div>
            {
                carts.map(cart => <CartComponent key={cart.id} cart={cart}/>)
            }
        </div>
    );
};