import Hero1 from "../../assets/images/hero-1.jpg";
import Porsche911 from "../../assets/images/porsche-model-911.jpg";
import PorscheTaycan from "../../assets/images/porsche-model-taycan.jpeg";
import Porsche718 from "../../assets/images/porsche-model-718.jpeg";
import Card from "~/components/Card";
import Select from "~/components/Select";
import type {CardProps} from "~/types";
import {useState} from "react";


export function HomePage() {

    const [hovered, setHovered] = useState<null | number>(null);

    const carModels: Record<string, CardProps> = {
        'porsche-911': {
            name: 'Porsche 911',
            description: 'Iconic sports car with rear engine: 2 doors',
            image: Porsche911,
            engineType: "petrol"
        },
        'porsche-taycan': {
            name: 'Porsche Taycan',
            description: 'Electric sports car: 4 doors',
            image: PorscheTaycan,
            engineType: "petrol"
        },
        'porsche-718': {
            name: 'Porsche 718',
            description: 'Precise mid-engine sports car',
            image: Porsche718,
            engineType: "petrol"
        },
        'porsche-719': {
            name: 'Porsche 748',
            description: 'Precise mid-engine sports car with a',
            image: Porsche718,
            engineType: "petrol"
        },
    }

    return (
        <>
            <main className="flex items-center justify-center flex-col gap-4">
                {/*HERO SECTION*/}
                <section className="flex flex-col justify-center w-full">
                    <div className="relative flex">
                        <img src={Hero1} alt="porsche dealership" className="w-full h-auto object-cover shadow-lg"/>
                        <div
                            className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-b from-transparent to-black/60 pointer-events-none"/>
                        <div
                            className="absolute bottom-[10%] left-[10%] flex flex-col items-start justify-end font-bold text-white">
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

                <section className="flex flex-col justify-center w-full px-8 md:px-16 gap-10 mt-4 my-10">
                    <div className="grid grid-cols-2">
                        <h1 className="text-2xl font-bold">Available models</h1>
                        <div className="flex flex-row justify-self-end">
                            <h1 className="text-2xl font-bold ">Filter:</h1>
                            <Select/>
                        </div>

                    </div>
                    <div className="group flex flex-col justify-center items-center gap-5 overflow-x-auto lg:flex-row lg:flex-wrap">
                        {Object.entries(carModels).map(([key, model]) => (
                                <Card
                                    name={model.name}
                                    description={model.description}
                                    image={model.image}
                                    engineType={model.engineType}
                                    key={key}
                                />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
