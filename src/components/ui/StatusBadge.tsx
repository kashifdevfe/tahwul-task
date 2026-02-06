import { Badge } from './Badge';
import { cn } from '../../utils/cn';

export type StatusType = 'approved' | 'pending' | 'rejected' | 'in-progress' | 'completed';

export type StatusBadgeProps = {
    status: string;
    className?: string;
};

const statusMap: Record<string, { variant: 'default' | 'success' | 'warning' | 'danger' | 'info', label?: string }> = {
    'approved': { variant: 'success' },
    'pending review': { variant: 'warning' },
    'pending': { variant: 'warning' },
    'rejected': { variant: 'danger' },
    'in-progress': { variant: 'info', label: 'In Progress' },
    'completed': { variant: 'success' },
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
    const normalized = status.toLowerCase();
    const config = statusMap[normalized] || { variant: 'default' as const };
    
    return (
        <Badge 
            variant={config.variant}
            className={cn("capitalize", className)}
        >
            {config.label || status}
        </Badge>
    );
};
