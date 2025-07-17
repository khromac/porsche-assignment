import type {CardWrapperProps} from "~/types";

const CardWrapper = ({children}:CardWrapperProps) => {
    return (
        <div className="card-wrapper">
            {children}
        </div>
    );
};

export default CardWrapper;
