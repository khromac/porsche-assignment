import type {SelectProps} from "~/types";

const Select = ({}: SelectProps) => {
    return (
        <select className="ml-2 px-2 py-1 rounded-lg bg-gray-200 text-gray-700">
            <option value="all">All</option>
            <option value="electric">Electric</option>
            <option value="hybrid">Hybrid</option>
            <option value="petrol">Petrol</option>
        </select>
    );
}

export default Select;
