import { FC } from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";
import useFetchCharacters from "../hooks/useFetchCharacters";

const Catalog: FC = () => {
    useFetchCharacters();

    return (
        <div className="flex flex-col gap-2 max-w-screen-lg mx-auto p-2">
            <Header />
            <CharacterList />
        </div>
    );
};

export default Catalog;
