import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, FileText, Palette, Workflow, BarChart3, FolderOpen, Bell, User, ChevronDown, Edit, Eye, Rocket, Copy, TrendingUp, Clock, CheckCircle2, Circle, AlertCircle, Sparkles, Download, Plus, Send, ChevronRight, RefreshCw, Globe, CheckCircle, AlertTriangle, Save, ArrowRight, Lightbulb, Image as ImageIcon, Zap, Layers, Play, FileDown, Users, Target, GitBranch, Activity, Calendar, Package, TrendingDown, ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';
type CampaignStatus = 'complete' | 'in-progress' | 'pending';
type Campaign = {
  id: string;
  name: string;
  copyStatus: CampaignStatus;
  designStatus: CampaignStatus;
  progress: number;
  ctr?: number;
  cvr?: number;
  roi?: number;
};
type Insight = {
  id: string;
  type: 'brand' | 'social' | 'audience';
  title: string;
  description: string;
};
type TimelineStep = {
  id: string;
  name: string;
  status: CampaignStatus;
  progress?: number;
  completedTime?: string;
};
type CopyVariant = {
  id: string;
  channel: string;
  copy: string;
  predictedCTR?: number;
  sentiment: string;
  compliance: 'approved' | 'warning';
  complianceMessage?: string;
};
type DesignAsset = {
  id: string;
  channel: string;
  imageUrl: string;
  predictedCTR?: number;
  designMatch: number;
  trendMatch: number;
};
type ComplianceItem = {
  name: string;
  status: 'pass' | 'pending' | 'fail';
  message?: string;
};
type WorkflowAsset = {
  type: string;
  enVersion: string;
  frVersion: string;
  channel: string;
  status: 'approved' | 'pending';
};
type AudienceSegment = {
  name: string;
  assignedAssets: string;
  performance: number;
  aiSuggestion: string;
};
type JourneyStep = {
  day: number;
  asset: string;
  delay?: string;
};
type ABTest = {
  name: string;
  variantA: string;
  variantB: string;
  metrics: string;
};
type PerformanceMetric = {
  name: string;
  prediction: string;
  actual: string;
};
type KPIMetric = {
  name: string;
  en: string;
  frCa: string;
  trend: 'up' | 'down' | 'stable';
  trendValue: string;
};
type AssetPerformance = {
  assetType: string;
  variant: string;
  metric: string;
  score: string;
  performance: number;
  insight: string;
};
type SegmentAnalysis = {
  segment: string;
  ctr: number;
  cvr: number;
  bestAsset: string;
  aiSuggestion: string;
};
type TrendRecommendation = {
  id: string;
  insight: string;
  impact: string;
};
type CreativePlusDashboardProps = Record<string, never>;
const StatusIcon = ({
  status
}: {
  status: CampaignStatus;
}) => {
  if (status === 'complete') {
    return <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />;
  }
  if (status === 'in-progress') {
    return <Clock className="w-4 h-4 text-[#FDB913]" />;
  }
  return <Circle className="w-4 h-4 text-gray-300" />;
};
const ProgressBar = ({
  progress
}: {
  progress: number;
}) => {
  return <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
      <motion.div initial={{
      width: 0
    }} animate={{
      width: `${progress}%`
    }} transition={{
      duration: 1,
      ease: 'easeOut'
    }} className="h-full bg-gradient-to-r from-[#00A3E0] to-[#0055A5] rounded-full" />
    </div>;
};

