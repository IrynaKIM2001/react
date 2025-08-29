import axios from "axios";


const axiosInstanse= axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'content-type': 'application/json'}
});

export const getAll = async<T>(endpoint:string)=>{
    const axiosResponse= await axiosInstanse.get<T>(`${endpoint}`);
    return axiosResponse.data;
}
