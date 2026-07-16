import React from "react";
import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Sparkles,
  Eye,
  EyeOff,
  Space,
  SpadeIcon,
  User2,
  GoalIcon,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import RightComponent from "../common/RightComponent";
import FormInput from "../../../../components/ui/FormInput";
import PasswordInput from "../../../../components/ui/PasswordInput";
import CheckBoxInput from "../../../../components/ui/CheckBoxInput";
import CommonButton from "../../../../components/ui/CommonButton";
import DividerText from "../../../../components/ui/DividerText";
import IconButton from "../../../../components/ui/IconButton";

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

  let { register, onRegisterSubmit, handleSubmit, errors, navigate } =
    useAuth();

  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Left panel */}

        <RightComponent
          icon={SpadeIcon}
          MainText={"Accelerate your team's intelligence."}
          SubText={
            "Connect your enterprise data to our specialized AI models and unlock unparalleled strategic insights in seconds."
          }
        />

        {/* Right panel */}
        <div className="bg-[#0e0e14] p-8 sm:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-1">
            Create your account
          </h2>
          <p className="text-sm text-indigo-300/80 mb-6">
            Experience the future of collaborative data intelligence.
          </p>

          <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-4">
            <FormInput
              label="User Name"
              icon={User2}
              placeholder="john doe"
              errors={errors.name}
              {...register("name")}
            />
            <FormInput
              label="Email Address"
              icon={Mail}
              placeholder="name@company.com"
              errors={errors.name}
              {...register("email")}
            />

            <PasswordInput
              label="Password"
              placeholder="Create a password"
              errors={errors.password}
              {...register("password")}
            />

            <label className="flex items-start gap-2 text-xs text-gray-400 pt-1">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-3.5 h-3.5 rounded border-white/20 bg-white/5 accent-indigo-500"
              />
              <span className="flex gap-1">
                I agree to the{" "}
                <p
                  onClick={() => navigate("/terms")}
                  className="text-indigo-400  cursor-pointer"
                >
                  Terms of Service
                </p>{" "}
                and{" "}
                <p
                  onClick={() => navigate("/policy")}
                  className="text-indigo-400 "
                >
                  Privacy Policy
                </p>
                .
              </span>
            </label>
            <CommonButton label={'Create Account'} disabled={!agreed}/>
            </form>

            <DividerText text={'Or continue with'}/>

            <div className="grid grid-cols-2 gap-3">
              <IconButton icon={GoalIcon} label={'Google'}/>
              <IconButton icon={Sparkles} label={'SSO'}/>
            </div>
          
          <p className="text-center text-xs text-gray-400 mt-6 flex justify-center gap-1">
            Already have an account?{" "}
            <span onClick={() => navigate('/')} className="text-indigo-400 font-medium cursor-pointer">
              Log In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
