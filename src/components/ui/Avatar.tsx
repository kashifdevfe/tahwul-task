import { type ImgHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fallback?: string;
}

export const Avatar = ({
    size = 'md',
    fallback,
    className,
    alt = '',
    ...props
}: AvatarProps) => {
    const sizes = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg"
    };

    return (
        <div className={cn("relative inline-block", className)}>
            <img
                className={cn(
                    "rounded-full object-cover border-2 border-slate-100",
                    sizes[size]
                )}
                alt={alt}
                {...props}
            />
            {fallback && !props.src && (
                <div className={cn(
                    "rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-600",
                    sizes[size]
                )}>
                    {fallback}
                </div>
            )}
        </div>
    );
};
