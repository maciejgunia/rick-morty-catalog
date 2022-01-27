import { FC } from "react";
import Pagination from "./Pagination";
import Search from "./Search";

const Header: FC = () => {
    return (
        <div className="flex gap-2">
            <Pagination />
            <Search />
        </div>
    );
};

export default Header;
