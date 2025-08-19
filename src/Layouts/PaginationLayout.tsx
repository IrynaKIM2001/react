import {PaginationComponent} from "../Components/PaginationComponent/PaginationComponent.tsx";
import {Outlet} from "react-router";

export const PaginationLayout = () => {
    return (
        <>
        <Outlet/>
        <PaginationComponent/>

        </>
    );
};