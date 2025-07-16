import Hero1 from "~/assets/images/taycan-hero.jpg";
import Porsche911 from "~/assets/images/porsche-model-911.jpg";
import PorscheTaycan from "~/assets/images/porsche-model-taycan.jpeg";
import Porsche718 from "~/assets/images/porsche-model-718.jpeg";
import Card from "~/components/Card";
import Select from "~/components/Select";
import type {CardProps, EngineModel} from "~/types";
import {useState} from "react";


export function HomePage() {
    const [filter, setFilter] = useState<string>("all");
    const engineModels: Record<EngineModel, string> = {
        all: "All",
        electric: "Electric",
        hybrid: "Hybrid",
        petrol: "Petrol",
    }

    const carModels: Record<string, CardProps> = {
        'porsche-911': {
            name: 'Porsche 911',
            description: 'Iconic sports car with rear engine: 2 doors',
            image: Porsche911,
            engineType: "hybrid"
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
            engineType: "electric"
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
                            <h1 className="text-4xl md:text-5xl font-medium">More than a feeling</h1>
                            <p className="text-2xl font-light">Welcome.</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col justify-center w-full px-8 md:px-16 gap-10 mt-4 my-10">
                    <div className="grid grid-cols-2">
                        <h1 className="text-2xl font-bold">Available models</h1>
                        <div className="flex flex-row justify-self-end">
                            <h1 className="text-2xl font-bold ">Filter:</h1>
                            <Select options={engineModels} onChange={setFilter} value={filter}/>
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
