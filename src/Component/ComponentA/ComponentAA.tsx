import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";
import './Theme.css';

export const ComponentAA = () => {
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
            ComponentAA
        </div>
    );
};