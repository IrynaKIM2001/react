import {Outlet} from "react-router";
import {MenuComponent} from "../Components/Menu/MenuComponent.tsx";

export const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};