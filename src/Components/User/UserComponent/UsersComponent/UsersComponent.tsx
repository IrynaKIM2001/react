import {useEffect, useState} from "react";
import {UserComponent} from "../UserComponent/UserComponent.tsx";
import './UsersComponent.css'
import {loadDummyUser} from "../../../../Service/api.serviceDummy.ts";
import type {IUserDummyModel} from "../../../../Models/UserModel/UserDummyModel.ts";
import {useSearchParams} from "react-router";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUserDummyModel[]>([]);
    useEffect(() => {
        const currentPage =searchParams.get('page')||'1';
        loadDummyUser(currentPage).then(users => setUsers(users));
    },[searchParams]);
    return (
        <div className='users'>
            {
                users.map(user => (<UserComponent key={user.id} user={user}/>))
            }
        </div>
    );
};