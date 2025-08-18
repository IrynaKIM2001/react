import {useEffect, useState} from "react";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import './UsersComponent.css'
import {loadDummyUser} from "../../../../Service/api.serviceDummy.ts";
import type {IUserDummyModel} from "../../../../Models/UserModel/UserDummyModel.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUserDummyModel[]>([]);
    useEffect(() => {
        loadDummyUser().then(users => setUsers(users));
    },[]);
    return (
        <div className='users'>
            {
                users.map(user => (<UserComponent key={user.id} user={user}/>))
            }
        </div>
    );
};