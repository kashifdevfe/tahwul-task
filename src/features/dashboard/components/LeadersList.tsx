import type { Leader } from '../types';
import { Card, CardHeader, CardTitle, CardContent, UserCard } from '../../../components/ui';

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
                <div className="divide-y divide-slate-100">
                    {leaders.map((leader) => (
                        <div key={leader.id} className="py-4 first:pt-0 last:pb-0">
                            <UserCard
                                name={leader.name}
                                avatarUrl={leader.avatar}
                                subtitle={leader.perspective}
                                trailing={
                                    <span className="text-sm font-normal text-slate-900">{leader.score}%</span>
                                }
                            />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
