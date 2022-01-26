import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Character from "./Character";

const CharacterList: FC = () => {
    const characters = useSelector((state: RootState) => state.characters);

    return (
        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {characters.map((c: any) => (
                <Character key={c.id} character={c} />
            ))}
        </div>
    );
};

export default CharacterList;
