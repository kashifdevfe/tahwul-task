import {
    ArrowLeft05Icon,
    ChartBarLineIcon,
    File01Icon,
    Home03Icon,
    MedicalFileIcon,
    Profile02Icon,
    UserMultiple02Icon,
} from 'hugeicons-react';
import { cn } from '../../utils/cn';
import logo from '../../assets/images/logo.svg';
import { NAVIGATION } from '../../constants';

const menuItems = [
    { icon: Home03Icon, label: NAVIGATION.DASHBOARD, active: true },
    { icon: MedicalFileIcon, label: NAVIGATION.PERSPECTIVES, active: false },
    { icon: Profile02Icon, label: NAVIGATION.TASKS, active: false },
    { icon: File01Icon, label: NAVIGATION.DOCUMENTS, active: false },
    { icon: ChartBarLineIcon, label: NAVIGATION.REPORTS, active: false },
    { icon: UserMultiple02Icon, label: NAVIGATION.USERS_ROLES, active: false },
];

interface SidebarProps {
    isMobileOpen?: boolean;
    onMobileClose?: () => void;
    isCollapsed?: boolean;
    onToggleCollapsed?: () => void;
}

export const Sidebar = ({
    isMobileOpen = false,
    onMobileClose,
    isCollapsed = false,
    onToggleCollapsed,
}: SidebarProps) => {
    return (
        <>
            <div
                className={cn(
                    "fixed inset-0 bg-black/40 z-20 md:hidden transition-opacity",
                    isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={onMobileClose}
                aria-hidden="true"
            />

            <aside
                className={cn(
                    isCollapsed ? "w-20" : "w-64 sm:w-64 md:w-64",
                    "bg-sidebar text-white flex flex-col h-full md:h-screen",
                    "border-r border-slate-700/30",
                    "relative fixed md:relative inset-y-0 left-0 z-40",
                    "transition-all duration-200 ease-out md:translate-x-0",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                <button
                    type="button"
                    onClick={onToggleCollapsed}
                    className={cn(
                        "hidden md:inline-flex items-center justify-center",
                        "absolute right-0 top-4 sm:top-6 translate-x-1/2",
                        "w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-0",
                        "border border-slate-200 shadow-md",
                        "hover:bg-slate-50 hover:scale-[1.02] transition-all z-50"
                    )}
                    aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                >
                    <ArrowLeft05Icon
                        size={24}
                        className={cn("text-[#747A8B] transition-transform sm:w-[26px] sm:h-[26px]", isCollapsed && "rotate-180")}
                    />
                </button>

                <div className={cn("p-4 sm:p-6 pb-2", isCollapsed && "px-3 sm:px-4")}>
                    <div className="flex items-start justify-between gap-3">
                        <img
                            src={logo}
                            alt="Tahwul Logo"
                            className={cn("h-8 sm:h-10 w-auto transition-all", isCollapsed && "hidden")}
                        />
                    </div>
            </div>

                <nav className={cn("flex-1 mt-4 sm:mt-6 overflow-y-auto", isCollapsed ? "px-2" : "px-3 sm:px-4")}>
                <ul className="space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href="#"
                                    onClick={onMobileClose}
                                className={cn(
                                        isCollapsed ? "justify-center px-2 sm:px-3" : "gap-2 sm:gap-3 px-3 sm:px-4",
                                        "flex items-center py-2.5 sm:py-3 rounded-lg transition-all group",
                                    item.active
                                        ? "bg-white/10 text-white"
                                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                    <item.icon
                                        size={20}
                                        className={cn(
                                    "transition-colors shrink-0",
                                    item.active ? "text-white" : "text-slate-400 group-hover:text-white"
                                        )}
                                    />
                                    <span className={cn("font-normal text-sm", isCollapsed && "hidden")}>
                                        {item.label}
                                    </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            </aside>
        </>
    );
};
