import { FC, FormEvent } from "react";
import { setQuery } from "../state/store";

const Search: FC = () => {
    const submitHandler = (e: FormEvent) => {
        console.dir(new FormData(e.target as HTMLFormElement).get("query"));
        setQuery(`${new FormData(e.target as HTMLFormElement).get("query")}`);
        e.preventDefault();
    };

    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="query" />
        </form>
    );
};

export default Search;
