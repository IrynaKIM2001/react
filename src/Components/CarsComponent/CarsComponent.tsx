import {useEffect, useState} from "react";
import {getCars} from "../../Services/api.services.ts";
import {CarComponent} from "../CarComponent/CarComponent.tsx";
import type {ICar} from "../../Models/ICar.ts";
import './CarsComponent.css'

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars().then(cars => setCars(cars));
    }, []);
    return (
        <div className="cars">
            {cars.map(cars=> <CarComponent key={cars.id} car={cars}/>)}
        </div>
    );
};