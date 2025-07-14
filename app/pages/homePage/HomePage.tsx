import porscheLogo from "../../assets/porsche-logo.webp"

export function HomePage() {
    return (
        <>
            <nav className="grid grid-cols-3 border py-4 px-5">
                <h3 className="">Menu</h3>
                <img src={porscheLogo} alt="porsche logo" width="200px" className="justify-self-center"/>
                <h3 className="justify-self-end">Porsche Centar Zagreb</h3>
            </nav>
            <main className="flex items-center justify-center pt-16 pb-4">

            </main>
        </>
    );
}
