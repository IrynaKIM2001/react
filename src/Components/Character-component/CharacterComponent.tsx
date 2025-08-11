import './CharacterComponent.css'
import type {ICharacter} from "../../Models/ICharacter.ts";
import type {ReactNode} from "react";

interface CharacterComponentProps {
    item: ICharacter,
    children:ReactNode
}
export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div>
            <h3>{item.name} {item.surname}</h3>
            <p>Вік: {item.age} років</p>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    )
}