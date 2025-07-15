import type {ButtonProps} from "~/types";

const Button = ({
                    type = "primary",
                    size = "large",
                    disabled = false }: ButtonProps) => {

    const buttonStyle: string = type === "primary" ? "bg-red-600 hover:bg-red-300 text-white" : "bg-neutral-300 hover:bg-neutral-700 text-gray-700 hover:text-neutral-100";
    const sizeStyle: string = size === "small" ? "text-sm px-2 py-1" : "px-4 py-2";

    return (
        <button className={`rounded-lg ${sizeStyle} ${buttonStyle} transition`} disabled={disabled}>
            Learn more
        </button>
    );
}

export default Button;
