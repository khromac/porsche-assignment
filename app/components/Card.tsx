import Porsche911 from "~/assets/images/porsche-model-911.jpg";
import type {CardProps} from "~/types";
import Badge from "~/components/Badge";
import Button from "~/components/Button";


const Card = ({
    name = "Porsche 911 Carrera",
    description = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image = Porsche911,
    badgeText = "electric",
    onClick,
}: CardProps) => {
    return (
        <div className="card-container">
            <div className="card">
                <img
                    src={image}
                    alt={name}
                    className="card-image"
                />

                <div className="card-content">
                    <div className="flex flex-col gap-2 shrink-0 w-full">
                        <Badge value={badgeText} />
                        <h2 className="card-title">{name}</h2>
                        <div className="flex flex-col items-start w-full lg:flex-row lg:justify-between gap-2">
                            <p className="card-subtitle">{description}</p>
                            <Button type="secondary" size="small" onClick={onClick}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;


