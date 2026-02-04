import { Bell } from 'lucide-react';

interface NotificationButtonProps {
    hasNotification?: boolean;
    onClick?: () => void;
}

export const NotificationButton = ({ hasNotification = false, onClick }: NotificationButtonProps) => {
    return (
        <button
            className="relative text-slate-500 hover:text-slate-700 transition-colors"
            onClick={onClick}
        >
            <Bell size={20} />
            {hasNotification && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            )}
        </button>
    );
};
