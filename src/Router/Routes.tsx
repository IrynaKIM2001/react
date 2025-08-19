import { createBrowserRouter } from "react-router-dom";
import {MainLayout} from "../Layouts/MainLayout.tsx";
import {UsersPage} from "../Pages/UsersPage.tsx";
import {PaginationLayout} from "../Layouts/PaginationLayout.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: '', element: <PaginationLayout/>, children: [
                    {path: 'users', element: <UsersPage/>}]
            }]
    }])