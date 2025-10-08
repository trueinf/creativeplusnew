import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, FileText, Palette, Workflow, BarChart3, FolderOpen, Bell, User, ChevronDown, Edit, Eye, Rocket, Copy, TrendingUp, Clock, CheckCircle2, Circle, AlertCircle, Sparkles, Download, Plus, Send, ChevronRight, RefreshCw, Globe, CheckCircle, AlertTriangle, Save, ArrowRight, Lightbulb, Image as ImageIcon, Zap, Layers, Play, FileDown, Users, Target, GitBranch, Activity, Calendar, Package } from 'lucide-react';
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
type CreativePlusDashboardProps = Record<string, never>;
const StatusIcon = ({
  status
}: {
  status: CampaignStatus;
}) => {
  if (status === 'complete') {
    return <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" data-magicpath-id="0" data-magicpath-path="CreativePlusDashboard.tsx" />;
  }
  if (status === 'in-progress') {
    return <Clock className="w-4 h-4 text-[#FDB913]" data-magicpath-id="1" data-magicpath-path="CreativePlusDashboard.tsx" />;
  }
  return <Circle className="w-4 h-4 text-gray-300" />;
};
const ProgressBar = ({
  progress
}: {
  progress: number;
}) => {
  return <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden" data-magicpath-id="2" data-magicpath-path="CreativePlusDashboard.tsx">
      <motion.div initial={{
      width: 0
    }} animate={{
      width: `${progress}%`
    }} transition={{
      duration: 1,
      ease: 'easeOut'
    }} className="h-full bg-gradient-to-r from-[#00A3E0] to-[#0055A5] rounded-full" data-magicpath-id="3" data-magicpath-path="CreativePlusDashboard.tsx" />
    </div>;
};

