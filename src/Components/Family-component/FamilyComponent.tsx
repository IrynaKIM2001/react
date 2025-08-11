import './FamilyComponent.css'
import {simpsons} from "../../Character.ts";
import {CharacterComponent} from "../Character-component/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return(
        <div>
            {
                simpsons.map((character,index) => <CharacterComponent item={character} key={index}>
                    {character.info}
                    </CharacterComponent>)
            }
        </div>
    )
}