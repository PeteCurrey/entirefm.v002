export default function CAFMMobileMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto h-[550px] flex items-center justify-center">
      
      {/* Background Screen (Screen 2 - Job Detail) */}
      <div className="absolute top-4 -right-4 w-[280px] h-[500px] bg-[#1E293B] rounded-[2rem] border-8 border-slate-800 shadow-2xl opacity-60 transform scale-95 rotate-3 overflow-hidden select-none">
        {/* Notch area */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
          <div className="w-24 h-4 bg-slate-800 rounded-b-xl"></div>
        </div>
        
        <div className="pt-10 px-4 pb-4 h-full flex flex-col items-center justify-center space-y-6">
          <div className="w-full text-center space-y-2 mb-4">
            <div className="text-xs text-slate-400 font-semibold tracking-wider">JOB #4829</div>
            <div className="text-lg text-white font-bold">HVAC Inspection</div>
            <div className="text-sm text-slate-300">The Atrium, Leeds</div>
          </div>

          <div className="w-full bg-slate-800 rounded-xl p-4 border border-slate-700 space-y-3">
             <div className="flex justify-between text-xs text-slate-400">
                <span>Priority</span>
                <span className="text-amber-400 font-medium">Standard</span>
             </div>
             <div className="flex justify-between text-xs text-slate-400">
                <span>Asset</span>
                <span className="text-white">AHU-04</span>
             </div>
             <div className="h-px w-full bg-slate-700 my-2"></div>
             <div className="text-xs text-slate-300 leading-relaxed">
               Routine 6-monthly check on rooftop unit as per SFG20 schedule. Filter replacement likely needed.
             </div>
          </div>

          <div className="mt-auto w-full">
            {/* The large Arrived On Site button */}
            <div className="w-full py-4 rounded-xl bg-[#E91E8C] text-white font-bold text-center text-sm shadow-[0_0_15px_rgba(233,30,140,0.4)]">
              ARRIVED ON SITE
            </div>
          </div>
        </div>
      </div>

      {/* Foreground Screen (Screen 1 - Today's Jobs) */}
      <div className="absolute top-0 -left-2 w-[280px] h-[520px] bg-[#f8f9fa] rounded-[2rem] border-8 border-slate-800 shadow-2xl overflow-hidden select-none z-10">
        {/* Notch area */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
          <div className="w-24 h-4 bg-slate-800 rounded-b-xl"></div>
        </div>

        <div className="h-full flex flex-col bg-slate-50">
          {/* App Header */}
          <div className="bg-[#1E293B] pt-12 pb-6 px-5 rounded-b-3xl shadow-md">
            <h1 className="text-white text-xl font-bold font-sans">Good morning, Ryan.</h1>
            <p className="text-slate-400 text-sm mt-1">You have 4 jobs scheduled today.</p>
          </div>

          <div className="flex-1 p-4 flex flex-col space-y-4 overflow-hidden relative">
            
            {/* Next Job Card Active */}
            <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#dbaa4c]">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-[#E91E8C] tracking-wide uppercase">Next Job • 09:30</span>
                <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold">HIGH</span>
              </div>
              <h3 className="font-bold text-slate-800 text-sm mb-1">Water Leak Investigation</h3>
              <p className="text-xs text-slate-500 mb-3">Unit 3, The Retail Park</p>
              <div className="w-full bg-[#1E293B] text-white text-center text-xs py-2 rounded-lg font-semibold hover:bg-slate-800 cursor-pointer">
                Navigate to Site
              </div>
            </div>

            <div className="pt-2">
               <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Later Today</h4>
               <div className="space-y-3">
                 {[
                   { time: '11:00', title: 'HVAC Inspection', loc: 'The Atrium' },
                   { time: '14:00', title: 'Fire Alarm Test', loc: 'Oasis Towers' },
                   { time: '16:30', title: 'Lighting Repair', loc: 'Building 4' },
                 ].map((job, idx) => (
                   <div key={idx} className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex items-center">
                     <div className="w-12 text-center border-r border-slate-100 pr-3 mr-3">
                       <span className="text-xs font-bold text-slate-700">{job.time}</span>
                     </div>
                     <div>
                       <div className="text-xs font-bold text-slate-800">{job.title}</div>
                       <div className="text-[10px] text-slate-500">{job.loc}</div>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Bottom Nav Mockup */}
          <div className="bg-white border-t border-slate-200 py-3 px-6 flex justify-between items-center text-slate-400">
             <div className="flex flex-col items-center text-[#dbaa4c]">
               <div className="w-5 h-5 bg-[#dbaa4c] mask-icon" style={{ WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\'/%3E%3Cpolyline points=\'9 22 9 12 15 12 15 22\'/%3E%3C/svg%3E")', maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\'/%3E%3Cpolyline points=\'9 22 9 12 15 12 15 22\'/%3E%3C/svg%3E")' }}></div>
               <span className="text-[9px] mt-1 font-semibold">Today</span>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-5 h-5 bg-slate-400 mask-icon" style={{ WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Crect width=\'18\' height=\'18\' x=\'3\' y=\'4\' rx=\'2\' ry=\'2\'/%3E%3Cline x1=\'16\' x2=\'16\' y1=\'2\' y2=\'6\'/%3E%3Cline x1=\'8\' x2=\'8\' y1=\'2\' y2=\'6\'/%3E%3Cline x1=\'3\' x2=\'21\' y1=\'10\' y2=\'10\'/%3E%3C/svg%3E")', maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Crect width=\'18\' height=\'18\' x=\'3\' y=\'4\' rx=\'2\' ry=\'2\'/%3E%3Cline x1=\'16\' x2=\'16\' y1=\'2\' y2=\'6\'/%3E%3Cline x1=\'8\' x2=\'8\' y1=\'2\' y2=\'6\'/%3E%3Cline x1=\'3\' x2=\'21\' y1=\'10\' y2=\'10\'/%3E%3C/svg%3E")' }}></div>
               <span className="text-[9px] mt-1 font-semibold">Schedule</span>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-5 h-5 bg-slate-400 mask-icon" style={{ WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\'/%3E%3Cpath d=\'M12 16v-4\'/%3E%3Cpath d=\'M12 8h.01\'/%3E%3C/svg%3E")', maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'10\'/%3E%3Cpath d=\'M12 16v-4\'/%3E%3Cpath d=\'M12 8h.01\'/%3E%3C/svg%3E")' }}></div>
               <span className="text-[9px] mt-1 font-semibold">More</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
