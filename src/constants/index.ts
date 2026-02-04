export const NAVIGATION = {
  DASHBOARD: 'Dashboard',
  PERSPECTIVES: 'Perspectives',
  TASKS: 'Tasks',
  DOCUMENTS: 'Documents',
  REPORTS: 'Reports',
  USERS_ROLES: 'Users & Roles',
} as const;

export const UI = {
  SEARCH_PLACEHOLDER: 'Search...',
  LOADING: 'Loading...',
  NO_DATA: 'No data available',
  ERROR: 'An error occurred',
} as const;

export const STATISTICS = {
  OVERALL_PROGRESS: 'Overall Progress',
  TOTAL_CRITERIA: 'Total Criteria',
  COMPLETED_CRITERIA: 'Completed Criteria',
  EVIDENCE_DOCUMENTS: 'Evidence Documents',
  EVIDENCE_COMPLETED: 'Evidence (Completed)',
  UPLOADED_TO_DGA: 'Uploaded To DGA',
} as const;

export const TIMELINE = {
  KICKOFF_WORKSHOP: 'Kickoff Workshop',
  DATA_COLLECTION: 'Data Collection',
  INITIAL_PHASE: 'Initial Phase',
  VERIFICATION: 'Verification',
  COMPLETION_REVIEWS: 'Completion Reviews',
  CYCLE_CONCLUSION: 'Cycle Conclusion',
} as const;

export const PROGRESS_CATEGORIES = {
  STRATEGY_PLANNING: 'Strategy And Planning',
  ORGANIZATION_CULTURE: 'Organization And Culture',
  OPERATIONS_EXECUTION: 'Operations And Execution',
  BUSINESS_CONTINUITY: 'Business Continuity',
  INFORMATION_TECHNOLOGY: 'Information Technology',
  COMPREHENSIVE_GOVERNANCE: 'Comprehensive Governance',
  CHANNELS_SERVICES: 'Channels And Services',
  BENEFICIARY_CENTRALIZATION: 'Beneficiary Centralization',
  GOVERNMENT_DATA: 'Government Data',
  RESEARCH_INNOVATION: 'Research And Innovation',
} as const;

export const PROGRESS_SUBCATEGORIES = {
  DIGITAL_TRANSFORMATION: 'Digital Transformation',
  DIGITAL_GOVERNANCE: 'Digital Governance',
  ENTERPRISE_ARCHITECTURE: 'Enterprise Architecture',
  DIGITAL_CULTURE_ENVIRONMENT: 'Digital Culture And Environment',
  LEADERSHIP_DEVELOPMENT: 'Leadership Development',
  SKILLS_CAPACITY_BUILDING: 'Skills & Capacity Building',
  BUSINESS_PROCESSES: 'Business Processes',
  RISK_MANAGEMENT: 'Risk Management',
  BUSINESS_CONTINUITY_SUB: 'Business Continuity',
  SUPPORT_SYSTEMS: 'Support Systems',
  IT_INFRASTRUCTURE: 'IT Infrastructure',
  CLOUD_INFRASTRUCTURE: 'Cloud Infrastructure',
  GOVERNANCE_PLATFORMS: 'Governance Platforms',
  SERVICE_QUALITY: 'Service Quality',
  DIGITAL_CHANNELS: 'Digital Channels',
  USER_ENGAGEMENT: 'User Engagement',
  USER_RELATIONSHIP: 'User Relationship',
  USER_EXPERIENCE: 'User Experience',
  DATA_GOVERNANCE: 'Data Governance',
  DATA_USAGE_AVAILABILITY: 'Data Usage & Availability',
  OPEN_DATA: 'Open Data',
  INNOVATION: 'Innovation',
  CREATIVE_SOLUTIONS: 'Creative Solutions',
} as const;

export const PERSPECTIVES = {
  STRATEGY: 'Strategy Perspective',
  BENEFICIARY: 'Beneficiary Perspective',
  IT: 'IT Perspective',
} as const;

export const CHART_LABELS = {
  COMPLIANCE_SCORE: 'Compliance Score',
  PERFORMANCE_OVER_TIME: 'Performance Over Time',
  MONTHLY_PERFORMANCE: 'Monthly Performance',
  SCORE: 'Score',
  MONTH: 'Month',
  AUDIT_READINESS: 'Audit Readiness',
  READINESS_LEVEL: 'Readiness Level',
  OVERDUE_STANDARDS: 'Overdue Stds',
  MISSING_EVIDENCE: 'Missing Evidence',
} as const;

export const ACTIVITY_TYPES = {
  DOCUMENT_UPLOADED: 'Document "{fileName}" Was Uploaded By {user}',
  TASK_ASSIGNED: 'Task "{taskName}" Was Assigned To {user}',
  CRITERION_CREATED: 'New Criterion "{criterionName}" Was Created By {user}',
} as const;

export const TIME_LABELS = {
  MINS_AGO: '{count} Mins Ago',
  HOURS_AGO: '{count} Hours Ago',
  DAYS_AGO: '{count} Days Ago',
  JUST_NOW: 'Just Now',
} as const;

export const STATUS_LABELS = {
  COMPLETED: 'Completed',
  IN_PROGRESS: 'In Progress',
  NOT_STARTED: 'Not Started',
  DELAYED: 'Delayed',
  PARTIALLY_UPLOADED: 'Partially Uploaded',
  FULLY_UPLOADED: 'Fully Uploaded',
} as const;

export const UI_ELEMENTS = {
  NOTIFICATIONS: 'Notifications',
  USER_MENU: 'User Menu',
  LOGOUT: 'Logout',
  SETTINGS: 'Settings',
  PROFILE: 'Profile',
} as const;

export const ACCESSIBILITY = {
  MENU_BUTTON: 'Toggle menu',
  NOTIFICATION_BUTTON: 'Notifications',
  USER_AVATAR: 'User avatar',
  SEARCH_INPUT: 'Search',
} as const;

export const ERRORS = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
} as const;

export const SUCCESS = {
  SAVE_SUCCESS: 'Changes saved successfully.',
  DELETE_SUCCESS: 'Item deleted successfully.',
  UPLOAD_SUCCESS: 'File uploaded successfully.',
} as const;