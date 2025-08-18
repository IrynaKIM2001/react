import type {IUserModel} from "../Models/IUserModel.ts";
import type {IUserResponseModel} from "../Models/IUserResponseModel.ts";
import type {ICartResponseModel} from "../Models/ICartResponseModel.ts";

const endpointUsers =import.meta.env.VITE_API_BASE_URL + '/users';

const loadUsers = async ():Promise<IUserModel[]> =>
{
    const response: IUserResponseModel = await fetch(endpointUsers)
        .then(value => value.json())
    return response.users;
}

export {loadUsers};

export const cartService={
    getCartsOfUser:async (userId:string):Promise<ICartResponseModel> =>
    {return await fetch(import.meta.env.VITE_API_BASE_URL + '/carts/user/'+userId)
            .then(value => value.json())
    }}