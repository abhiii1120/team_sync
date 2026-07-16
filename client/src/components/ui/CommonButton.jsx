import React from "react";

const CommonButton = ({ label, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition disabled:opacity-50  disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
};

export default CommonButton;