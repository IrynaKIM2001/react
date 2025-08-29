import {Link} from "react-router";
import './Menu.css'

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to={'users'}>UserPage</Link>
            </li>
            <li>
                <Link to={'posts'}>PostPage</Link>
            </li>
            <li>
                <Link to={'comments'}>CommentPage</Link>
            </li>
            <li>
                <Link to={'complex'}>ComplexPage</Link>
            </li>
        </ul>
    );
};