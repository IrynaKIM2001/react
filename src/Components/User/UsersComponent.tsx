import {Outlet} from "react-router";
import {MenuUser} from "../../Menu/MenuUser/MenuUser.tsx";

export const UsersComponent = () => {
    return (
        <div>
            <MenuUser/>
            <Outlet/>
        </div>
    );
};