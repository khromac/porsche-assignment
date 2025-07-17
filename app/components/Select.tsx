import type { SelectProps } from "~/types";

const Select = ({
    options,
    onChange,
    value = "all",
    className = "",
}: SelectProps) => {
    return (
        <select
            className={`select ${className}}`}
            onChange={(e) => onChange(e.target.value)}
            value={value}
        >
            {Object.entries(options).map(([key, label]) => (
                <option
                    key={key}
                    value={key}
                    className="option"
                >
                    {label}
                </option>
            ))}
        </select>
    );
};

export default Select;
