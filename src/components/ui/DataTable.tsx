import { cn } from '../../utils/cn';

export type Column<T = Record<string, unknown>> = {
    key: string;
    label: string;
    sortable?: boolean;
    render?: (value: unknown, row: T) => React.ReactNode;
    className?: string;
};

export type DataTableProps<T = Record<string, unknown>> = {
    columns: Column<T>[];
    data: T[];
    keyExtractor: (row: T, index: number) => string | number;
    onRowClick?: (row: T) => void;
    className?: string;
};

export const DataTable = <T extends Record<string, unknown>>({
    columns,
    data,
    keyExtractor,
    onRowClick,
    className
}: DataTableProps<T>) => {
    return (
        <div className={cn("bg-white rounded-xl border border-slate-100 overflow-hidden", className)}>
            <div className="w-full overflow-x-auto">
                <table className="min-w-[920px] w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50">
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className={cn(
                                        "px-6 py-4 text-xs font-normal text-slate-500 uppercase tracking-wider whitespace-nowrap",
                                        column.className
                                    )}
                                >
                                    <div className="inline-flex items-center gap-2">
                                        <span>{column.label}</span>
                                        {column.sortable && (
                                            <span className="text-sidebar-muted text-[12px] leading-none">⇅</span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={keyExtractor(row, index)}
                                onClick={() => onRowClick?.(row)}
                                className={cn(
                                    "border-t border-slate-100 hover:bg-slate-50",
                                    onRowClick && "cursor-pointer"
                                )}
                            >
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className={cn(
                                            "px-6 py-5 text-sm text-slate-600 whitespace-nowrap",
                                            column.className
                                        )}
                                    >
                                        {column.render
                                            ? column.render(row[column.key], row)
                                            : (row[column.key] as React.ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
