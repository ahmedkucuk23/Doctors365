"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  User,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  UserCircle,
  Briefcase,
  Phone,
  Building,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type AccountType = "doctor" | "patient" | null;
type AuthMode = "login" | "signup";

export default function LoginPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState<AccountType>(null);
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [clinic, setClinic] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Store login state in localStorage for demo
      localStorage.setItem("doctors365_logged_in", "true");
      localStorage.setItem("doctors365_user_type", accountType || "patient");
      localStorage.setItem("doctors365_user_name", firstName || "User");
      
      setIsLoading(false);
      router.push("/doctors-ai");
    }, 1500);
  };

  const handleBack = () => {
    if (accountType) {
      setAccountType(null);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1210] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Doctors 365" className="h-8 w-auto brightness-0 invert" />
        </Link>
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          {!accountType ? (
            // Account Type Selection
            <motion.div
              key="account-selection"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-lg"
            >
              <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00b894] shadow-lg shadow-[#00b894]/30">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-white mb-3">
                  Choose your account type
                </h1>
                <p className="text-gray-400">
                  Select how you want to use Doctors 365
                </p>
              </div>

              <div className="space-y-4">
                {/* Doctor Option */}
                <motion.button
                  onClick={() => setAccountType("doctor")}
                  className="w-full group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a2420] p-6 text-left transition-all hover:border-[#00b894]/50 hover:bg-[#1a2420]/80"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00b894]/20 text-[#00b894] group-hover:bg-[#00b894] group-hover:text-white transition-colors">
                      <Stethoscope className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Login as Doctor
                      </h3>
                      <p className="text-sm text-gray-400">
                        Access your practice dashboard, manage patients, and provide consultations
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-[#00b894] transition-colors" />
                  </div>
                </motion.button>

                {/* Patient Option */}
                <motion.button
                  onClick={() => setAccountType("patient")}
                  className="w-full group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a2420] p-6 text-left transition-all hover:border-[#00b894]/50 hover:bg-[#1a2420]/80"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <User className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        Login as Patient
                      </h3>
                      <p className="text-sm text-gray-400">
                        Find doctors, book consultations, and access AI health assistant
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                </motion.button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-8">
                By continuing, you agree to our{" "}
                <a href="#" className="text-[#00b894] hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-[#00b894] hover:underline">Privacy Policy</a>
              </p>
            </motion.div>
          ) : (
            // Login/Signup Form
            <motion.div
              key="auth-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md"
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${
                    accountType === "doctor" 
                      ? "bg-[#00b894] shadow-[#00b894]/30" 
                      : "bg-purple-500 shadow-purple-500/30"
                  }`}>
                    {accountType === "doctor" ? (
                      <Stethoscope className="h-7 w-7 text-white" />
                    ) : (
                      <User className="h-7 w-7 text-white" />
                    )}
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-white mb-2">
                  {authMode === "login" ? "Welcome back" : "Create account"}
                </h1>
                <p className="text-gray-400">
                  {authMode === "login" 
                    ? `Sign in to your ${accountType} account` 
                    : `Register as a ${accountType}`}
                </p>
              </div>

              {/* Auth Mode Toggle */}
              <div className="flex rounded-xl bg-[#1a2420] p-1 mb-6">
                <button
                  onClick={() => setAuthMode("login")}
                  className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    authMode === "login"
                      ? "bg-[#00b894] text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setAuthMode("signup")}
                  className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all ${
                    authMode === "signup"
                      ? "bg-[#00b894] text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {authMode === "signup" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">First Name</label>
                        <div className="relative">
                          <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="John"
                            className="w-full rounded-xl border border-white/10 bg-[#1a2420] py-3 pl-10 pr-4 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00b894]/50"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                        <div className="relative">
                          <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Doe"
                            className="w-full rounded-xl border border-white/10 bg-[#1a2420] py-3 pl-10 pr-4 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00b894]/50"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="+1 234 567 890"
                          className="w-full rounded-xl border border-white/10 bg-[#1a2420] py-3 pl-10 pr-4 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00b894]/50"
                        />
                      </div>
                    </div>

                    {accountType === "doctor" && (
                      <>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Specialty</label>
                          <div className="relative">
                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                            <input
                              type="text"
                              value={specialty}
                              onChange={(e) => setSpecialty(e.target.value)}
                              placeholder="e.g. Cardiology"
                              className="w-full rounded-xl border border-white/10 bg-[#1a2420] py-3 pl-10 pr-4 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00b894]/50"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-400 mb-2">Clinic/Hospital</label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                            <input
                              type="text"
                              value={clinic}
                              onChange={(e) => setClinic(e.target.value)}
                              placeholder="Your clinic name"
                              className="w-full rounded-xl border border-white/10 bg-[#1a2420] py-3 pl-10 pr-4 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00b894]/50"
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )}

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#1a2420] py-3 pl-10 pr-4 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00b894]/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-white/10 bg-[#1a2420] py-3 pl-10 pr-12 text-white placeholder-gray-600 outline-none transition-colors focus:border-[#00b894]/50"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {authMode === "login" && (
                  <div className="flex justify-end">
                    <a href="#" className="text-sm text-[#00b894] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}

                {authMode === "signup" && (
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-[#1a2420] text-[#00b894] focus:ring-[#00b894] focus:ring-offset-0"
                    />
                    <span className="text-sm text-gray-400">
                      By creating an account, I agree to the{" "}
                      <a href="#" className="text-[#00b894] hover:underline">Terms of Use</a>
                      {" "}and{" "}
                      <a href="#" className="text-[#00b894] hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                )}

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00b894] py-3.5 font-semibold text-white transition-all hover:bg-[#00d9a5] disabled:opacity-70"
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {authMode === "login" ? "Sign In" : "Create Account"}
                      <ChevronRight className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                {authMode === "login" ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      onClick={() => setAuthMode("signup")}
                      className="text-[#00b894] hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setAuthMode("login")}
                      className="text-[#00b894] hover:underline"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
