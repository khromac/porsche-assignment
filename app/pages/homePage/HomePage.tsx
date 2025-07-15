import porscheLogo from "../../assets/images/porsche-logo.webp"
import Hero1 from "../../assets/images/hero-1.jpg";
import Card from "~/components/Card";
import Select from "~/components/Select";


export function HomePage() {

    return (
        <>
            <nav className="grid grid-cols-3 py-4 px-5">
                <h3 className="">Menu</h3>
                <img src={porscheLogo} alt="porsche logo" width="200px" className="justify-self-center"/>
                <h3 className="justify-self-end">Porsche Centar Zagreb</h3>
            </nav>
            <main className="flex items-center justify-center flex-col gap-4">
                {/*HERO SECTION*/}
                <section className="flex flex-col justify-center w-full">
                    <div className="relative flex">
                        <img src={Hero1} alt="porsche dealership" className="w-full h-auto object-cover shadow-lg"/>
                        <div
                            className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-b from-transparent to-black/60 pointer-events-none"/>
                        <div
                            className="absolute bottom-[4rem] left-[4rem] flex flex-col items-start justify-end font-bold text-white">
                            <h1 className="text-4xl font-medium">Porsche Centar Zagreb</h1>
                            <p className="text-md font-light">Welcome.</p>
                        </div>
                    </div>
                    <div
                        className="grid grid-cols-8 px-5 py-5 items-center justify-center w-full bg-gray-800 text-white text-center"
                    >
                        {/*add some form of info*/}
                        <h1>1</h1>
                        <h1>2</h1>
                        <h1>3</h1>
                        <h1>4</h1>
                        <h1>5</h1>
                        <h1>6</h1>
                        <h1>7</h1>
                        <h1>8</h1>
                    </div>
                </section>

                <section className="flex flex-col justify-center w-full px-10 gap-10 mt-4">
                    <div className="grid grid-cols-2">
                        <h1 className="text-2xl font-bold">Available models</h1>
                        <div className="flex flex-row justify-self-end">
                            <h1 className="text-2xl font-bold ">Filter:</h1>
                            <Select/>
                        </div>

                    </div>
                    <div
                        className="flex flex-row flex-nowrap overflow-x-auto space-x-4 scrollbar scrollbar-thumb-gray-400 py-4">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </section>
            </main>
        </>
    );
}
