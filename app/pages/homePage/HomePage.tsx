import Hero1 from "~/assets/images/taycan-hero.jpg";
import Card from "~/components/Card";
import Select from "~/components/Select";
import { useEffect, useState } from "react";
import { carModels, engineModels } from "~/data/carsData";
import type { CardProps } from "~/types";
import Button from "~/components/Button";
import CardWrapper from "~/components/CardWrapper";
import PorscheConcept from "~/assets/images/porsche-concept.jpg";

export function HomePage() {
    const [filter, setFilter] = useState<string>("all");
    const [carList, setCarList] = useState<Record<string, CardProps>>(carModels);
    const [filteredCars, setFilteredCars] = useState<CardProps[]>([]);

    const handleAddModel = () => {
        const newId = "porsche-concept-x";
        const newCar: CardProps = {
            name: "Porsche Concept X",
            description: "Futuristic electric car.",
            image: PorscheConcept,
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
            <section className="section-container">
                <div className="hero-container">
                    <img src={Hero1} alt="porsche dealership" className="hero-image" />
                    <div className="hero-overlay" />
                    <div className="hero-text-wrapper">
                        <h1 className="hero-text-title">More than a feeling</h1>
                        <p className="hero-text-subtitle">Welcome.</p>
                    </div>
                </div>
            </section>

            <section className="section-container px-8 gap-10 mt-4 my-10 md:px-16">
                <h2 className="section-title">
                    Where Your journey begins.
                </h2>

                <div className="section-tooltip">
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
