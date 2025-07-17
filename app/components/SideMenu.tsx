import type {SideMenuItemProps, SideMenuProps} from "~/types";
import {useEffect, useRef} from "react";

const SideMenu= ({
    toggleMenu,
    isOpen
}:SideMenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if ( menuRef.current && !menuRef.current.contains(event.target as Node)) toggleMenu();
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, toggleMenu]);

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
            />
            <aside
                ref={menuRef}
                className={`side-menu ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <ul className="side-menu">
                    <SideMenuItem label="Models" />
                    <SideMenuItem label="Vehicle Purchase" />
                    <SideMenuItem label="Services" />
                    <SideMenuItem label="Experience" />
                    <SideMenuItem label="Find a dealer" />
                    <SideMenuItem label="Account" />
                </ul>
            </aside>
        </>
    );
}

export default SideMenu;

const SideMenuItem = ({ label }: SideMenuItemProps) => {
    return (
        <li className="side-menu-item">
            <a href="#" className="side-menu-link">
                {label} <i className="fa-solid fa-arrow-right mr-5"></i>
            </a>
        </li>
    );
}
