import type { ComponentType } from 'react';
import type { HugeiconsProps } from '@hugeicons/react';
import { cn } from '../../utils/cn';

export type MetricCardProps = {
    icon: ComponentType<HugeiconsProps>;
    label: string;
    value: string | number;
    iconColor?: string;
    className?: string;
};

export const MetricCard = ({
    icon: Icon,
    label,
    value,
    iconColor = '#DB1F26',
    className
}: MetricCardProps) => {
    return (
        <div className={cn(
            "bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100",
            "flex items-center gap-4 sm:gap-5 min-w-0",
            className
        )}>
            <div className="p-3">
                <Icon size={24} color={iconColor} />
            </div>
            <div>
                <p className="text-2xl font-bold text-slate-900">{value}</p>
                <p className="text-sm text-slate-600">{label}</p>
            </div>
        </div>
    );
};
