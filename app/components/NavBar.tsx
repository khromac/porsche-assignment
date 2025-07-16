import porscheLogoText from "~/assets/images/porsche-logo-text.svg";
import porscheLogoSymbol from "~/assets/images/porsche-logo-symbol.webp";
import type {NavBarProps} from "~/types";

const NavBar = ({ toggleMenu }:NavBarProps) => {

    return (
        <nav className="grid grid-cols-3 items-center py-4 px-5">
            <div className="flex items-center gap-2 justify-self-start" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
                <p className="hidden sm:block">Menu</p>
            </div>
            <img
                src={porscheLogoSymbol}
                alt="porsche logo"
                width="30"
                className="justify-self-center sm:hidden"
            />
            <img
                src={porscheLogoText}
                alt="porsche logo"
                width="200"
                className="justify-self-center hidden sm:block"
            />
            <i className="fa-regular fa-user justify-self-end"></i>
        </nav>
    );
}

export default NavBar;
