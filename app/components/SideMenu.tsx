import type {SideMenuProps} from "~/types";
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
                    <li className="side-menu-item">
                        <a href="#" className="flex items-center justify-between w-full">Models <i className="fa-solid fa-arrow-right mr-5"></i></a>
                    </li>
                    <li className="side-menu-item">
                        <a href="#" className="flex items-center justify-between w-full">Vehicle Purchase <i className="fa-solid fa-arrow-right mr-5"></i></a>
                    </li>
                    <li className="side-menu-item">
                        <a href="#" className="flex items-center justify-between w-full">Services <i className="fa-solid fa-arrow-right mr-5"></i></a>
                    </li>
                    <li className="side-menu-item">
                        <a href="#" className="flex items-center justify-between w-full">Experience <i className="fa-solid fa-arrow-right mr-5"></i></a>
                    </li>
                    <li className="side-menu-item">
                        <a href="#" className="flex items-center justify-between w-full">Find a dealer <i className="fa-solid fa-arrow-right mr-5"></i></a>
                    </li>
                    <li className="side-menu-item">
                        <a href="#" className="flex items-center justify-between w-full"> Account <i className="fa-solid fa-arrow-right mr-5"></i></a>
                    </li>
                </ul>
            </aside>
        </>
    );
}

export default SideMenu;



