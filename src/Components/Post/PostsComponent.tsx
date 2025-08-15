import {Outlet} from "react-router";
import {MenuPost} from "../../Menu/MenuPost/MenuPost.tsx";

export const PostsComponent = () => {
    return (
        <div>
            <MenuPost/>
            <Outlet/>
        </div>
    );
};