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
        primary: "button-primary",
        secondary: "button-secondary",
    };

    const sizeStyles = {
        small: "text-sm px-2 py-1",
        large: "px-4 py-2",
    };

    const baseClasses = "rounded-lg transition";
    const typeClasses = typeStyles[type];
    const sizeClasses = sizeStyles[size];
    const disabledClasses = disabled ? "disabled" : "cursor-pointer";

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
