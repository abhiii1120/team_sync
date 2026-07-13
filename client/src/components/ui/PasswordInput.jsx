import { forwardRef, useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

const PasswordInput = forwardRef(({ label, error, ...rest }, ref) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-xs font-medium text-gray-300 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          ref={ref}
          type={show ? "text" : "password"}
          {...rest}
          className={`w-full bg-white/5 border rounded-lg pl-10 pr-10 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
            error ? "border-red-500/60" : "border-white/10 focus:border-indigo-500/50"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {error && <p className="text-xs text-red-400 mt-1">{error.message}</p>}
    </div>
  );
});

export default PasswordInput;