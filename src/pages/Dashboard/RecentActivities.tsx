import type { Activity } from './types';
import { cn } from '../../utils/cn';

interface RecentActivitiesProps {
    activities: Activity[];
}

export const RecentActivities = ({ activities }: RecentActivitiesProps) => {
    return (
        <div className="bg-white rounded-xl px-4 sm:px-7 py-5 sm:py-6 shadow-sm h-full border border-slate-50 min-w-0 overflow-hidden">
            <h2 className="dashboard-heading text-sidebar mb-5">Recent Activities</h2>
            <div className="flex flex-col">
                {activities.map((activity, index) => (
                    <div
                        key={activity.id}
                        className={cn(
                            "flex items-start sm:items-center justify-between py-3 sm:py-4 gap-4 group",
                            index !== activities.length - 1 && "border-b border-slate-100"
                        )}
                    >
                        <div className="flex items-start sm:items-center gap-4 min-w-0 flex-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-danger-strong shrink-0" />
                            <p className="text-[12px] sm:text-[13px] font-bold text-sidebar group-hover:underline cursor-pointer transition-all min-w-0 line-clamp-2">
                                {activity.title}
                            </p>
                        </div>
                        <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap ml-4 shrink-0">
                            {activity.time}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
