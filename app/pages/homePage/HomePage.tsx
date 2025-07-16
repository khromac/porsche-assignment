import Hero1 from "~/assets/images/taycan-hero.jpg";
import Card from "~/components/Card";
import porsche911 from "~/assets/images/porsche-model-911.jpg";
import Select from "~/components/Select";
import { useEffect, useState } from "react";
import { carModels, engineModels } from "~/data/carsData";
import type { CardProps } from "~/types";
import Button from "~/components/Button";
import CardWrapper from "~/components/CardWrapper";

export function HomePage() {
    const [filter, setFilter] = useState<string>("all");
    const [carList, setCarList] = useState<Record<string, CardProps>>(carModels);
    const [filteredCars, setFilteredCars] = useState<CardProps[]>([]);

    const handleAddModel = () => {
        const newId = "porsche-concept-x";
        const newCar: CardProps = {
            name: "Porsche Concept X",
            description: "Futuristic electric car.",
            image: porsche911,
            engineType: "electric",
        };

        setCarList(prev => ({
            ...prev,
            [newId]: newCar
        }));

    };


    useEffect(() => {
        const carsArray = Object.values(carList);
        if (filter === "all") {
            setFilteredCars(carsArray);
        } else {
            const filtered = carsArray.filter(car => car.engineType === filter);
            setFilteredCars(filtered);
        }
    }, [filter, carList]);

    return (
        <main className="flex items-center justify-center flex-col gap-4">
            <section className="flex flex-col justify-center w-full">
                <div className="relative flex">
                    <img src={Hero1} alt="porsche dealership" className="w-full h-[98dvh] object-cover shadow-lg" />
                    <div className="hero-overlay" />
                    <div className="hero-text">
                        <h1 className="text-4xl font-medium md:text-5xl lg:text-7xl">More than a feeling</h1>
                        <p className="text-2xl font-light">Welcome.</p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col justify-center w-full px-8 gap-10 mt-4 my-10 md:px-16 ">
                <h2 className="text-left my-10 md:my-20 md:text-4xl md:text-center lg:text-7xl">
                    Where Your journey begins.
                </h2>

                <div className="flex flex-row items-center justify-between gap-4">
                    <div className="flex flex-row items-center gap-4">
                        <p>Filter:</p>
                        <Select options={engineModels} onChange={setFilter} value={filter} />
                    </div>
                    <Button onClick={handleAddModel}>Add model</Button>
                </div>

                <CardWrapper>
                    {filteredCars.map((model, index) => (
                        <Card
                            key={index}
                            name={model.name}
                            description={model.description}
                            image={model.image}
                            engineType={model.engineType}
                        />
                    ))}
                </CardWrapper>
            </section>
        </main>
    );
}
