import type {FC} from "react";
import type {IUserDummyModel} from "../../../../Models/UserModel/UserDummyModel.ts";
import '../../CSS/UserComponentJSON.css'

interface UserComponentDummyProps {
    user: IUserDummyModel
}

export const UserComponentDummy: FC<UserComponentDummyProps> = ({
        user: {
            id,
            firstName,
            lastName,
            maidenName,
            age,
            gender,
            email,
            image}}) => {
    return (
        <div className='user'>
            <h3>User ID: {id}</h3>
            <p>{firstName} {lastName} {maidenName}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Email: {email}</p>
            <img src={image} alt={firstName}/>
        </div>
    );
};