import axios from "axios";
import type {ICar} from "../Models/ICar.ts";

const axiosInstanse= axios.create({
    baseURL: "http://185.69.152.209/carsAPI/v1",
    headers: {'content-type': 'application/json'}
});

export const getCars = async():Promise<ICar[]>=>{
    const axiosResponse= await axiosInstanse.get<ICar[]>('/cars');
    return axiosResponse.data;
}

export const CarAdd = async(car:ICar)=>{
    await axiosInstanse.post('/cars',car);
}