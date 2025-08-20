import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/cars">Cars Page</Link>
            </li>
            <li>
                <Link to="/cars/create">Cars Create Page</Link>
            </li>
        </ul>
    );
};