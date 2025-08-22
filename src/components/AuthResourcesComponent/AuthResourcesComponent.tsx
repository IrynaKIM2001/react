import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";
import './AuthResourcesComponent.css';

type AuthResourcesComponentProps = {
    product: IProduct
}

export const AuthResourcesComponent:FC<AuthResourcesComponentProps> = ({ product }) => {
    const {
        title,
        description,
        price,
        category,
        brand,
        rating,
        availabilityStatus,
        thumbnail
    } = product;

    return (
        <div className='product'>
            <h3>{title}</h3>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p><strong>AvailabilityStatus:</strong> {availabilityStatus}</p>
            <img src={thumbnail} alt={title}/>
        </div>
    );
};