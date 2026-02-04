import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CHART_LABELS } from '../../constants';

interface AuditReadinessProps {
    score: number;
}

export const AuditReadiness = ({ score }: AuditReadinessProps) => {
    const data = [
        { value: score },
        { value: 100 - score },
    ];

    const COLORS = ['var(--color-audit-green)', 'var(--color-surface-muted)'];

    return (
        <div className="bg-white rounded-[20px] p-4 sm:p-6 shadow-sm flex flex-col w-full min-h-[258px] h-full border border-slate-50 min-w-0">
            <h2 className="dashboard-heading text-slate-800 mb-4 font-bold text-base">{CHART_LABELS.AUDIT_READINESS}</h2>
            <div className="relative h-[170px] sm:h-[190px] w-full">
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
                            stroke="none"
                            cornerRadius={10}
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                    style={{ filter: index === 0 ? 'drop-shadow(0px 2px 6px rgba(30, 165, 78, 0.25))' : 'none' }}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">{score}%</span>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{CHART_LABELS.READINESS_LEVEL}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3 pt-4 border-t border-slate-100">
                <div className="text-center">
                    <p className="text-xl font-black text-primary">12</p>
                    <p className="text-[10px] font-bold text-sidebar-muted uppercase leading-tight">{CHART_LABELS.OVERDUE_STANDARDS}</p>
                </div>
                <div className="text-center">
                    <p className="text-xl font-black text-primary">5</p>
                    <p className="text-[10px] font-bold text-sidebar-muted uppercase leading-tight">{CHART_LABELS.MISSING_EVIDENCE}</p>
                </div>
            </div>
        </div>
    );
};
