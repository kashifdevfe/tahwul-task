import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { MonthlyPerformance } from './types';
import { CHART_LABELS } from '../../constants';

interface PerformanceChartProps {
    data: MonthlyPerformance[];
}

export const PerformanceChart = ({ data }: PerformanceChartProps) => {
    return (
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm h-full min-w-0">
            <h2 className="dashboard-heading text-slate-800 mb-6">{CHART_LABELS.PERFORMANCE_OVER_TIME}</h2>
            <div className="h-[220px] sm:h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-tahwul-light-blue)" stopOpacity={1} />
                                <stop offset="100%" stopColor="var(--color-tahwul-light-blue)" stopOpacity={0.1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-surface-muted)" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: 'var(--color-sidebar-muted)' }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: 'var(--color-sidebar-muted)' }}
                        />
                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar
                            dataKey="value"
                            fill="url(#barGradient)"
                            radius={[4, 4, 4, 4]}
                            barSize={40}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
