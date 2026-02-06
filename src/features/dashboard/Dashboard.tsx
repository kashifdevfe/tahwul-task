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
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { FeatureErrorFallback } from '../../components/FeatureErrorFallback';

export const Dashboard = () => (
  <DashboardLayout>
    <div className="w-full animate-in fade-in duration-500 pb-12 p-4 sm:p-6">
      <ErrorBoundary fallback={(props) => <FeatureErrorFallback {...props} featureName="timeline" />}>
        <Timeline events={timeline} />
      </ErrorBoundary>

      <ErrorBoundary fallback={(props) => <FeatureErrorFallback {...props} featureName="statistics" />}>
        <StatsGrid stats={stats} />
      </ErrorBoundary>

      <ErrorBoundary fallback={(props) => <FeatureErrorFallback {...props} featureName="progress status" />}>
        <ProgressGrid items={progressStatus} />
      </ErrorBoundary>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:h-[320px] min-w-0">
          <ErrorBoundary fallback={(props) => <FeatureErrorFallback {...props} featureName="compliance chart" />}>
            <ComplianceChart score={65} />
          </ErrorBoundary>
        </div>
        <div className="lg:h-[320px] min-w-0">
          <ErrorBoundary fallback={(props) => <FeatureErrorFallback {...props} featureName="leaders list" />}>
            <LeadersList leaders={leaders} />
          </ErrorBoundary>
        </div>
        <div className="lg:h-[320px] min-w-0">
          <ErrorBoundary fallback={(props) => <FeatureErrorFallback {...props} featureName="recent activities" />}>
            <RecentActivities activities={recentActivities} />
          </ErrorBoundary>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4">
        <div className="lg:col-span-3">
          <ErrorBoundary fallback={(props) => <FeatureErrorFallback {...props} featureName="performance chart" />}>
            <PerformanceChart data={performanceData} />
          </ErrorBoundary>
        </div>
        <div className="lg:col-span-1">
          <ErrorBoundary fallback={(props) => <FeatureErrorFallback {...props} featureName="audit readiness" />}>
            <AuditReadiness score={80} />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  </DashboardLayout>
);