import type { ButtonProps } from "~/types";

const Button = ({
    type = "primary",
    size = "large",
    className = "",
    disabled = false,
    children = "Learn more",
    onClick,
}: ButtonProps) => {

    const typeStyles = {
        primary: "bg-red-600 hover:bg-red-300 text-white",
        secondary: "bg-neutral-100 hover:bg-neutral-700 text-gray-700 hover:text-neutral-100",
    };

    const sizeStyles = {
        small: "text-sm px-2 py-1",
        large: "px-4 py-2",
    };

    const baseClasses = "rounded-lg cursor-pointer transition";
    const typeClasses = typeStyles[type];
    const sizeClasses = sizeStyles[size];
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    const buttonClasses = [
        baseClasses,
        typeClasses,
        sizeClasses,
        disabledClasses,
        className,
    ]
    .filter(Boolean)
    .join(" ");

    return (
        <button
            className={buttonClasses}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
