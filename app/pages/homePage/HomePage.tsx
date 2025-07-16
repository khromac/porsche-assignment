import Hero1 from "~/assets/images/taycan-hero.jpg";
import Card from "~/components/Card";
import Select from "~/components/Select";
import { useEffect, useState } from "react";
import { carModels, engineModels } from "~/data/carsData";
import type { CardProps } from "~/types";

export function HomePage() {
    const [filter, setFilter] = useState<string>("all");
    const [filteredCars, setFilteredCars] = useState<CardProps[]>([]);

    useEffect(() => {
        const carsArray = Object.values(carModels);
        if (filter === "all") {
            setFilteredCars(carsArray);
        } else {
            const filtered = carsArray.filter(car => car.engineType === filter);
            setFilteredCars(filtered);
        }
    }, [filter]);

    return (
        <main className="flex items-center justify-center flex-col gap-4">
            {/* HERO SECTION */}
            <section className="flex flex-col justify-center w-full">
                <div className="relative flex">
                    <img src={Hero1} alt="porsche dealership" className="w-full h-[98dvh] object-cover shadow-lg" />
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
                    <div className="absolute bottom-[10%] left-[10%] flex flex-col items-start justify-end font-bold text-white">
                        <h1 className="text-4xl md:text-5xl font-medium">More than a feeling</h1>
                        <p className="text-2xl font-light">Welcome.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center w-full px-8 md:px-16 gap-10 mt-4 my-10">
                <h1 className="text-2xl font-medium text-left my-10 md:my-20 md:text-4xl md:text-center lg:text-7xl">
                    Where Your journey begins.
                </h1>

                <div className="flex flex-row items-center justify-end gap-4">
                    <p>Filter:</p>
                    <Select options={engineModels} onChange={setFilter} value={filter} />
                </div>

                <div className="group flex flex-col justify-center items-center gap-5 overflow-x-auto lg:flex-row lg:flex-wrap">
                    {filteredCars.map((model, index) => (
                        <Card
                            key={index}
                            name={model.name}
                            description={model.description}
                            image={model.image}
                            engineType={model.engineType}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
