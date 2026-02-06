import type { ProgressStatusItem } from '../types';
import { cn } from '../../../utils/cn';
import { useNavigate } from 'react-router-dom';

interface ProgressGridProps {
    items: ProgressStatusItem[];
}

const statusColors = {
    not_started: 'bg-[#9E9E9E]',      // Gray
    in_progress: 'bg-[#FF9800]',      // Orange
    completed: 'bg-[#4CAF50]',        // Green
    partially_uploaded: 'bg-[#2196F3]', // Blue
    fully_uploaded: 'bg-[#2196F3]',   // Blue
    delayed: 'bg-[#F44336]',          // Red
};

export const ProgressGrid = ({ items }: ProgressGridProps) => {
    const navigate = useNavigate();

    const handleSubItemClick = (title: string) => {
        if (title === 'Digital Transformation') {
            navigate('/details/digital-transformation');
        }
    };

    return (
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm mb-8 border border-slate-100 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-8">
                <h2 className="heading-bold text-slate-800">Progress Status</h2>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] font-normal text-slate-500">
                    {Object.entries(statusColors).map(([key, color]) => (
                        <div key={key} className="flex items-center gap-1.5 uppercase tracking-wider">
                            <div className={cn("w-2 h-2 rounded-full", color)}></div>
                            {key.replace('_', ' ')}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10 gap-3 sm:gap-4 lg:gap-3 auto-rows-fr">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col gap-4 min-w-0">
                        <div className="bg-sidebar text-white p-4 sm:p-5 rounded-lg h-[110px] flex flex-col items-center relative">
                            <div className="w-full text-center h-[60px] flex items-center justify-center">
                                <span className="text-[10px] font-semibold tracking-normal leading-[1.3] inline-block">
                                    {item.title}
                                </span>
                            </div>
                            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center px-3">
                                <span className="text-sm font-bold px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                                    {item.percentage.toFixed(2)}%
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 flex-1">
                            {item.subItems.map((sub) => (
                                <div
                                    key={sub.id}
                                    onClick={() => handleSubItemClick(sub.title)}
                                    className={cn(
                                        "bg-slate-50 px-4 py-4 pb-5 sm:py-5 sm:pb-6 rounded-xl border border-slate-200",
                                        "flex flex-col transition-all h-full",
                                        "cursor-pointer hover:bg-slate-100 hover:shadow-md",
                                        "ring-2 ring-transparent hover:ring-blue-500/20",
                                        "active:scale-[0.98]"
                                    )}
                                >
                                    <div className="flex items-center justify-center px-2 mb-4 min-h-[52px]">
                                        <span className="text-[12px] sm:text-[13px] font-normal text-sidebar leading-[1.3] text-center break-words">
                                            {sub.title}
                                        </span>
                                    </div>

                                    <div className="flex-1 flex items-start justify-center py-3 pb-2 px-2">
                                        <div 
                                            className={cn(
                                                "grid justify-items-center content-start pb-1",
                                                sub.indicators.length <= 3 ? "grid-cols-3" :
                                                sub.indicators.length === 4 ? "grid-cols-2" :
                                                "grid-cols-3"
                                            )}
                                            style={{
                                                gap: '8px',
                                                gridTemplateColumns: sub.indicators.length <= 3 ? 'repeat(3, 26px)' :
                                                                    sub.indicators.length === 4 ? 'repeat(2, 26px)' :
                                                                    'repeat(3, 26px)'
                                            }}
                                        >
                                            {sub.indicators.map((ind) => (
                                                <div
                                                    key={ind.id}
                                                    className={cn(
                                                        "rounded-full shrink-0 grow-0 flex-none",
                                                        "flex items-center justify-center",
                                                        "text-[10px] font-bold text-white shadow-sm",
                                                        "transition-transform hover:scale-110",
                                                        statusColors[ind.status]
                                                    )}
                                                    style={{ 
                                                        width: '26px',
                                                        height: '26px',
                                                        minWidth: '26px', 
                                                        minHeight: '26px', 
                                                        maxWidth: '26px', 
                                                        maxHeight: '26px'
                                                    }}
                                                >
                                                    {ind.id.split('-').pop()}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
