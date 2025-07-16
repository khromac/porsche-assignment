export type CardProps = {
    name?: string,
    description?: string,
    image?: string,
    engineType?: "electric" | "hybrid" | "petrol";
}

export type BadgeProps = {
    value: string;
};

export type ButtonProps = {
    type?: "primary" | "secondary";
    size?: "small" | "large";
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
};

export type EngineModel = "all" | "electric" | "hybrid" | "petrol";

export type SelectProps = {
    options: Record<string, string>;
    onChange: (value: string) => void;
    value?: string;
    className?: string;
};
