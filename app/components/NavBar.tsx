import porscheLogo from "~/assets/images/porsche-logo.svg";

const NavBar = () => {
    return (
        <nav className="grid grid-cols-3 items-center py-4 px-5">
            <p className="">Menu</p>
            <img src={porscheLogo} alt="porsche logo" width="200px" className="justify-self-center"/>
            <p className="justify-self-end">Porsche Centar Zagreb</p>
        </nav>
    );
}

export default NavBar;
