import {useContext} from "react";
import {MyContext} from "../../context/MyContext.tsx";


export const ComponentBA = () => {
    const {changeTheme} = useContext(MyContext)
    const handlerDark = () => {
        changeTheme('dark')
    };
    const handlerLight = () => {
        changeTheme('light')
    };
    return (
        <div>
            <button onClick={handlerDark}>Change theme to dark</button>
            <button onClick={handlerLight}>Change theme to light</button>
        </div>
    );
};