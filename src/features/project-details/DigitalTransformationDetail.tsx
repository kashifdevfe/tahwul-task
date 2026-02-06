import { useState } from 'react';
import { ArrowLeft02Icon, File01Icon, FileSearchIcon, FileExportIcon, FileValidationIcon, Sent02Icon } from 'hugeicons-react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { MetricCard, Tabs, UserCard, DataTable, StatusBadge, ActivityList } from '../../components/ui';
import { leaders as dashboardLeaders } from '../dashboard/data/mockData';

const metrics = [
    { icon: File01Icon, label: 'Total Evidence', value: 4 },
    { icon: FileSearchIcon, label: 'Under Review Evidence', value: 3 },
    { icon: FileExportIcon, label: 'In Progress Evidence', value: 2 },
    { icon: FileValidationIcon, label: 'Completed Evidence', value: 1 },
];

const contentItems = [
    { label: 'Objective', value: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030." },
    {
        label: 'Implementation Requirements',
        value: "Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:\nA. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.\nB. Strategic Initiatives, Programs, And Performance Indicators.\nC. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.\nD. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives."
    },
    { label: 'Evidence Documents', value: "Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months." },
    { label: 'Related Regulations', value: "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16)." },
    { label: 'Scope', value: "All Government Entities." },
];

const evidenceData = [
    { id: '5.4.1.1', name: 'Digital_Transformation_Plan.Pdf', lead: 'Ahmed Khaled', preparer: 'Ahmed Khaled', date: '2025-08-01', dueDate: '2025-08-01', status: 'Approved' },
    { id: '5.4.1.2', name: 'KPI_Framework.Xlsx', lead: 'Mona Hamed', preparer: 'Mona Hamed', date: '2025-08-01', dueDate: '2025-08-01', status: 'Pending Review' },
    { id: '5.4.1.3', name: 'Roadmap_Version1.Docx', lead: 'Rami AlSharif', preparer: 'Rami AlSharif', date: '2025-08-01', dueDate: '2025-08-01', status: 'Pending Review' },
];

const comments = [
    { id: 1, user: 'Sara Ibrahim', initial: 'E', date: '2025-08-05', text: 'Ensure The Plan Includes A Clear Governance Model.' },
    { id: 2, user: 'Mona Hamed', initial: 'M', date: '2025-08-05', text: 'Ensure The Plan Includes A Clear Governance Model.' },
];

const recentActivitiesData = [
    { id: 1, text: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif', time: '5 Mins Ago' },
    { id: 2, text: 'KPI_Framework.Xlsx Uploaded By Mona Hamed', time: '20 Mins Ago' },
    { id: 3, text: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team', time: '1 Hour Ago' },
];

export const DigitalTransformationDetail = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'overview' | 'evidence'>('overview');
    const completionPercent = 100;
    const [commentDraft, setCommentDraft] = useState('');

    return (
        <DashboardLayout>
            <div className="w-full animate-in fade-in duration-500 pb-12 p-4 sm:p-8">
                <div className="flex items-center gap-2 mb-8 group cursor-pointer" onClick={() => navigate('/')}>
                    <ArrowLeft02Icon size={18} color="var(--color-sidebar)" />
                    <h1 className="heading-bold text-sidebar">Digital Transformation Strategic Planning</h1>
                </div>

                <div className="bg-white rounded-xl px-5 sm:px-10 py-6 sm:py-8 mb-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative">
                    <div className="flex-1">
                        <span className="bg-white text-slate-500 text-[12px] font-medium px-4 py-2 rounded-full border border-slate-200 mb-4 inline-flex items-center">
                            Strategy & Planning
                        </span>
                        <h2 className="heading-bold text-sidebar mb-2">Digital Transformation Strategy</h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Develop comprehensive digital transformation strategies aligned with organizational goals.
                        </p>
                    </div>
                    <div className="flex items-center gap-6 sm:ml-6 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="relative w-[86px] h-[86px] shrink-0">
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: `conic-gradient(var(--color-success-strong) ${completionPercent * 3.6}deg, var(--color-surface-subtle) 0deg)`,
                                }}
                            />
                            <div className="absolute inset-[7px] rounded-full bg-white flex items-center justify-center">
                                <span className="text-sm font-black text-sidebar">{completionPercent}%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                    {metrics.map((metric, index) => (
                        <MetricCard
                            key={index}
                            icon={metric.icon}
                            label={metric.label}
                            value={metric.value}
                        />
                    ))}
                </div>

                <Tabs
                    tabs={[
                        { id: 'overview', label: 'Overview' },
                        { id: 'evidence', label: 'Evidence' }
                    ]}
                    activeTab={activeTab}
                    onChange={(tabId) => setActiveTab(tabId as 'overview' | 'evidence')}
                    className="mb-8"
                />

                {activeTab === 'overview' ? (
                    <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-100">
                            <div className="space-y-4">
                                {contentItems.map((item, index) => (
                                    <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                                        <div className="lg:col-span-3 flex">
                                            <div className="w-full bg-slate-50 rounded-xl px-6 py-5 border border-slate-100 flex items-start">
                                                <p className="text-normal text-sidebar leading-tight">
                                                    {item.label}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-9 flex">
                                            <div className="w-full bg-white rounded-xl px-6 py-5 border border-slate-100">
                                                <p className="text-normal text-sidebar leading-relaxed whitespace-pre-line">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-100">
                            <h3 className="heading-bold text-sidebar mb-6">Leaders</h3>
                            <div className="flex flex-wrap gap-3">
                                {dashboardLeaders.slice(0, 2).map((leader) => (
                                    <div key={leader.id} className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 w-full sm:w-[260px]">
                                        <UserCard
                                            name={leader.name}
                                            avatarUrl={leader.avatar}
                                            subtitle={leader.perspective}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-4 sm:p-6">
                                <DataTable
                                    columns={[
                                        { key: 'id', label: 'Document Number', sortable: true, className: 'font-normal text-sidebar' },
                                        { key: 'name', label: 'Document Name', sortable: true, className: 'font-normal text-sidebar' },
                                        { key: 'lead', label: 'Document Lead', sortable: true, className: 'font-normal' },
                                        { key: 'preparer', label: 'Document Preparer', sortable: true, className: 'font-normal' },
                                        { key: 'date', label: 'Date', sortable: true, className: 'text-sidebar font-normal' },
                                        { key: 'dueDate', label: 'Due Date', sortable: true, className: 'text-sidebar font-normal' },
                                        {
                                            key: 'status',
                                            label: 'Status',
                                            sortable: true,
                                            render: (value) => <StatusBadge status={String(value)} />
                                        },
                                    ]}
                                    data={evidenceData}
                                    keyExtractor={(row) => row.id}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                                <h3 className="heading-bold text-sidebar mb-8">Comments</h3>
                                <div className="space-y-4 mb-6">
                                    {comments.map((comment) => (
                                        <div key={comment.id} className="bg-white rounded-xl border border-slate-100 p-5">
                                            <div className="flex items-center justify-between gap-4 mb-2">
                                                <div className="flex items-center gap-3 min-w-0">
                                            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 text-sm font-bold shrink-0">
                                                        {comment.initial}
                                                    </div>
                                                    <span className="font-bold text-sm text-sidebar">{comment.user}</span>
                                                </div>
                                                <span className="text-xs text-slate-400 whitespace-nowrap">{comment.date}</span>
                                            </div>
                                            <p className="text-sm text-sidebar leading-relaxed">{comment.text}</p>
                                        </div>
                                    ))}
                                </div>

                                <textarea
                                    value={commentDraft}
                                    onChange={(e) => setCommentDraft(e.target.value)}
                                    placeholder=""
                                    className="w-full h-36 rounded-xl border border-slate-100 bg-white p-5 text-sm text-sidebar placeholder:text-slate-400 focus:outline-none focus:ring-0 resize-none"
                                />

                                <button
                                    type="button"
                                    className="mt-4 inline-flex items-center gap-2 bg-sidebar text-white px-6 py-3 rounded-xl font-semibold hover:bg-sidebar-hover transition-colors"
                                >
                                    <Sent02Icon size={16} />
                                    Post Comment
                                </button>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                                <h3 className="heading-bold text-sidebar mb-8">Recent Activities</h3>
                                <ActivityList activities={recentActivitiesData} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};