import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, Palette, Workflow, BarChart3, FolderOpen, Bell, User, ChevronDown, Edit, Eye, Rocket, Copy, TrendingUp, Clock, CheckCircle2, Circle, AlertCircle, Sparkles, Download, Plus, Send } from 'lucide-react';
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

  // @return
  return <div className="min-h-screen bg-gradient-to-br from-[#F5FAFB] to-[#E8F4F8] w-full" data-magicpath-id="4" data-magicpath-path="CreativePlusDashboard.tsx">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" data-magicpath-id="5" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="px-8 py-4" data-magicpath-id="6" data-magicpath-path="CreativePlusDashboard.tsx">
          <div className="flex items-center justify-between" data-magicpath-id="7" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="flex items-center space-x-12" data-magicpath-id="8" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="flex items-center space-x-3" data-magicpath-id="9" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="w-10 h-10 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-lg flex items-center justify-center" data-magicpath-id="10" data-magicpath-path="CreativePlusDashboard.tsx">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div data-magicpath-id="11" data-magicpath-path="CreativePlusDashboard.tsx">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-[#0055A5] to-[#00A3E0] bg-clip-text text-transparent" data-magicpath-id="12" data-magicpath-path="CreativePlusDashboard.tsx">
                    CreativePlus
                  </h1>
                  <p className="text-xs text-gray-500" data-magicpath-id="13" data-magicpath-path="CreativePlusDashboard.tsx">Marketing Platform</p>
                </div>
              </motion.div>

              <div className="flex items-center space-x-1" data-magicpath-id="14" data-magicpath-path="CreativePlusDashboard.tsx">
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
                }} onClick={() => setActiveNav(item.name)} className={`relative px-4 py-2 rounded-lg flex items-center space-x-2 transition-all ${isActive ? 'text-[#0055A5] bg-[#00A3E0]/10' : 'text-gray-600 hover:text-[#0055A5] hover:bg-gray-50'}`} data-magicpath-id="15" data-magicpath-path="CreativePlusDashboard.tsx">
                      <Icon className="w-5 h-5" data-magicpath-id="16" data-magicpath-path="CreativePlusDashboard.tsx" />
                      <span className="font-medium" data-magicpath-id="17" data-magicpath-path="CreativePlusDashboard.tsx">{item.name}</span>
                      {isActive && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00A3E0] to-[#0055A5]" initial={false} transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }} data-magicpath-id="18" data-magicpath-path="CreativePlusDashboard.tsx" />}
                    </motion.button>;
              })}
              </div>
            </div>

            <div className="flex items-center space-x-4" data-magicpath-id="19" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="relative p-2 text-gray-600 hover:text-[#0055A5] hover:bg-gray-50 rounded-lg transition-colors" data-magicpath-id="20" data-magicpath-path="CreativePlusDashboard.tsx">
                <Bell className="w-5 h-5" data-magicpath-id="21" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" data-magicpath-id="22" data-magicpath-path="CreativePlusDashboard.tsx" />
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors" data-magicpath-id="23" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00A3E0] to-[#0055A5] rounded-full flex items-center justify-center" data-magicpath-id="24" data-magicpath-path="CreativePlusDashboard.tsx">
                  <User className="w-5 h-5 text-white" data-magicpath-id="25" data-magicpath-path="CreativePlusDashboard.tsx" />
                </div>
                <ChevronDown className="w-4 h-4 text-gray-600" data-magicpath-id="26" data-magicpath-path="CreativePlusDashboard.tsx" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="px-8 py-8" data-magicpath-id="27" data-magicpath-path="CreativePlusDashboard.tsx">
        <div className="max-w-[1600px] mx-auto" data-magicpath-id="28" data-magicpath-path="CreativePlusDashboard.tsx">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="mb-8" data-magicpath-id="29" data-magicpath-path="CreativePlusDashboard.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" data-magicpath-id="30" data-magicpath-path="CreativePlusDashboard.tsx">Campaign Dashboard</h2>
            <p className="text-gray-600" data-magicpath-id="31" data-magicpath-path="CreativePlusDashboard.tsx">
              Manage your campaigns, track performance, and get AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-magicpath-id="32" data-magicpath-path="CreativePlusDashboard.tsx">
            <div className="lg:col-span-2 space-y-6" data-magicpath-id="33" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1
            }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="34" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="35" data-magicpath-path="CreativePlusDashboard.tsx">
                  <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="36" data-magicpath-path="CreativePlusDashboard.tsx">Campaign Overview</h3>
                </div>

                <div className="overflow-x-auto" data-magicpath-id="37" data-magicpath-path="CreativePlusDashboard.tsx">
                  <table className="w-full" data-magicpath-id="38" data-magicpath-path="CreativePlusDashboard.tsx">
                    <thead className="bg-gray-50 border-b border-gray-100" data-magicpath-id="39" data-magicpath-path="CreativePlusDashboard.tsx">
                      <tr data-magicpath-id="40" data-magicpath-path="CreativePlusDashboard.tsx">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="41" data-magicpath-path="CreativePlusDashboard.tsx">
                          Campaign Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="42" data-magicpath-path="CreativePlusDashboard.tsx">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="43" data-magicpath-path="CreativePlusDashboard.tsx">
                          Progress
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="44" data-magicpath-path="CreativePlusDashboard.tsx">
                          Performance
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider" data-magicpath-id="45" data-magicpath-path="CreativePlusDashboard.tsx">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100" data-magicpath-id="46" data-magicpath-path="CreativePlusDashboard.tsx">
                      {campaigns.map((campaign, index) => <motion.tr key={campaign.id} initial={{
                      opacity: 0,
                      x: -20
                    }} animate={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      delay: index * 0.1
                    }} className="hover:bg-gray-50 transition-colors" data-magicpath-id="47" data-magicpath-path="CreativePlusDashboard.tsx">
                          <td className="px-6 py-4" data-magicpath-id="48" data-magicpath-path="CreativePlusDashboard.tsx">
                            <span className="font-semibold text-gray-900" data-magicpath-id="49" data-magicpath-path="CreativePlusDashboard.tsx">{campaign.name}</span>
                          </td>
                          <td className="px-6 py-4" data-magicpath-id="50" data-magicpath-path="CreativePlusDashboard.tsx">
                            <div className="space-y-1" data-magicpath-id="51" data-magicpath-path="CreativePlusDashboard.tsx">
                              <div className="flex items-center space-x-2" data-magicpath-id="52" data-magicpath-path="CreativePlusDashboard.tsx">
                                <StatusIcon status={campaign.copyStatus} data-magicpath-id="53" data-magicpath-path="CreativePlusDashboard.tsx" />
                                <span className="text-sm text-gray-600" data-magicpath-id="54" data-magicpath-path="CreativePlusDashboard.tsx">Copy</span>
                              </div>
                              <div className="flex items-center space-x-2" data-magicpath-id="55" data-magicpath-path="CreativePlusDashboard.tsx">
                                <StatusIcon status={campaign.designStatus} data-magicpath-id="56" data-magicpath-path="CreativePlusDashboard.tsx" />
                                <span className="text-sm text-gray-600" data-magicpath-id="57" data-magicpath-path="CreativePlusDashboard.tsx">Design</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4" data-magicpath-id="58" data-magicpath-path="CreativePlusDashboard.tsx">
                            <div className="space-y-2" data-magicpath-id="59" data-magicpath-path="CreativePlusDashboard.tsx">
                              <ProgressBar progress={campaign.progress} data-magicpath-id="60" data-magicpath-path="CreativePlusDashboard.tsx" />
                              <span className="text-xs text-gray-500" data-magicpath-id="61" data-magicpath-path="CreativePlusDashboard.tsx">{campaign.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4" data-magicpath-id="62" data-magicpath-path="CreativePlusDashboard.tsx">
                            <div className="space-y-1 text-sm" data-magicpath-id="63" data-magicpath-path="CreativePlusDashboard.tsx">
                              {campaign.ctr && <div className="text-gray-700" data-magicpath-id="64" data-magicpath-path="CreativePlusDashboard.tsx">
                                  CTR: <span className="font-semibold" data-magicpath-id="65" data-magicpath-path="CreativePlusDashboard.tsx">{campaign.ctr}%</span>
                                </div>}
                              {campaign.cvr && <div className="text-gray-700" data-magicpath-id="66" data-magicpath-path="CreativePlusDashboard.tsx">
                                  CVR: <span className="font-semibold" data-magicpath-id="67" data-magicpath-path="CreativePlusDashboard.tsx">{campaign.cvr}%</span>
                                </div>}
                              {campaign.roi && <div className="text-green-600 font-semibold" data-magicpath-id="68" data-magicpath-path="CreativePlusDashboard.tsx">
                                  ROI: +{campaign.roi}%
                                </div>}
                              {!campaign.ctr && !campaign.cvr && !campaign.roi && <span className="text-gray-400" data-magicpath-id="69" data-magicpath-path="CreativePlusDashboard.tsx">—</span>}
                            </div>
                          </td>
                          <td className="px-6 py-4" data-magicpath-id="70" data-magicpath-path="CreativePlusDashboard.tsx">
                            <div className="flex items-center space-x-2" data-magicpath-id="71" data-magicpath-path="CreativePlusDashboard.tsx">
                              <motion.button whileHover={{
                            scale: 1.05
                          }} whileTap={{
                            scale: 0.95
                          }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors" data-magicpath-id="72" data-magicpath-path="CreativePlusDashboard.tsx">
                                <Edit className="w-4 h-4" data-magicpath-id="73" data-magicpath-path="CreativePlusDashboard.tsx" />
                              </motion.button>
                              <motion.button whileHover={{
                            scale: 1.05
                          }} whileTap={{
                            scale: 0.95
                          }} className="p-2 text-[#0055A5] hover:bg-[#00A3E0]/10 rounded-lg transition-colors" data-magicpath-id="74" data-magicpath-path="CreativePlusDashboard.tsx">
                                <Eye className="w-4 h-4" data-magicpath-id="75" data-magicpath-path="CreativePlusDashboard.tsx" />
                              </motion.button>
                              {campaign.progress === 100 && <motion.button whileHover={{
                            scale: 1.05
                          }} whileTap={{
                            scale: 0.95
                          }} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" data-magicpath-id="76" data-magicpath-path="CreativePlusDashboard.tsx">
                                  <Rocket className="w-4 h-4" data-magicpath-id="77" data-magicpath-path="CreativePlusDashboard.tsx" />
                                </motion.button>}
                              {campaign.progress > 0 && campaign.progress < 100 && <motion.button whileHover={{
                            scale: 1.05
                          }} whileTap={{
                            scale: 0.95
                          }} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" data-magicpath-id="78" data-magicpath-path="CreativePlusDashboard.tsx">
                                  <Copy className="w-4 h-4" data-magicpath-id="79" data-magicpath-path="CreativePlusDashboard.tsx" />
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
            }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="80" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="81" data-magicpath-path="CreativePlusDashboard.tsx">
                  <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="82" data-magicpath-path="CreativePlusDashboard.tsx">Campaign Timeline</h3>
                  <p className="text-sm text-gray-600 mt-1" data-magicpath-id="83" data-magicpath-path="CreativePlusDashboard.tsx">Sail into 2025 Campaign Progress</p>
                </div>

                <div className="p-6" data-magicpath-id="84" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="space-y-4" data-magicpath-id="85" data-magicpath-path="CreativePlusDashboard.tsx">
                    {timeline.map((step, index) => <motion.div key={step.id} initial={{
                    opacity: 0,
                    x: -20
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: index * 0.1
                  }} className="relative pl-8 pb-4 last:pb-0" data-magicpath-id="86" data-magicpath-path="CreativePlusDashboard.tsx">
                        {index < timeline.length - 1 && <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gray-200" data-magicpath-id="87" data-magicpath-path="CreativePlusDashboard.tsx" />}

                        <div className="flex items-start space-x-4" data-magicpath-id="88" data-magicpath-path="CreativePlusDashboard.tsx">
                          <div className={`absolute left-0 w-4 h-4 rounded-full border-2 ${step.status === 'complete' ? 'bg-[#00A3E0] border-[#00A3E0]' : step.status === 'in-progress' ? 'bg-[#FDB913] border-[#FDB913]' : 'bg-white border-gray-300'}`} data-magicpath-id="89" data-magicpath-path="CreativePlusDashboard.tsx" />

                          <div className="flex-1" data-magicpath-id="90" data-magicpath-path="CreativePlusDashboard.tsx">
                            <div className="flex items-center justify-between" data-magicpath-id="91" data-magicpath-path="CreativePlusDashboard.tsx">
                              <div data-magicpath-id="92" data-magicpath-path="CreativePlusDashboard.tsx">
                                <h4 className="font-semibold text-gray-900" data-magicpath-id="93" data-magicpath-path="CreativePlusDashboard.tsx">{step.name}</h4>
                                {step.completedTime && <p className="text-xs text-gray-500 mt-0.5" data-magicpath-id="94" data-magicpath-path="CreativePlusDashboard.tsx">
                                    Completed {step.completedTime}
                                  </p>}
                              </div>

                              {step.status === 'complete' && <CheckCircle2 className="w-5 h-5 text-[#00A3E0]" data-magicpath-id="95" data-magicpath-path="CreativePlusDashboard.tsx" />}
                              {step.status === 'in-progress' && <Clock className="w-5 h-5 text-[#FDB913]" data-magicpath-id="96" data-magicpath-path="CreativePlusDashboard.tsx" />}
                            </div>

                            {step.status === 'in-progress' && step.progress !== undefined && <div className="mt-2" data-magicpath-id="97" data-magicpath-path="CreativePlusDashboard.tsx">
                                <ProgressBar progress={step.progress} data-magicpath-id="98" data-magicpath-path="CreativePlusDashboard.tsx" />
                                <span className="text-xs text-gray-500 mt-1 block" data-magicpath-id="99" data-magicpath-path="CreativePlusDashboard.tsx">
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
            }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="100" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="101" data-magicpath-path="CreativePlusDashboard.tsx">
                  <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="102" data-magicpath-path="CreativePlusDashboard.tsx">Real-Time Performance</h3>
                </div>

                <div className="p-6" data-magicpath-id="103" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="grid grid-cols-3 gap-6" data-magicpath-id="104" data-magicpath-path="CreativePlusDashboard.tsx">
                    <motion.div whileHover={{
                    scale: 1.05
                  }} className="bg-gradient-to-br from-[#00A3E0]/10 to-[#0055A5]/10 rounded-lg p-6 border border-[#00A3E0]/20" data-magicpath-id="105" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex items-center justify-between mb-2" data-magicpath-id="106" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="text-sm font-medium text-gray-600" data-magicpath-id="107" data-magicpath-path="CreativePlusDashboard.tsx">CTR</span>
                        <TrendingUp className="w-5 h-5 text-[#00A3E0]" data-magicpath-id="108" data-magicpath-path="CreativePlusDashboard.tsx" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900" data-magicpath-id="109" data-magicpath-path="CreativePlusDashboard.tsx">8.5%</div>
                      <p className="text-xs text-gray-500 mt-2" data-magicpath-id="110" data-magicpath-path="CreativePlusDashboard.tsx">
                        Last 24h: 1.2M emails opened
                      </p>
                    </motion.div>

                    <motion.div whileHover={{
                    scale: 1.05
                  }} className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-lg p-6 border border-green-200" data-magicpath-id="111" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex items-center justify-between mb-2" data-magicpath-id="112" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="text-sm font-medium text-gray-600" data-magicpath-id="113" data-magicpath-path="CreativePlusDashboard.tsx">CVR</span>
                        <TrendingUp className="w-5 h-5 text-green-600" data-magicpath-id="114" data-magicpath-path="CreativePlusDashboard.tsx" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900" data-magicpath-id="115" data-magicpath-path="CreativePlusDashboard.tsx">4.3%</div>
                      <p className="text-xs text-gray-500 mt-2" data-magicpath-id="116" data-magicpath-path="CreativePlusDashboard.tsx">3% higher than last year</p>
                    </motion.div>

                    <motion.div whileHover={{
                    scale: 1.05
                  }} className="bg-gradient-to-br from-[#FDB913]/10 to-[#FDB913]/20 rounded-lg p-6 border border-[#FDB913]/30" data-magicpath-id="117" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex items-center justify-between mb-2" data-magicpath-id="118" data-magicpath-path="CreativePlusDashboard.tsx">
                        <span className="text-sm font-medium text-gray-600" data-magicpath-id="119" data-magicpath-path="CreativePlusDashboard.tsx">Top Asset</span>
                        <Sparkles className="w-5 h-5 text-[#FDB913]" />
                      </div>
                      <div className="text-lg font-bold text-gray-900" data-magicpath-id="120" data-magicpath-path="CreativePlusDashboard.tsx">Variant A</div>
                      <p className="text-xs text-gray-500 mt-2" data-magicpath-id="121" data-magicpath-path="CreativePlusDashboard.tsx">
                        15% better than Variant B
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6" data-magicpath-id="122" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.1
            }} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden" data-magicpath-id="123" data-magicpath-path="CreativePlusDashboard.tsx">
                <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-[#0055A5]/5 to-[#00A3E0]/5" data-magicpath-id="124" data-magicpath-path="CreativePlusDashboard.tsx">
                  <div className="flex items-center space-x-2" data-magicpath-id="125" data-magicpath-path="CreativePlusDashboard.tsx">
                    <Sparkles className="w-5 h-5 text-[#00A3E0]" />
                    <h3 className="text-xl font-bold text-gray-900" data-magicpath-id="126" data-magicpath-path="CreativePlusDashboard.tsx">AI Insights</h3>
                  </div>
                </div>

                <div className="p-4 space-y-3 max-h-[600px] overflow-y-auto" data-magicpath-id="127" data-magicpath-path="CreativePlusDashboard.tsx">
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
                }} className={`p-4 rounded-lg border transition-all cursor-pointer ${insight.type === 'brand' ? 'bg-blue-50/50 border-blue-200 hover:bg-blue-50' : insight.type === 'social' ? 'bg-purple-50/50 border-purple-200 hover:bg-purple-50' : 'bg-green-50/50 border-green-200 hover:bg-green-50'}`} data-magicpath-id="128" data-magicpath-path="CreativePlusDashboard.tsx">
                      <div className="flex items-start space-x-3" data-magicpath-id="129" data-magicpath-path="CreativePlusDashboard.tsx">
                        <div className={`p-2 rounded-lg ${insight.type === 'brand' ? 'bg-blue-100' : insight.type === 'social' ? 'bg-purple-100' : 'bg-green-100'}`} data-magicpath-id="130" data-magicpath-path="CreativePlusDashboard.tsx">
                          {insight.type === 'brand' && <TrendingUp className={`w-4 h-4 ${insight.type === 'brand' ? 'text-blue-600' : insight.type === 'social' ? 'text-purple-600' : 'text-green-600'}`} data-magicpath-id="131" data-magicpath-path="CreativePlusDashboard.tsx" />}
                          {insight.type === 'social' && <Sparkles className={`w-4 h-4 ${insight.type === 'social' ? 'text-purple-600' : 'text-blue-600'}`} />}
                          {insight.type === 'audience' && <User className="w-4 h-4 text-green-600" data-magicpath-id="132" data-magicpath-path="CreativePlusDashboard.tsx" />}
                        </div>

                        <div className="flex-1" data-magicpath-id="133" data-magicpath-path="CreativePlusDashboard.tsx">
                          <h4 className="font-semibold text-gray-900 text-sm mb-1" data-magicpath-id="134" data-magicpath-path="CreativePlusDashboard.tsx">
                            {insight.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed" data-magicpath-id="135" data-magicpath-path="CreativePlusDashboard.tsx">
                            {insight.description}
                          </p>
                          <motion.button whileHover={{
                        scale: 1.05
                      }} whileTap={{
                        scale: 0.95
                      }} className="mt-3 text-xs font-medium text-[#0055A5] hover:text-[#00A3E0] transition-colors" data-magicpath-id="136" data-magicpath-path="CreativePlusDashboard.tsx">
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
            }} className="bg-gradient-to-br from-[#0055A5] to-[#00A3E0] rounded-xl shadow-lg p-6 text-white" data-magicpath-id="137" data-magicpath-path="CreativePlusDashboard.tsx">
                <AlertCircle className="w-8 h-8 mb-3 opacity-90" data-magicpath-id="138" data-magicpath-path="CreativePlusDashboard.tsx" />
                <h3 className="text-lg font-bold mb-2" data-magicpath-id="139" data-magicpath-path="CreativePlusDashboard.tsx">Pending Approvals</h3>
                <p className="text-sm opacity-90 mb-4" data-magicpath-id="140" data-magicpath-path="CreativePlusDashboard.tsx">
                  You have 3 items waiting for review and approval
                </p>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="w-full bg-white text-[#0055A5] font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors" data-magicpath-id="141" data-magicpath-path="CreativePlusDashboard.tsx">
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
        }} className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6" data-magicpath-id="142" data-magicpath-path="CreativePlusDashboard.tsx">
            <h3 className="text-xl font-bold text-gray-900 mb-4" data-magicpath-id="143" data-magicpath-path="CreativePlusDashboard.tsx">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4" data-magicpath-id="144" data-magicpath-path="CreativePlusDashboard.tsx">
              <motion.button whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#00A3E0]/10 to-[#0055A5]/10 hover:from-[#00A3E0]/20 hover:to-[#0055A5]/20 rounded-lg border border-[#00A3E0]/20 transition-all" data-magicpath-id="145" data-magicpath-path="CreativePlusDashboard.tsx">
                <Download className="w-6 h-6 text-[#0055A5] mb-2" data-magicpath-id="146" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="text-sm font-medium text-gray-900" data-magicpath-id="147" data-magicpath-path="CreativePlusDashboard.tsx">Generate Report</span>
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200/50 rounded-lg border border-green-200 transition-all" data-magicpath-id="148" data-magicpath-path="CreativePlusDashboard.tsx">
                <Plus className="w-6 h-6 text-green-600 mb-2" data-magicpath-id="149" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="text-sm font-medium text-gray-900" data-magicpath-id="150" data-magicpath-path="CreativePlusDashboard.tsx">New Campaign</span>
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200/50 rounded-lg border border-purple-200 transition-all" data-magicpath-id="151" data-magicpath-path="CreativePlusDashboard.tsx">
                <Send className="w-6 h-6 text-purple-600 mb-2" data-magicpath-id="152" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="text-sm font-medium text-gray-900" data-magicpath-id="153" data-magicpath-path="CreativePlusDashboard.tsx">Send Update</span>
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#FDB913]/10 to-[#FDB913]/20 hover:from-[#FDB913]/20 hover:to-[#FDB913]/30 rounded-lg border border-[#FDB913]/30 transition-all" data-magicpath-id="154" data-magicpath-path="CreativePlusDashboard.tsx">
                <FileText className="w-6 h-6 text-[#FDB913] mb-2" data-magicpath-id="155" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="text-sm font-medium text-gray-900" data-magicpath-id="156" data-magicpath-path="CreativePlusDashboard.tsx">Create Copy</span>
              </motion.button>

              <motion.button whileHover={{
              scale: 1.05,
              y: -2
            }} whileTap={{
              scale: 0.95
            }} className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-50 to-pink-100/50 hover:from-pink-100 hover:to-pink-200/50 rounded-lg border border-pink-200 transition-all" data-magicpath-id="157" data-magicpath-path="CreativePlusDashboard.tsx">
                <Palette className="w-6 h-6 text-pink-600 mb-2" data-magicpath-id="158" data-magicpath-path="CreativePlusDashboard.tsx" />
                <span className="text-sm font-medium text-gray-900" data-magicpath-id="159" data-magicpath-path="CreativePlusDashboard.tsx">Create Asset</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
};