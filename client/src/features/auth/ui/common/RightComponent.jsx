import React from "react";

const RightComponent = ({ icon: Icon, MainText, SubText }) => {
  return (
    <div className="relative hidden md:flex flex-col justify-end p-8 overflow-hidden bg-[#0d0e1a]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(124,102,255,0.35), transparent 45%), radial-gradient(circle at 70% 60%, rgba(56,64,140,0.4), transparent 50%), linear-gradient(180deg, #0a0a12 0%, #10111e 100%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen"
        viewBox="0 0 400 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="glow2" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#8b7bff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b7bff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="180" cy="200" r="220" fill="url(#glow2)" />
        {Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * Math.PI * 2;
          const len = 80 + ((i * 37) % 160);
          const x1 = 180 + Math.cos(angle) * 20;
          const y1 = 200 + Math.sin(angle) * 20;
          const x2 = 180 + Math.cos(angle) * len;
          const y2 = 200 + Math.sin(angle) * len;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#a5b4fc"
              strokeWidth="1"
              opacity={0.25}
            />
          );
        })}
      </svg>
      <div className="relative z-10 space-y-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-indigo-300 uppercase">
          <Icon className="w-3.5 h-3.5" />
          Next-Gen Intelligence
        </div>
        <h1 className="text-3xl font-bold text-white leading-tight">
          {MainText}
        </h1>
        <p className="text-sm text-indigo-100/70 max-w-xs">{SubText}</p>
        <div className="flex gap-8 pt-2">
          <div>
            <div className="text-lg font-bold text-white">99.9%</div>
            <div className="text-xs text-indigo-200/50">Uptime SLA</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">ISO</div>
            <div className="text-xs text-indigo-200/50">27001 Certified</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
