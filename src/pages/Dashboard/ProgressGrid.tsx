import type { ProgressStatusItem } from './types';
import { cn } from '../../utils/cn';
import { useNavigate } from 'react-router-dom';

interface ProgressGridProps {
    items: ProgressStatusItem[];
}

const statusColors = {
    not_started: 'bg-slate-200',
    in_progress: 'bg-orange-400',
    completed: 'bg-green-500',
    partially_uploaded: 'bg-blue-400',
    fully_uploaded: 'bg-blue-600',
    delayed: 'bg-red-500',
};

export const ProgressGrid = ({ items }: ProgressGridProps) => {
    const navigate = useNavigate();

    const handleSubItemClick = (title: string) => {
        if (title === 'Digital Transformation') {
            navigate('/details/digital-transformation');
        }
    };

    return (
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-8 border border-slate-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
                <h2 className="dashboard-heading text-slate-800">Progress Status</h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] font-medium text-slate-500">
                    {Object.entries(statusColors).map(([key, color]) => (
                        <div key={key} className="flex items-center gap-1.5 uppercase tracking-wider">
                            <div className={cn("w-2 h-2 rounded-full", color)}></div>
                            {key.replace('_', ' ')}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-10 gap-x-3 gap-y-6 items-stretch">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col gap-3 h-full">
                        <div className="bg-sidebar text-white p-3 rounded-lg min-h-[80px] flex flex-col justify-between">
                            <span className="text-[10px] uppercase font-bold tracking-wider leading-tight opacity-90">{item.title}</span>
                            <span className="text-sm font-black">{item.percentage.toFixed(2)}%</span>
                        </div>

                        <div className="flex flex-col gap-4 flex-1 min-h-0">
                            {item.subItems.map((sub) => {
                                const isClickable = sub.title === 'Digital Transformation';
                                return (
                                    <div
                                        key={sub.id}
                                        onClick={() => handleSubItemClick(sub.title)}
                                        className={cn(
                                            "bg-slate-50 px-2.5 py-3 sm:px-3 rounded-xl border border-slate-200 flex flex-col min-h-[140px] flex-1 min-h-0 overflow-hidden transition-all",
                                            isClickable ? "cursor-pointer hover:bg-slate-100 ring-2 ring-transparent hover:ring-blue-500/20 shadow-sm" : ""
                                        )}
                                    >
                                        <div className="min-h-[44px] flex items-center justify-center px-1">
                                            <span className="text-[12px] font-semibold text-sidebar leading-tight text-center line-clamp-2">
                                                {sub.title}
                                            </span>
                                        </div>

                                        <div className="flex-1 min-h-0 flex items-start justify-center pt-2">
                                            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 justify-items-center content-start w-full min-h-0 overflow-y-auto pr-1">
                                                {sub.indicators.map((ind) => (
                                                    <div
                                                        key={ind.id}
                                                        className={cn(
                                                            "w-full max-w-8 aspect-square rounded-full flex items-center justify-center text-[10px] sm:text-[11px] lg:text-[12px] font-bold text-white shadow-sm",
                                                            statusColors[ind.status]
                                                        )}
                                                    >
                                                        {ind.id.split('-').pop()}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
