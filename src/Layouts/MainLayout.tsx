import {Menu} from "../Menu/Menu.tsx";
import {Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
};