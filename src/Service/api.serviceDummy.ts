import type {IUserResponseModel} from "../Models/UserModel/UserResponseModel.ts";
import type {IUserDummyModel} from "../Models/UserModel/UserDummyModel.ts";


const endpointUsersDummy = import.meta.env.VITE_API_BASE_DUMMY_URL;

const loadDummyUser = async (page:string):Promise<IUserDummyModel[]> => {
    const limit = 30;
    const skip = limit*(+page)-limit;
    const response:IUserResponseModel=await fetch(endpointUsersDummy+ "/users"+"?skip="+skip)
        .then(value => value.json());
    return response.users;
}

export {loadDummyUser}