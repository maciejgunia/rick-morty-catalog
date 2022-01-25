import { FC, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { goToNextPage, goToPrevPage, goToSelectedPage, RootState } from "../state/store";

const perPage = 20;

const Pagination: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const page = useSelector((state: RootState) => state.page);
    const count = useSelector((state: RootState) => state.count);
    const maxPages = Math.ceil(count / perPage);
    const submitHandler = (e: FormEvent) => {
        goToSelectedPage(+inputValue);
        e.preventDefault();
    };

    useEffect(() => {
        setInputValue(page);
    }, [page]);

    return (
        <div>
            <button onClick={() => page > 1 && goToPrevPage()}>prev</button> {page}
            <button onClick={() => page < maxPages && goToNextPage()}>next</button>
            <form onSubmit={submitHandler}>
                <input
                    type="number"
                    name="page"
                    min={1}
                    max={maxPages}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Go to</button>
            </form>
        </div>
    );
};

export default Pagination;
