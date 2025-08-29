import {useAppDispatch} from "../../../Redux/Hooks/UseAppDispatch.tsx";
import {useAppSelector} from "../../../Redux/Hooks/UseAppSelector.tsx";
import {useEffect} from "react";
import {userActions} from "../../../Redux/Slices/userSlice.ts";
import { UserComponent } from "../User/UserComponent.tsx";
import type {IUser} from "../../../Models/IUser.ts";
import './UsersComponent.css'

export const UsersComponent = () => {

    const dispatch=useAppDispatch();
    const users=useAppSelector(state => state.userStoreSlice.users)
    useEffect(() => {
        dispatch(userActions.loadUsers())
    }, []);
    return (
        <div className='users'>
            {
                users.map((user:IUser) => <UserComponent key={user.id} user={user} />)
            }
        </div>
    );
};