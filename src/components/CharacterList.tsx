import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Character from "./Character";

const CharacterList: FC = () => {
    const characters = useSelector((state: RootState) => state.characters);

    return (
        <div className="grid grid-cols-3 gap-2">
            {characters.map((c: any) => (
                <Character key={c.id} character={c} />
            ))}
        </div>
    );
};

export default CharacterList;
