import React from "react";
import { useState } from "react";
import { Mail, Lock, Sparkles, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import FormInput from "../../../../components/ui/FormInput";
import PasswordInput from "../../../../components/ui/PasswordInput";
import CheckBoxInput from "../../../../components/ui/CheckBoxInput";
import CommonButton from "../../../../components/ui/CommonButton";
import DividerText from "../../../../components/ui/DividerText";
import IconButton from "../../../../components/ui/IconButton";
import LinkText from "../../../../components/ui/LinkText";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let { register, onLoginSubmit, handleSubmit, errors } = useAuth();

  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Left panel */}
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
              <Sparkles className="w-3.5 h-3.5" />
              Next-Gen Intelligence
            </div>
            <h1 className="text-3xl font-bold text-white leading-tight">
              Welcome back to the future of insight.
            </h1>
            <p className="text-sm text-indigo-100/70 max-w-xs">
              Pick up right where you left off — your models, data, and
              dashboards are exactly as you left them.
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
          <h2 className="text-2xl font-bold text-white mb-1">Log in</h2>
          <p className="text-sm text-indigo-300/80 mb-6">
            Enter your details to access your dashboard.
          </p>
          <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-4">
            <FormInput
              label="Email Address"
              icon={Mail}
              placeholder="name@company.com"
              error={errors.email}
              {...register("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              error={errors.password}
              {...register("password")}
            />
            <CheckBoxInput checked={false} label="Remember me for 30 days" />
            <CommonButton label="Log In" />
          </form>
          <DividerText text="Or continue with"/>
          <div className="grid grid-cols-2 gap-3">
            <IconButton label="Google" icon={Sparkles}/>
            <IconButton label="SSO" icon={Sparkles}/>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Don't have an account?{" "}
            <LinkText href={'/register'} label={'Sign Up'}/>
          </p>
          QA
        </div>
      </div>
    </div>
  );
};

export default Login;
