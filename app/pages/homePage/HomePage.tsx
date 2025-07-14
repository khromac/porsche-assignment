import porscheLogo from "../../assets/images/porsche-logo.webp"
import Hero1 from "../../assets/images/hero-1.jpg";
import Porsche911 from "../../assets/images/porsche-911-gt3.webp";


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

                <section className="flex flex-col justify-center w-full px-10 gap-10">
                    <h1 className="text-2xl font-bold">Available models</h1>
                    <div className="flex flex-row flex-nowrap overflow-x-auto space-x-4 scrollbar scrollbar-thumb-gray-400 py-4">
                        <CarCard />
                        <CarCard />
                        <CarCard />
                        <CarCard />
                    </div>
                </section>
            </main>
        </>
    );
}

type CarCardProps = {
    name?: string,
    description?: string,
    image?: string,
    engineType?: "electric" | "hybrid" | "petrol";
}

const CarCard = ({
    name = "Porsche 911 Carrera",
    description = "Car description",
    image = Porsche911,
    engineType = "electric"
}: CarCardProps) => {
    return (
        <div className="min-w-80 bg-gray-100 rounded-lg shadow-lg flex flex-col items-start ">
            <img src={image} alt="Porsche 911 Carrera" className="w-full h-auto object-cover rounded-lg"/>
            <div className="px-5 py-5 flex flex-col items-start gap-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-md font-light">{description}</p>

                <div className="badge px-3 py-1 rounded-full bg-gray-200 text-green-800 text-xs font-semibold uppercase w-fit">
                    {engineType}
                </div>

                <Button type="secondary" size="large"/>
                <Button type="primary" size="large"/>
            </div>
        </div>
    );
}

type ButtonProps = {
    type?: "primary" | "secondary";
    size?: "small" | "large";
    disabled?: boolean;
}

const Button = ({
    type = "primary",
    size = "large",
    disabled = false }: ButtonProps) => {

    const buttonStyle: string = type === "primary" ? "bg-red-600 hover:bg-red-300 text-white" : "bg-neutral-300 hover:bg-neutral-700 text-gray-700 hover:text-neutral-100";
    const sizeStyle: string = size === "small" ? "text-sm px-2 py-1" : "px-4 py-2";

    return (
        <button className={`rounded-lg ${sizeStyle} ${buttonStyle} transition`} disabled={disabled}>
            Learn more
        </button>
    );
}
