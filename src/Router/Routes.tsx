import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { UsersComponent } from "../Components/User/UsersComponent.tsx";
import { UsersComponentJSON } from "../Components/User/UsersComponentJSON.tsx";
import { UsersComponentDummy } from "../Components/User/UsersComponentDummy.tsx";
import { PostsComponent } from "../Components/Post/PostsComponent.tsx";
import {PostsComponentJSON} from "../Components/Post/PostsComponentJSON.tsx";
import { PostsComponentDummy } from "../Components/Post/PostsComponentDummy.tsx";
import { CommentsComponent } from "../Components/Comment/CommentsComponent.tsx";
import { CommentsComponentJSON } from "../Components/Comment/CommentsComponentJSON.tsx";
import { CommentsComponentDummy } from "../Components/Comment/CommentsComponentDummy.tsx";
import {ProductsComponent} from "../Components/Product/ProductsComponent.tsx";
import { ProductsComponentJSON } from "../Components/Product/ProductsComponentJSON.tsx";
import {ProductsComponentDummy} from "../Components/Product/ProductsComponentDummy.tsx";


export const routes = createBrowserRouter([
    {path:'/', element:<App/>, children:[
            {path:'users', element:<UsersComponent/>, children:[
                    {path:'jsonplaceholder',element:<UsersComponentJSON/>},
                    {path:'dummyjson',element:<UsersComponentDummy/>},
                ]},
            {path:'posts', element:<PostsComponent/>, children:[
                    {path:'jsonplaceholder',element:<PostsComponentJSON/>},
                    {path:'dummyjson',element:<PostsComponentDummy/>},
                ]},
            {path:'comments', element:<CommentsComponent/>, children:[
                    {path:'jsonplaceholder', element:<CommentsComponentJSON/>},
                    {path:'dummyjson', element:<CommentsComponentDummy/>},
                ]},
            {path:'products', element:<ProductsComponent/>, children:[
                    {path:'jsonplaceholder', element:<ProductsComponentJSON/>},
                    {path:'dummyjson', element:<ProductsComponentDummy/>},
                ]},
        ]}
])