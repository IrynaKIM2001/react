import {CarAdd} from "../../Services/api.services.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";
import type {ICar} from "../../Models/ICar.ts";
import {CarValidator} from "../../Validators/CarValidator.ts";
import './FormComponent.css'

export const FormComponent = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(CarValidator)
    });
    const createHandler = (data:ICar) => {
        CarAdd(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div className='formCar'>
                    <label>
                        Brand
                        <input type="text"{...register('brand')}/>
                        <div className='error'>{errors.brand?.message}</div>
                    </label>
                </div>
                <div className='formCar'>
                    <label>
                        Price
                        <input type="number"{...register('price')}/>
                        <div className='error'>{errors.price?.message}</div>
                    </label>
                </div>
                <div className='formCar'>
                    <label>
                        Year
                        <input type="number"{...register('year')}/>
                        <div className='error'>{errors.year?.message}</div>
                    </label>
                </div>
                <button>Create car</button>
            </form>
        </>
    );
};