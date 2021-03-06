import { FC, useEffect, useState } from "react";
import { setQuery } from "../state/store";
import { useDebounce } from "usehooks-ts";
import getUrlParams from "../helpers/getUrlParams";

const Search: FC = () => {
    const [inputValue, setInputValue] = useState(getUrlParams().query);
    const debouncedValue = useDebounce(inputValue, 500);

    useEffect(() => {
        setQuery(debouncedValue);
    }, [debouncedValue]);

    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border rounded w-full p-2"
        />
    );
};

export default Search;
