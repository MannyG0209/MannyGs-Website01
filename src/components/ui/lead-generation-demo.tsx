import { useState, useEffect } from 'react';
import { TrendingUp, Users, Target, DollarSign, Activity } from 'lucide-react';

export function LeadGenerationDemo() {
  const [leads, setLeads] = useState(247);
  const [qualified, setQualified] = useState(89);
  const [conversion, setConversion] = useState(36.1);
  const [revenue, setRevenue] = useState(12450);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      setLeads(prev => prev + Math.floor(Math.random() * 3));
      setQualified(prev => prev + Math.floor(Math.random() * 2));
      setConversion(prev => Math.max(30, Math.min(45, prev + (Math.random() - 0.5) * 2)));
      setRevenue(prev => prev + Math.floor(Math.random() * 500));
      setIsActive(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 p-4 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
            <Target className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">AI Lead Dashboard</h3>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-green-400'} animate-pulse`} />
              <span className="text-green-400 text-xs">Live</span>
            </div>
          </div>
        </div>
        <div className="text-white text-xs opacity-75">
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-xs">Total Leads</span>
          </div>
          <div className="text-white font-bold text-lg">{leads.toLocaleString()}</div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +12.5%
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-xs">Qualified</span>
          </div>
          <div className="text-white font-bold text-lg">{qualified}</div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +8.3%
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-xs">Conversion</span>
          </div>
          <div className="text-white font-bold text-lg">{conversion.toFixed(1)}%</div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +2.1%
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-xs">Revenue</span>
          </div>
          <div className="text-white font-bold text-lg">${revenue.toLocaleString()}</div>
          <div className="text-green-400 text-xs flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +15.7%
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-white text-xs font-medium">Recent Activity</span>
        </div>
        <div className="space-y-1">
          <div className="text-xs text-neutral-300 flex justify-between">
            <span>New lead: Tech Startup Inc.</span>
            <span className="text-green-400">High Quality</span>
          </div>
          <div className="text-xs text-neutral-300 flex justify-between">
            <span>Qualified: Marketing Agency</span>
            <span className="text-blue-400">In Progress</span>
          </div>
          <div className="text-xs text-neutral-300 flex justify-between">
            <span>Converted: E-commerce Co.</span>
            <span className="text-green-400">$2,500</span>
          </div>
        </div>
      </div>
    </div>
  );
}