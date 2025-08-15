import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UsersComponent} from "../Components/UsersComponent.tsx";
import {PostsComponent} from "../Components/PostsComponent.tsx";
import {CommentsComponent} from "../Components/CommentsComponent.tsx";
import { ProductsComponent } from "../Components/ProductsComponent.tsx";

export const routes = createBrowserRouter([
    {path:'/', element:<App/>, children:[
            {path:'users', element:<UsersComponent/>},
            {path:'posts', element:<PostsComponent/>},
            {path:'comments', element:<CommentsComponent/>},
            {path:'products', element:<ProductsComponent/>},
        ]}
])