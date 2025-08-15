import {Link} from "react-router";

export const MenuUser = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'}>Users jsonplaceholder</Link></li>
            <li><Link to={'dummyjson'}>Users dummyjson</Link></li>
        </ul>
    );
};