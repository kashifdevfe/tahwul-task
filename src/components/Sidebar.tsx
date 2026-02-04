import { Home, FileBarChart, ClipboardList, FileText, BarChart, Users } from 'lucide-react';
import { cn } from '../utils/cn';
import logo from '../assets/images/logo.png';
import { NAVIGATION } from '../constants';

const menuItems = [
    { icon: Home, label: NAVIGATION.DASHBOARD, active: true },
    { icon: FileBarChart, label: NAVIGATION.PERSPECTIVES, active: false },
    { icon: ClipboardList, label: NAVIGATION.TASKS, active: false },
    { icon: FileText, label: NAVIGATION.DOCUMENTS, active: false },
    { icon: BarChart, label: NAVIGATION.REPORTS, active: false },
    { icon: Users, label: NAVIGATION.USERS_ROLES, active: false },
];

interface SidebarProps {
    isMobileOpen?: boolean;
    onMobileClose?: () => void;
}

export const Sidebar = ({ isMobileOpen = false, onMobileClose }: SidebarProps) => {
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
                    "w-64 bg-sidebar text-white flex flex-col h-full md:h-screen",
                    "fixed md:static inset-y-0 left-0 z-30 md:z-auto",
                    "transition-transform duration-200 ease-out md:translate-x-0",
                    isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                )}
            >
                <div className="p-6 pb-2">
                    <img src={logo} alt="Tahwul Logo" className="h-10 w-auto" />
                </div>

                <nav className="flex-1 px-4 mt-6 overflow-y-auto">
                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href="#"
                                    onClick={onMobileClose}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group",
                                        item.active
                                            ? "bg-white/10 text-white"
                                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <item.icon
                                        size={20}
                                        className={cn(
                                            "transition-colors",
                                            item.active ? "text-white" : "text-slate-400 group-hover:text-white"
                                        )}
                                    />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};
