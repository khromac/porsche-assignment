import type {BadgeProps} from "~/types";

const Badge = ({ value }: BadgeProps) => {
    return (
        <div className="px-3 py-1 rounded-lg bg-gray-200 text-neutral-800 text-xs font-semibold uppercase w-fit">
            {value}
        </div>
    );
}

export default Badge;
