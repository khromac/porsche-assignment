import porscheLogo from "~/assets/images/porsche-logo.svg";

const NavBar = () => {
    return (
        <nav className="grid grid-cols-3 items-center py-4 px-5">
            <h3 className="">Menu</h3>
            <img src={porscheLogo} alt="porsche logo" width="200px" className="justify-self-center"/>
            <h3 className="justify-self-end">Porsche Centar Zagreb</h3>
        </nav>
    );
}

export default NavBar;
