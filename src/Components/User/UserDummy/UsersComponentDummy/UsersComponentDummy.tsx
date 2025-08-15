import {useEffect, useState} from "react";
import {UserComponentDummy} from "../UserComponentDummy/UserComponentDummy.tsx";
import {loadDummyUser} from "../../../../Service/DummyService/api.serviceDummy.ts";
import type {IUserDummyModel} from "../../../../Models/UserModel/UserDummyModel.ts";
import '../../CSS/UsersComponentJSON.css'

export const UsersComponentDummy = () => {
    const [users, setUsers] = useState<IUserDummyModel[]>([]);
    useEffect(() => {
        loadDummyUser().then(users => setUsers(users));
    },[]);
    return (
        <div className='users'>
            {
                users.map(user => (<UserComponentDummy key={user.id} user={user}/>))
            }
        </div>
    );}