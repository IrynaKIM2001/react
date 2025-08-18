import {useEffect, useState} from "react";
import type {IUserModel} from "../../Models/IUserModel.ts";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import {loadUsers} from "../../Services/api.service.ts";
import './UsersComponent.css'

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        loadUsers().then((users) => setUsers(users));
    }, []);
    return (
        <div className='users'>{
            users.map(user => <UserComponent key={user.id} user={user}/>)
        }
        </div>
    );
};