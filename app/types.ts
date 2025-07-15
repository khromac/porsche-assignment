export type CarCardProps = {
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
    disabled?: boolean;
};


