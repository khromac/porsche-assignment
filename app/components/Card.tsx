import Porsche911 from "~/assets/images/porsche-911-gt3.webp";
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
        <div className="min-w-80 bg-gray-100 rounded-lg shadow-lg flex flex-col items-start ">
            <img src={image} alt="Porsche 911 Carrera" className="w-full h-auto object-cover rounded-lg"/>
            <div className="px-5 py-5 flex flex-col items-start gap-2">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-md font-light">{description}</p>

                <Badge value={engineType}/>

                <Button type="secondary" size="large"/>
            </div>
        </div>
    );
};

export default Card;
