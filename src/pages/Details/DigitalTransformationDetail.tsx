import { useState } from 'react';
import { ArrowLeft, FileText, Clock, RotateCcw, CheckCircle2, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { cn } from '../../utils/cn';
import { Avatar } from '../../components/ui/Avatar';
import { leaders as dashboardLeaders } from '../Dashboard/mockData';

const metrics = [
    { icon: FileText, label: 'Total Evidence', value: 4, color: 'text-danger-strong', bg: 'bg-danger-soft' },
    { icon: Clock, label: 'Under Review Evidence', value: 3, color: 'text-warning-strong', bg: 'bg-warning-soft' },
    { icon: RotateCcw, label: 'In Progress Evidence', value: 2, color: 'text-danger-strong', bg: 'bg-danger-soft' },
    { icon: CheckCircle2, label: 'Completed Evidence', value: 1, color: 'text-danger-strong', bg: 'bg-danger-soft' },
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
                    <ArrowLeft size={18} className="text-sidebar" />
                    <h1 className="text-lg font-bold text-sidebar tracking-tight">Digital Transformation Strategic Planning</h1>
                </div>

                <div className="bg-white rounded-xl px-5 sm:px-10 py-6 sm:py-8 mb-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative">
                    <div className="flex-1">
                        <span className="bg-white text-slate-500 text-[12px] font-medium px-4 py-2 rounded-full border border-slate-200 mb-4 inline-flex items-center">
                            Strategic Planning
                        </span>
                        <h2 className="text-xl font-bold text-sidebar mb-2 tracking-tight">Digital Transformation Strategy</h2>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Develop comprehensive digital transformation strategies aligned with organizational goals and Saudi Vision 2030 objectives.
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
                        <button className="bg-sidebar text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-sidebar-hover transition-colors flex items-center gap-2">
                            <Send size={16} />
                            Submit Evidence
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-slate-100 flex items-center gap-4 sm:gap-5 min-w-0">
                            <div className={cn("p-3 rounded-xl", metric.bg)}>
                                <metric.icon size={24} className={metric.color} />
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                                <p className="text-sm text-slate-600">{metric.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex gap-2 mb-8 p-1.5 bg-surface-muted/50 w-fit rounded-xl border border-slate-100">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={cn(
                            "px-6 py-2.5 rounded-lg font-semibold transition-all",
                            activeTab === 'overview'
                                ? "bg-white text-sidebar shadow-sm"
                                : "text-slate-600 hover:text-sidebar"
                        )}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('evidence')}
                        className={cn(
                            "px-6 py-2.5 rounded-lg font-semibold transition-all",
                            activeTab === 'evidence'
                                ? "bg-white text-sidebar shadow-sm"
                                : "text-slate-600 hover:text-sidebar"
                        )}
                    >
                        Evidence
                    </button>
                </div>

                {activeTab === 'overview' ? (
                    <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-100">
                            <div className="space-y-4">
                                {contentItems.map((item, index) => (
                                    <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
                                        <div className="lg:col-span-3">
                                            <div className="h-full bg-slate-50 rounded-xl px-6 py-5 border border-slate-100 flex items-center">
                                                <p className="text-[16px] font-medium text-sidebar leading-tight">
                                                    {item.label}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-9">
                                            <div className="h-full bg-white rounded-xl px-6 py-5 border border-slate-100">
                                                <p className="text-[16px] font-medium text-sidebar leading-relaxed whitespace-pre-line">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-100">
                            <h3 className="text-base font-bold text-sidebar mb-6 tracking-tight">Leaders</h3>
                            <div className="flex flex-wrap gap-3">
                                {dashboardLeaders.slice(0, 2).map((leader) => (
                                    <div key={leader.id} className="bg-slate-50 rounded-xl border border-slate-100 px-3 py-2.5 flex items-center gap-3 w-full sm:w-[260px]">
                                        <Avatar src={leader.avatar} alt={leader.name} size="sm" />
                                        <div className="min-w-0">
                                            <p className="text-[13px] font-bold text-sidebar leading-tight truncate">{leader.name}</p>
                                            <p className="text-[12px] text-slate-400 font-medium truncate">{leader.perspective}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-4 sm:p-6">
                                <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                                    <div className="w-full overflow-x-auto">
                                        <table className="min-w-[920px] w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                {[
                                                    'Document Number',
                                                    'Document Name',
                                                    'Document Lead',
                                                    'Document Preparer',
                                                    'Date',
                                                    'Due Date',
                                                    'Status',
                                                ].map((label) => (
                                                    <th
                                                        key={label}
                                                        className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap"
                                                    >
                                                        <div className="inline-flex items-center gap-2">
                                                            <span>{label}</span>
                                                            <span className="text-sidebar-muted text-[12px] leading-none">⇅</span>
                                                        </div>
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {evidenceData.map((evidence) => (
                                                <tr key={evidence.id} className="border-t border-slate-100 hover:bg-slate-50">
                                                    <td className="px-6 py-5 text-sm font-medium text-sidebar whitespace-nowrap">{evidence.id}</td>
                                                    <td className="px-6 py-5 text-sm font-medium text-sidebar whitespace-nowrap">{evidence.name}</td>
                                                    <td className="px-6 py-5 text-sm text-slate-600 whitespace-nowrap">{evidence.lead}</td>
                                                    <td className="px-6 py-5 text-sm text-slate-600 whitespace-nowrap">{evidence.preparer}</td>
                                                    <td className="px-6 py-5 text-sm text-sidebar whitespace-nowrap">{evidence.date}</td>
                                                    <td className="px-6 py-5 text-sm text-sidebar whitespace-nowrap">{evidence.dueDate}</td>
                                                    <td className="px-6 py-5 whitespace-nowrap">
                                                        <span
                                                            className={cn(
                                                                "inline-flex px-4 py-2 text-xs font-medium rounded-full",
                                                                evidence.status === 'Approved'
                                                                    ? "bg-green-50 text-green-600"
                                                                    : "bg-yellow-50 text-yellow-600"
                                                            )}
                                                        >
                                                            {evidence.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                            <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                                <h3 className="text-base font-bold text-sidebar mb-8 tracking-tight">Comments</h3>
                                <div className="space-y-4 mb-6">
                                    {comments.map((comment) => (
                                        <div key={comment.id} className="bg-white rounded-xl border border-slate-100 p-5">
                                            <div className="flex items-center justify-between gap-4 mb-2">
                                                <div className="flex items-center gap-3 min-w-0">
                                            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 text-sm font-bold shrink-0">
                                                        {comment.initial}
                                                    </div>
                                                    <span className="font-bold text-sm text-sidebar truncate">{comment.user}</span>
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
                                    <Send size={16} />
                                    Post Comment
                                </button>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-100">
                                <h3 className="text-base font-bold text-sidebar mb-8 tracking-tight">Recent Activities</h3>
                                <div className="flex flex-col">
                                    {recentActivitiesData.map((activity, index) => (
                                        <div
                                            key={activity.id}
                                            className={cn(
                                                "flex items-start justify-between gap-4 py-5",
                                                index !== recentActivitiesData.length - 1 && "border-b border-slate-100"
                                            )}
                                        >
                                            <div className="flex items-start gap-4 min-w-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-danger-strong mt-2 shrink-0" />
                                                <p className="text-[13px] font-bold text-sidebar leading-relaxed min-w-0">
                                                    {activity.text}
                                                </p>
                                            </div>
                                            <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap">{activity.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    );
};