// @component: CreativePlusDashboard
export const CreativePlusDashboard = (_props: CreativePlusDashboardProps) => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [language, setLanguage] = useState<'EN' | 'FR-CA' | 'Both'>('Both');
  const [dateRange, setDateRange] = useState<'7days' | '30days' | 'custom'>('7days');
  const [campaigns] = useState<Campaign[]>([{
    id: '1',
    name: 'Sail into 2025',
    copyStatus: 'complete',
    designStatus: 'in-progress',
    progress: 70,
    ctr: 8.5,
    cvr: 4.3
  }, {
    id: '2',
    name: 'Caribbean Escape',
    copyStatus: 'pending',
    designStatus: 'pending',
    progress: 0
  }, {
    id: '3',
    name: 'Alaska Adventure',
    copyStatus: 'complete',
    designStatus: 'complete',
    progress: 100,
    ctr: 7.2,
    cvr: 3.8
  }, {
    id: '4',
    name: 'Holiday Glow 2025',
    copyStatus: 'complete',
    designStatus: 'in-progress',
    progress: 75,
    ctr: 8.4,
    roi: 15
  }]);
  const [kpiMetrics] = useState<KPIMetric[]>([{
    name: 'Open Rate (Email)',
    en: '34%',
    frCa: '30%',
    trend: 'up',
    trendValue: '+5% vs last campaign'
  }, {
    name: 'Click-Through Rate (CTR)',
    en: '8.5%',
    frCa: '7.8%',
    trend: 'up',
    trendValue: '+2%'
  }, {
    name: 'Conversion Rate (CVR)',
    en: '4.3%',
    frCa: '3.9%',
    trend: 'stable',
    trendValue: 'Stable'
  }, {
    name: 'Instagram Engagement',
    en: '12.1%',
    frCa: '11.5%',
    trend: 'up',
    trendValue: '+3%'
  }, {
    name: 'Push Notification CTR',
    en: '6.8%',
    frCa: '6.5%',
    trend: 'up',
    trendValue: '+1%'
  }]);
  const [assetPerformance] = useState<AssetPerformance[]>([{
    assetType: 'Email Subject Line',
    variant: '#1 "Book Your Dream Cruise Today!"',
    metric: 'CTR 8.9%',
    score: '95%',
    performance: 95,
    insight: 'Use similar phrasing in next campaign'
  }, {
    assetType: 'Instagram Ad',
    variant: 'Tropical Beach Image',
    metric: 'Engagement 12.5%',
    score: '92%',
    performance: 92,
    insight: 'Leverage tropical beach motif again'
  }, {
    assetType: 'Push Notification',
    variant: '#1 "Your dream cruise awaits!"',
    metric: 'CVR 4.1%',
    score: '90%',
    performance: 90,
    insight: 'Consider repeating emoji-first CTA'
  }]);
  const [segmentAnalysis] = useState<SegmentAnalysis[]>([{
    segment: 'Loyalty Members',
    ctr: 9.2,
    cvr: 5.1,
    bestAsset: 'Email Variant A',
    aiSuggestion: 'Send early for high-value repeat cruisers'
  }, {
    segment: 'New Customers',
    ctr: 8.0,
    cvr: 3.5,
    bestAsset: 'Instagram Ad #2',
    aiSuggestion: 'Test social-first approach next campaign'
  }, {
    segment: 'Canadian FR-CA',
    ctr: 7.8,
    cvr: 3.9,
    bestAsset: 'Localized Email',
    aiSuggestion: 'Refine localized copy for higher engagement'
  }]);
  const [trendRecommendations] = useState<TrendRecommendation[]>([{
    id: '1',
    insight: 'Subject lines containing "Escape" had 15% higher CTR across U.S. email campaigns.',
    impact: '+15% CTR'
  }, {
    id: '2',
    insight: 'Instagram posts featuring cruise deck lifestyle images performed 12% better than generic destination images.',
    impact: '+12% Engagement'
  }, {
    id: '3',
    insight: 'French-localized emails to FR-CA audience achieved higher engagement when text was concise (<45 characters for subject lines).',
    impact: '+8% Open Rate'
  }]);
  const [insights] = useState<Insight[]>([{
    id: '1',
    type: 'brand',
    title: 'Previous Campaign Performance',
    description: "Previous 'Caribbean Escape' campaign saw a 12% higher CTR with visuals featuring beaches at sunset. Consider using similar imagery."
  }, {
    id: '2',
    type: 'brand',
    title: 'Subject Line Insights',
    description: "Best performing subject lines: 'Save Big on Your 2025 Cruise' — subject lines with emojis resulted in 15% higher open rates."
  }, {
    id: '3',
    type: 'social',
    title: 'Trending Hashtags',
    description: '#TropicalEscape and #CruiseGoals are trending on Instagram with 30% engagement uplift this week.'
  }, {
    id: '4',
    type: 'social',
    title: 'TikTok Trends',
    description: "TikTok cruise influencers seeing 25% uptick with 'exclusive offer' language — test in push notifications."
  }, {
    id: '5',
    type: 'audience',
    title: 'Loyalty Member Insights',
    description: 'Loyalty members have 20% higher conversion rate with exclusive offers. Send them early bird discounts first.'
  }]);
  const [timeline] = useState<TimelineStep[]>([{
    id: '1',
    name: 'Copy Generation',
    status: 'complete',
    completedTime: '2 hours ago'
  }, {
    id: '2',
    name: 'Design Finalization',
    status: 'in-progress',
    progress: 60
  }, {
    id: '3',
    name: 'Localization (FR-CA)',
    status: 'complete',
    completedTime: '1 hour ago'
  }, {
    id: '4',
    name: 'A/B Testing Setup',
    status: 'pending'
  }, {
    id: '5',
    name: 'Approval Process',
    status: 'pending'
  }]);
  const [copyVariants] = useState<CopyVariant[]>([{
    id: '1',
    channel: 'Email',
    copy: '🌴 Escape to Paradise — Book Your Dream Caribbean Cruise Today!',
    predictedCTR: 8.4,
    sentiment: 'Positive',
    compliance: 'approved'
  }, {
    id: '2',
    channel: 'Instagram',
    copy: 'Your tropical adventure awaits 🌞. Book now and save!',
    predictedCTR: 7.9,
    sentiment: 'Positive',
    compliance: 'warning',
    complianceMessage: 'Needs T&Cs'
  }, {
    id: '3',
    channel: 'Email FR-CA',
    copy: 'Évadez-vous vers le paradis 🌴 Réservez votre croisière de rêve aujourd\'hui!',
    sentiment: 'Positive',
    compliance: 'approved'
  }]);
  const [copyInsights] = useState<Insight[]>([{
    id: '1',
    type: 'brand',
    title: 'Last Year\'s Caribbean Campaign',
    description: 'Last year\'s Caribbean Escape campaign saw a +20% engagement with "exclusive offer" messaging.'
  }, {
    id: '2',
    type: 'brand',
    title: 'Subject Line Performance',
    description: 'Emails with subject line like "Book Your Dream Cruise Now and Save 20%" generated a 25% higher conversion rate.'
  }, {
    id: '3',
    type: 'social',
    title: '#CruiseGoals Trending',
    description: '#CruiseGoals is trending on Instagram with 30% higher engagement on posts using beach visuals and personal experiences.'
  }, {
    id: '4',
    type: 'social',
    title: 'TikTok Short Captions',
    description: 'TikTok trends are favoring short, relatable captions with emojis — focus on "book today" language and "escape winter" phrases.'
  }, {
    id: '5',
    type: 'audience',
    title: 'Compliance Alert',
    description: 'Ensure "Save 20%" is paired with terms & conditions in the body copy. Avoid discount-only language.'
  }]);
  const [designInsights] = useState<Insight[]>([{
    id: '1',
    type: 'brand',
    title: 'Tropical Beach Performance',
    description: 'Images with tropical beaches and sunset tones had a +18% CTR last year for similar campaigns.'
  }, {
    id: '2',
    type: 'brand',
    title: 'Instagram Ad Colors',
    description: 'Instagram ads with bright, saturated images outperform those with muted tones by 15%.'
  }, {
    id: '3',
    type: 'social',
    title: '#CruiseGoals Trending',
    description: '#CruiseGoals is trending on Instagram, with +25% engagement this week.'
  }, {
    id: '4',
    type: 'social',
    title: 'TikTok Deck Views',
    description: 'TikTok influencers with videos showing cruise ship deck views generated +30% higher interactions.'
  }, {
    id: '5',
    type: 'audience',
    title: 'FR-CA Visual Preferences',
    description: 'FR-CA audiences respond better to cooler tones, like icy blues and snow-capped mountains for Alaska cruises.'
  }]);
  const [designAssets] = useState<DesignAsset[]>([{
    id: '1',
    channel: 'Email',
    imageUrl: '🏖️',
    predictedCTR: 9.1,
    designMatch: 97,
    trendMatch: 92
  }, {
    id: '2',
    channel: 'Instagram',
    imageUrl: '🚢',
    predictedCTR: 8.3,
    designMatch: 95,
    trendMatch: 90
  }, {
    id: '3',
    channel: 'Push Notification',
    imageUrl: '🏝️',
    predictedCTR: 8.7,
    designMatch: 94,
    trendMatch: 88
  }, {
    id: '4',
    channel: 'FR-CA Email',
    imageUrl: '🌴',
    designMatch: 90,
    trendMatch: 85
  }]);
  const [complianceItems] = useState<ComplianceItem[]>([{
    name: 'Brand Consistency',
    status: 'pass'
  }, {
    name: 'Legal Compliance (T&Cs)',
    status: 'pending',
    message: 'Review Legal Disclaimer'
  }, {
    name: 'Text Overlay Fit',
    status: 'pass'
  }]);
  const [workflowAssets] = useState<WorkflowAsset[]>([{
    type: 'Email Hero',
    enVersion: '🖼️ Tropical beach view',
    frVersion: '🖼️ Same image with French text overlay',
    channel: 'Email',
    status: 'approved'
  }, {
    type: 'Instagram Ad',
    enVersion: '🖼️ Ship deck view',
    frVersion: '🖼️ Same image, French text',
    channel: 'Instagram',
    status: 'approved'
  }, {
    type: 'Push Notification',
    enVersion: 'Your dream cruise awaits!',
    frVersion: 'Votre croisière de rêve vous attend!',
    channel: 'Push',
    status: 'approved'
  }]);
  const [audienceSegments] = useState<AudienceSegment[]>([{
    name: 'Loyalty Members',
    assignedAssets: 'Email Variant A + Push Notification',
    performance: 9.1,
    aiSuggestion: 'Test sending earlier with exclusive deals.'
  }, {
    name: 'New Customers',
    assignedAssets: 'Instagram Ad + Email Variant B',
    performance: 8.2,
    aiSuggestion: 'Try using #TropicalEscape hashtag for higher reach.'
  }, {
    name: 'Canadian FR-CA',
    assignedAssets: 'Localized Email + Ad',
    performance: 7.5,
    aiSuggestion: 'Send them offers with Alaska as the destination.'
  }]);
  const [journeySteps] = useState<JourneyStep[]>([{
    day: 0,
    asset: 'Email Variant A (EN)'
  }, {
    day: 1,
    asset: 'Push Notification "Your dream cruise awaits!"',
    delay: '24h'
  }, {
    day: 3,
    asset: 'Instagram Ad Carousel #TropicalEscape',
    delay: '2 days'
  }, {
    day: 7,
    asset: 'Follow-up Email: Special Offers',
    delay: '5 days'
  }]);
  const [abTests] = useState<ABTest[]>([{
    name: 'Email Subject Test',
    variantA: 'Book Your Dream Cruise Today!',
    variantB: 'Your Perfect Cruise Awaits — Book Now!',
    metrics: 'Open Rate, CTR'
  }, {
    name: 'Instagram Ad Visual',
    variantA: 'Ship deck image',
    variantB: 'Tropical island beach image',
    metrics: 'Engagement, CTR'
  }, {
    name: 'Push Notification CTA',
    variantA: 'Book Now',
    variantB: 'Escape Today',
    metrics: 'Conversion Rate'
  }]);
  const [performanceMetrics] = useState<PerformanceMetric[]>([{
    name: 'CTR (Click-Through Rate)',
    prediction: '9.1%',
    actual: '—'
  }, {
    name: 'Conversion Rate (CVR)',
    prediction: '4.3%',
    actual: '—'
  }, {
    name: 'ROAS (Return on Ad Spend)',
    prediction: '+15%',
    actual: '—'
  }]);
  const navItems = [{
    name: 'Dashboard',
    icon: LayoutDashboard
  }, {
    name: 'Copy Studio',
    icon: FileText
  }, {
    name: 'Design Studio',
    icon: Palette
  }, {
    name: 'Workflow',
    icon: Workflow
  }, {
    name: 'Insights',
    icon: BarChart3
  }, {
    name: 'Assets',
    icon: FolderOpen
  }];
  const renderDashboard = () => <div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Campaign Dashboard</h2>
        <p className="text-gray-600">
          Manage your campaigns, track performance, and get AI-powered insights
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <h3 className="text-xl font-bold text-gray-900">Campaign Overview</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Campaign Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Progress
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Performance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {campaigns.map((campaign, index) => <motion.tr key={campaign.id} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1
                }} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="font-semibold text-gray-900">{campaign.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <StatusIcon status={campaign.copyStatus} />
                            <span className="text-sm text-gray-600">Copy</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <StatusIcon status={campaign.designStatus} />
                            <span className="text-sm text-gray-600">Design</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          <ProgressBar progress={campaign.progress} />
                          <span className="text-xs text-gray-500">{campaign.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1 text-sm">
                          {campaign.ctr && <div className="text-gray-700">
                              CTR: <span className="font-semibold">{campaign.ctr}%</span>
                            </div>}
                          {campaign.cvr && <div className="text-gray-700">
                              CVR: <span className="font-semibold">{campaign.cvr}%</span>
                            </div>}
                          {campaign.roi && <div className="text-green-600 font-semibold">ROI: +{campaign.roi}%</div>}
                          {!campaign.ctr && !campaign.cvr && !campaign.roi && <span className="text-gray-400">—</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors">
                            <Edit className="w-4 h-4" />
                          </motion.button>
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </motion.button>
                          {campaign.progress === 100 && <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                              <Rocket className="w-4 h-4" />
                            </motion.button>}
                          {campaign.progress > 0 && campaign.progress < 100 && <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                              <Copy className="w-4 h-4" />
                            </motion.button>}
                        </div>
                      </td>
                    </motion.tr>)}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <h3 className="text-xl font-bold text-gray-900">Campaign Timeline</h3>
              <p className="text-sm text-gray-600 mt-1">Sail into 2025 Campaign Progress</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {timeline.map((step, index) => <motion.div key={step.id} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="relative pl-8 pb-4 last:pb-0">
                    {index < timeline.length - 1 && <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gray-200" />}

                    <div className="flex items-start space-x-4">
                      <div className={`absolute left-0 w-4 h-4 rounded-full border-2 ${step.status === 'complete' ? 'bg-[#00A3E0] border-[#00A3E0]' : step.status === 'in-progress' ? 'bg-[#FDB913] border-[#FDB913]' : 'bg-white border-gray-300'}`} />

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">{step.name}</h4>
                            {step.completedTime && <p className="text-xs text-gray-500 mt-0.5">
                                Completed {step.completedTime}
                              </p>}
                          </div>

                          {step.status === 'complete' && <CheckCircle2 className="w-5 h-5 text-[#00A3E0]" />}
                          {step.status === 'in-progress' && <Clock className="w-5 h-5 text-[#FDB913]" />}
                        </div>

                        {step.status === 'in-progress' && step.progress !== undefined && <div className="mt-2">
                            <ProgressBar progress={step.progress} />
                            <span className="text-xs text-gray-500 mt-1 block">
                              {step.progress}% Complete
                            </span>
                          </div>}
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <h3 className="text-xl font-bold text-gray-900">Real-Time Performance</h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                <motion.div whileHover={{
                scale: 1.05
              }} className="bg-gradient-to-br from-[#00A3E0]/10 to-[#0055A5]/10 rounded-lg p-6 border border-[#00A3E0]/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">CTR</span>
                    <TrendingUp className="w-5 h-5 text-[#00A3E0]" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">8.5%</div>
                  <p className="text-xs text-gray-500 mt-2">Last 24h: 1.2M emails opened</p>
                </motion.div>

                <motion.div whileHover={{
                scale: 1.05
              }} className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">CVR</span>
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">4.3%</div>
                  <p className="text-xs text-gray-500 mt-2">3% higher than last year</p>
                </motion.div>

                <motion.div whileHover={{
                scale: 1.05
              }} className="bg-gradient-to-br from-[#FDB913]/10 to-[#FDB913]/20 rounded-lg p-6 border border-[#FDB913]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Top Asset</span>
                    <Sparkles className="w-5 h-5 text-[#FDB913]" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">Variant A</div>
                  <p className="text-xs text-gray-500 mt-2">15% better than Variant B</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.1
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#00A3E0]" />
                <h3 className="text-xl font-bold text-gray-900">AI Insights</h3>
              </div>
            </div>

            <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto">
              {insights.map((insight, index) => <motion.div key={insight.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              scale: 1.02
            }} className={`p-4 rounded-lg border transition-all cursor-pointer ${insight.type === 'brand' ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50' : insight.type === 'social' ? 'bg-purple-50/50 border-purple-200 hover:bg-purple-50' : 'bg-green-50/50 border-green-200 hover:bg-green-50'}`}>
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${insight.type === 'brand' ? 'bg-blue-100' : insight.type === 'social' ? 'bg-purple-100' : 'bg-green-100'}`}>
                      {insight.type === 'brand' && <TrendingUp className={`w-4 h-4 ${insight.type === 'brand' ? 'text-blue-600' : insight.type === 'social' ? 'text-purple-600' : 'text-green-600'}`} />}
                      {insight.type === 'social' && <Sparkles className={`w-4 h-4 ${insight.type === 'social' ? 'text-purple-600' : 'text-blue-600'}`} />}
                      {insight.type === 'audience' && <User className="w-4 h-4 text-green-600" />}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {insight.description}
                      </p>
                      <motion.button whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} className="mt-3 text-xs font-medium text-[#0055A5] hover:text-[#00A3E0] transition-colors">
                        Apply to Campaign →
                      </motion.button>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }} className="bg-gradient-to-br from-[#0055A5] to-[#00A3E0] rounded-xl shadow-lg p-6 text-white">
            <AlertCircle className="w-8 h-8 mb-3 opacity-90" />
            <h3 className="text-lg font-bold mb-2">Pending Approvals</h3>
            <p className="text-sm opacity-90 mb-4">
              You have 3 items waiting for review and approval
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="w-full bg-white text-[#0055A5] font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
              Review Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.4
    }} className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#00A3E0]/10 to-[#0055A5]/10 hover:from-[#00A3E0]/20 hover:to-[#0055A5]/20 rounded-lg border border-[#00A3E0]/20 transition-all">
            <Download className="w-6 h-6 text-[#0055A5] mb-2" />
            <span className="text-sm font-medium text-gray-900">Generate Report</span>
          </motion.button>

          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 rounded-lg border border-green-200 transition-all">
            <Plus className="w-6 h-6 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">New Campaign</span>
          </motion.button>

          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200/50 rounded-lg border border-purple-200 transition-all">
            <Send className="w-6 h-6 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Send Update</span>
          </motion.button>

          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FDB913]/10 to-[#FDB913]/20 hover:from-[#FDB913]/20 hover:to-[#FDB913]/30 rounded-lg border border-[#FDB913]/30 transition-all">
            <FileText className="w-6 h-6 text-[#FDB913] mb-2" />
            <span className="text-sm font-medium text-gray-900">Create Copy</span>
          </motion.button>

          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-pink-100/50 hover:from-pink-100 hover:to-pink-200/50 rounded-lg border border-pink-200 transition-all">
            <Palette className="w-6 h-6 text-pink-600 mb-2" />
            <span className="text-sm font-medium text-gray-900">Create Asset</span>
          </motion.button>
        </div>
      </motion.div>
    </div>;
  const renderCopyStudio = () => <div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Sail into 2025</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#0055A5] font-medium">Copy Studio</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Copy Studio</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Campaign: Sail into 2025</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Status:</span>
                <div className="flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                  <span className="text-sm text-gray-600">Copy</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-[#FDB913]" />
                  <span className="text-sm text-gray-600">Design</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Circle className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-600">Workflow</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setLanguage('EN')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'EN' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                🇺🇸 EN
              </button>
              <button onClick={() => setLanguage('FR-CA')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'FR-CA' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                🇨🇦 FR-CA
              </button>
            </div>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
              <ArrowRight className="w-4 h-4" />
              <span>Move to Design Studio</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.1
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Campaign Brief</h3>
              <motion.button whileHover={{
              scale: 1.1,
              rotate: 90
            }} whileTap={{
              scale: 0.9
            }} className="p-1 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded transition-colors">
                <RefreshCw className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Objective</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Promote early bird discounts for Caribbean & Alaska cruises for 2025.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Message</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Book early and save! Explore the best of the Caribbean and Alaska with Norwegian.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Tone</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                  Fun
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                  Adventurous
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                  Inspiring
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Target Audience</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Repeat customers (Loyalty Members), new customers, potential cruisers in the U.S. and Canada.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Channels</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  Email
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  Push Notifications
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  Social Ads
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Localization</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Canadian French for FR-CA audience
              </p>
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh from Workfront</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <h3 className="text-lg font-bold text-gray-900">AI Copy Generation</h3>
            </div>

            <div className="p-6">
              <div className="bg-gradient-to-br from-[#00A3E0]/5 to-[#0055A5]/5 rounded-lg p-4 mb-6 border border-[#00A3E0]/20">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-5 h-5 text-[#FDB913] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">AI Prompt</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Generate 3 email subject lines and 2 Instagram ad captions. Use adventurous language 
                      to evoke excitement. Ensure "Book Today" phrase is included. Use emoji-first subject 
                      line for higher engagement. Suggest using #TropicalEscape for social.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-semibold text-gray-700 mb-4">Generated Copy Variants</h4>

              <div className="space-y-4">
                {copyVariants.map((variant, index) => <motion.div key={variant.id} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1 * index
              }} className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-[#00A3E0]/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-[#00A3E0]/10 text-[#0055A5] text-xs font-semibold rounded">
                            #{variant.id}
                          </span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded">
                            {variant.channel}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 font-medium leading-relaxed mb-3">
                          {variant.copy}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {variant.predictedCTR && <div className="bg-white rounded p-2 border border-gray-200">
                          <span className="text-xs text-gray-500">Predicted CTR</span>
                          <div className="text-sm font-bold text-gray-900">{variant.predictedCTR}%</div>
                        </div>}
                      <div className="bg-white rounded p-2 border border-gray-200">
                        <span className="text-xs text-gray-500">Sentiment</span>
                        <div className="text-sm font-bold text-gray-900">{variant.sentiment}</div>
                      </div>
                      <div className="bg-white rounded p-2 border border-gray-200">
                        <span className="text-xs text-gray-500">Compliance</span>
                        <div className="flex items-center space-x-1">
                          {variant.compliance === 'approved' ? <CheckCircle className="w-4 h-4 text-green-600" /> : <AlertTriangle className="w-4 h-4 text-yellow-600" />}
                          <span className="text-xs font-medium text-gray-900">
                            {variant.compliance === 'approved' ? 'Legal' : variant.complianceMessage}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <motion.button whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 hover:text-[#0055A5] font-medium rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </motion.button>
                      <motion.button whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow hover:shadow-md transition-all">
                        <CheckCircle className="w-4 h-4" />
                        <span>Approve</span>
                      </motion.button>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Localization & Translation</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-blue-700">🇺🇸 EN Variant</span>
                  </div>
                  <p className="text-sm text-gray-900 font-medium">
                    Escape to Paradise 🌞 — Book Your Dream Caribbean Cruise Today!
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-purple-700">🇨🇦 FR-CA Variant</span>
                  </div>
                  <p className="text-sm text-gray-900 font-medium">
                    Évadez-vous vers le paradis 🌴 Réservez votre croisière de rêve aujourd'hui!
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-2">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-lg transition-all">
                  <Globe className="w-4 h-4" />
                  <span>Auto-Generate Localized Copy</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-purple-300 hover:border-purple-400 text-purple-700 font-medium rounded-lg transition-all">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.1
      }} className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#00A3E0]" />
                <h3 className="text-lg font-bold text-gray-900">AI Insights</h3>
              </div>
            </div>

            <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto">
              {copyInsights.map((insight, index) => <motion.div key={insight.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              scale: 1.02
            }} className={`p-3 rounded-lg border transition-all cursor-pointer ${insight.type === 'brand' ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50' : insight.type === 'social' ? 'bg-purple-50/50 border-purple-200 hover:bg-purple-50' : 'bg-orange-50/50 border-orange-200 hover:bg-orange-50'}`}>
                  <h4 className="font-semibold text-gray-900 text-xs mb-1">{insight.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{insight.description}</p>
                  <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="mt-2 text-xs font-medium text-[#0055A5] hover:text-[#00A3E0] transition-colors">
                    Apply Insight →
                  </motion.button>
                </motion.div>)}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
            <CheckCircle className="w-8 h-8 mb-3 opacity-90" />
            <h3 className="text-lg font-bold mb-2">Compliance Check</h3>
            <p className="text-sm opacity-90 mb-4">
              All copy variants comply with brand guidelines and legal requirements.
            </p>
            <div className="space-y-2">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-full flex items-center justify-center space-x-2 bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                <ArrowRight className="w-4 h-4" />
                <span>Send to Design Studio</span>
              </motion.button>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-full flex items-center justify-center space-x-2 bg-white/20 text-white font-medium py-2 px-4 rounded-lg hover:bg-white/30 transition-colors">
                <Save className="w-4 h-4" />
                <span>Save Draft</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
  const renderDesignStudio = () => <div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Sail into 2025</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#0055A5] font-medium">Design Studio</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Design Studio</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Campaign: Sail into 2025</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Status:</span>
                <div className="flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                  <span className="text-sm text-gray-600">Copy</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-[#FDB913]" />
                  <span className="text-sm text-gray-600">Design</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Circle className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-600">Workflow</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setLanguage('EN')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'EN' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                🇺🇸 EN
              </button>
              <button onClick={() => setLanguage('FR-CA')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'FR-CA' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                🇨🇦 FR-CA
              </button>
            </div>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
              <ArrowRight className="w-4 h-4" />
              <span>Move to Workflow Center</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.1
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Design Brief</h3>
              <motion.button whileHover={{
              scale: 1.1,
              rotate: 90
            }} whileTap={{
              scale: 0.9
            }} className="p-1 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded transition-colors">
                <RefreshCw className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Objective</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Promote early bird discounts for Caribbean & Alaska cruises for 2025.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Visual Goals</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Showcase tropical beach vibes and stunning ship amenities.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Copy</h4>
              <p className="text-sm text-gray-700 leading-relaxed italic">
                "Escape to Paradise — Book Your Dream Caribbean Cruise Today!"
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Tone & Palette</h4>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded">
                    Fun
                  </span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                    Adventurous
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded bg-[#FDB913] border-2 border-gray-200" title="Golden Yellow" />
                  <div className="w-8 h-8 rounded bg-[#00A3E0] border-2 border-gray-200" title="Sky Blue" />
                  <div className="w-8 h-8 rounded bg-[#0055A5] border-2 border-gray-200" title="Deep Blue" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Assets Needed</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  Email Hero
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  Instagram Ad
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  Facebook Banner
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  Push Notification
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Localization</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ensure FR-CA design is available for French-speaking markets.
              </p>
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh from Workfront</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <h3 className="text-lg font-bold text-gray-900">AI Design Prompt Composer</h3>
            </div>

            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Caribbean Cruise Design Prompt</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Generate 3 hero images with a tropical beach view, golden hues, and people relaxing on the beach. 
                        Ensure a relaxing, escape-focused theme. Text overlay: "Book Your Dream Cruise Today!" Use 
                        #CruiseGoals for Instagram.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Alaska Cruise Design Prompt</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Generate 3 hero images with snowy mountains and the cruise ship deck. Use cool tones (icy blues), 
                        focus on the adventure theme. Text overlay: "Your Alaskan Adventure Starts Here."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
                <Sparkles className="w-5 h-5" />
                <span>Generate Design Variants</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <h3 className="text-lg font-bold text-gray-900">Design Variant Gallery</h3>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 gap-4">
                {designAssets.map((asset, index) => <motion.div key={asset.id} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.1 * index
              }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200 hover:border-[#00A3E0]/30 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#00A3E0]/20 to-[#0055A5]/20 rounded-lg flex items-center justify-center text-6xl border-2 border-dashed border-[#00A3E0]/30">
                        {asset.imageUrl}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-2 py-1 bg-[#00A3E0]/10 text-[#0055A5] text-xs font-semibold rounded">
                            #{asset.id}
                          </span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded">
                            {asset.channel}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {asset.predictedCTR && <div className="bg-white rounded p-2 border border-gray-200">
                              <span className="text-xs text-gray-500">Predicted CTR</span>
                              <div className="text-sm font-bold text-gray-900">{asset.predictedCTR}%</div>
                            </div>}
                          <div className="bg-white rounded p-2 border border-gray-200">
                            <span className="text-xs text-gray-500">Design Match</span>
                            <div className="text-sm font-bold text-[#00A3E0]">{asset.designMatch}%</div>
                          </div>
                          <div className="bg-white rounded p-2 border border-gray-200">
                            <span className="text-xs text-gray-500">Trend Match</span>
                            <div className="text-sm font-bold text-purple-600">{asset.trendMatch}%</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 hover:text-[#0055A5] font-medium rounded-lg transition-all text-sm">
                            <Edit className="w-4 h-4" />
                            <span>Edit</span>
                          </motion.button>
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="flex items-center justify-center space-x-2 px-3 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 hover:text-[#0055A5] font-medium rounded-lg transition-all text-sm">
                            <Download className="w-4 h-4" />
                          </motion.button>
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow hover:shadow-md transition-all text-sm">
                            <CheckCircle className="w-4 h-4" />
                            <span>Approve</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Localization & Translation</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-700">🇺🇸 EN Design</span>
                  </div>
                  <div className="w-full h-32 bg-gradient-to-br from-[#00A3E0]/20 to-[#0055A5]/20 rounded flex items-center justify-center text-4xl border-2 border-dashed border-blue-300">
                    🏖️
                  </div>
                  <p className="text-xs text-gray-700 mt-2 font-medium">
                    Book Your Dream Cruise Today!
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-purple-700">🇨🇦 FR-CA Design</span>
                  </div>
                  <div className="w-full h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded flex items-center justify-center text-4xl border-2 border-dashed border-purple-300">
                    🌴
                  </div>
                  <p className="text-xs text-gray-700 mt-2 font-medium">
                    Réservez votre croisière de rêve aujourd'hui!
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-lg transition-all">
                  <Globe className="w-4 h-4" />
                  <span>Generate Localized Visuals</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-purple-300 hover:border-purple-400 text-purple-700 font-medium rounded-lg transition-all">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.1
      }} className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#00A3E0]" />
                <h3 className="text-lg font-bold text-gray-900">AI Insights</h3>
              </div>
            </div>

            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
              {designInsights.map((insight, index) => <motion.div key={insight.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              scale: 1.02
            }} className={`p-3 rounded-lg border transition-all cursor-pointer ${insight.type === 'brand' ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50' : insight.type === 'social' ? 'bg-purple-50/50 border-purple-200 hover:bg-purple-50' : 'bg-green-50/50 border-green-200 hover:bg-green-50'}`}>
                  <h4 className="font-semibold text-gray-900 text-xs mb-1">{insight.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{insight.description}</p>
                  <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="mt-2 text-xs font-medium text-[#0055A5] hover:text-[#00A3E0] transition-colors">
                    Apply Insight →
                  </motion.button>
                </motion.div>)}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <div className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#0055A5]" />
                <h3 className="text-lg font-bold text-gray-900">Compliance & Approval</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-3 mb-6">
                {complianceItems.map((item, idx) => <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    <div className="flex items-center space-x-2">
                      {item.status === 'pass' && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {item.status === 'pending' && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                      {item.status === 'fail' && <AlertCircle className="w-5 h-5 text-red-600" />}
                      {item.message && <span className="text-xs text-gray-600">{item.message}</span>}
                    </div>
                  </div>)}
              </div>

              <div className="space-y-2">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-semibold rounded-lg transition-colors">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Send for Legal Approval</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
                  <ArrowRight className="w-4 h-4" />
                  <span>Approve & Send to Workflow</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors">
                  <Save className="w-4 h-4" />
                  <span>Save Draft</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
  const renderWorkflow = () => <div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Sail into 2025</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#0055A5] font-medium">Workflow Center</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Workflow Center</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Campaign: Sail into 2025</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Status:</span>
                <div className="flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                  <span className="text-sm text-gray-600">Copy</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                  <span className="text-sm text-gray-600">Design</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Circle className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-600">Workflow</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Launch: Nov 22, 2025</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setLanguage('EN')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'EN' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                🇺🇸 EN
              </button>
              <button onClick={() => setLanguage('FR-CA')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'FR-CA' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                🇨🇦 FR-CA
              </button>
            </div>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg shadow-md transition-all">
              <Play className="w-4 h-4" />
              <span>Simulate Journey</span>
            </motion.button>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
              <Rocket className="w-4 h-4" />
              <span>Launch Campaign</span>
            </motion.button>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-all">
              <FileDown className="w-4 h-4" />
              <span>Export Summary</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Campaign Assets Overview</h3>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
                <Package className="w-4 h-4" />
                <span>Bundle for AJO Journey</span>
              </motion.button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Asset Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    EN Version
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    FR-CA Version
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Channel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {workflowAssets.map((asset, index) => <motion.tr key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{asset.type}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{asset.enVersion}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{asset.frVersion}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        {asset.channel}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-700">Approved</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <motion.button whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors">
                          <Eye className="w-4 h-4" />
                        </motion.button>
                        <motion.button whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors">
                          <Download className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>)}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#0055A5]" />
                  <h3 className="text-lg font-bold text-gray-900">Audience Targeting</h3>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex items-center space-x-1 px-3 py-1 bg-[#00A3E0]/10 hover:bg-[#00A3E0]/20 text-[#0055A5] text-xs font-medium rounded-lg transition-all">
                  <RefreshCw className="w-3 h-3" />
                  <span>Sync from AEP</span>
                </motion.button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {audienceSegments.map((segment, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1
              }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 hover:border-[#00A3E0]/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{segment.name}</h4>
                        <p className="text-xs text-gray-600 mb-2">{segment.assignedAssets}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-[#00A3E0]">{segment.performance}%</div>
                        <span className="text-xs text-gray-500">CTR</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded p-3 border border-blue-200 mb-3">
                      <div className="flex items-start space-x-2">
                        <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-800">{segment.aiSuggestion}</p>
                      </div>
                    </div>

                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} className="w-full px-3 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 hover:text-[#0055A5] text-sm font-medium rounded-lg transition-all">
                      Optimize with AI
                    </motion.button>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GitBranch className="w-5 h-5 text-[#0055A5]" />
                  <h3 className="text-lg font-bold text-gray-900">Journey Builder</h3>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex items-center space-x-1 px-3 py-1 bg-purple-100 hover:bg-purple-200 text-purple-700 text-xs font-medium rounded-lg transition-all">
                  <Zap className="w-3 h-3" />
                  <span>Generate Journey</span>
                </motion.button>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-3">
                {journeySteps.map((step, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="relative">
                    {index < journeySteps.length - 1 && <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#00A3E0] to-[#0055A5]" />}

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-lg flex items-center justify-center text-white font-bold shadow-md">
                        <span className="text-sm">D{step.day}</span>
                      </div>

                      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                        <p className="text-sm font-semibold text-gray-900 mb-1">{step.asset}</p>
                        {step.delay && <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>Delay: {step.delay}</span>
                          </div>}
                      </div>
                    </div>
                  </motion.div>)}
              </div>

              <div className="mt-6 flex items-center space-x-2">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 font-medium rounded-lg transition-all">
                  <CheckCircle className="w-4 h-4" />
                  <span>Validate Journey</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow hover:shadow-md transition-all">
                  <Play className="w-4 h-4" />
                  <span>Preview Journey</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-[#0055A5]" />
              <h3 className="text-lg font-bold text-gray-900">A/B Testing & Experimentation</h3>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {abTests.map((test, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900">{test.name}</h4>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                      Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <div className="text-xs font-semibold text-blue-700 mb-2">Variant A</div>
                      <p className="text-sm text-gray-900">{test.variantA}</p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                      <div className="text-xs font-semibold text-purple-700 mb-2">Variant B</div>
                      <p className="text-sm text-gray-900">{test.variantB}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Activity className="w-4 h-4" />
                      <span>Tracking: {test.metrics}</span>
                    </div>
                    <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="px-3 py-1 bg-[#00A3E0] hover:bg-[#0055A5] text-white text-xs font-medium rounded-lg transition-colors">
                      View Results
                    </motion.button>
                  </div>
                </motion.div>)}
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
              <Plus className="w-5 h-5" />
              <span>Create New A/B Test</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5 text-[#0055A5]" />
                <h3 className="text-lg font-bold text-gray-900">Workflow Sync Status</h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Workfront Tasks</h4>
                    <p className="text-xs text-gray-600">All tasks approved and synced</p>
                  </div>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-colors">
                  View Tasks
                </motion.button>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">AEM Asset Sync</h4>
                    <p className="text-xs text-gray-600">All assets uploaded and ready</p>
                  </div>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors">
                  Sync Now
                </motion.button>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Approval Status</h4>
                    <p className="text-xs text-gray-600">2 items awaiting approval</p>
                  </div>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs font-medium rounded-lg transition-colors">
                  Review
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-[#0055A5]" />
                <h3 className="text-lg font-bold text-gray-900">Performance Prediction</h3>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 text-sm">{metric.name}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-gray-500">Prediction</span>
                        <div className="text-2xl font-bold text-[#00A3E0]">{metric.prediction}</div>
                      </div>
                      <div>
                        <span className="text-xs text-gray-500">Actual</span>
                        <div className="text-2xl font-bold text-gray-400">{metric.actual}</div>
                      </div>
                    </div>
                  </div>)}
              </div>

              <div className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm mb-1">AI Insight</h4>
                    <p className="text-xs text-blue-800 leading-relaxed">
                      CTR for Email Variant A is predicted to be +15% higher than Variant B based on last year's data. 
                      Instagram Ads with tropical imagery are likely to perform 20% better.
                    </p>
                  </div>
                </div>
              </div>

              <motion.button whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all">
                <Rocket className="w-5 h-5" />
                <span>Launch Campaign via Journey Optimizer</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
  const renderInsights = () => <div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span>Sail into 2025</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-[#0055A5] font-medium">Insights & Learning</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Insights & Learning</h2>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Campaign: Sail into 2025</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Status:</span>
                <div className="flex items-center space-x-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Live</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setDateRange('7days')} className={`px-4 py-2 text-sm font-medium transition-colors ${dateRange === '7days' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                Last 7 Days
              </button>
              <button onClick={() => setDateRange('30days')} className={`px-4 py-2 text-sm font-medium transition-colors ${dateRange === '30days' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                Last 30 Days
              </button>
              <button onClick={() => setDateRange('custom')} className={`px-4 py-2 text-sm font-medium transition-colors ${dateRange === 'custom' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                Custom
              </button>
            </div>

            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setLanguage('EN')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'EN' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                🇺🇸 EN
              </button>
              <button onClick={() => setLanguage('FR-CA')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'FR-CA' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                🇨🇦 FR-CA
              </button>
              <button onClick={() => setLanguage('Both')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'Both' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`}>
                Both
              </button>
            </div>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all">
              <Download className="w-4 h-4" />
              <span>Download Report</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-6">
        {/* KPI Summary */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
            <h3 className="text-xl font-bold text-gray-900">Overall Campaign Summary</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Metric
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    EN
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    FR-CA
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {kpiMetrics.map((metric, index) => <motion.tr key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{metric.name}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-[#00A3E0]">{metric.en}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-purple-600">{metric.frCa}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {metric.trend === 'up' && <ArrowUpRight className="w-5 h-5 text-green-600" />}
                        {metric.trend === 'down' && <ArrowDownRight className="w-5 h-5 text-red-600" />}
                        {metric.trend === 'stable' && <TrendingUp className="w-5 h-5 text-gray-400" />}
                        <span className={`text-sm font-medium ${metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
                          {metric.trendValue}
                        </span>
                      </div>
                    </td>
                  </motion.tr>)}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Copy & Design Performance */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
            <h3 className="text-xl font-bold text-gray-900">Copy & Design Performance Insights</h3>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {assetPerformance.map((asset, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200 hover:border-[#00A3E0]/30 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{asset.assetType}</h4>
                      <p className="text-sm text-gray-600 mb-2">{asset.variant}</p>
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 bg-[#00A3E0]/10 text-[#0055A5] text-sm font-semibold rounded">
                          {asset.metric}
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded">
                          Score: {asset.score}
                        </span>
                      </div>
                    </div>
                    <div className="w-20 h-20">
                      <svg className="transform -rotate-90 w-20 h-20">
                        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-200" />
                        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={`${2 * Math.PI * 30}`} strokeDashoffset={`${2 * Math.PI * 30 * (1 - asset.performance / 100)}`} className="text-[#00A3E0]" />
                      </svg>
                      <div className="text-center mt-1">
                        <span className="text-sm font-bold text-gray-900">{asset.performance}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded p-3 border border-blue-200 mb-3">
                    <div className="flex items-start space-x-2">
                      <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-800">
                        <span className="font-semibold">Actionable Insight:</span> {asset.insight}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow hover:shadow-md transition-all">
                      <Zap className="w-4 h-4" />
                      <span>Promote Winning Variant</span>
                    </motion.button>
                    <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 font-medium rounded-lg transition-all">
                      <FileText className="w-4 h-4" />
                      <span>Feed to Studio</span>
                    </motion.button>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Audience Analysis */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <h3 className="text-xl font-bold text-gray-900">Audience & Segmentation Analysis</h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {segmentAnalysis.map((segment, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1
              }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 hover:border-[#00A3E0]/30 transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2">{segment.segment}</h4>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white rounded p-2 border border-gray-200">
                            <span className="text-xs text-gray-500">CTR</span>
                            <div className="text-lg font-bold text-[#00A3E0]">{segment.ctr}%</div>
                          </div>
                          <div className="bg-white rounded p-2 border border-gray-200">
                            <span className="text-xs text-gray-500">CVR</span>
                            <div className="text-lg font-bold text-green-600">{segment.cvr}%</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="text-xs font-semibold text-gray-500 uppercase">Best Performing Asset</span>
                      <p className="text-sm font-medium text-gray-900">{segment.bestAsset}</p>
                    </div>

                    <div className="bg-purple-50 rounded p-3 border border-purple-200">
                      <div className="flex items-start space-x-2">
                        <Sparkles className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-purple-800">
                          <span className="font-semibold">AI Suggestion:</span> {segment.aiSuggestion}
                        </p>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>

          {/* Trend Recommendations */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.3
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
              <h3 className="text-xl font-bold text-gray-900">Trend Analysis & AI Recommendations</h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {trendRecommendations.map((trend, index) => <motion.div key={trend.id} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1
              }} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200 hover:border-green-300 transition-all">
                    <div className="flex items-start space-x-3 mb-3">
                      <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-900 leading-relaxed">{trend.insight}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                        Impact: {trend.impact}
                      </span>
                      <div className="flex items-center space-x-2">
                        <motion.button whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }} className="px-3 py-1 bg-white border border-green-300 hover:border-green-400 text-green-700 text-xs font-medium rounded-lg transition-all">
                          Apply Recommendation
                        </motion.button>
                        <motion.button whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }} className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-colors">
                          Create Variant
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visualization Panels */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5">
            <h3 className="text-xl font-bold text-gray-900">Performance Visualization</h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div whileHover={{
              scale: 1.02
            }} className="bg-gradient-to-br from-[#00A3E0]/10 to-[#0055A5]/10 rounded-lg p-6 border border-[#00A3E0]/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">CTR Over Time</h4>
                  <BarChart3 className="w-5 h-5 text-[#00A3E0]" />
                </div>
                <div className="h-32 flex items-end justify-between space-x-2">
                  {[65, 70, 68, 85, 90, 88, 95].map((height, idx) => <div key={idx} className="flex-1 bg-gradient-to-t from-[#00A3E0] to-[#0055A5] rounded-t" style={{
                  height: `${height}%`
                }} />)}
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">Last 7 Days</p>
              </motion.div>

              <motion.div whileHover={{
              scale: 1.02
            }} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">Channel Comparison</h4>
                  <Activity className="w-5 h-5 text-purple-600" />
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-700 font-medium">Email</span>
                      <span className="text-purple-600 font-bold">8.5%</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{
                      width: '85%'
                    }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-700 font-medium">Instagram</span>
                      <span className="text-purple-600 font-bold">12.1%</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{
                      width: '100%'
                    }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-700 font-medium">Push</span>
                      <span className="text-purple-600 font-bold">6.8%</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{
                      width: '56%'
                    }} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{
              scale: 1.02
            }} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-gray-900">Localization Impact</h4>
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#00A3E0] mb-1">34%</div>
                    <p className="text-xs text-gray-600">🇺🇸 EN Performance</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">30%</div>
                    <p className="text-xs text-gray-600">🇨🇦 FR-CA Performance</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                      +4% Higher EN
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;

  // @return
  return <div className="min-h-screen bg-gradient-to-br from-[#F5FAFB] to-[#E8F4F8] w-full">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00A3E0] bg-clip-text text-transparent">
                    CreativePlus
                  </h1>
                  <p className="text-xs text-gray-500">Marketing Platform</p>
                </div>
              </motion.div>

              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeNav === item.name;
                return <motion.button key={item.name} initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.1
                }} onClick={() => setActiveNav(item.name)} className={`relative px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${isActive ? 'text-[#0055A5] bg-[#00A3E0]/10' : 'text-gray-600 hover:text-[#0055A5] hover:bg-gray-50'}`}>
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                      {isActive && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00A3E0] to-[#0055A5]" initial={false} transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }} />}
                    </motion.button>;
              })}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="relative p-2 text-gray-600 hover:text-[#0055A5] hover:bg-gray-50 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="px-8 py-8">
        <div className="max-w-[1600px] mx-auto">
          <AnimatePresence mode="wait">
            {activeNav === 'Dashboard' && <motion.div key="dashboard" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: 20
          }} transition={{
            duration: 0.3
          }}>
                {renderDashboard()}
              </motion.div>}
            {activeNav === 'Copy Studio' && <motion.div key="copy-studio" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: 20
          }} transition={{
            duration: 0.3
          }}>
                {renderCopyStudio()}
              </motion.div>}
            {activeNav === 'Design Studio' && <motion.div key="design-studio" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: 20
          }} transition={{
            duration: 0.3
          }}>
                {renderDesignStudio()}
              </motion.div>}
            {activeNav === 'Workflow' && <motion.div key="workflow" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: 20
          }} transition={{
            duration: 0.3
          }}>
                {renderWorkflow()}
              </motion.div>}
            {activeNav === 'Insights' && <motion.div key="insights" initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: 20
          }} transition={{
            duration: 0.3
          }}>
                {renderInsights()}
              </motion.div>}
          </AnimatePresence>
        </div>
      </div>
    </div>;
};