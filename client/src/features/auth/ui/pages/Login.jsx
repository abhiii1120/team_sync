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
import RightComponent from "../common/RightComponent";

const Login = () => {

  let { register, onLoginSubmit, handleSubmit, errors, navigate } = useAuth();

  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
        {/* Left panel */}
        <RightComponent
          icon={Sparkles}
          MainText={"Welcome back to the future of insight."}
          SubText={
            " Pick up right where you left off — your models, data, and dashboards are exactly as you left them."
          }
        />

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
          <DividerText text="Or continue with" />
          <div className="grid grid-cols-2 gap-3">
            <IconButton label="Google" icon={Sparkles} />
            <IconButton label="SSO" icon={Sparkles} />
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            Don't have an account?{" "}
            <LinkText onClick={() => navigate('/register')} label={"Sign Up"} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
