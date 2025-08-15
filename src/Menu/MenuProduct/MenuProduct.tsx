import {Link} from "react-router";

export const MenuProduct = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'}>Products jsonplaceholder</Link></li>
            <li><Link to={'dummyjson'}>Products dummyjson</Link></li>
        </ul>
    );
};