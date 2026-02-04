import type {
  Activity,
  Leader,
  MonthlyPerformance,
  ProgressStatusItem,
  StatCardData,
  TimelineEvent,
} from './types';
import { PERSPECTIVES, PROGRESS_CATEGORIES, PROGRESS_SUBCATEGORIES, STATISTICS, TIMELINE } from '../../constants';

export const stats: StatCardData[] = [
  { title: STATISTICS.OVERALL_PROGRESS, value: '78.65%', icon: 'BarChart' },
  { title: STATISTICS.TOTAL_CRITERIA, value: 95, icon: 'Folder' },
  { title: STATISTICS.COMPLETED_CRITERIA, value: 52, icon: 'ShieldCheck' },
  { title: STATISTICS.EVIDENCE_DOCUMENTS, value: 386, icon: 'FileText' },
  { title: STATISTICS.EVIDENCE_COMPLETED, value: 302, icon: 'RefreshCcw' },
  { title: STATISTICS.UPLOADED_TO_DGA, value: 258, icon: 'UploadCloud' },
];

export const timeline: TimelineEvent[] = [
  { date: 'Mar 17', title: TIMELINE.KICKOFF_WORKSHOP, status: 'completed' },
  { date: 'March 18', title: TIMELINE.DATA_COLLECTION, status: 'completed' },
  { date: 'May 8', title: TIMELINE.INITIAL_PHASE, status: 'current' },
  { date: 'May 9-July 12', title: TIMELINE.VERIFICATION, status: 'upcoming' },
  { date: 'July 13', title: TIMELINE.COMPLETION_REVIEWS, status: 'upcoming' },
  { date: 'August 21', title: TIMELINE.CYCLE_CONCLUSION, status: 'upcoming' },
];

