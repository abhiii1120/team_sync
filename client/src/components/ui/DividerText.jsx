import React from "react";

const DividerText = ({ text }) => {
  return (
    <div className="relative py-6 text-center">
      <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-[#0e0e14] px-2 relative z-10">
        {text}
      </span>
      <div className="absolute inset-x-0 top-1/2 border-t border-white/10" />
    </div>
  );
};

export default DividerText;
