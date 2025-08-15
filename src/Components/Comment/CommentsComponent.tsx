import {Outlet} from "react-router";
import {MenuComment} from "../../Menu/MenuComment/MenuComment.tsx";

export const CommentsComponent = () => {
    return (
        <div>
            Comments component
            <MenuComment/>
            <Outlet/>
        </div>
    );
};