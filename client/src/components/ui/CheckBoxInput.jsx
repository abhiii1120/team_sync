import React from "react";
import { forwardRef } from "react";

const CheckBoxInput = forwardRef(({ label,checked = false ,...rest }, ref) => (
  <label className="flex items-center gap-2 text-xs text-gray-400 pt-1">
    <input
      type="checkbox"
      checked={checked}
      className="w-3.5 h-3.5 rounded border-white/20 bg-white/5 accent-indigo-500"
      {...rest}
    />
    <span>{label}</span>
  </label>
));

export default CheckBoxInput;
