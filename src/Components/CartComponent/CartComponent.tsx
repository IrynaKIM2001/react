import type {ICartModel} from "../../Models/ICartModel.ts";
import type {FC} from "react";
import './CartComponent.css'

interface CartComponentProps {
    cart: ICartModel
}

export const CartComponent:FC<CartComponentProps> = ({cart}) => {
    return (
        <div className='carts'>
            {cart.products.map((product) => (
                <div className='cart' key={product.id}>
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <img src={product.thumbnail} alt={product.title}/>
                </div>
            ))}
        </div>
    );
};