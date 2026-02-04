import React from 'react';
import type { StatCardData } from './types';
import * as Icons from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

interface StatsGridProps {
    stats: StatCardData[];
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4 mb-8">
            {stats.map((stat, index) => {
                const Icon = (Icons as unknown as Record<string, React.ElementType>)[stat.icon];
                return (
                    <Card key={index} className="p-4 sm:p-5 hover:shadow-md transition-shadow group">
                        <div className="flex justify-between items-start mb-3 sm:mb-4">
                            <span className="text-gray-400 font-medium text-xs sm:text-sm leading-tight">{stat.title}</span>
                            <div className="p-2 rounded-lg bg-orange-50 text-orange-500 group-hover:scale-110 transition-transform">
                                {Icon && <Icon size={18} />}
                            </div>
                        </div>
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
                    </Card>
                );
            })}
        </div>
    );
};
