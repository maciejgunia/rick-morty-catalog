import { FC } from "react";

const PaginationButton: FC<{ disabled: boolean; clickHandler: () => void }> = ({
    children,
    disabled,
    clickHandler
}) => {
    return (
        <button
            disabled={disabled}
            className="py-1 px-2 border rounded bg-gray-400 text-gray-200 disabled:bg-gray-100 hover:bg-gray-600 transition-colors"
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

export default PaginationButton;
