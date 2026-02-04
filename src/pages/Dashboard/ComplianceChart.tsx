import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CHART_LABELS } from '../../constants';

interface ComplianceChartProps {
    score: number;
}

export const ComplianceChart = ({ score }: ComplianceChartProps) => {
    const data = [
        { value: score },
        { value: 100 - score },
    ];

    const COLORS = ['var(--color-tahwul-red)', 'var(--color-surface-muted)'];

    return (
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm flex flex-col h-full min-w-0">
            <h2 className="dashboard-heading text-slate-800 mb-6">{CHART_LABELS.COMPLIANCE_SCORE}</h2>
            <div className="flex-1 relative min-h-[170px] sm:min-h-[190px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="100%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={82}
                            outerRadius={100}
                            paddingAngle={0}
                            dataKey="value"
                            cornerRadius={10}
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">{score}%</span>
                    <p className="text-xs text-slate-400 font-medium mt-1">Basic Standards 2025</p>
                </div>
            </div>
        </div>
    );
};
