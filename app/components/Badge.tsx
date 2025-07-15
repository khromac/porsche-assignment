import type {BadgeProps} from "~/types";

const Badge = ({ value }: BadgeProps) => {
    return (
        <div className="badge px-3 py-1 rounded-full bg-gray-200 text-green-800 text-xs font-semibold uppercase w-fit">
            {value}
        </div>
    );
}

export default Badge;
