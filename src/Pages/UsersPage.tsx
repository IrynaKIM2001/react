import {UsersComponent} from "../Components/UsersComponent/UsersComponent.tsx";
import {Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersComponent/>
        </>
    );
};