import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <ul>
            <li><Link to={'users'}>Users Page</Link></li>
            <li><Link to={'posts'}>Posts Page</Link></li>
        </ul>
    );
};