import { type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Card = ({ children, className, onClick }: CardProps) => {
    return (
        <div
            className={cn(
                "bg-white rounded-xl shadow-sm min-w-0",
                onClick && "cursor-pointer hover:shadow-md transition-shadow duration-200",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
    return (
        <div className={cn("p-4 sm:p-6 pb-3 sm:pb-4", className)}>
            {children}
        </div>
    );
};

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
    return (
        <h2 className={cn("heading-bold text-slate-800", className)}>
            {children}
        </h2>
    );
};

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => {
    return (
        <div className={cn("px-4 sm:px-6 pb-4 sm:pb-6", className)}>
            {children}
        </div>
    );
};
