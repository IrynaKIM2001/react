import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}>Users</Link></li>
            <li><Link to={'posts'}>Posts</Link></li>
            <li><Link to={'comments'}>Comments</Link></li>
            <li><Link to={'products'}>Products</Link></li>
        </ul>
    );
};