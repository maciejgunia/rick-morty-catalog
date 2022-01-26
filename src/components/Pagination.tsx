import { FC, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { goToNextPage, goToPrevPage, goToSelectedPage, RootState } from "../state/store";
import PaginationButton from "./PaginationButton";
import config from "../config";

const Pagination: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const page = useSelector((state: RootState) => state.criteria.page);
    const count = useSelector((state: RootState) => state.count);
    const maxPages = Math.ceil(count / config.perPage);
    const submitHandler = (e: FormEvent) => {
        goToSelectedPage(Math.min(Math.max(+inputValue, 1), maxPages));
        e.preventDefault();
    };

    useEffect(() => {
        setInputValue(page);
    }, [page]);

    return (
        <div className="flex gap-2 items-center w-full">
            <PaginationButton disabled={page === 1} clickHandler={() => page > 1 && goToPrevPage()}>
                &lt;
            </PaginationButton>
            <form onSubmit={submitHandler} onBlur={submitHandler}>
                <input
                    type="number"
                    name="page"
                    min={1}
                    max={maxPages}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-1 text-center rounded border-gray-400"
                />
            </form>
            <PaginationButton disabled={page === maxPages} clickHandler={() => page < maxPages && goToNextPage()}>
                &gt;
            </PaginationButton>
        </div>
    );
};

export default Pagination;
