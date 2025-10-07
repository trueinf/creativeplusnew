import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, FileText, Palette, Workflow, BarChart3, FolderOpen, Bell, User, ChevronDown, Edit, Eye, Rocket, Copy, TrendingUp, Clock, CheckCircle2, Circle, AlertCircle, Sparkles, Download, Plus, Send, ChevronRight, RefreshCw, Globe, CheckCircle, AlertTriangle, Save, ArrowRight, Lightbulb } from 'lucide-react';
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

  // @return
  return <div className="min-h-screen bg-gradient-to-br from-[#F5FAFB] to-[#E8F4F8] w-full" data-magicpath-id="286" data-magicpath-path="CreativePlusDashboard.tsx">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" data-magicpath-id="287" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="px-8 py-4" data-magicpath-id="288" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="flex items-center justify-between" data-magicpath-id="289" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center space-x-12" data-magicpath-id="290" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="flex items-center space-x-3" data-magicpath-id="291" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-lg flex items-center justify-center" data-magicpath-id="292" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div data-magicpath-id="293" data-magicpath-path="CreativePlusDashboard.tsx">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00A3E0] bg-clip-text text-transparent" data-magicpath-id="294" data-magicpath-path="CreativePlusDashboard.tsx">
                    CreativePlus
                  </h1>
                  <p className="text-xs text-gray-500" data-magicpath-id="295" data-magicpath-path="CreativePlusDashboard.tsx">Marketing Platform</p>
                </div>
              </motion.div>

              <div className="flex items-center space-x-1" data-magicpath-id="296" data-magicpath-path="CreativePlusDashboard.tsx">
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
                }} onClick={() => setActiveNav(item.name)} className={`relative px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${isActive ? 'text-[#0055A5] bg-[#00A3E0]/10' : 'text-gray-600 hover:text-[#0055A5] hover:bg-gray-50'}`} data-magicpath-id="297" data-magicpath-path="CreativePlusDashboard.tsx">
                      <Icon className="w-5 h-5" data-magicpath-id="298" data-magicpath-path="CreativePlusDashboard.tsx" />
                      <span className="font-medium" data-magicpath-id="299" data-magicpath-path="CreativePlusDashboard.tsx">{item.name}</span>
                      {isActive && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00A3E0] to-[#0055A5]" initial={false} transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }} data-magicpath-id="300" data-magicpath-path="CreativePlusDashboard.tsx" />}
                    </motion.button>;
              })}
              </div>
            </div>

            <div className="flex items-center space-x-4" data-magicpath-id="301" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="relative p-2 text-gray-600 hover:text-[#0055A5] hover:bg-gray-50 rounded-lg transition-colors" data-magicpath-id="302" data-magicpath-path="CreativePlusDashboard.tsx">
                <Bell className="w-5 h-5" data-magicpath-id="303" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" data-magicpath-id="304" data-magicpath-path="CreativePlusDashboard.tsx" />
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors" data-magicpath-id="305" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-full flex items-center justify-center" data-magicpath-id="306" data-magicpath-path="CreativePlusDashboard.tsx">
                  <User className="w-5 h-5 text-white" data-magicpath-id="307" data-magicpath-path="CreativePlusDashboard.tsx" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" data-magicpath-id="308" data-magicpath-path="CreativePlusDashboard.tsx" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="px-8 py-8" data-magicpath-id="309" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="max-w-[1600px] mx-auto" data-magicpath-id="310" data-magicpath-path="CreativePlusDashboard.tsx">
          <AnimatePresence mode="wait" data-magicpath-id="311" data-magicpath-path="CreativePlusDashboard.tsx">
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
          }} data-magicpath-id="312" data-magicpath-path="CreativePlusDashboard.tsx">
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
          }} data-magicpath-id="313" data-magicpath-path="CreativePlusDashboard.tsx">
                {renderCopyStudio()}
              </motion.div>}
          </AnimatePresence>
        </div>
      </div>
    </div>;
};