export const progressStatus: ProgressStatusItem[] = [
  {
    id: '1',
    title: PROGRESS_CATEGORIES.STRATEGY_PLANNING,
    percentage: 97.78,
    subItems: [
      {
        id: '1-1',
        title: PROGRESS_SUBCATEGORIES.DIGITAL_TRANSFORMATION,
        indicators: [
          { id: '1-1-1', status: 'completed' },
          { id: '1-1-2', status: 'completed' },
          { id: '1-1-3', status: 'completed' },
        ],
      },
      {
        id: '1-2',
        title: PROGRESS_SUBCATEGORIES.DIGITAL_GOVERNANCE,
        indicators: [
          { id: '1-2-1', status: 'completed' },
          { id: '1-2-2', status: 'completed' },
          { id: '1-2-3', status: 'completed' },
        ],
      },
      {
        id: '1-3',
        title: PROGRESS_SUBCATEGORIES.ENTERPRISE_ARCHITECTURE,
        indicators: [
          { id: '1-3-1', status: 'completed' },
          { id: '1-3-2', status: 'completed' },
          { id: '1-3-3', status: 'completed' },
          { id: '1-3-4', status: 'completed' },
        ],
      },
    ],
  },
  {
    id: '2',
    title: PROGRESS_CATEGORIES.ORGANIZATION_CULTURE,
    percentage: 70.83,
    subItems: [
      {
        id: '2-1',
        title: PROGRESS_SUBCATEGORIES.DIGITAL_CULTURE_ENVIRONMENT,
        indicators: [
          { id: '2-1-1', status: 'completed' },
          { id: '2-1-2', status: 'completed' },
          { id: '2-1-3', status: 'completed' },
        ],
      },
      {
        id: '2-2',
        title: PROGRESS_SUBCATEGORIES.LEADERSHIP_DEVELOPMENT,
        indicators: [
          { id: '2-2-1', status: 'completed' },
          { id: '2-2-2', status: 'completed' },
          { id: '2-2-3', status: 'completed' },
          { id: '2-2-4', status: 'completed' },
        ],
      },
      {
        id: '2-3',
        title: PROGRESS_SUBCATEGORIES.SKILLS_CAPACITY_BUILDING,
        indicators: [
          { id: '2-3-1', status: 'in_progress' },
          { id: '2-3-2', status: 'in_progress' },
          { id: '2-3-3', status: 'in_progress' },
        ],
      },
    ],
  },
  {
    id: '3',
    title: PROGRESS_CATEGORIES.OPERATIONS_EXECUTION,
    percentage: 80.0,
    subItems: [
      {
        id: '3-1',
        title: PROGRESS_SUBCATEGORIES.BUSINESS_PROCESSES,
        indicators: [
          { id: '3-1-1', status: 'completed' },
          { id: '3-1-2', status: 'in_progress' },
          { id: '3-1-3', status: 'in_progress' },
          { id: '3-1-4', status: 'in_progress' },
        ],
      },
    ],
  },
  {
    id: '4',
    title: PROGRESS_CATEGORIES.BUSINESS_CONTINUITY,
    percentage: 90.59,
    subItems: [
      {
        id: '4-1',
        title: PROGRESS_SUBCATEGORIES.RISK_MANAGEMENT,
        indicators: Array.from({ length: 5 }, (_, i) => ({
          id: `4-1-${i + 1}`,
          status: i < 3 ? 'completed' : 'in_progress',
        })),
      },
      {
        id: '4-2',
        title: PROGRESS_SUBCATEGORIES.BUSINESS_CONTINUITY_SUB,
        indicators: Array.from({ length: 7 }, (_, i) => ({
          id: `4-2-${i + 1}`,
          status: i < 5 ? 'completed' : 'in_progress',
        })),
      },
    ],
  },
  {
    id: '5',
    title: PROGRESS_CATEGORIES.INFORMATION_TECHNOLOGY,
    percentage: 75.0,
    subItems: [
      {
        id: '5-1',
        title: PROGRESS_SUBCATEGORIES.SUPPORT_SYSTEMS,
        indicators: Array.from({ length: 5 }, (_, i) => ({
          id: `5-1-${i + 1}`,
          status: i < 3 ? 'fully_uploaded' : 'in_progress',
        })),
      },
      {
        id: '5-2',
        title: PROGRESS_SUBCATEGORIES.IT_INFRASTRUCTURE,
        indicators: Array.from({ length: 7 }, (_, i) => ({
          id: `5-2-${i + 1}`,
          status: i < 4 ? 'fully_uploaded' : 'in_progress',
        })),
      },
      {
        id: '5-3',
        title: PROGRESS_SUBCATEGORIES.CLOUD_INFRASTRUCTURE,
        indicators: Array.from({ length: 3 }, (_, i) => ({
          id: `5-3-${i + 1}`,
          status: 'completed',
        })),
      },
    ],
  },
  {
    id: '6',
    title: PROGRESS_CATEGORIES.COMPREHENSIVE_GOVERNANCE,
    percentage: 64.44,
    subItems: [
      {
        id: '6-1',
        title: PROGRESS_SUBCATEGORIES.GOVERNANCE_PLATFORMS,
        indicators: Array.from({ length: 9 }, (_, i) => ({
          id: `6-1-${i + 1}`,
          status: i < 6 ? 'completed' : 'not_started',
        })),
      },
    ],
  },
  {
    id: '7',
    title: PROGRESS_CATEGORIES.CHANNELS_SERVICES,
    percentage: 100,
    subItems: [
      {
        id: '7-1',
        title: PROGRESS_SUBCATEGORIES.SERVICE_QUALITY,
        indicators: Array.from({ length: 3 }, (_, i) => ({
          id: `7-1-${i + 1}`,
          status: 'completed',
        })),
      },
      {
        id: '7-2',
        title: PROGRESS_SUBCATEGORIES.DIGITAL_CHANNELS,
        indicators: Array.from({ length: 4 }, (_, i) => ({
          id: `7-2-${i + 1}`,
          status: 'completed',
        })),
      },
    ],
  },
  {
    id: '8',
    title: PROGRESS_CATEGORIES.BENEFICIARY_CENTRALIZATION,
    percentage: 60.0,
    subItems: [
      {
        id: '8-1',
        title: PROGRESS_SUBCATEGORIES.USER_ENGAGEMENT,
        indicators: Array.from({ length: 4 }, (_, i) => ({
          id: `8-1-${i + 1}`,
          status: i < 3 ? 'completed' : 'in_progress',
        })),
      },
      {
        id: '8-2',
        title: PROGRESS_SUBCATEGORIES.USER_RELATIONSHIP,
        indicators: Array.from({ length: 3 }, (_, i) => ({
          id: `8-2-${i + 1}`,
          status: 'completed',
        })),
      },
      {
        id: '8-3',
        title: PROGRESS_SUBCATEGORIES.USER_EXPERIENCE,
        indicators: Array.from({ length: 5 }, (_, i) => ({
          id: `8-3-${i + 1}`,
          status: i < 2 ? 'completed' : 'in_progress',
        })),
      },
    ],
  },
  {
    id: '9',
    title: PROGRESS_CATEGORIES.GOVERNMENT_DATA,
    percentage: 87.5,
    subItems: [
      {
        id: '9-1',
        title: PROGRESS_SUBCATEGORIES.DATA_GOVERNANCE,
        indicators: Array.from({ length: 3 }, (_, i) => ({
          id: `9-1-${i + 1}`,
          status: 'completed',
        })),
      },
      {
        id: '9-2',
        title: PROGRESS_SUBCATEGORIES.DATA_USAGE_AVAILABILITY,
        indicators: Array.from({ length: 3 }, (_, i) => ({
          id: `9-2-${i + 1}`,
          status: 'completed',
        })),
      },
      {
        id: '9-3',
        title: PROGRESS_SUBCATEGORIES.OPEN_DATA,
        indicators: Array.from({ length: 3 }, (_, i) => ({
          id: `9-3-${i + 1}`,
          status: 'completed',
        })),
      },
    ],
  },
  {
    id: '10',
    title: PROGRESS_CATEGORIES.RESEARCH_INNOVATION,
    percentage: 17.65,
    subItems: [
      {
        id: '10-1',
        title: PROGRESS_SUBCATEGORIES.INNOVATION,
        indicators: Array.from({ length: 4 }, (_, i) => ({
          id: `10-1-${i + 1}`,
          status: 'delayed',
        })),
      },
      {
        id: '10-2',
        title: PROGRESS_SUBCATEGORIES.CREATIVE_SOLUTIONS,
        indicators: Array.from({ length: 2 }, (_, i) => ({
          id: `10-2-${i + 1}`,
          status: 'in_progress',
        })),
      },
    ],
  },
];

