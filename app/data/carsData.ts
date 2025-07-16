import Porsche911 from "~/assets/images/porsche-model-911.jpg";
import PorscheTaycan from "~/assets/images/porsche-model-taycan.jpeg";
import Porsche718 from "~/assets/images/porsche-model-718.jpeg";
import type { CardProps, EngineModel } from "~/types";

export const engineModels: Record<EngineModel, string> = {
    all: "All",
    electric: "Electric",
    hybrid: "Hybrid",
    petrol: "Petrol",
};

export const carModels: Record<string, CardProps> = {
    "porsche-911": {
        name: "Porsche 911",
        description: "Iconic sports car with rear engine: 2 doors",
        image: Porsche911,
        engineType: "hybrid",
    },
    "porsche-taycan": {
        name: "Porsche Taycan",
        description: "Electric sports car: 4 doors",
        image: PorscheTaycan,
        engineType: "petrol",
    },
    "porsche-718": {
        name: "Porsche 718",
        description: "Precise mid-engine sports car",
        image: Porsche718,
        engineType: "electric",
    },
    "porsche-719": {
        name: "Porsche 748",
        description: "Precise mid-engine sports car with a",
        image: Porsche718,
        engineType: "petrol",
    },
};
