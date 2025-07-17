import type {BadgeProps} from "~/types";

const Badge = ({ value }: BadgeProps) => {
    return (
        <div className="badge">
            {value}
        </div>
    );
}

export default Badge;
