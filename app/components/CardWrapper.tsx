import type {CardWrapperProps} from "~/types";

const CardWrapper = ({children}:CardWrapperProps) => {
    return (
        <div className="group flex flex-col justify-center items-center gap-5 overflow-x-auto lg:flex-row lg:flex-wrap">
            {children}
        </div>
    );
};

export default CardWrapper;
