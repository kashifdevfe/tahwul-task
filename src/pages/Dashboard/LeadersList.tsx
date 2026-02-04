import type { Leader } from './types';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Avatar } from '../../components/ui/Avatar';

interface LeadersListProps {
    leaders: Leader[];
}

export const LeadersList = ({ leaders }: LeadersListProps) => {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Top Performing Perspective Leaders</CardTitle>
            </CardHeader>
            <CardContent className="min-w-0">
                <div className="space-y-5">
                    {leaders.map((leader) => (
                        <div key={leader.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Avatar
                                    src={leader.avatar}
                                    alt={leader.name}
                                    size="sm"
                                />
                                <div className="min-w-0">
                                    <p className="text-sm font-bold text-slate-800 leading-tight truncate">{leader.name}</p>
                                    <p className="text-xs text-slate-400 font-medium">{leader.perspective}</p>
                                </div>
                            </div>
                            <span className="text-sm font-black text-slate-900">{leader.score}%</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
