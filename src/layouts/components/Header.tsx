import { Menu } from 'lucide-react';
import { SearchInput } from '../../components/common/SearchInput';
import { NotificationButton } from '../../components/common/NotificationButton';
import { UserMenu } from '../../components/common/UserMenu';

interface HeaderProps {
    onMobileMenuClick?: () => void;
}

export const Header = ({ onMobileMenuClick }: HeaderProps) => {
    return (
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    onClick={onMobileMenuClick}
                    className="text-slate-500 md:hidden"
                    aria-label="Open menu"
                >
                    <Menu size={20} />
                </button>
                <SearchInput />
            </div>

            <div className="flex items-center gap-6">
                <NotificationButton hasNotification={true} />
                <UserMenu
                    name="Mohamed"
                    avatarUrl="https://i.pravatar.cc/150?u=mohamed"
                />
            </div>
        </header>
    );
};
