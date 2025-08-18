import {createBrowserRouter} from "react-router";
import {MainLayout} from "../Layouts/MainLayout.tsx";
import {UsersPage} from "../Pages/UsersPage.tsx";
import {CartsPage} from "../Pages/CartsPage.tsx";

export const routes =createBrowserRouter([
    {path:"/", element:<MainLayout/>, children:[
            {path:"users",element:<UsersPage/>, children:[
                    {path:":id/carts",element:<CartsPage/>}
                ]}
        ]}
])