import type { SelectProps } from "~/types";

const Select = ({
    options,
    onChange,
    value = "all",
    className = "",
}: SelectProps) => {
    return (
        <select
            className={`
                bg-gray-800 text-white 
                border border-gray-600 
                rounded-lg px-4 py-2 
                focus:outline-none focus:ring-2 focus:ring-red-500 
                hover:border-red-500
                transition duration-150 ease-in-out
                ${className}
              `}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        >
            {Object.entries(options).map(([key, label]) => (
                <option
                    key={key}
                    value={key}
                    className="bg-gray-800 text-white"
                >
                    {label}
                </option>
            ))}
        </select>
    );
};

export default Select;
