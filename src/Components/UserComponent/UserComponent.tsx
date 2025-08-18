import type {IUserModel} from "../../Models/IUserModel.ts";
import {type FC} from "react";
import {useNavigate} from "react-router";
import './UserComponent.css'

type UserComponentProps = {
    user: IUserModel
}

export const UserComponent:FC<UserComponentProps> = ({user}) => {
    const navigation = useNavigate()

    const onButtonClickNavigate =()=>{
       navigation('/users/'+ user.id +'/carts')
    }

    return (
        <div className='user'>
            <h3>User ID: {user.id}</h3>
            <p>{user.firstName} {user.lastName} {user.maidenName}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <img src={user.image} alt={user.firstName}/>
            <button onClick={onButtonClickNavigate}> CLICK ME </button>
        </div>
    );
};