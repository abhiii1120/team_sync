import React from "react";
import { useState } from "react";
import { User, Mail, Lock, Sparkles, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [agreed, setAgreed] = useState(false);

  const passwordStrength = (() => {
    const p = form.password;
    if (!p) return { label: "", pct: 0 };
    if (p.length < 6) return { label: "Weak password", pct: 33 };
    if (p.length < 10) return { label: "Good password", pct: 66 };
    return { label: "Strong password", pct: 100 };
  })();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  let {register,onRegisterSubmit,handleSubmit,errors} = useAuth();

  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Left panel */}
        <div className="relative hidden md:flex flex-col justify-between p-8 overflow-hidden bg-[#0d0e1a]">
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
              <radialGradient id="glow" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#8b7bff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b7bff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="180" cy="200" r="220" fill="url(#glow)" />
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

          <div className="relative z-10 flex items-center gap-2 text-white font-semibold text-lg">
            <span className="inline-block w-6 h-6 rounded bg-linear-to-br from-indigo-400 to-purple-500" />
            Synthetix AI
          </div>

          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-indigo-300 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Next-Gen Intelligence
            </div>
            <h1 className="text-3xl font-bold text-white leading-tight">
              Accelerate your team's intelligence.
            </h1>
            <p className="text-sm text-indigo-100/70 max-w-xs">
              Connect your enterprise data to our specialized AI models and
              unlock unparalleled strategic insights in seconds.
            </p>
            <div className="flex gap-8 pt-2">
              <div>
                <div className="text-lg font-bold text-white">99.9%</div>
                <div className="text-xs text-indigo-200/50">Uptime SLA</div>
              </div>
              <div>
                <div className="text-lg font-bold text-white">ISO</div>
                <div className="text-xs text-indigo-200/50">
                  27001 Certified
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-[#0e0e14] p-8 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-1">
            Create your account
          </h2>
          <p className="text-sm text-indigo-300/80 mb-6">
            Experience the future of collaborative data intelligence.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-10 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {form.password && (
                <div className="mt-2">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                      style={{ width: `${passwordStrength.pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-indigo-300 mt-1 inline-block">
                    {passwordStrength.label}
                  </span>
                </div>
              )}
            </div>

            <label className="flex items-start gap-2 text-xs text-gray-400 pt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-3.5 h-3.5 rounded border-white/20 bg-white/5 accent-indigo-500"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="text-indigo-400 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-400 hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={!agreed}
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Account
            </button>

            <div className="relative py-2 text-center">
              <span className="text-[10px] uppercase tracking-wider text-gray-500 bg-[#0e0e14] px-2 relative z-10">
                Or continue with
              </span>
              <div className="absolute inset-x-0 top-1/2 border-t border-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-200 hover:bg-white/10 transition"
              >
                <span className="w-4 h-4 rounded-full bg-linear-to-br from-yellow-400 to-red-500" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-200 hover:bg-white/10 transition"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                SSO
              </button>
            </div>
          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            Already have an account?{" "}
            <a
              href="/"
              className="text-indigo-400 font-medium hover:underline"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