export const leaders: Leader[] = [
  { id: '1', name: 'Ahmed Al-Ali', perspective: PERSPECTIVES.STRATEGY, score: 96, avatar: 'https://i.pravatar.cc/150?u=ahmed' },
  { id: '2', name: 'Sarah Al-Khaled', perspective: PERSPECTIVES.BENEFICIARY, score: 94, avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: '3', name: 'Mohammad Al-Mansour', perspective: PERSPECTIVES.IT, score: 92, avatar: 'https://i.pravatar.cc/150?u=mohammad' },
];

export const recentActivities: Activity[] = [
  { id: '1', title: 'Document "Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled', description: '5 Mins Ago', time: '5 Mins Ago' },
  { id: '2', title: 'Task "Review Compliance Files" Was Assigned To Mona Hamed', description: '20 Mins Ago', time: '20 Mins Ago' },
  { id: '3', title: 'New Criterion "5.3 Digital Identity" Was Created By Admin', description: '1 Hour Ago', time: '1 Hour Ago' },
];

export const performanceData: MonthlyPerformance[] = [
  { month: 'Jan', value: 85 },
  { month: 'Feb', value: 75 },
  { month: 'Mar', value: 80 },
  { month: 'Apr', value: 45 },
  { month: 'May', value: 85 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 55 },
  { month: 'Aug', value: 85 },
  { month: 'Sept', value: 78 },
  { month: 'Oct', value: 55 },
  { month: 'Nov', value: 85 },
  { month: 'Dec', value: 78 },
];

