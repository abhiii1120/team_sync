import { forwardRef } from "react";

const FormInput = forwardRef(({ label, icon: Icon, error, ...rest }, ref) => (
  <div>
    <label className="block text-xs font-medium text-gray-300 mb-1.5">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
      )}
      <input
        ref={ref}
        {...rest}
        className={`w-full bg-white/5 border rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
          error
            ? "border-red-500/60"
            : "border-white/10 focus:border-indigo-500/50"
        }`}
      />
    </div>
    {error && <p className="text-xs text-red-400 mt-1">{error?.message}</p>}
  </div>
));

export default FormInput;
