import { FC } from "react";

const Character: FC<{ character: any }> = ({ character }) => {
    return (
        <div>
            <img src={character.image} alt="" />
            <p>{character.name}</p>
        </div>
    );
};

export default Character;
