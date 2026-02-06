import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Timeline } from './components/Timeline';
import { StatsGrid } from './components/StatsGrid';
import { LeadersList } from './components/LeadersList';
import { RecentActivities } from './components/RecentActivities';
import { stats, timeline, progressStatus, leaders, recentActivities, performanceData } from './data/mockData';
import { AuditReadiness } from './components/AuditReadiness';
import { ProgressGrid } from './components/ProgressGrid';
import { PerformanceChart } from './components/PerformanceChart';
import { ComplianceChart } from './components/ComplianceChart';

export const Dashboard = () => (
  <DashboardLayout>
    <div className="w-full animate-in fade-in duration-500 pb-12 p-4 sm:p-6">
      <Timeline events={timeline} />
      <StatsGrid stats={stats} />
      <ProgressGrid items={progressStatus} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:h-[320px] min-w-0">
          <ComplianceChart score={65} />
        </div>
        <div className="lg:h-[320px] min-w-0">
          <LeadersList leaders={leaders} />
        </div>
        <div className="lg:h-[320px] min-w-0">
          <RecentActivities activities={recentActivities} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4">
        <div className="lg:col-span-3">
          <PerformanceChart data={performanceData} />
        </div>
        <div className="lg:col-span-1">
          <AuditReadiness score={80} />
        </div>
      </div>
    </div>
  </DashboardLayout>
);