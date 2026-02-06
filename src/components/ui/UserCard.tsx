import { Avatar } from './Avatar';
import { cn } from '../../utils/cn';

export type UserCardProps = {
    name: string;
    avatarUrl?: string;
    subtitle: string;
    trailing?: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

export const UserCard = ({
    name,
    avatarUrl,
    subtitle,
    trailing,
    className,
    onClick
}: UserCardProps) => {
    return (
        <div
            className={cn(
                "flex items-center justify-between gap-3 min-w-0",
                onClick && "cursor-pointer hover:bg-slate-50 transition-colors rounded-lg p-2 -m-2",
                className
            )}
            onClick={onClick}
        >
            <div className="flex items-center gap-3 min-w-0 flex-1">
                <Avatar
                    src={avatarUrl}
                    alt={name}
                    size="sm"
                />
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-normal text-slate-800 leading-tight">
                        {name}
                    </p>
                    <p className="text-xs text-slate-400 font-normal">
                        {subtitle}
                    </p>
                </div>
            </div>
            {trailing && (
                <div className="shrink-0">
                    {trailing}
                </div>
            )}
        </div>
    );
};
