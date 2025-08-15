import {Link} from "react-router";


export const MenuComment = () => {
    return (
        <ul>
            <li><Link to={'jsonplaceholder'}>Comments jsonplaceholder</Link></li>
            <li><Link to={'dummyjson'}>Comments dummyjson</Link></li>
        </ul>
    );
};