import {Link} from "react-router";

export const MenuComponent = () => {
    return (
        <ul>
            <li>
                <Link to='/users'>Users Page</Link>
            </li>
        </ul>
    );
};