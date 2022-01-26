import { FC } from "react";
import Pagination from "./Pagination";
import CharacterList from "./CharacterList";
import Search from "./Search";
import useFetchCharacters from "../hooks/useFetchCharacters";

const Catalog: FC = () => {
    useFetchCharacters();

    return (
        <div className="flex flex-col gap-2 max-w-screen-lg mx-auto p-2">
            <Search />
            <Pagination />
            <CharacterList />
        </div>
    );
};

export default Catalog;
