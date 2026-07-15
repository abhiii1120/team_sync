import React from "react";

const IconButton = ({label , icon : Icon , ...rest}) => {
  return (
    <button
      type="button"
      {...rest}
      className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-200 hover:bg-white/10 transition"
    >
      <Icon className="w-4 h-4 text-indigo-400" />
      {label}
    </button>
  );
};

export default IconButton;
