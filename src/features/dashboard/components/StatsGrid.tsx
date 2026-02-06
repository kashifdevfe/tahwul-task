import React from 'react';
import type { StatCardData } from '../types';
import type { HugeiconsProps } from '@hugeicons/react';
import {
    ChartBarLineIcon,
    Folder01Icon,
    FileSecurityIcon,
    FileUploadIcon,
    FileVerifiedIcon,
    FolderCheckIcon,
} from 'hugeicons-react';
import { Card } from '../../../components/ui/Card';
import { Badge } from '../../../components/ui/Badge';

interface StatsGridProps {
    stats: StatCardData[];
}

const statIconMap: Record<string, React.ComponentType<HugeiconsProps>> = {
    ChartBarLineIcon,
    Folder01Icon,
    FolderCheckIcon,
    FileSecurityIcon,
    FileVerifiedIcon,
    FileUploadIcon,
};

export const StatsGrid = ({ stats }: StatsGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {stats.map((stat, index) => {
                const Icon = statIconMap[stat.icon];
                return (
                    <Card key={index} className="p-4 sm:p-5 hover:shadow-md transition-shadow group">
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <div className="flex items-baseline gap-2">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">{stat.value}</h3>
                                    {stat.trend && (
                                        <Badge
                                            variant={stat.trend.isUp ? 'success' : 'danger'}
                                            size="sm"
                                        >
                                            {stat.trend.isUp ? '+' : '-'}{stat.trend.value}%
                                        </Badge>
                                    )}
                                </div>
                                <p className="mt-2 text-normal-sm text-gray-400">
                                    {stat.title}
                                </p>
                            </div>

                            <div className="p-2 rounded-lg bg-transparent group-hover:scale-110 transition-transform shrink-0">
                                {Icon && <Icon size={22} color="#DB1F26" />}
                            </div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};
