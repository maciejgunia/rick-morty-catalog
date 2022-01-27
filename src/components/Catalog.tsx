import { FC, useEffect } from "react";
import CharacterList from "./CharacterList";
import Header from "./Header";
import useFetchCharacters from "../hooks/useFetchCharacters";
import { useLocation } from "react-router-dom";
import getUrlParams from "../helpers/getUrlParams";
import { setCriteria } from "../state/store";

const Catalog: FC = () => {
    let location = useLocation();

    useEffect(() => {
        setCriteria(getUrlParams());
    }, [location]);
    useFetchCharacters();

    return (
        <div className="flex flex-col gap-2 max-w-screen-lg mx-auto p-2">
            <Header />
            <CharacterList />
        </div>
    );
};

export default Catalog;