// @component: CreativePlusDashboard
export const CreativePlusDashboard = (_props: CreativePlusDashboardProps) => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [language, setLanguage] = useState<'EN' | 'FR-CA'>('EN');
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
  const renderDashboard = () => <div data-magicpath-id="4" data-magicpath-path="CreativePlusDashboard.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-8" data-magicpath-id="5" data-magicpath-path="CreativePlusDashboard.tsx">
        <h2 className="text-3xl font-bold text-gray-900 mb-2" data-magicpath-id="6" data-magicpath-path="CreativePlusDashboard.tsx">Campaign Dashboard</h2>
        <p className="text-gray-600" data-magicpath-id="7" data-magicpath-path="CreativePlusDashboard.tsx">
          Manage your campaigns, track performance, and get AI-powered insights
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-magicpath-id="8" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="lg:col-span-2 space-y-6" data-magicpath-id="9" data-magicpath-path="CreativePlusDashboard.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="10" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="11" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="12" data-magicpath-path="CreativePlusDashboard.tsx">Campaign Overview</h3>
            </div>

            <div className="overflow-x-auto" data-magicpath-id="13" data-magicpath-path="CreativePlusDashboard.tsx">
              <table className="w-full" data-magicpath-id="14" data-magicpath-path="CreativePlusDashboard.tsx">
                <thead className="bg-gray-50 border-b border-gray-100" data-magicpath-id="15" data-magicpath-path="CreativePlusDashboard.tsx">
                  <tr data-magicpath-id="16" data-magicpath-path="CreativePlusDashboard.tsx">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="17" data-magicpath-path="CreativePlusDashboard.tsx">
                      Campaign Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="18" data-magicpath-path="CreativePlusDashboard.tsx">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="19" data-magicpath-path="CreativePlusDashboard.tsx">
                      Progress
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="20" data-magicpath-path="CreativePlusDashboard.tsx">
                      Performance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="21" data-magicpath-path="CreativePlusDashboard.tsx">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100" data-magicpath-id="22" data-magicpath-path="CreativePlusDashboard.tsx">
                  {campaigns.map((campaign, index) => <motion.tr key={campaign.id} initial={{
                  opacity: 0,
                  x: -20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1
                }} className="hover:bg-gray-50 transition-colors" data-magicpath-id="23" data-magicpath-path="CreativePlusDashboard.tsx">
                      <td className="px-6 py-4" data-magicpath-id="24" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="font-semibold text-gray-900" data-magicpath-id="25" data-magicpath-path="CreativePlusDashboard.tsx">{campaign.name}</span>
                      </td>
                      <td className="px-6 py-4" data-magicpath-id="26" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className="space-y-1" data-magicpath-id="27" data-magicpath-path="CreativePlusDashboard.tsx">
                          <div className="flex items-center space-x-2" data-magicpath-id="28" data-magicpath-path="CreativePlusDashboard.tsx">
                            <StatusIcon status={campaign.copyStatus} data-magicpath-id="29" data-magicpath-path="CreativePlusDashboard.tsx" />
                            <span className="text-sm text-gray-600" data-magicpath-id="30" data-magicpath-path="CreativePlusDashboard.tsx">Copy</span>
                          </div>
                          <div className="flex items-center space-x-2" data-magicpath-id="31" data-magicpath-path="CreativePlusDashboard.tsx">
                            <StatusIcon status={campaign.designStatus} data-magicpath-id="32" data-magicpath-path="CreativePlusDashboard.tsx" />
                            <span className="text-sm text-gray-600" data-magicpath-id="33" data-magicpath-path="CreativePlusDashboard.tsx">Design</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4" data-magicpath-id="34" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className="space-y-2" data-magicpath-id="35" data-magicpath-path="CreativePlusDashboard.tsx">
                          <ProgressBar progress={campaign.progress} data-magicpath-id="36" data-magicpath-path="CreativePlusDashboard.tsx" />
                          <span className="text-xs text-gray-500" data-magicpath-id="37" data-magicpath-path="CreativePlusDashboard.tsx">{campaign.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4" data-magicpath-id="38" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className="space-y-1 text-sm" data-magicpath-id="39" data-magicpath-path="CreativePlusDashboard.tsx">
                          {campaign.ctr && <div className="text-gray-700" data-magicpath-id="40" data-magicpath-path="CreativePlusDashboard.tsx">
                              CTR: <span className="font-semibold" data-magicpath-id="41" data-magicpath-path="CreativePlusDashboard.tsx">{campaign.ctr}%</span>
                            </div>}
                          {campaign.cvr && <div className="text-gray-700" data-magicpath-id="42" data-magicpath-path="CreativePlusDashboard.tsx">
                              CVR: <span className="font-semibold" data-magicpath-id="43" data-magicpath-path="CreativePlusDashboard.tsx">{campaign.cvr}%</span>
                            </div>}
                          {campaign.roi && <div className="text-green-600 font-semibold" data-magicpath-id="44" data-magicpath-path="CreativePlusDashboard.tsx">ROI: +{campaign.roi}%</div>}
                          {!campaign.ctr && !campaign.cvr && !campaign.roi && <span className="text-gray-400" data-magicpath-id="45" data-magicpath-path="CreativePlusDashboard.tsx">—</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4" data-magicpath-id="46" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className="flex items-center space-x-2" data-magicpath-id="47" data-magicpath-path="CreativePlusDashboard.tsx">
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors" data-magicpath-id="48" data-magicpath-path="CreativePlusDashboard.tsx">
                            <Edit className="w-4 h-4" data-magicpath-id="49" data-magicpath-path="CreativePlusDashboard.tsx" />
                          </motion.button>
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors" data-magicpath-id="50" data-magicpath-path="CreativePlusDashboard.tsx">
                            <Eye className="w-4 h-4" data-magicpath-id="51" data-magicpath-path="CreativePlusDashboard.tsx" />
                          </motion.button>
                          {campaign.progress === 100 && <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" data-magicpath-id="52" data-magicpath-path="CreativePlusDashboard.tsx">
                              <Rocket className="w-4 h-4" data-magicpath-id="53" data-magicpath-path="CreativePlusDashboard.tsx" />
                            </motion.button>}
                          {campaign.progress > 0 && campaign.progress < 100 && <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" data-magicpath-id="54" data-magicpath-path="CreativePlusDashboard.tsx">
                              <Copy className="w-4 h-4" data-magicpath-id="55" data-magicpath-path="CreativePlusDashboard.tsx" />
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
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="56" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="57" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="58" data-magicpath-path="CreativePlusDashboard.tsx">Campaign Timeline</h3>
              <p className="text-sm text-gray-600 mt-1" data-magicpath-id="59" data-magicpath-path="CreativePlusDashboard.tsx">Sail into 2025 Campaign Progress</p>
            </div>

            <div className="p-6" data-magicpath-id="60" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="space-y-4" data-magicpath-id="61" data-magicpath-path="CreativePlusDashboard.tsx">
                {timeline.map((step, index) => <motion.div key={step.id} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="relative pl-8 pb-4 last:pb-0" data-magicpath-id="62" data-magicpath-path="CreativePlusDashboard.tsx">
                    {index < timeline.length - 1 && <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gray-200" data-magicpath-id="63" data-magicpath-path="CreativePlusDashboard.tsx" />}

                    <div className="flex items-start space-x-4" data-magicpath-id="64" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className={`absolute left-0 w-4 h-4 rounded-full border-2 ${step.status === 'complete' ? 'bg-[#00A3E0] border-[#00A3E0]' : step.status === 'in-progress' ? 'bg-[#FDB913] border-[#FDB913]' : 'bg-white border-gray-300'}`} data-magicpath-id="65" data-magicpath-path="CreativePlusDashboard.tsx" />

                      <div className="flex-1" data-magicpath-id="66" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className="flex items-center justify-between" data-magicpath-id="67" data-magicpath-path="CreativePlusDashboard.tsx">
                          <div data-magicpath-id="68" data-magicpath-path="CreativePlusDashboard.tsx">
                            <h4 className="font-semibold text-gray-900" data-magicpath-id="69" data-magicpath-path="CreativePlusDashboard.tsx">{step.name}</h4>
                            {step.completedTime && <p className="text-xs text-gray-500 mt-0.5" data-magicpath-id="70" data-magicpath-path="CreativePlusDashboard.tsx">
                                Completed {step.completedTime}
                              </p>}
                          </div>

                          {step.status === 'complete' && <CheckCircle2 className="w-5 h-5 text-[#00A3E0]" data-magicpath-id="71" data-magicpath-path="CreativePlusDashboard.tsx" />}
                          {step.status === 'in-progress' && <Clock className="w-5 h-5 text-[#FDB913]" data-magicpath-id="72" data-magicpath-path="CreativePlusDashboard.tsx" />}
                        </div>

                        {step.status === 'in-progress' && step.progress !== undefined && <div className="mt-2" data-magicpath-id="73" data-magicpath-path="CreativePlusDashboard.tsx">
                            <ProgressBar progress={step.progress} data-magicpath-id="74" data-magicpath-path="CreativePlusDashboard.tsx" />
                            <span className="text-xs text-gray-500 mt-1 block" data-magicpath-id="75" data-magicpath-path="CreativePlusDashboard.tsx">
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
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="76" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="77" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="78" data-magicpath-path="CreativePlusDashboard.tsx">Real-Time Performance</h3>
            </div>

            <div className="p-6" data-magicpath-id="79" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="grid grid-cols-3 gap-6" data-magicpath-id="80" data-magicpath-path="CreativePlusDashboard.tsx">
                <motion.div whileHover={{
                scale: 1.05
              }} className="bg-gradient-to-br from-[#00A3E0]/10 to-[#0055A5]/10 rounded-lg p-6 border border-[#00A3E0]/20" data-magicpath-id="81" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center justify-between mb-2" data-magicpath-id="82" data-magicpath-path="CreativePlusDashboard.tsx">
                    <span className="text-sm font-medium text-gray-600" data-magicpath-id="83" data-magicpath-path="CreativePlusDashboard.tsx">CTR</span>
                    <TrendingUp className="w-5 h-5 text-[#00A3E0]" data-magicpath-id="84" data-magicpath-path="CreativePlusDashboard.tsx" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900" data-magicpath-id="85" data-magicpath-path="CreativePlusDashboard.tsx">8.5%</div>
                  <p className="text-xs text-gray-500 mt-2" data-magicpath-id="86" data-magicpath-path="CreativePlusDashboard.tsx">Last 24h: 1.2M emails opened</p>
                </motion.div>

                <motion.div whileHover={{
                scale: 1.05
              }} className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg p-6 border border-green-200" data-magicpath-id="87" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center justify-between mb-2" data-magicpath-id="88" data-magicpath-path="CreativePlusDashboard.tsx">
                    <span className="text-sm font-medium text-gray-600" data-magicpath-id="89" data-magicpath-path="CreativePlusDashboard.tsx">CVR</span>
                    <TrendingUp className="w-5 h-5 text-green-600" data-magicpath-id="90" data-magicpath-path="CreativePlusDashboard.tsx" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900" data-magicpath-id="91" data-magicpath-path="CreativePlusDashboard.tsx">4.3%</div>
                  <p className="text-xs text-gray-500 mt-2" data-magicpath-id="92" data-magicpath-path="CreativePlusDashboard.tsx">3% higher than last year</p>
                </motion.div>

                <motion.div whileHover={{
                scale: 1.05
              }} className="bg-gradient-to-br from-[#FDB913]/10 to-[#FDB913]/20 rounded-lg p-6 border border-[#FDB913]/30" data-magicpath-id="93" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center justify-between mb-2" data-magicpath-id="94" data-magicpath-path="CreativePlusDashboard.tsx">
                    <span className="text-sm font-medium text-gray-600" data-magicpath-id="95" data-magicpath-path="CreativePlusDashboard.tsx">Top Asset</span>
                    <Sparkles className="w-5 h-5 text-[#FDB913]" />
                  </div>
                  <div className="text-lg font-bold text-gray-900" data-magicpath-id="96" data-magicpath-path="CreativePlusDashboard.tsx">Variant A</div>
                  <p className="text-xs text-gray-500 mt-2" data-magicpath-id="97" data-magicpath-path="CreativePlusDashboard.tsx">15% better than Variant B</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6" data-magicpath-id="98" data-magicpath-path="CreativePlusDashboard.tsx">
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.1
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="99" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="100" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="101" data-magicpath-path="CreativePlusDashboard.tsx">
                <Sparkles className="w-5 h-5 text-[#00A3E0]" />
                <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="102" data-magicpath-path="CreativePlusDashboard.tsx">AI Insights</h3>
              </div>
            </div>

            <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto" data-magicpath-id="103" data-magicpath-path="CreativePlusDashboard.tsx">
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
            }} className={`p-4 rounded-lg border transition-all cursor-pointer ${insight.type === 'brand' ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50' : insight.type === 'social' ? 'bg-purple-50/50 border-purple-200 hover:bg-purple-50' : 'bg-green-50/50 border-green-200 hover:bg-green-50'}`} data-magicpath-id="104" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-start space-x-3" data-magicpath-id="105" data-magicpath-path="CreativePlusDashboard.tsx">
                    <div className={`p-2 rounded-lg ${insight.type === 'brand' ? 'bg-blue-100' : insight.type === 'social' ? 'bg-purple-100' : 'bg-green-100'}`} data-magicpath-id="106" data-magicpath-path="CreativePlusDashboard.tsx">
                      {insight.type === 'brand' && <TrendingUp className={`w-4 h-4 ${insight.type === 'brand' ? 'text-blue-600' : insight.type === 'social' ? 'text-purple-600' : 'text-green-600'}`} data-magicpath-id="107" data-magicpath-path="CreativePlusDashboard.tsx" />}
                      {insight.type === 'social' && <Sparkles className={`w-4 h-4 ${insight.type === 'social' ? 'text-purple-600' : 'text-blue-600'}`} />}
                      {insight.type === 'audience' && <User className="w-4 h-4 text-green-600" data-magicpath-id="108" data-magicpath-path="CreativePlusDashboard.tsx" />}
                    </div>

                    <div className="flex-1" data-magicpath-id="109" data-magicpath-path="CreativePlusDashboard.tsx">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1" data-magicpath-id="110" data-magicpath-path="CreativePlusDashboard.tsx">
                        {insight.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed" data-magicpath-id="111" data-magicpath-path="CreativePlusDashboard.tsx">
                        {insight.description}
                      </p>
                      <motion.button whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} className="mt-3 text-xs font-medium text-[#0055A5] hover:text-[#00A3E0] transition-colors" data-magicpath-id="112" data-magicpath-path="CreativePlusDashboard.tsx">
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
        }} className="bg-gradient-to-br from-[#0055A5] to-[#00A3E0] rounded-xl shadow-lg p-6 text-white" data-magicpath-id="113" data-magicpath-path="CreativePlusDashboard.tsx">
            <AlertCircle className="w-8 h-8 mb-3 opacity-90" data-magicpath-id="114" data-magicpath-path="CreativePlusDashboard.tsx" />
            <h3 className="text-lg font-bold mb-2" data-magicpath-id="115" data-magicpath-path="CreativePlusDashboard.tsx">Pending Approvals</h3>
            <p className="text-sm opacity-90 mb-4" data-magicpath-id="116" data-magicpath-path="CreativePlusDashboard.tsx">
              You have 3 items waiting for review and approval
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="w-full bg-white text-[#0055A5] font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors" data-magicpath-id="117" data-magicpath-path="CreativePlusDashboard.tsx">
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
    }} className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6" data-magicpath-id="118" data-magicpath-path="CreativePlusDashboard.tsx">
        <h3 className="text-xl font-bold text-gray-900 mb-4" data-magicpath-id="119" data-magicpath-path="CreativePlusDashboard.tsx">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4" data-magicpath-id="120" data-magicpath-path="CreativePlusDashboard.tsx">
          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#00A3E0]/10 to-[#0055A5]/10 hover:from-[#00A3E0]/20 hover:to-[#0055A5]/20 rounded-lg border border-[#00A3E0]/20 transition-all" data-magicpath-id="121" data-magicpath-path="CreativePlusDashboard.tsx">
            <Download className="w-6 h-6 text-[#0055A5] mb-2" data-magicpath-id="122" data-magicpath-path="CreativePlusDashboard.tsx" />
            <span className="text-sm font-medium text-gray-900" data-magicpath-id="123" data-magicpath-path="CreativePlusDashboard.tsx">Generate Report</span>
          </motion.button>

          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 rounded-lg border border-green-200 transition-all" data-magicpath-id="124" data-magicpath-path="CreativePlusDashboard.tsx">
            <Plus className="w-6 h-6 text-green-600 mb-2" data-magicpath-id="125" data-magicpath-path="CreativePlusDashboard.tsx" />
            <span className="text-sm font-medium text-gray-900" data-magicpath-id="126" data-magicpath-path="CreativePlusDashboard.tsx">New Campaign</span>
          </motion.button>

          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200/50 rounded-lg border border-purple-200 transition-all" data-magicpath-id="127" data-magicpath-path="CreativePlusDashboard.tsx">
            <Send className="w-6 h-6 text-purple-600 mb-2" data-magicpath-id="128" data-magicpath-path="CreativePlusDashboard.tsx" />
            <span className="text-sm font-medium text-gray-900" data-magicpath-id="129" data-magicpath-path="CreativePlusDashboard.tsx">Send Update</span>
          </motion.button>

          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FDB913]/10 to-[#FDB913]/20 hover:from-[#FDB913]/20 hover:to-[#FDB913]/30 rounded-lg border border-[#FDB913]/30 transition-all" data-magicpath-id="130" data-magicpath-path="CreativePlusDashboard.tsx">
            <FileText className="w-6 h-6 text-[#FDB913] mb-2" data-magicpath-id="131" data-magicpath-path="CreativePlusDashboard.tsx" />
            <span className="text-sm font-medium text-gray-900" data-magicpath-id="132" data-magicpath-path="CreativePlusDashboard.tsx">Create Copy</span>
          </motion.button>

          <motion.button whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.95
        }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-pink-100/50 hover:from-pink-100 hover:to-pink-200/50 rounded-lg border border-pink-200 transition-all" data-magicpath-id="133" data-magicpath-path="CreativePlusDashboard.tsx">
            <Palette className="w-6 h-6 text-pink-600 mb-2" data-magicpath-id="134" data-magicpath-path="CreativePlusDashboard.tsx" />
            <span className="text-sm font-medium text-gray-900" data-magicpath-id="135" data-magicpath-path="CreativePlusDashboard.tsx">Create Asset</span>
          </motion.button>
        </div>
      </motion.div>
    </div>;
  const renderCopyStudio = () => <div data-magicpath-id="136" data-magicpath-path="CreativePlusDashboard.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-6" data-magicpath-id="137" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="flex items-center text-sm text-gray-500 mb-4" data-magicpath-id="138" data-magicpath-path="CreativePlusDashboard.tsx">
          <span data-magicpath-id="139" data-magicpath-path="CreativePlusDashboard.tsx">Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-2" data-magicpath-id="140" data-magicpath-path="CreativePlusDashboard.tsx" />
          <span data-magicpath-id="141" data-magicpath-path="CreativePlusDashboard.tsx">Sail into 2025</span>
          <ChevronRight className="w-4 h-4 mx-2" data-magicpath-id="142" data-magicpath-path="CreativePlusDashboard.tsx" />
          <span className="text-[#0055A5] font-medium" data-magicpath-id="143" data-magicpath-path="CreativePlusDashboard.tsx">Copy Studio</span>
        </div>

        <div className="flex items-center justify-between" data-magicpath-id="144" data-magicpath-path="CreativePlusDashboard.tsx">
          <div data-magicpath-id="145" data-magicpath-path="CreativePlusDashboard.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" data-magicpath-id="146" data-magicpath-path="CreativePlusDashboard.tsx">Copy Studio</h2>
            <div className="flex items-center space-x-4" data-magicpath-id="147" data-magicpath-path="CreativePlusDashboard.tsx">
              <span className="text-gray-600" data-magicpath-id="148" data-magicpath-path="CreativePlusDashboard.tsx">Campaign: Sail into 2025</span>
              <div className="flex items-center space-x-2" data-magicpath-id="149" data-magicpath-path="CreativePlusDashboard.tsx">
                <span className="text-sm text-gray-500" data-magicpath-id="150" data-magicpath-path="CreativePlusDashboard.tsx">Status:</span>
                <div className="flex items-center space-x-1" data-magicpath-id="151" data-magicpath-path="CreativePlusDashboard.tsx">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" data-magicpath-id="152" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span className="text-sm text-gray-600" data-magicpath-id="153" data-magicpath-path="CreativePlusDashboard.tsx">Copy</span>
                </div>
                <div className="flex items-center space-x-1" data-magicpath-id="154" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Clock className="w-4 h-4 text-[#FDB913]" data-magicpath-id="155" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span className="text-sm text-gray-600" data-magicpath-id="156" data-magicpath-path="CreativePlusDashboard.tsx">Design</span>
                </div>
                <div className="flex items-center space-x-1" data-magicpath-id="157" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Circle className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-600" data-magicpath-id="158" data-magicpath-path="CreativePlusDashboard.tsx">Workflow</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3" data-magicpath-id="159" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden" data-magicpath-id="160" data-magicpath-path="CreativePlusDashboard.tsx">
              <button onClick={() => setLanguage('EN')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'EN' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`} data-magicpath-id="161" data-magicpath-path="CreativePlusDashboard.tsx">
                🇺🇸 EN
              </button>
              <button onClick={() => setLanguage('FR-CA')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'FR-CA' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`} data-magicpath-id="162" data-magicpath-path="CreativePlusDashboard.tsx">
                🇨🇦 FR-CA
              </button>
            </div>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all" data-magicpath-id="163" data-magicpath-path="CreativePlusDashboard.tsx">
              <ArrowRight className="w-4 h-4" data-magicpath-id="164" data-magicpath-path="CreativePlusDashboard.tsx" />
              <span data-magicpath-id="165" data-magicpath-path="CreativePlusDashboard.tsx">Move to Design Studio</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-magicpath-id="166" data-magicpath-path="CreativePlusDashboard.tsx">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.1
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="167" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="168" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center justify-between" data-magicpath-id="169" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="170" data-magicpath-path="CreativePlusDashboard.tsx">Campaign Brief</h3>
              <motion.button whileHover={{
              scale: 1.1,
              rotate: 90
            }} whileTap={{
              scale: 0.9
            }} className="p-1 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded transition-colors" data-magicpath-id="171" data-magicpath-path="CreativePlusDashboard.tsx">
                <RefreshCw className="w-4 h-4" data-magicpath-id="172" data-magicpath-path="CreativePlusDashboard.tsx" />
              </motion.button>
            </div>
          </div>

          <div className="p-6 space-y-4" data-magicpath-id="173" data-magicpath-path="CreativePlusDashboard.tsx">
            <div data-magicpath-id="174" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="175" data-magicpath-path="CreativePlusDashboard.tsx">Objective</h4>
              <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="176" data-magicpath-path="CreativePlusDashboard.tsx">
                Promote early bird discounts for Caribbean & Alaska cruises for 2025.
              </p>
            </div>

            <div data-magicpath-id="177" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="178" data-magicpath-path="CreativePlusDashboard.tsx">Key Message</h4>
              <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="179" data-magicpath-path="CreativePlusDashboard.tsx">
                Book early and save! Explore the best of the Caribbean and Alaska with Norwegian.
              </p>
            </div>

            <div data-magicpath-id="180" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="181" data-magicpath-path="CreativePlusDashboard.tsx">Tone</h4>
              <div className="flex flex-wrap gap-2" data-magicpath-id="182" data-magicpath-path="CreativePlusDashboard.tsx">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded" data-magicpath-id="183" data-magicpath-path="CreativePlusDashboard.tsx">
                  Fun
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded" data-magicpath-id="184" data-magicpath-path="CreativePlusDashboard.tsx">
                  Adventurous
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded" data-magicpath-id="185" data-magicpath-path="CreativePlusDashboard.tsx">
                  Inspiring
                </span>
              </div>
            </div>

            <div data-magicpath-id="186" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="187" data-magicpath-path="CreativePlusDashboard.tsx">Target Audience</h4>
              <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="188" data-magicpath-path="CreativePlusDashboard.tsx">
                Repeat customers (Loyalty Members), new customers, potential cruisers in the U.S. and Canada.
              </p>
            </div>

            <div data-magicpath-id="189" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="190" data-magicpath-path="CreativePlusDashboard.tsx">Channels</h4>
              <div className="flex flex-wrap gap-2" data-magicpath-id="191" data-magicpath-path="CreativePlusDashboard.tsx">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded" data-magicpath-id="192" data-magicpath-path="CreativePlusDashboard.tsx">
                  Email
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded" data-magicpath-id="193" data-magicpath-path="CreativePlusDashboard.tsx">
                  Push Notifications
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded" data-magicpath-id="194" data-magicpath-path="CreativePlusDashboard.tsx">
                  Social Ads
                </span>
              </div>
            </div>

            <div data-magicpath-id="195" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="196" data-magicpath-path="CreativePlusDashboard.tsx">Localization</h4>
              <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="197" data-magicpath-path="CreativePlusDashboard.tsx">
                Canadian French for FR-CA audience
              </p>
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors" data-magicpath-id="198" data-magicpath-path="CreativePlusDashboard.tsx">
              <RefreshCw className="w-4 h-4" data-magicpath-id="199" data-magicpath-path="CreativePlusDashboard.tsx" />
              <span data-magicpath-id="200" data-magicpath-path="CreativePlusDashboard.tsx">Refresh from Workfront</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="lg:col-span-2 space-y-6" data-magicpath-id="201" data-magicpath-path="CreativePlusDashboard.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="202" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="203" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="204" data-magicpath-path="CreativePlusDashboard.tsx">AI Copy Generation</h3>
            </div>

            <div className="p-6" data-magicpath-id="205" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="bg-gradient-to-br from-[#00A3E0]/5 to-[#0055A5]/5 rounded-lg p-4 mb-6 border border-[#00A3E0]/20" data-magicpath-id="206" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="flex items-start space-x-3" data-magicpath-id="207" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Lightbulb className="w-5 h-5 text-[#FDB913] flex-shrink-0 mt-0.5" data-magicpath-id="208" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <div className="flex-1" data-magicpath-id="209" data-magicpath-path="CreativePlusDashboard.tsx">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2" data-magicpath-id="210" data-magicpath-path="CreativePlusDashboard.tsx">AI Prompt</h4>
                    <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="211" data-magicpath-path="CreativePlusDashboard.tsx">
                      Generate 3 email subject lines and 2 Instagram ad captions. Use adventurous language 
                      to evoke excitement. Ensure "Book Today" phrase is included. Use emoji-first subject 
                      line for higher engagement. Suggest using #TropicalEscape for social.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="text-sm font-semibold text-gray-700 mb-4" data-magicpath-id="212" data-magicpath-path="CreativePlusDashboard.tsx">Generated Copy Variants</h4>

              <div className="space-y-4" data-magicpath-id="213" data-magicpath-path="CreativePlusDashboard.tsx">
                {copyVariants.map((variant, index) => <motion.div key={variant.id} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.1 * index
              }} className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover:border-[#00A3E0]/30 transition-all" data-magicpath-id="214" data-magicpath-path="CreativePlusDashboard.tsx">
                    <div className="flex items-start justify-between mb-3" data-magicpath-id="215" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex-1" data-magicpath-id="216" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className="flex items-center space-x-2 mb-2" data-magicpath-id="217" data-magicpath-path="CreativePlusDashboard.tsx">
                          <span className="px-2 py-1 bg-[#00A3E0]/10 text-[#0055A5] text-xs font-semibold rounded" data-magicpath-id="218" data-magicpath-path="CreativePlusDashboard.tsx">
                            #{variant.id}
                          </span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded" data-magicpath-id="219" data-magicpath-path="CreativePlusDashboard.tsx">
                            {variant.channel}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 font-medium leading-relaxed mb-3" data-magicpath-id="220" data-magicpath-path="CreativePlusDashboard.tsx">
                          {variant.copy}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4" data-magicpath-id="221" data-magicpath-path="CreativePlusDashboard.tsx">
                      {variant.predictedCTR && <div className="bg-white rounded p-2 border border-gray-200" data-magicpath-id="222" data-magicpath-path="CreativePlusDashboard.tsx">
                          <span className="text-xs text-gray-500" data-magicpath-id="223" data-magicpath-path="CreativePlusDashboard.tsx">Predicted CTR</span>
                          <div className="text-sm font-bold text-gray-900" data-magicpath-id="224" data-magicpath-path="CreativePlusDashboard.tsx">{variant.predictedCTR}%</div>
                        </div>}
                      <div className="bg-white rounded p-2 border border-gray-200" data-magicpath-id="225" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="text-xs text-gray-500" data-magicpath-id="226" data-magicpath-path="CreativePlusDashboard.tsx">Sentiment</span>
                        <div className="text-sm font-bold text-gray-900" data-magicpath-id="227" data-magicpath-path="CreativePlusDashboard.tsx">{variant.sentiment}</div>
                      </div>
                      <div className="bg-white rounded p-2 border border-gray-200" data-magicpath-id="228" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="text-xs text-gray-500" data-magicpath-id="229" data-magicpath-path="CreativePlusDashboard.tsx">Compliance</span>
                        <div className="flex items-center space-x-1" data-magicpath-id="230" data-magicpath-path="CreativePlusDashboard.tsx">
                          {variant.compliance === 'approved' ? <CheckCircle className="w-4 h-4 text-green-600" data-magicpath-id="231" data-magicpath-path="CreativePlusDashboard.tsx" /> : <AlertTriangle className="w-4 h-4 text-yellow-600" data-magicpath-id="232" data-magicpath-path="CreativePlusDashboard.tsx" />}
                          <span className="text-xs font-medium text-gray-900" data-magicpath-id="233" data-magicpath-path="CreativePlusDashboard.tsx">
                            {variant.compliance === 'approved' ? 'Legal' : variant.complianceMessage}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2" data-magicpath-id="234" data-magicpath-path="CreativePlusDashboard.tsx">
                      <motion.button whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 hover:text-[#0055A5] font-medium rounded-lg transition-all" data-magicpath-id="235" data-magicpath-path="CreativePlusDashboard.tsx">
                        <Edit className="w-4 h-4" data-magicpath-id="236" data-magicpath-path="CreativePlusDashboard.tsx" />
                        <span data-magicpath-id="237" data-magicpath-path="CreativePlusDashboard.tsx">Edit</span>
                      </motion.button>
                      <motion.button whileHover={{
                    scale: 1.05
                  }} whileTap={{
                    scale: 0.95
                  }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow hover:shadow-md transition-all" data-magicpath-id="238" data-magicpath-path="CreativePlusDashboard.tsx">
                        <CheckCircle className="w-4 h-4" data-magicpath-id="239" data-magicpath-path="CreativePlusDashboard.tsx" />
                        <span data-magicpath-id="240" data-magicpath-path="CreativePlusDashboard.tsx">Approve</span>
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
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="241" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-500/5 to-pink-500/5" data-magicpath-id="242" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="243" data-magicpath-path="CreativePlusDashboard.tsx">
                <Globe className="w-5 h-5 text-purple-600" data-magicpath-id="244" data-magicpath-path="CreativePlusDashboard.tsx" />
                <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="245" data-magicpath-path="CreativePlusDashboard.tsx">Localization & Translation</h3>
              </div>
            </div>

            <div className="p-6" data-magicpath-id="246" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="space-y-4" data-magicpath-id="247" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200" data-magicpath-id="248" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center space-x-2 mb-2" data-magicpath-id="249" data-magicpath-path="CreativePlusDashboard.tsx">
                    <span className="text-xs font-semibold text-blue-700" data-magicpath-id="250" data-magicpath-path="CreativePlusDashboard.tsx">🇺🇸 EN Variant</span>
                  </div>
                  <p className="text-sm text-gray-900 font-medium" data-magicpath-id="251" data-magicpath-path="CreativePlusDashboard.tsx">
                    Escape to Paradise 🌞 — Book Your Dream Caribbean Cruise Today!
                  </p>
                </div>

                <div className="flex items-center justify-center" data-magicpath-id="252" data-magicpath-path="CreativePlusDashboard.tsx">
                  <ArrowRight className="w-5 h-5 text-gray-400" data-magicpath-id="253" data-magicpath-path="CreativePlusDashboard.tsx" />
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200" data-magicpath-id="254" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center space-x-2 mb-2" data-magicpath-id="255" data-magicpath-path="CreativePlusDashboard.tsx">
                    <span className="text-xs font-semibold text-purple-700" data-magicpath-id="256" data-magicpath-path="CreativePlusDashboard.tsx">🇨🇦 FR-CA Variant</span>
                  </div>
                  <p className="text-sm text-gray-900 font-medium" data-magicpath-id="257" data-magicpath-path="CreativePlusDashboard.tsx">
                    Évadez-vous vers le paradis 🌴 Réservez votre croisière de rêve aujourd'hui!
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-2" data-magicpath-id="258" data-magicpath-path="CreativePlusDashboard.tsx">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-lg transition-all" data-magicpath-id="259" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Globe className="w-4 h-4" data-magicpath-id="260" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="261" data-magicpath-path="CreativePlusDashboard.tsx">Auto-Generate Localized Copy</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-purple-300 hover:border-purple-400 text-purple-700 font-medium rounded-lg transition-all" data-magicpath-id="262" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Eye className="w-4 h-4" data-magicpath-id="263" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="264" data-magicpath-path="CreativePlusDashboard.tsx">Preview</span>
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
      }} className="space-y-6" data-magicpath-id="265" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="266" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="267" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="268" data-magicpath-path="CreativePlusDashboard.tsx">
                <Sparkles className="w-5 h-5 text-[#00A3E0]" />
                <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="269" data-magicpath-path="CreativePlusDashboard.tsx">AI Insights</h3>
              </div>
            </div>

            <div className="p-4 space-y-3 max-h-[500px] overflow-y-auto" data-magicpath-id="270" data-magicpath-path="CreativePlusDashboard.tsx">
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
            }} className={`p-3 rounded-lg border transition-all cursor-pointer ${insight.type === 'brand' ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50' : insight.type === 'social' ? 'bg-purple-50/50 border-purple-200 hover:bg-purple-50' : 'bg-orange-50/50 border-orange-200 hover:bg-orange-50'}`} data-magicpath-id="271" data-magicpath-path="CreativePlusDashboard.tsx">
                  <h4 className="font-semibold text-gray-900 text-xs mb-1" data-magicpath-id="272" data-magicpath-path="CreativePlusDashboard.tsx">{insight.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed" data-magicpath-id="273" data-magicpath-path="CreativePlusDashboard.tsx">{insight.description}</p>
                  <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="mt-2 text-xs font-medium text-[#0055A5] hover:text-[#00A3E0] transition-colors" data-magicpath-id="274" data-magicpath-path="CreativePlusDashboard.tsx">
                    Apply Insight →
                  </motion.button>
                </motion.div>)}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white" data-magicpath-id="275" data-magicpath-path="CreativePlusDashboard.tsx">
            <CheckCircle className="w-8 h-8 mb-3 opacity-90" data-magicpath-id="276" data-magicpath-path="CreativePlusDashboard.tsx" />
            <h3 className="text-lg font-bold mb-2" data-magicpath-id="277" data-magicpath-path="CreativePlusDashboard.tsx">Compliance Check</h3>
            <p className="text-sm opacity-90 mb-4" data-magicpath-id="278" data-magicpath-path="CreativePlusDashboard.tsx">
              All copy variants comply with brand guidelines and legal requirements.
            </p>
            <div className="space-y-2" data-magicpath-id="279" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-full flex items-center justify-center space-x-2 bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors" data-magicpath-id="280" data-magicpath-path="CreativePlusDashboard.tsx">
                <ArrowRight className="w-4 h-4" data-magicpath-id="281" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span data-magicpath-id="282" data-magicpath-path="CreativePlusDashboard.tsx">Send to Design Studio</span>
              </motion.button>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-full flex items-center justify-center space-x-2 bg-white/20 text-white font-medium py-2 px-4 rounded-lg hover:bg-white/30 transition-colors" data-magicpath-id="283" data-magicpath-path="CreativePlusDashboard.tsx">
                <Save className="w-4 h-4" data-magicpath-id="284" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span data-magicpath-id="285" data-magicpath-path="CreativePlusDashboard.tsx">Save Draft</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
  const renderDesignStudio = () => <div data-magicpath-id="286" data-magicpath-path="CreativePlusDashboard.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-6" data-magicpath-id="287" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="flex items-center text-sm text-gray-500 mb-4" data-magicpath-id="288" data-magicpath-path="CreativePlusDashboard.tsx">
          <span data-magicpath-id="289" data-magicpath-path="CreativePlusDashboard.tsx">Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-2" data-magicpath-id="290" data-magicpath-path="CreativePlusDashboard.tsx" />
          <span data-magicpath-id="291" data-magicpath-path="CreativePlusDashboard.tsx">Sail into 2025</span>
          <ChevronRight className="w-4 h-4 mx-2" data-magicpath-id="292" data-magicpath-path="CreativePlusDashboard.tsx" />
          <span className="text-[#0055A5] font-medium" data-magicpath-id="293" data-magicpath-path="CreativePlusDashboard.tsx">Design Studio</span>
        </div>

        <div className="flex items-center justify-between" data-magicpath-id="294" data-magicpath-path="CreativePlusDashboard.tsx">
          <div data-magicpath-id="295" data-magicpath-path="CreativePlusDashboard.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" data-magicpath-id="296" data-magicpath-path="CreativePlusDashboard.tsx">Design Studio</h2>
            <div className="flex items-center space-x-4" data-magicpath-id="297" data-magicpath-path="CreativePlusDashboard.tsx">
              <span className="text-gray-600" data-magicpath-id="298" data-magicpath-path="CreativePlusDashboard.tsx">Campaign: Sail into 2025</span>
              <div className="flex items-center space-x-2" data-magicpath-id="299" data-magicpath-path="CreativePlusDashboard.tsx">
                <span className="text-sm text-gray-500" data-magicpath-id="300" data-magicpath-path="CreativePlusDashboard.tsx">Status:</span>
                <div className="flex items-center space-x-1" data-magicpath-id="301" data-magicpath-path="CreativePlusDashboard.tsx">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" data-magicpath-id="302" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span className="text-sm text-gray-600" data-magicpath-id="303" data-magicpath-path="CreativePlusDashboard.tsx">Copy</span>
                </div>
                <div className="flex items-center space-x-1" data-magicpath-id="304" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Clock className="w-4 h-4 text-[#FDB913]" data-magicpath-id="305" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span className="text-sm text-gray-600" data-magicpath-id="306" data-magicpath-path="CreativePlusDashboard.tsx">Design</span>
                </div>
                <div className="flex items-center space-x-1" data-magicpath-id="307" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Circle className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-600" data-magicpath-id="308" data-magicpath-path="CreativePlusDashboard.tsx">Workflow</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3" data-magicpath-id="309" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden" data-magicpath-id="310" data-magicpath-path="CreativePlusDashboard.tsx">
              <button onClick={() => setLanguage('EN')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'EN' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`} data-magicpath-id="311" data-magicpath-path="CreativePlusDashboard.tsx">
                🇺🇸 EN
              </button>
              <button onClick={() => setLanguage('FR-CA')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'FR-CA' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`} data-magicpath-id="312" data-magicpath-path="CreativePlusDashboard.tsx">
                🇨🇦 FR-CA
              </button>
            </div>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all" data-magicpath-id="313" data-magicpath-path="CreativePlusDashboard.tsx">
              <ArrowRight className="w-4 h-4" data-magicpath-id="314" data-magicpath-path="CreativePlusDashboard.tsx" />
              <span data-magicpath-id="315" data-magicpath-path="CreativePlusDashboard.tsx">Move to Workflow Center</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-magicpath-id="316" data-magicpath-path="CreativePlusDashboard.tsx">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.1
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="317" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="318" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center justify-between" data-magicpath-id="319" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="320" data-magicpath-path="CreativePlusDashboard.tsx">Design Brief</h3>
              <motion.button whileHover={{
              scale: 1.1,
              rotate: 90
            }} whileTap={{
              scale: 0.9
            }} className="p-1 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded transition-colors" data-magicpath-id="321" data-magicpath-path="CreativePlusDashboard.tsx">
                <RefreshCw className="w-4 h-4" data-magicpath-id="322" data-magicpath-path="CreativePlusDashboard.tsx" />
              </motion.button>
            </div>
          </div>

          <div className="p-6 space-y-4" data-magicpath-id="323" data-magicpath-path="CreativePlusDashboard.tsx">
            <div data-magicpath-id="324" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="325" data-magicpath-path="CreativePlusDashboard.tsx">Objective</h4>
              <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="326" data-magicpath-path="CreativePlusDashboard.tsx">
                Promote early bird discounts for Caribbean & Alaska cruises for 2025.
              </p>
            </div>

            <div data-magicpath-id="327" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="328" data-magicpath-path="CreativePlusDashboard.tsx">Visual Goals</h4>
              <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="329" data-magicpath-path="CreativePlusDashboard.tsx">
                Showcase tropical beach vibes and stunning ship amenities.
              </p>
            </div>

            <div data-magicpath-id="330" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="331" data-magicpath-path="CreativePlusDashboard.tsx">Key Copy</h4>
              <p className="text-sm text-gray-700 leading-relaxed italic" data-magicpath-id="332" data-magicpath-path="CreativePlusDashboard.tsx">
                "Escape to Paradise — Book Your Dream Caribbean Cruise Today!"
              </p>
            </div>

            <div data-magicpath-id="333" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="334" data-magicpath-path="CreativePlusDashboard.tsx">Tone & Palette</h4>
              <div className="space-y-2" data-magicpath-id="335" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="flex flex-wrap gap-2" data-magicpath-id="336" data-magicpath-path="CreativePlusDashboard.tsx">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded" data-magicpath-id="337" data-magicpath-path="CreativePlusDashboard.tsx">
                    Fun
                  </span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded" data-magicpath-id="338" data-magicpath-path="CreativePlusDashboard.tsx">
                    Adventurous
                  </span>
                </div>
                <div className="flex gap-2" data-magicpath-id="339" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="w-8 h-8 rounded bg-[#FDB913] border-2 border-gray-200" title="Golden Yellow" data-magicpath-id="340" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <div className="w-8 h-8 rounded bg-[#00A3E0] border-2 border-gray-200" title="Sky Blue" data-magicpath-id="341" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <div className="w-8 h-8 rounded bg-[#0055A5] border-2 border-gray-200" title="Deep Blue" data-magicpath-id="342" data-magicpath-path="CreativePlusDashboard.tsx" />
                </div>
              </div>
            </div>

            <div data-magicpath-id="343" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="344" data-magicpath-path="CreativePlusDashboard.tsx">Assets Needed</h4>
              <div className="flex flex-wrap gap-2" data-magicpath-id="345" data-magicpath-path="CreativePlusDashboard.tsx">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded" data-magicpath-id="346" data-magicpath-path="CreativePlusDashboard.tsx">
                  Email Hero
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded" data-magicpath-id="347" data-magicpath-path="CreativePlusDashboard.tsx">
                  Instagram Ad
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded" data-magicpath-id="348" data-magicpath-path="CreativePlusDashboard.tsx">
                  Facebook Banner
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded" data-magicpath-id="349" data-magicpath-path="CreativePlusDashboard.tsx">
                  Push Notification
                </span>
              </div>
            </div>

            <div data-magicpath-id="350" data-magicpath-path="CreativePlusDashboard.tsx">
              <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2" data-magicpath-id="351" data-magicpath-path="CreativePlusDashboard.tsx">Localization</h4>
              <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="352" data-magicpath-path="CreativePlusDashboard.tsx">
                Ensure FR-CA design is available for French-speaking markets.
              </p>
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors" data-magicpath-id="353" data-magicpath-path="CreativePlusDashboard.tsx">
              <RefreshCw className="w-4 h-4" data-magicpath-id="354" data-magicpath-path="CreativePlusDashboard.tsx" />
              <span data-magicpath-id="355" data-magicpath-path="CreativePlusDashboard.tsx">Refresh from Workfront</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="lg:col-span-2 space-y-6" data-magicpath-id="356" data-magicpath-path="CreativePlusDashboard.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="357" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="358" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="359" data-magicpath-path="CreativePlusDashboard.tsx">AI Design Prompt Composer</h3>
            </div>

            <div className="p-6" data-magicpath-id="360" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="space-y-4 mb-6" data-magicpath-id="361" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-4 border border-amber-200" data-magicpath-id="362" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-start space-x-3" data-magicpath-id="363" data-magicpath-path="CreativePlusDashboard.tsx">
                    <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" data-magicpath-id="364" data-magicpath-path="CreativePlusDashboard.tsx" />
                    <div className="flex-1" data-magicpath-id="365" data-magicpath-path="CreativePlusDashboard.tsx">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2" data-magicpath-id="366" data-magicpath-path="CreativePlusDashboard.tsx">Caribbean Cruise Design Prompt</h4>
                      <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="367" data-magicpath-path="CreativePlusDashboard.tsx">
                        Generate 3 hero images with a tropical beach view, golden hues, and people relaxing on the beach. 
                        Ensure a relaxing, escape-focused theme. Text overlay: "Book Your Dream Cruise Today!" Use 
                        #CruiseGoals for Instagram.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200" data-magicpath-id="368" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-start space-x-3" data-magicpath-id="369" data-magicpath-path="CreativePlusDashboard.tsx">
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" data-magicpath-id="370" data-magicpath-path="CreativePlusDashboard.tsx" />
                    <div className="flex-1" data-magicpath-id="371" data-magicpath-path="CreativePlusDashboard.tsx">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2" data-magicpath-id="372" data-magicpath-path="CreativePlusDashboard.tsx">Alaska Cruise Design Prompt</h4>
                      <p className="text-sm text-gray-700 leading-relaxed" data-magicpath-id="373" data-magicpath-path="CreativePlusDashboard.tsx">
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
            }} className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all" data-magicpath-id="374" data-magicpath-path="CreativePlusDashboard.tsx">
                <Sparkles className="w-5 h-5" />
                <span data-magicpath-id="375" data-magicpath-path="CreativePlusDashboard.tsx">Generate Design Variants</span>
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
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="376" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="377" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="378" data-magicpath-path="CreativePlusDashboard.tsx">Design Variant Gallery</h3>
            </div>

            <div className="p-6" data-magicpath-id="379" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="grid grid-cols-1 gap-4" data-magicpath-id="380" data-magicpath-path="CreativePlusDashboard.tsx">
                {designAssets.map((asset, index) => <motion.div key={asset.id} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.1 * index
              }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200 hover:border-[#00A3E0]/30 transition-all" data-magicpath-id="381" data-magicpath-path="CreativePlusDashboard.tsx">
                    <div className="flex items-start space-x-4" data-magicpath-id="382" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#00A3E0]/20 to-[#0055A5]/20 rounded-lg flex items-center justify-center text-6xl border-2 border-dashed border-[#00A3E0]/30" data-magicpath-id="383" data-magicpath-path="CreativePlusDashboard.tsx">
                        {asset.imageUrl}
                      </div>

                      <div className="flex-1" data-magicpath-id="384" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className="flex items-center space-x-2 mb-3" data-magicpath-id="385" data-magicpath-path="CreativePlusDashboard.tsx">
                          <span className="px-2 py-1 bg-[#00A3E0]/10 text-[#0055A5] text-xs font-semibold rounded" data-magicpath-id="386" data-magicpath-path="CreativePlusDashboard.tsx">
                            #{asset.id}
                          </span>
                          <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded" data-magicpath-id="387" data-magicpath-path="CreativePlusDashboard.tsx">
                            {asset.channel}
                          </span>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4" data-magicpath-id="388" data-magicpath-path="CreativePlusDashboard.tsx">
                          {asset.predictedCTR && <div className="bg-white rounded p-2 border border-gray-200" data-magicpath-id="389" data-magicpath-path="CreativePlusDashboard.tsx">
                              <span className="text-xs text-gray-500" data-magicpath-id="390" data-magicpath-path="CreativePlusDashboard.tsx">Predicted CTR</span>
                              <div className="text-sm font-bold text-gray-900" data-magicpath-id="391" data-magicpath-path="CreativePlusDashboard.tsx">{asset.predictedCTR}%</div>
                            </div>}
                          <div className="bg-white rounded p-2 border border-gray-200" data-magicpath-id="392" data-magicpath-path="CreativePlusDashboard.tsx">
                            <span className="text-xs text-gray-500" data-magicpath-id="393" data-magicpath-path="CreativePlusDashboard.tsx">Design Match</span>
                            <div className="text-sm font-bold text-[#00A3E0]" data-magicpath-id="394" data-magicpath-path="CreativePlusDashboard.tsx">{asset.designMatch}%</div>
                          </div>
                          <div className="bg-white rounded p-2 border border-gray-200" data-magicpath-id="395" data-magicpath-path="CreativePlusDashboard.tsx">
                            <span className="text-xs text-gray-500" data-magicpath-id="396" data-magicpath-path="CreativePlusDashboard.tsx">Trend Match</span>
                            <div className="text-sm font-bold text-purple-600" data-magicpath-id="397" data-magicpath-path="CreativePlusDashboard.tsx">{asset.trendMatch}%</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2" data-magicpath-id="398" data-magicpath-path="CreativePlusDashboard.tsx">
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 hover:text-[#0055A5] font-medium rounded-lg transition-all text-sm" data-magicpath-id="399" data-magicpath-path="CreativePlusDashboard.tsx">
                            <Edit className="w-4 h-4" data-magicpath-id="400" data-magicpath-path="CreativePlusDashboard.tsx" />
                            <span data-magicpath-id="401" data-magicpath-path="CreativePlusDashboard.tsx">Edit</span>
                          </motion.button>
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="flex items-center justify-center space-x-2 px-3 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 hover:text-[#0055A5] font-medium rounded-lg transition-all text-sm" data-magicpath-id="402" data-magicpath-path="CreativePlusDashboard.tsx">
                            <Download className="w-4 h-4" data-magicpath-id="403" data-magicpath-path="CreativePlusDashboard.tsx" />
                          </motion.button>
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow hover:shadow-md transition-all text-sm" data-magicpath-id="404" data-magicpath-path="CreativePlusDashboard.tsx">
                            <CheckCircle className="w-4 h-4" data-magicpath-id="405" data-magicpath-path="CreativePlusDashboard.tsx" />
                            <span data-magicpath-id="406" data-magicpath-path="CreativePlusDashboard.tsx">Approve</span>
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
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="407" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-purple-500/5 to-pink-500/5" data-magicpath-id="408" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="409" data-magicpath-path="CreativePlusDashboard.tsx">
                <Globe className="w-5 h-5 text-purple-600" data-magicpath-id="410" data-magicpath-path="CreativePlusDashboard.tsx" />
                <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="411" data-magicpath-path="CreativePlusDashboard.tsx">Localization & Translation</h3>
              </div>
            </div>

            <div className="p-6" data-magicpath-id="412" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="grid grid-cols-2 gap-4 mb-6" data-magicpath-id="413" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200" data-magicpath-id="414" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center justify-between mb-3" data-magicpath-id="415" data-magicpath-path="CreativePlusDashboard.tsx">
                    <span className="text-xs font-semibold text-blue-700" data-magicpath-id="416" data-magicpath-path="CreativePlusDashboard.tsx">🇺🇸 EN Design</span>
                  </div>
                  <div className="w-full h-32 bg-gradient-to-br from-[#00A3E0]/20 to-[#0055A5]/20 rounded flex items-center justify-center text-4xl border-2 border-dashed border-blue-300" data-magicpath-id="417" data-magicpath-path="CreativePlusDashboard.tsx">
                    🏖️
                  </div>
                  <p className="text-xs text-gray-700 mt-2 font-medium" data-magicpath-id="418" data-magicpath-path="CreativePlusDashboard.tsx">
                    Book Your Dream Cruise Today!
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200" data-magicpath-id="419" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center justify-between mb-3" data-magicpath-id="420" data-magicpath-path="CreativePlusDashboard.tsx">
                    <span className="text-xs font-semibold text-purple-700" data-magicpath-id="421" data-magicpath-path="CreativePlusDashboard.tsx">🇨🇦 FR-CA Design</span>
                  </div>
                  <div className="w-full h-32 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded flex items-center justify-center text-4xl border-2 border-dashed border-purple-300" data-magicpath-id="422" data-magicpath-path="CreativePlusDashboard.tsx">
                    🌴
                  </div>
                  <p className="text-xs text-gray-700 mt-2 font-medium" data-magicpath-id="423" data-magicpath-path="CreativePlusDashboard.tsx">
                    Réservez votre croisière de rêve aujourd'hui!
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2" data-magicpath-id="424" data-magicpath-path="CreativePlusDashboard.tsx">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium rounded-lg transition-all" data-magicpath-id="425" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Globe className="w-4 h-4" data-magicpath-id="426" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="427" data-magicpath-path="CreativePlusDashboard.tsx">Generate Localized Visuals</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-purple-300 hover:border-purple-400 text-purple-700 font-medium rounded-lg transition-all" data-magicpath-id="428" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Eye className="w-4 h-4" data-magicpath-id="429" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="430" data-magicpath-path="CreativePlusDashboard.tsx">Preview</span>
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
      }} className="space-y-6" data-magicpath-id="431" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="432" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="433" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="434" data-magicpath-path="CreativePlusDashboard.tsx">
                <Sparkles className="w-5 h-5 text-[#00A3E0]" />
                <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="435" data-magicpath-path="CreativePlusDashboard.tsx">AI Insights</h3>
              </div>
            </div>

            <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto" data-magicpath-id="436" data-magicpath-path="CreativePlusDashboard.tsx">
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
            }} className={`p-3 rounded-lg border transition-all cursor-pointer ${insight.type === 'brand' ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50' : insight.type === 'social' ? 'bg-purple-50/50 border-purple-200 hover:bg-purple-50' : 'bg-green-50/50 border-green-200 hover:bg-green-50'}`} data-magicpath-id="437" data-magicpath-path="CreativePlusDashboard.tsx">
                  <h4 className="font-semibold text-gray-900 text-xs mb-1" data-magicpath-id="438" data-magicpath-path="CreativePlusDashboard.tsx">{insight.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed" data-magicpath-id="439" data-magicpath-path="CreativePlusDashboard.tsx">{insight.description}</p>
                  <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="mt-2 text-xs font-medium text-[#0055A5] hover:text-[#00A3E0] transition-colors" data-magicpath-id="440" data-magicpath-path="CreativePlusDashboard.tsx">
                    Apply Insight →
                  </motion.button>
                </motion.div>)}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="441" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="442" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="443" data-magicpath-path="CreativePlusDashboard.tsx">
                <Layers className="w-5 h-5 text-[#0055A5]" data-magicpath-id="444" data-magicpath-path="CreativePlusDashboard.tsx" />
                <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="445" data-magicpath-path="CreativePlusDashboard.tsx">Compliance & Approval</h3>
              </div>
            </div>

            <div className="p-6" data-magicpath-id="446" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="space-y-3 mb-6" data-magicpath-id="447" data-magicpath-path="CreativePlusDashboard.tsx">
                {complianceItems.map((item, idx) => <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200" data-magicpath-id="448" data-magicpath-path="CreativePlusDashboard.tsx">
                    <span className="text-sm font-medium text-gray-700" data-magicpath-id="449" data-magicpath-path="CreativePlusDashboard.tsx">{item.name}</span>
                    <div className="flex items-center space-x-2" data-magicpath-id="450" data-magicpath-path="CreativePlusDashboard.tsx">
                      {item.status === 'pass' && <CheckCircle className="w-5 h-5 text-green-600" data-magicpath-id="451" data-magicpath-path="CreativePlusDashboard.tsx" />}
                      {item.status === 'pending' && <AlertTriangle className="w-5 h-5 text-yellow-600" data-magicpath-id="452" data-magicpath-path="CreativePlusDashboard.tsx" />}
                      {item.status === 'fail' && <AlertCircle className="w-5 h-5 text-red-600" data-magicpath-id="453" data-magicpath-path="CreativePlusDashboard.tsx" />}
                      {item.message && <span className="text-xs text-gray-600" data-magicpath-id="454" data-magicpath-path="CreativePlusDashboard.tsx">{item.message}</span>}
                    </div>
                  </div>)}
              </div>

              <div className="space-y-2" data-magicpath-id="455" data-magicpath-path="CreativePlusDashboard.tsx">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-semibold rounded-lg transition-colors" data-magicpath-id="456" data-magicpath-path="CreativePlusDashboard.tsx">
                  <AlertTriangle className="w-4 h-4" data-magicpath-id="457" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="458" data-magicpath-path="CreativePlusDashboard.tsx">Send for Legal Approval</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all" data-magicpath-id="459" data-magicpath-path="CreativePlusDashboard.tsx">
                  <ArrowRight className="w-4 h-4" data-magicpath-id="460" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="461" data-magicpath-path="CreativePlusDashboard.tsx">Approve & Send to Workflow</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors" data-magicpath-id="462" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Save className="w-4 h-4" data-magicpath-id="463" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="464" data-magicpath-path="CreativePlusDashboard.tsx">Save Draft</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
  const renderWorkflow = () => <div data-magicpath-id="465" data-magicpath-path="CreativePlusDashboard.tsx">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="mb-6" data-magicpath-id="466" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="flex items-center text-sm text-gray-500 mb-4" data-magicpath-id="467" data-magicpath-path="CreativePlusDashboard.tsx">
          <span data-magicpath-id="468" data-magicpath-path="CreativePlusDashboard.tsx">Dashboard</span>
          <ChevronRight className="w-4 h-4 mx-2" data-magicpath-id="469" data-magicpath-path="CreativePlusDashboard.tsx" />
          <span data-magicpath-id="470" data-magicpath-path="CreativePlusDashboard.tsx">Sail into 2025</span>
          <ChevronRight className="w-4 h-4 mx-2" data-magicpath-id="471" data-magicpath-path="CreativePlusDashboard.tsx" />
          <span className="text-[#0055A5] font-medium" data-magicpath-id="472" data-magicpath-path="CreativePlusDashboard.tsx">Workflow Center</span>
        </div>

        <div className="flex items-center justify-between" data-magicpath-id="473" data-magicpath-path="CreativePlusDashboard.tsx">
          <div data-magicpath-id="474" data-magicpath-path="CreativePlusDashboard.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" data-magicpath-id="475" data-magicpath-path="CreativePlusDashboard.tsx">Workflow Center</h2>
            <div className="flex items-center space-x-4" data-magicpath-id="476" data-magicpath-path="CreativePlusDashboard.tsx">
              <span className="text-gray-600" data-magicpath-id="477" data-magicpath-path="CreativePlusDashboard.tsx">Campaign: Sail into 2025</span>
              <div className="flex items-center space-x-2" data-magicpath-id="478" data-magicpath-path="CreativePlusDashboard.tsx">
                <span className="text-sm text-gray-500" data-magicpath-id="479" data-magicpath-path="CreativePlusDashboard.tsx">Status:</span>
                <div className="flex items-center space-x-1" data-magicpath-id="480" data-magicpath-path="CreativePlusDashboard.tsx">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" data-magicpath-id="481" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span className="text-sm text-gray-600" data-magicpath-id="482" data-magicpath-path="CreativePlusDashboard.tsx">Copy</span>
                </div>
                <div className="flex items-center space-x-1" data-magicpath-id="483" data-magicpath-path="CreativePlusDashboard.tsx">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" data-magicpath-id="484" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span className="text-sm text-gray-600" data-magicpath-id="485" data-magicpath-path="CreativePlusDashboard.tsx">Design</span>
                </div>
                <div className="flex items-center space-x-1" data-magicpath-id="486" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Circle className="w-4 h-4 text-gray-300" />
                  <span className="text-sm text-gray-600" data-magicpath-id="487" data-magicpath-path="CreativePlusDashboard.tsx">Workflow</span>
                </div>
              </div>
              <div className="flex items-center space-x-2" data-magicpath-id="488" data-magicpath-path="CreativePlusDashboard.tsx">
                <Calendar className="w-4 h-4 text-gray-500" data-magicpath-id="489" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="text-sm text-gray-600" data-magicpath-id="490" data-magicpath-path="CreativePlusDashboard.tsx">Launch: Nov 22, 2025</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3" data-magicpath-id="491" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden" data-magicpath-id="492" data-magicpath-path="CreativePlusDashboard.tsx">
              <button onClick={() => setLanguage('EN')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'EN' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`} data-magicpath-id="493" data-magicpath-path="CreativePlusDashboard.tsx">
                🇺🇸 EN
              </button>
              <button onClick={() => setLanguage('FR-CA')} className={`px-4 py-2 text-sm font-medium transition-colors ${language === 'FR-CA' ? 'bg-[#00A3E0] text-white' : 'text-gray-600 hover:bg-gray-50'}`} data-magicpath-id="494" data-magicpath-path="CreativePlusDashboard.tsx">
                🇨🇦 FR-CA
              </button>
            </div>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg shadow-md transition-all" data-magicpath-id="495" data-magicpath-path="CreativePlusDashboard.tsx">
              <Play className="w-4 h-4" data-magicpath-id="496" data-magicpath-path="CreativePlusDashboard.tsx" />
              <span data-magicpath-id="497" data-magicpath-path="CreativePlusDashboard.tsx">Simulate Journey</span>
            </motion.button>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all" data-magicpath-id="498" data-magicpath-path="CreativePlusDashboard.tsx">
              <Rocket className="w-4 h-4" data-magicpath-id="499" data-magicpath-path="CreativePlusDashboard.tsx" />
              <span data-magicpath-id="500" data-magicpath-path="CreativePlusDashboard.tsx">Launch Campaign</span>
            </motion.button>

            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-all" data-magicpath-id="501" data-magicpath-path="CreativePlusDashboard.tsx">
              <FileDown className="w-4 h-4" data-magicpath-id="502" data-magicpath-path="CreativePlusDashboard.tsx" />
              <span data-magicpath-id="503" data-magicpath-path="CreativePlusDashboard.tsx">Export Summary</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="space-y-6" data-magicpath-id="504" data-magicpath-path="CreativePlusDashboard.tsx">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="505" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="506" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center justify-between" data-magicpath-id="507" data-magicpath-path="CreativePlusDashboard.tsx">
              <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="508" data-magicpath-path="CreativePlusDashboard.tsx">Campaign Assets Overview</h3>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all" data-magicpath-id="509" data-magicpath-path="CreativePlusDashboard.tsx">
                <Package className="w-4 h-4" data-magicpath-id="510" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span data-magicpath-id="511" data-magicpath-path="CreativePlusDashboard.tsx">Bundle for AJO Journey</span>
              </motion.button>
            </div>
          </div>

          <div className="overflow-x-auto" data-magicpath-id="512" data-magicpath-path="CreativePlusDashboard.tsx">
            <table className="w-full" data-magicpath-id="513" data-magicpath-path="CreativePlusDashboard.tsx">
              <thead className="bg-gray-50 border-b border-gray-100" data-magicpath-id="514" data-magicpath-path="CreativePlusDashboard.tsx">
                <tr data-magicpath-id="515" data-magicpath-path="CreativePlusDashboard.tsx">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="516" data-magicpath-path="CreativePlusDashboard.tsx">
                    Asset Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="517" data-magicpath-path="CreativePlusDashboard.tsx">
                    EN Version
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="518" data-magicpath-path="CreativePlusDashboard.tsx">
                    FR-CA Version
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="519" data-magicpath-path="CreativePlusDashboard.tsx">
                    Channel
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="520" data-magicpath-path="CreativePlusDashboard.tsx">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="521" data-magicpath-path="CreativePlusDashboard.tsx">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100" data-magicpath-id="522" data-magicpath-path="CreativePlusDashboard.tsx">
                {workflowAssets.map((asset, index) => <motion.tr key={index} initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="hover:bg-gray-50 transition-colors" data-magicpath-id="523" data-magicpath-path="CreativePlusDashboard.tsx">
                    <td className="px-6 py-4" data-magicpath-id="524" data-magicpath-path="CreativePlusDashboard.tsx">
                      <span className="font-semibold text-gray-900" data-magicpath-id="525" data-magicpath-path="CreativePlusDashboard.tsx">{asset.type}</span>
                    </td>
                    <td className="px-6 py-4" data-magicpath-id="526" data-magicpath-path="CreativePlusDashboard.tsx">
                      <span className="text-sm text-gray-700" data-magicpath-id="527" data-magicpath-path="CreativePlusDashboard.tsx">{asset.enVersion}</span>
                    </td>
                    <td className="px-6 py-4" data-magicpath-id="528" data-magicpath-path="CreativePlusDashboard.tsx">
                      <span className="text-sm text-gray-700" data-magicpath-id="529" data-magicpath-path="CreativePlusDashboard.tsx">{asset.frVersion}</span>
                    </td>
                    <td className="px-6 py-4" data-magicpath-id="530" data-magicpath-path="CreativePlusDashboard.tsx">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded" data-magicpath-id="531" data-magicpath-path="CreativePlusDashboard.tsx">
                        {asset.channel}
                      </span>
                    </td>
                    <td className="px-6 py-4" data-magicpath-id="532" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex items-center space-x-2" data-magicpath-id="533" data-magicpath-path="CreativePlusDashboard.tsx">
                        <CheckCircle className="w-4 h-4 text-green-600" data-magicpath-id="534" data-magicpath-path="CreativePlusDashboard.tsx" />
                        <span className="text-sm font-medium text-green-700" data-magicpath-id="535" data-magicpath-path="CreativePlusDashboard.tsx">Approved</span>
                      </div>
                    </td>
                    <td className="px-6 py-4" data-magicpath-id="536" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex items-center space-x-2" data-magicpath-id="537" data-magicpath-path="CreativePlusDashboard.tsx">
                        <motion.button whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors" data-magicpath-id="538" data-magicpath-path="CreativePlusDashboard.tsx">
                          <Eye className="w-4 h-4" data-magicpath-id="539" data-magicpath-path="CreativePlusDashboard.tsx" />
                        </motion.button>
                        <motion.button whileHover={{
                      scale: 1.05
                    }} whileTap={{
                      scale: 0.95
                    }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors" data-magicpath-id="540" data-magicpath-path="CreativePlusDashboard.tsx">
                          <Download className="w-4 h-4" data-magicpath-id="541" data-magicpath-path="CreativePlusDashboard.tsx" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>)}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="542" data-magicpath-path="CreativePlusDashboard.tsx">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.2
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="543" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="544" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center justify-between" data-magicpath-id="545" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="flex items-center space-x-2" data-magicpath-id="546" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Users className="w-5 h-5 text-[#0055A5]" data-magicpath-id="547" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="548" data-magicpath-path="CreativePlusDashboard.tsx">Audience Targeting</h3>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex items-center space-x-1 px-3 py-1 bg-[#00A3E0]/10 hover:bg-[#00A3E0]/20 text-[#0055A5] text-xs font-medium rounded-lg transition-all" data-magicpath-id="549" data-magicpath-path="CreativePlusDashboard.tsx">
                  <RefreshCw className="w-3 h-3" data-magicpath-id="550" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="551" data-magicpath-path="CreativePlusDashboard.tsx">Sync from AEP</span>
                </motion.button>
              </div>
            </div>

            <div className="p-6" data-magicpath-id="552" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="space-y-4" data-magicpath-id="553" data-magicpath-path="CreativePlusDashboard.tsx">
                {audienceSegments.map((segment, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: index * 0.1
              }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 hover:border-[#00A3E0]/30 transition-all" data-magicpath-id="554" data-magicpath-path="CreativePlusDashboard.tsx">
                    <div className="flex items-start justify-between mb-3" data-magicpath-id="555" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex-1" data-magicpath-id="556" data-magicpath-path="CreativePlusDashboard.tsx">
                        <h4 className="font-semibold text-gray-900 mb-1" data-magicpath-id="557" data-magicpath-path="CreativePlusDashboard.tsx">{segment.name}</h4>
                        <p className="text-xs text-gray-600 mb-2" data-magicpath-id="558" data-magicpath-path="CreativePlusDashboard.tsx">{segment.assignedAssets}</p>
                      </div>
                      <div className="text-right" data-magicpath-id="559" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className="text-xl font-bold text-[#00A3E0]" data-magicpath-id="560" data-magicpath-path="CreativePlusDashboard.tsx">{segment.performance}%</div>
                        <span className="text-xs text-gray-500" data-magicpath-id="561" data-magicpath-path="CreativePlusDashboard.tsx">CTR</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded p-3 border border-blue-200 mb-3" data-magicpath-id="562" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex items-start space-x-2" data-magicpath-id="563" data-magicpath-path="CreativePlusDashboard.tsx">
                        <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" data-magicpath-id="564" data-magicpath-path="CreativePlusDashboard.tsx" />
                        <p className="text-xs text-blue-800" data-magicpath-id="565" data-magicpath-path="CreativePlusDashboard.tsx">{segment.aiSuggestion}</p>
                      </div>
                    </div>

                    <motion.button whileHover={{
                  scale: 1.02
                }} whileTap={{
                  scale: 0.98
                }} className="w-full px-3 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 hover:text-[#0055A5] text-sm font-medium rounded-lg transition-all" data-magicpath-id="566" data-magicpath-path="CreativePlusDashboard.tsx">
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
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="567" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="568" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center justify-between" data-magicpath-id="569" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="flex items-center space-x-2" data-magicpath-id="570" data-magicpath-path="CreativePlusDashboard.tsx">
                  <GitBranch className="w-5 h-5 text-[#0055A5]" data-magicpath-id="571" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="572" data-magicpath-path="CreativePlusDashboard.tsx">Journey Builder</h3>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex items-center space-x-1 px-3 py-1 bg-purple-100 hover:bg-purple-200 text-purple-700 text-xs font-medium rounded-lg transition-all" data-magicpath-id="573" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Zap className="w-3 h-3" data-magicpath-id="574" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="575" data-magicpath-path="CreativePlusDashboard.tsx">Generate Journey</span>
                </motion.button>
              </div>
            </div>

            <div className="p-6" data-magicpath-id="576" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="space-y-3" data-magicpath-id="577" data-magicpath-path="CreativePlusDashboard.tsx">
                {journeySteps.map((step, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: index * 0.1
              }} className="relative" data-magicpath-id="578" data-magicpath-path="CreativePlusDashboard.tsx">
                    {index < journeySteps.length - 1 && <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#00A3E0] to-[#0055A5]" data-magicpath-id="579" data-magicpath-path="CreativePlusDashboard.tsx" />}

                    <div className="flex items-start space-x-3" data-magicpath-id="580" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-lg flex items-center justify-center text-white font-bold shadow-md" data-magicpath-id="581" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="text-sm" data-magicpath-id="582" data-magicpath-path="CreativePlusDashboard.tsx">D{step.day}</span>
                      </div>

                      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200" data-magicpath-id="583" data-magicpath-path="CreativePlusDashboard.tsx">
                        <p className="text-sm font-semibold text-gray-900 mb-1" data-magicpath-id="584" data-magicpath-path="CreativePlusDashboard.tsx">{step.asset}</p>
                        {step.delay && <div className="flex items-center space-x-1 text-xs text-gray-500" data-magicpath-id="585" data-magicpath-path="CreativePlusDashboard.tsx">
                            <Clock className="w-3 h-3" data-magicpath-id="586" data-magicpath-path="CreativePlusDashboard.tsx" />
                            <span data-magicpath-id="587" data-magicpath-path="CreativePlusDashboard.tsx">Delay: {step.delay}</span>
                          </div>}
                      </div>
                    </div>
                  </motion.div>)}
              </div>

              <div className="mt-6 flex items-center space-x-2" data-magicpath-id="588" data-magicpath-path="CreativePlusDashboard.tsx">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-white border border-gray-300 hover:border-[#00A3E0] text-gray-700 font-medium rounded-lg transition-all" data-magicpath-id="589" data-magicpath-path="CreativePlusDashboard.tsx">
                  <CheckCircle className="w-4 h-4" data-magicpath-id="590" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="591" data-magicpath-path="CreativePlusDashboard.tsx">Validate Journey</span>
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00A3E0] to-[#0055A5] text-white font-medium rounded-lg shadow hover:shadow-md transition-all" data-magicpath-id="592" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Play className="w-4 h-4" data-magicpath-id="593" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <span data-magicpath-id="594" data-magicpath-path="CreativePlusDashboard.tsx">Preview Journey</span>
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
      }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="595" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="596" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center space-x-2" data-magicpath-id="597" data-magicpath-path="CreativePlusDashboard.tsx">
              <Target className="w-5 h-5 text-[#0055A5]" data-magicpath-id="598" data-magicpath-path="CreativePlusDashboard.tsx" />
              <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="599" data-magicpath-path="CreativePlusDashboard.tsx">A/B Testing & Experimentation</h3>
            </div>
          </div>

          <div className="p-6" data-magicpath-id="600" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="space-y-4" data-magicpath-id="601" data-magicpath-path="CreativePlusDashboard.tsx">
              {abTests.map((test, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200" data-magicpath-id="602" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center justify-between mb-4" data-magicpath-id="603" data-magicpath-path="CreativePlusDashboard.tsx">
                    <h4 className="font-bold text-gray-900" data-magicpath-id="604" data-magicpath-path="CreativePlusDashboard.tsx">{test.name}</h4>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full" data-magicpath-id="605" data-magicpath-path="CreativePlusDashboard.tsx">
                      Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4" data-magicpath-id="606" data-magicpath-path="CreativePlusDashboard.tsx">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200" data-magicpath-id="607" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="text-xs font-semibold text-blue-700 mb-2" data-magicpath-id="608" data-magicpath-path="CreativePlusDashboard.tsx">Variant A</div>
                      <p className="text-sm text-gray-900" data-magicpath-id="609" data-magicpath-path="CreativePlusDashboard.tsx">{test.variantA}</p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-200" data-magicpath-id="610" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="text-xs font-semibold text-purple-700 mb-2" data-magicpath-id="611" data-magicpath-path="CreativePlusDashboard.tsx">Variant B</div>
                      <p className="text-sm text-gray-900" data-magicpath-id="612" data-magicpath-path="CreativePlusDashboard.tsx">{test.variantB}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between" data-magicpath-id="613" data-magicpath-path="CreativePlusDashboard.tsx">
                    <div className="flex items-center space-x-2 text-sm text-gray-600" data-magicpath-id="614" data-magicpath-path="CreativePlusDashboard.tsx">
                      <Activity className="w-4 h-4" data-magicpath-id="615" data-magicpath-path="CreativePlusDashboard.tsx" />
                      <span data-magicpath-id="616" data-magicpath-path="CreativePlusDashboard.tsx">Tracking: {test.metrics}</span>
                    </div>
                    <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="px-3 py-1 bg-[#00A3E0] hover:bg-[#0055A5] text-white text-xs font-medium rounded-lg transition-colors" data-magicpath-id="617" data-magicpath-path="CreativePlusDashboard.tsx">
                      View Results
                    </motion.button>
                  </div>
                </motion.div>)}
            </div>

            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all" data-magicpath-id="618" data-magicpath-path="CreativePlusDashboard.tsx">
              <Plus className="w-5 h-5" data-magicpath-id="619" data-magicpath-path="CreativePlusDashboard.tsx" />
              <span data-magicpath-id="620" data-magicpath-path="CreativePlusDashboard.tsx">Create New A/B Test</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-magicpath-id="621" data-magicpath-path="CreativePlusDashboard.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="622" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="623" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="624" data-magicpath-path="CreativePlusDashboard.tsx">
                <RefreshCw className="w-5 h-5 text-[#0055A5]" data-magicpath-id="625" data-magicpath-path="CreativePlusDashboard.tsx" />
                <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="626" data-magicpath-path="CreativePlusDashboard.tsx">Workflow Sync Status</h3>
              </div>
            </div>

            <div className="p-6 space-y-4" data-magicpath-id="627" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200" data-magicpath-id="628" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="flex items-center space-x-3" data-magicpath-id="629" data-magicpath-path="CreativePlusDashboard.tsx">
                  <CheckCircle className="w-5 h-5 text-green-600" data-magicpath-id="630" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <div data-magicpath-id="631" data-magicpath-path="CreativePlusDashboard.tsx">
                    <h4 className="font-semibold text-gray-900 text-sm" data-magicpath-id="632" data-magicpath-path="CreativePlusDashboard.tsx">Workfront Tasks</h4>
                    <p className="text-xs text-gray-600" data-magicpath-id="633" data-magicpath-path="CreativePlusDashboard.tsx">All tasks approved and synced</p>
                  </div>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-colors" data-magicpath-id="634" data-magicpath-path="CreativePlusDashboard.tsx">
                  View Tasks
                </motion.button>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200" data-magicpath-id="635" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="flex items-center space-x-3" data-magicpath-id="636" data-magicpath-path="CreativePlusDashboard.tsx">
                  <CheckCircle className="w-5 h-5 text-blue-600" data-magicpath-id="637" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <div data-magicpath-id="638" data-magicpath-path="CreativePlusDashboard.tsx">
                    <h4 className="font-semibold text-gray-900 text-sm" data-magicpath-id="639" data-magicpath-path="CreativePlusDashboard.tsx">AEM Asset Sync</h4>
                    <p className="text-xs text-gray-600" data-magicpath-id="640" data-magicpath-path="CreativePlusDashboard.tsx">All assets uploaded and ready</p>
                  </div>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors" data-magicpath-id="641" data-magicpath-path="CreativePlusDashboard.tsx">
                  Sync Now
                </motion.button>
              </div>

              <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200" data-magicpath-id="642" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="flex items-center space-x-3" data-magicpath-id="643" data-magicpath-path="CreativePlusDashboard.tsx">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" data-magicpath-id="644" data-magicpath-path="CreativePlusDashboard.tsx" />
                  <div data-magicpath-id="645" data-magicpath-path="CreativePlusDashboard.tsx">
                    <h4 className="font-semibold text-gray-900 text-sm" data-magicpath-id="646" data-magicpath-path="CreativePlusDashboard.tsx">Approval Status</h4>
                    <p className="text-xs text-gray-600" data-magicpath-id="647" data-magicpath-path="CreativePlusDashboard.tsx">2 items awaiting approval</p>
                  </div>
                </div>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs font-medium rounded-lg transition-colors" data-magicpath-id="648" data-magicpath-path="CreativePlusDashboard.tsx">
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
        }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="649" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="650" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="flex items-center space-x-2" data-magicpath-id="651" data-magicpath-path="CreativePlusDashboard.tsx">
                <BarChart3 className="w-5 h-5 text-[#0055A5]" data-magicpath-id="652" data-magicpath-path="CreativePlusDashboard.tsx" />
                <h3 className="text-lg font-bold text-gray-900" data-magicpath-id="653" data-magicpath-path="CreativePlusDashboard.tsx">Performance Prediction</h3>
              </div>
            </div>

            <div className="p-6" data-magicpath-id="654" data-magicpath-path="CreativePlusDashboard.tsx">
              <div className="space-y-4" data-magicpath-id="655" data-magicpath-path="CreativePlusDashboard.tsx">
                {performanceMetrics.map((metric, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200" data-magicpath-id="656" data-magicpath-path="CreativePlusDashboard.tsx">
                    <div className="flex items-center justify-between mb-2" data-magicpath-id="657" data-magicpath-path="CreativePlusDashboard.tsx">
                      <h4 className="font-semibold text-gray-900 text-sm" data-magicpath-id="658" data-magicpath-path="CreativePlusDashboard.tsx">{metric.name}</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-4" data-magicpath-id="659" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div data-magicpath-id="660" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="text-xs text-gray-500" data-magicpath-id="661" data-magicpath-path="CreativePlusDashboard.tsx">Prediction</span>
                        <div className="text-2xl font-bold text-[#00A3E0]" data-magicpath-id="662" data-magicpath-path="CreativePlusDashboard.tsx">{metric.prediction}</div>
                      </div>
                      <div data-magicpath-id="663" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="text-xs text-gray-500" data-magicpath-id="664" data-magicpath-path="CreativePlusDashboard.tsx">Actual</span>
                        <div className="text-2xl font-bold text-gray-400" data-magicpath-id="665" data-magicpath-path="CreativePlusDashboard.tsx">{metric.actual}</div>
                      </div>
                    </div>
                  </div>)}
              </div>

              <div className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200" data-magicpath-id="666" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="flex items-start space-x-3" data-magicpath-id="667" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div data-magicpath-id="668" data-magicpath-path="CreativePlusDashboard.tsx">
                    <h4 className="font-semibold text-blue-900 text-sm mb-1" data-magicpath-id="669" data-magicpath-path="CreativePlusDashboard.tsx">AI Insight</h4>
                    <p className="text-xs text-blue-800 leading-relaxed" data-magicpath-id="670" data-magicpath-path="CreativePlusDashboard.tsx">
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
            }} className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all" data-magicpath-id="671" data-magicpath-path="CreativePlusDashboard.tsx">
                <Rocket className="w-5 h-5" data-magicpath-id="672" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span data-magicpath-id="673" data-magicpath-path="CreativePlusDashboard.tsx">Launch Campaign via Journey Optimizer</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;

  // @return
  return <div className="min-h-screen bg-gradient-to-br from-[#F5FAFB] to-[#E8F4F8] w-full" data-magicpath-id="674" data-magicpath-path="CreativePlusDashboard.tsx">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" data-magicpath-id="675" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="px-8 py-4" data-magicpath-id="676" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="flex items-center justify-between" data-magicpath-id="677" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center space-x-12" data-magicpath-id="678" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="flex items-center space-x-3" data-magicpath-id="679" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-lg flex items-center justify-center" data-magicpath-id="680" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div data-magicpath-id="681" data-magicpath-path="CreativePlusDashboard.tsx">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00A3E0] bg-clip-text text-transparent" data-magicpath-id="682" data-magicpath-path="CreativePlusDashboard.tsx">
                    CreativePlus
                  </h1>
                  <p className="text-xs text-gray-500" data-magicpath-id="683" data-magicpath-path="CreativePlusDashboard.tsx">Marketing Platform</p>
                </div>
              </motion.div>

              <div className="flex items-center space-x-1" data-magicpath-id="684" data-magicpath-path="CreativePlusDashboard.tsx">
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
                }} onClick={() => setActiveNav(item.name)} className={`relative px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${isActive ? 'text-[#0055A5] bg-[#00A3E0]/10' : 'text-gray-600 hover:text-[#0055A5] hover:bg-gray-50'}`} data-magicpath-id="685" data-magicpath-path="CreativePlusDashboard.tsx">
                      <Icon className="w-5 h-5" data-magicpath-id="686" data-magicpath-path="CreativePlusDashboard.tsx" />
                      <span className="font-medium" data-magicpath-id="687" data-magicpath-path="CreativePlusDashboard.tsx">{item.name}</span>
                      {isActive && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00A3E0] to-[#0055A5]" initial={false} transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }} data-magicpath-id="688" data-magicpath-path="CreativePlusDashboard.tsx" />}
                    </motion.button>;
              })}
              </div>
            </div>

            <div className="flex items-center space-x-4" data-magicpath-id="689" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="relative p-2 text-gray-600 hover:text-[#0055A5] hover:bg-gray-50 rounded-lg transition-colors" data-magicpath-id="690" data-magicpath-path="CreativePlusDashboard.tsx">
                <Bell className="w-5 h-5" data-magicpath-id="691" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" data-magicpath-id="692" data-magicpath-path="CreativePlusDashboard.tsx" />
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors" data-magicpath-id="693" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-full flex items-center justify-center" data-magicpath-id="694" data-magicpath-path="CreativePlusDashboard.tsx">
                  <User className="w-5 h-5 text-white" data-magicpath-id="695" data-magicpath-path="CreativePlusDashboard.tsx" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" data-magicpath-id="696" data-magicpath-path="CreativePlusDashboard.tsx" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="px-8 py-8" data-magicpath-id="697" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="max-w-[1600px] mx-auto" data-magicpath-id="698" data-magicpath-path="CreativePlusDashboard.tsx">
          <AnimatePresence mode="wait" data-magicpath-id="699" data-magicpath-path="CreativePlusDashboard.tsx">
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
          }} data-magicpath-id="700" data-magicpath-path="CreativePlusDashboard.tsx">
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
          }} data-magicpath-id="701" data-magicpath-path="CreativePlusDashboard.tsx">
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
          }} data-magicpath-id="702" data-magicpath-path="CreativePlusDashboard.tsx">
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
          }} data-magicpath-id="703" data-magicpath-path="CreativePlusDashboard.tsx">
                {renderWorkflow()}
              </motion.div>}
          </AnimatePresence>
        </div>
      </div>
    </div>;
};