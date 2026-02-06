import type { ProgressIndicatorStatus, TimelineStatus } from '../../types/type';

export type StatCardData = {
  title: string;
  value: string | number;
  icon: string;
  trend?: {
    value: number;
    isUp: boolean;
  };
};

export type TimelineEvent = {
  date: string;
  title: string;
  status: TimelineStatus;
};

export type ProgressStatusItem = {
  id: string;
  title: string;
  percentage: number;
  subItems: Array<{
    id: string;
    title: string;
    indicators: Array<{
      id: string;
      status: ProgressIndicatorStatus;
    }>;
  }>;
};

export type Leader = {
  id: string;
  name: string;
  perspective: string;
  score: number;
  avatar: string;
};

export type Activity = {
  id: string;
  title: string;
  description: string;
  time: string;
};

export type MonthlyPerformance = {
  month: string;
  value: number;
};

