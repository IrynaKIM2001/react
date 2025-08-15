import {Link} from "react-router";

export const MenuPost = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'}>Posts jsonplaceholder</Link></li>
            <li><Link to={'dummyjson'}>Posts dummyjson</Link></li>
        </ul>
    );
};