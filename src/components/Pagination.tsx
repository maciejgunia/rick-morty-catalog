import { FC, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { decrementPage, setPage, RootState, incrementPage } from "../state/store";
import PaginationButton from "./PaginationButton";

const Pagination: FC = () => {
    const [inputValue, setInputValue] = useState("");
    const page = useSelector((state: RootState) => state.criteria.page);
    const pages = useSelector((state: RootState) => state.pages);
    const submitHandler = (e: FormEvent) => {
        setPage(Math.min(Math.max(+inputValue, 1), pages));
        e.preventDefault();
    };

    useEffect(() => {
        setInputValue(page);
    }, [page]);

    return (
        <div className="flex gap-2 items-center">
            <PaginationButton disabled={page <= 1} clickHandler={() => page > 1 && decrementPage()}>
                &lt;
            </PaginationButton>
            <form onSubmit={submitHandler} onBlur={submitHandler}>
                <input
                    type="number"
                    name="page"
                    min={1}
                    max={pages}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-1 text-center rounded border-gray-400 w-8"
                />
            </form>
            <PaginationButton disabled={page >= pages} clickHandler={() => page < pages && incrementPage()}>
                &gt;
            </PaginationButton>
        </div>
    );
};

export default Pagination;
