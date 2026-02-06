import type { TimelineEvent } from '../types';
import { cn } from '../../../utils/cn';

interface TimelineProps {
    events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
    const completedCount = events.filter(e => e.status === 'completed').length;
    const progressPercent = events.length > 1
        ? ((completedCount - 1) / (events.length - 1)) * 100
        : 0;

    return (
        <div className="bg-white rounded-[10px] border border-slate-100 shadow-sm mb-8 w-full min-h-[159px] px-4 sm:px-5 lg:px-10 py-5 flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-center mb-6">
                <h2 className="heading-bold text-primary">Project Timeline</h2>
                <div className="relative">
                    <select className="appearance-none text-[13px] font-semibold bg-white border border-slate-200 rounded-xl px-4 py-2 pr-9 text-slate-500 focus:outline-none focus:ring-0 cursor-pointer">
                        <option>2026</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="md:hidden flex flex-col gap-3">
                {events.map((event, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div
                            className={cn(
                                "mt-1.5 w-2.5 h-2.5 rounded-full shrink-0",
                                event.status === 'completed' ? "bg-success-strong" : "",
                                event.status === 'current' ? "bg-tahwul-red" : "",
                                event.status === 'upcoming' ? "bg-slate-300" : "",
                            )}
                        />
                        <div className="min-w-0">
                            <p className="text-xs font-medium text-slate-400 leading-tight">
                                {event.date}
                            </p>
                            <p className="text-sm font-semibold text-slate-700 leading-tight">
                                {event.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden md:block relative w-full mb-4">
                <div className="absolute top-[0px] left-0 right-0 h-[18px] bg-surface-muted rounded-full overflow-hidden">
                    <div
                        className="h-full bg-success-strong transition-all duration-1000 ease-in-out"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>

                <div className="flex w-full relative">
                    {events.map((event, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center overflow-visible">
                            <div
                                className={cn(
                                    "w-[10px] h-[10px] rounded-full z-10 transition-colors duration-500 shadow-sm",
                                    event.status === 'completed' ? "bg-white mt-[4px]" : "bg-tahwul-red mt-[4px]"
                                )}
                            />

                            <div className="mt-6 flex flex-col items-center text-center w-full min-w-0 px-1">
                                <p className="text-normal-sm text-sidebar-muted mb-1 break-words">
                                    {event.date}
                                </p>
                                <p className="text-normal-sm text-slate-600 font-medium break-words">
                                    {event.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
