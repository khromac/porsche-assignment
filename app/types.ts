import type { ReactNode } from 'react';

export type CardProps = {
    name?: string;
    description?: string;
    image?: string;
    badgeText?: string;
    onClick?: () => void;
};

export type BadgeProps = {
    value: string;
};

export type ButtonProps = {
    type?: "primary" | "secondary";
    size?: "small" | "large";
    children?: ReactNode;
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

export type CardWrapperProps = {
    children: ReactNode;
};

export type SideMenuProps = {
    isOpen: boolean;
    toggleMenu: () => void;
};

export type NavBarProps = {
    toggleMenu: () => void;
};

export type SideMenuItemProps = {
    label: string;
};

export type CarModelProps = {
    name: string;
    description: string;
    image: string;
    engineType: EngineModel;
}
