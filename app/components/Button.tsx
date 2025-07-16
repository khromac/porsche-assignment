import type {ButtonProps} from "~/types";

const Button = ({
    type = "primary",
    size = "large",
    className = "",
    disabled = false,
    children = "Learn more",
    onClick,
}: ButtonProps) => {

    const buttonStyle: string = type === "primary" ? "bg-red-600 hover:bg-red-300 text-white" : "bg-neutral-100 hover:bg-neutral-700 text-gray-700 hover:text-neutral-100";
    const sizeStyle: string = size === "small" ? "text-sm px-2 py-1" : "px-4 py-2";
    const disabledStyle: string = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button className={`rounded-lg cursor-pointer ${sizeStyle} ${buttonStyle} transition ${className} ${disabledStyle}`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
