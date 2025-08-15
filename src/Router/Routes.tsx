import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { UsersComponent } from "../Components/User/UsersComponent.tsx";
import { UsersComponentJSON } from "../Components/User/UserJSON/UsersJSON/UsersComponentJSON.tsx";
import { UsersComponentDummy } from "../Components/User/UserDummy/UsersComponentDummy/UsersComponentDummy.tsx";
import { PostsComponent } from "../Components/Post/PostsComponent.tsx";
import {PostsComponentsJSON} from "../Components/Post/PostJSON/PostsJSON/PostsComponentsJSON.tsx";
import { PostsComponentDummy } from "../Components/Post/PostDummy/PostsDummy/PostsComponentDummy.tsx";
import { CommentsComponent } from "../Components/Comment/CommentsComponent.tsx";
import { CommentsComponentJSON } from "../Components/Comment/CommentJSON/CommentsJSON/CommentsComponentJSON.tsx";
import { CommentsComponentDummy } from "../Components/Comment/CommentDummy/CommentsDummy/CommentsComponentDummy.tsx";
import {ProductsComponent} from "../Components/Product/ProductsComponent.tsx";
import { ProductsComponentJSON } from "../Components/Product/ProductsComponentJSON.tsx";
import {ProductsComponentDummy} from "../Components/Product/ProductsDummy/ProductsDummy/ProductsComponentDummy.tsx";


export const routes = createBrowserRouter([
    {path:'/', element:<App/>, children:[
            {path:'users', element:<UsersComponent/>, children:[
                    {path:'jsonplaceholder',element:<UsersComponentJSON/>},
                    {path:'dummyjson',element:<UsersComponentDummy/>},
                ]},
            {path:'posts', element:<PostsComponent/>, children:[
                    {path:'jsonplaceholder',element:<PostsComponentsJSON/>},
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