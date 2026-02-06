import type { Activity } from '../types';
import { ActivityList } from '../../../components/ui';

interface RecentActivitiesProps {
    activities: Activity[];
}

export const RecentActivities = ({ activities }: RecentActivitiesProps) => {
    const transformedActivities = activities.map(activity => ({
        id: activity.id,
        text: activity.title,
        time: activity.time
    }));

    return (
        <div className="bg-white rounded-xl px-4 sm:px-7 py-5 sm:py-6 shadow-sm h-full border border-slate-50 min-w-0 overflow-hidden">
            <h2 className="heading-bold text-sidebar mb-5">Recent Activities</h2>
            <ActivityList activities={transformedActivities} />
        </div>
    );
};
