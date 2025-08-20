import type {ICar} from "../../Models/ICar.ts";
import type {FC} from "react";
import './CarComponent.css'

interface CarComponentProps {
    car: ICar
}
export const CarComponent:FC<CarComponentProps> = ({car}) => {
    return (
        <div className="car">
            <h3>{car.brand}</h3>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
        </div>
    );
};