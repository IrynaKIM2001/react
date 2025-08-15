import type {IUserJSONModel} from "../../../../Models/UserModel/UserJSONModel.ts";
import {useEffect, useState} from "react";
import {loadUsers} from "../../../../Service/JSONService/api.service.ts";
import {UserComponentJSON} from "../UserJSON/UserComponentJSON.tsx";
import '../../CSS/UsersComponentJSON.css'

export const UsersComponentJSON = () => {
    const [users, setUsers] = useState<IUserJSONModel[]>([]);
    useEffect(() => {
        loadUsers().then(users => setUsers(users));
    },[]);
    return (
        <div className='users'>
            {
                users.map(user => (<UserComponentJSON key={user.id} user={user}/>))
            }
        </div>
    );
};