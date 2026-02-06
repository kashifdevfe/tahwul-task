import { cn } from '../../utils/cn';

export type Activity = {
    id: number | string;
    text: string;
    time: string;
};

export type ActivityListProps = {
    activities: Activity[];
    className?: string;
};

export const ActivityList = ({ activities, className }: ActivityListProps) => {
    return (
        <div className={cn("flex flex-col", className)}>
            {activities.map((activity, index) => (
                <div
                    key={activity.id}
                    className={cn(
                        "flex items-start justify-between gap-4 py-5",
                        index !== activities.length - 1 && "border-b border-slate-100"
                    )}
                >
                    <div className="flex items-start gap-4 min-w-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-danger-strong mt-2 shrink-0" />
                        <p className="text-[13px] font-normal text-sidebar leading-relaxed min-w-0">
                            {activity.text}
                        </p>
                    </div>
                    <span className="text-[11px] font-normal text-slate-400 whitespace-nowrap">
                        {activity.time}
                    </span>
                </div>
            ))}
        </div>
    );
};
