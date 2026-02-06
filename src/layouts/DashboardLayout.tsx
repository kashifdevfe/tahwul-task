import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { useMediaQuery, useLocalStorage } from '../hooks';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = React.useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useLocalStorage('sidebar-collapsed', false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    React.useEffect(() => {
        if (isDesktop) {
            setIsMobileSidebarOpen(false);
        }
    }, [isDesktop]);

    React.useEffect(() => {
        if (!isMobileSidebarOpen) return;

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsMobileSidebarOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isMobileSidebarOpen]);

    React.useEffect(() => {
        if (isMobileSidebarOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = '';
            };
        }
    }, [isMobileSidebarOpen]);

    return (
        <div className="flex h-screen overflow-hidden bg-[var(--color-background)]">
            <div className="shrink-0">
                <Sidebar
                    isMobileOpen={isMobileSidebarOpen}
                    onMobileClose={() => setIsMobileSidebarOpen(false)}
                    isCollapsed={isSidebarCollapsed}
                    onToggleCollapsed={() => setIsSidebarCollapsed((v) => !v)}
                />
            </div>
            <div className="flex-1 flex flex-col min-w-0 min-h-0">
                <Header onMobileMenuClick={() => setIsMobileSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto min-h-0">
                    {children}
                </main>
            </div>
        </div>
    );
};
