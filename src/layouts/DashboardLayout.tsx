import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';
import { useDisclosure, useEscapeKey, useLockBodyScroll, useMediaQuery } from '../hooks';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const mobileSidebar = useDisclosure();
    useEscapeKey(mobileSidebar.close, mobileSidebar.isOpen);
    useLockBodyScroll(mobileSidebar.isOpen);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    React.useEffect(() => {
        if (isDesktop) mobileSidebar.close();
    }, [isDesktop, mobileSidebar]);

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50">
            <div className="shrink-0">
                <Sidebar
                    isMobileOpen={mobileSidebar.isOpen}
                    onMobileClose={mobileSidebar.close}
                />
            </div>
            <div className="flex-1 flex flex-col min-w-0 min-h-0">
                <Header onMobileMenuClick={mobileSidebar.open} />
                <main className="flex-1 overflow-y-auto min-h-0">
                    {children}
                </main>
            </div>
        </div>
    );
};
