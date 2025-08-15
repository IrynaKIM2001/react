import {Outlet} from "react-router";
import {MenuProduct} from "../../Menu/MenuProduct/MenuProduct.tsx";

export const ProductsComponent = () => {
    return (
        <div>
            Products component
            <MenuProduct/>
            <Outlet/>
        </div>
    );
};