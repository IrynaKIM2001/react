import type {IUser} from "../../../Models/IUser.ts";
import type {FC} from "react";
import './UserComponent.css'

interface UserComponentProps {
    user: IUser
}

export const UserComponent:FC<UserComponentProps>= ({user:{id,name,username,email,address,phone,website}}) => {
    return (
        <div className='user'>
            <h3>User ID: {id}</h3>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <h4>Address</h4>
            <p>Street: {address.street}</p>
            <p>Suite: {address.suite}</p>
            <p>City: {address.city}</p>
            <p>Zipcode: {address.zipcode}</p>
            <h5>Geo</h5>
            <p>Latitude: {address.geo.lat}</p>
            <p>Longitude: {address.geo.lng}</p>
            <p>Phone: {phone}</p>
            <p>Website:{website}</p>
        </div>
    );
};