import { CheckCircle2 } from 'lucide-react';

const CAPABILITIES = [
  {
    capability: "Job management",
    standard: "Helpdesk calls and spreadsheets",
    entire: "Live platform — every job tracked, staged, and visible",
  },
  {
    capability: "Engineer location",
    standard: "Phone calls to find out where they are",
    entire: "Live GPS map, updated every 2 minutes",
  },
  {
    capability: "Compliance tracking",
    standard: "Manual spreadsheet, easy to miss items",
    entire: "Automated — every obligation tracked, every overdue item flagged",
  },
  {
    capability: "Client visibility",
    standard: "Monthly report if you ask for one",
    entire: "Live client portal — access anytime, real-time data",
  },
  {
    capability: "PPM scheduling",
    standard: "Paper-based or basic calendar",
    entire: "SFG20-aligned auto-scheduler from asset register",
  },
  {
    capability: "Compliance certificates",
    standard: "Emailed as PDFs, easy to lose",
    entire: "Stored in EntireCAFM — accessible on demand, forever",
  },
  {
    capability: "Business intelligence",
    standard: "Monthly meeting with an account manager",
    entire: "AI Director Dashboard — daily briefing from live data",
  },
  {
    capability: "SLA management",
    standard: "Tracked manually, often reactively",
    entire: "Live SLA countdown — automated escalation if at risk",
  },
  {
    capability: "Document management",
    standard: "Scattered across emails and folders",
    entire: "Centralised document vault — searchable, always accessible",
  },
  {
    capability: "Technology investment",
    standard: "Off-the-shelf software, basic configuration",
    entire: "Purpose-built bespoke platform — significant in-house investment",
    isLast: true,
  }
];

export default function CAFMComparisonTable() {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-[#1E293B] text-white">
              <th className="py-5 px-6 font-semibold w-[25%] border-r border-[#334155]">Capability</th>
              <th className="py-5 px-6 font-semibold w-[35%] border-r border-[#334155]">Standard FM Provider</th>
              <th className="py-5 px-6 font-semibold w-[40%] text-[#dbaa4c]">EntireFM + EntireCAFM</th>
            </tr>
          </thead>
          <tbody>
            {CAPABILITIES.map((row, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <tr key={idx} className="border-b border-slate-200 last:border-b-0">
                  {/* Capability Column */}
                  <td className="py-4 px-6 font-medium text-slate-800 border-r border-slate-200 align-top">
                    {row.capability}
                  </td>
                  
                  {/* Standard FM Column */}
                  <td className={`py-4 px-6 border-r border-slate-200 text-slate-500 align-top ${isEven ? 'bg-slate-50/80' : 'bg-slate-100/80'}`}>
                    {row.standard}
                  </td>
                  
                  {/* EntireFM Column */}
                  <td className={`py-4 px-6 align-top ${row.isLast ? 'bg-[#fcf8f0] text-[#0f172a]' : 'bg-white text-[#1E293B]'}`}>
                    <div className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mr-3 mt-0.5 ${row.isLast ? 'text-[#dbaa4c]' : 'text-[#dbaa4c]'}`} />
                      <span className={row.isLast ? 'font-bold' : 'font-medium'}>
                        {row.entire}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
