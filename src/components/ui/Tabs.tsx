import { cn } from '../../utils/cn';

export type Tab = {
    id: string;
    label: string;
    icon?: React.ReactNode;
};

export type TabsProps = {
    tabs: Tab[];
    activeTab: string;
    onChange: (tabId: string) => void;
    className?: string;
};

export const Tabs = ({ tabs, activeTab, onChange, className }: TabsProps) => {
    return (
        <div className={cn(
            "flex gap-2 p-1.5 bg-surface-muted/50 w-fit rounded-xl border border-slate-100",
            className
        )}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={cn(
                        "px-6 py-3 rounded-lg text-sm font-semibold transition-all",
                        activeTab === tab.id
                            ? "bg-white shadow-sm text-sidebar"
                            : "text-slate-500 hover:text-slate-700"
                    )}
                >
                    <div className="flex items-center gap-2">
                        {tab.icon}
                        {tab.label}
                    </div>
                </button>
            ))}
        </div>
    );
};
