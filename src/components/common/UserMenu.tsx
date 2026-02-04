import { Avatar } from '../ui/Avatar';
import { ChevronDown } from 'lucide-react';

interface UserMenuProps {
    name: string;
    avatarUrl?: string;
    onClick?: () => void;
}

export const UserMenu = ({ name, avatarUrl, onClick }: UserMenuProps) => {
    return (
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">{name}</p>
            </div>
            <Avatar
                src={avatarUrl}
                alt={name}
                size="md"
            />
            <button className="text-slate-400" onClick={onClick}>
                <ChevronDown className="w-4 h-4" />
            </button>
        </div>
    );
};
