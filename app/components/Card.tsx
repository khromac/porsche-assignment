import Porsche911 from "~/assets/images/porsche-model-911.jpg";
import type {CardProps} from "~/types";
import Badge from "~/components/Badge";
import Button from "~/components/Button";


const Card = ({
                  name = "Porsche 911 Carrera",
                  description = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  image = Porsche911,
                  engineType = "electric"
              }: CardProps) => {
    return (
        <div className="w-[300px] h-[500px] lg:min-w-[calc(50%-5rem)] bg-gray-100 rounded-lg shadow-lg flex flex-col items-start border overflow-hidden relative">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start justify-end w-full">
                <div className="flex flex-col gap-2 shrink-0 w-full">
                    <Badge value={engineType} />
                    <h2 className="text-xl font-bold text-white">{name}</h2>
                    <div className="flex flex-row w-full justify-between items-center gap-2">
                        <p className="text-sm text-gray-200 ">{description}</p>
                        <Button type="secondary" size="small">
                            <i className="fa-solid fa-arrow-right"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
