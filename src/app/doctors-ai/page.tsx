"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  Stethoscope,
  Bot,
  User,
  Sparkles,
  X,
  Check,
  Clock,
  Heart,
  Brain,
  Pill,
  Activity,
  MoreVertical,
  Phone,
  Video,
  Menu,
  ChevronDown,
  Zap,
  SendHorizontal,
  Paperclip,
  Image,
  FileText,
  Lightbulb,
  Crown,
  ArrowRight,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Mock conversation data
const mockConversations = [
  {
    id: 1,
    name: "General Health",
    lastMessage: "Based on your symptoms, I recommend...",
    time: "2 min ago",
    unread: 2,
    icon: Heart,
  },
  {
    id: 2,
    name: "Medication Info",
    lastMessage: "The dosage for this medication is...",
    time: "1 hour ago",
    unread: 0,
    icon: Pill,
  },
  {
    id: 3,
    name: "Mental Wellness",
    lastMessage: "Here are some techniques for managing...",
    time: "Yesterday",
    unread: 0,
    icon: Brain,
  },
  {
    id: 4,
    name: "Fitness & Nutrition",
    lastMessage: "For your fitness goals, consider...",
    time: "2 days ago",
    unread: 0,
    icon: Activity,
  },
];

// AI Models
const models = [
  { id: 'doctors-ai', name: 'Doctors AI', description: 'Medical assistant', icon: Stethoscope, badge: 'Default' },
  { id: 'claude-4', name: 'Claude 4', description: 'Most capable', icon: Sparkles, badge: 'Pro' },
  { id: 'gpt-4o', name: 'GPT-4o', description: 'OpenAI flagship', icon: Zap },
  { id: 'gemini-2.0', name: 'Gemini 2.0', description: 'Google AI', icon: Brain },
];

// Ray Background Component
function RayBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 bg-[#0a1210]" />
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-[4000px] h-[1800px] sm:w-[6000px]"
        style={{
          background: `radial-gradient(circle at center 800px, rgba(0, 184, 148, 0.7) 0%, rgba(0, 184, 148, 0.3) 14%, rgba(0, 184, 148, 0.15) 18%, rgba(0, 184, 148, 0.06) 22%, rgba(10, 18, 16, 0.2) 25%)`
        }}
      />
      <div 
        className="absolute top-[175px] left-1/2 w-[1600px] h-[1600px] sm:top-1/2 sm:w-[3043px] sm:h-[2865px]"
        style={{ transform: 'translate(-50%) rotate(180deg)' }}
      >
        <div className="absolute w-full h-full rounded-full -mt-[13px]" style={{ background: 'radial-gradient(43.89% 25.74% at 50.02% 97.24%, #0a1210 0%, #0a1210 100%)', border: '16px solid white', transform: 'rotate(180deg)', zIndex: 5 }} />
        <div className="absolute w-full h-full rounded-full bg-[#0a1210] -mt-[11px]" style={{ border: '23px solid #b0ebe0', transform: 'rotate(180deg)', zIndex: 4 }} />
        <div className="absolute w-full h-full rounded-full bg-[#0a1210] -mt-[8px]" style={{ border: '23px solid #66d9c4', transform: 'rotate(180deg)', zIndex: 3 }} />
        <div className="absolute w-full h-full rounded-full bg-[#0a1210] -mt-[4px]" style={{ border: '23px solid #33cca8', transform: 'rotate(180deg)', zIndex: 2 }} />
        <div className="absolute w-full h-full rounded-full bg-[#0a1210]" style={{ border: '20px solid #00b894', boxShadow: '0 -15px 24.8px rgba(0, 184, 148, 0.6)', transform: 'rotate(180deg)', zIndex: 1 }} />
      </div>
    </div>
  )
}

// Membership Modal Component
function MembershipModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter();
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative z-10 w-full max-w-md rounded-3xl bg-gradient-to-b from-[#1a2420] to-[#0d1815] border border-white/10 p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#00b894] to-[#00d9a5] shadow-lg shadow-[#00b894]/30">
              <Crown className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3">
            Unlock Doctors 365 AI
          </h2>
          <p className="text-gray-400 mb-6">
            Join the Doctors 365 Membership to get unlimited access to our AI health assistant and premium features.
          </p>

          <div className="bg-[#00b894]/10 border border-[#00b894]/30 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-bold text-white">€29.90</span>
              <span className="text-gray-400">/year</span>
            </div>
            <p className="text-sm text-[#00b894]">Unlimited AI consultations</p>
          </div>

          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited AI health consultations",
              "Priority response time",
              "Access to all AI models",
              "Medical report analysis",
              "24/7 availability",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00b894]/20">
                  <Check className="h-3 w-3 text-[#00b894]" />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={() => router.push("/login")}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00b894] py-4 font-semibold text-white transition-all hover:bg-[#00d9a5] mb-3"
          >
            Become a Member
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => router.push("/login")}
            className="w-full text-sm text-gray-400 hover:text-white transition-colors"
          >
            Already a member? Sign in
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function DoctorsAI() {
  const router = useRouter();
  const [messages, setMessages] = useState<Array<{id: number; type: string; content: string; time: string}>>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showModelSelector, setShowModelSelector] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const landingTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Check login status on mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("doctors365_logged_in") === "true";
    const name = localStorage.getItem("doctors365_user_name") || "User";
    setIsLoggedIn(loggedIn);
    setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("doctors365_logged_in");
    localStorage.removeItem("doctors365_user_type");
    localStorage.removeItem("doctors365_user_name");
    setIsLoggedIn(false);
    setUserName("");
    setMessages([]);
    setHasStartedChat(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const textarea = hasStartedChat ? textareaRef.current : landingTextareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  }, [inputValue, hasStartedChat]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Check if user is logged in
    if (!isLoggedIn) {
      setShowMembershipModal(true);
      return;
    }

    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: inputValue,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // If first message, add welcome message first
    if (!hasStartedChat) {
      const welcomeMessage = {
        id: 0,
        type: "ai" as const,
        content: `Hello${userName ? ` ${userName}` : ""}! I'm your Doctors 365 AI Assistant. I can help you with general health questions, explain medical terms, provide medication information, and offer wellness tips. How can I assist you today?`,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([welcomeMessage, userMessage]);
      setHasStartedChat(true);
    } else {
      setMessages([...messages, userMessage]);
    }

    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        type: "ai" as const,
        content: "Thank you for your question. I'm analyzing your query and will provide a detailed response.\n\n**Based on your input**, here are some insights:\n\n1. This is a demo interface showcasing the AI chat functionality\n2. In production, this would connect to Claude or GPT-4 API\n3. The AI would provide personalized health guidance\n\n⚠️ **Remember:** Always consult a healthcare professional for medical decisions.\n\nWould you like me to elaborate on anything specific?",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };

  // Landing View (before chat starts)
  if (!hasStartedChat) {
    return (
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-[#0a1210]">
        <RayBackground />
        <MembershipModal isOpen={showMembershipModal} onClose={() => setShowMembershipModal(false)} />
        
        {/* Header with Logo */}
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Doctors 365" className="h-8 w-auto brightness-0 invert" />
          </a>
          <div className="flex items-center gap-3">
            <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Find Doctor</a>
            {isLoggedIn ? (
              <>
                <span className="text-sm text-[#00b894]">Hi, {userName}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <a href="/login" className="px-4 py-2 rounded-full bg-[#00b894] text-white text-sm font-medium hover:bg-[#00d9a5] transition-colors">
                Sign Up
              </a>
            )}
          </div>
        </header>

        {/* Announcement Badge */}
        <motion.div 
          className="absolute top-[100px] z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div 
            className="relative inline-flex items-center gap-2 px-5 py-2 min-h-[40px] rounded-full text-sm overflow-hidden cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              backdropFilter: 'blur(20px) saturate(140%)',
              boxShadow: 'inset 0 1px rgba(255,255,255,0.2), inset 0 -1px rgba(0,0,0,0.1), 0 8px 32px -8px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.08)'
            }}
          >
            <span className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none opacity-70 mix-blend-overlay" style={{ background: 'radial-gradient(ellipse at center top, rgba(255, 255, 255, 0.15) 0%, transparent 70%)' }} />
            <span className="absolute -top-px left-1/2 -translate-x-1/2 h-[2px] w-[100px] opacity-60" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0, 184, 148, 0.8) 20%, rgba(0, 217, 165, 0.8) 50%, rgba(0, 184, 148, 0.8) 80%, transparent 100%)', filter: 'blur(0.5px)' }} />
            <Stethoscope className="size-4 relative z-10 text-white" />
            <span className="relative z-10 text-white font-medium">Powered by Advanced AI</span>
          </div>
        </motion.div>
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 mt-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00b894] shadow-lg shadow-[#00b894]/30">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <span className="font-bold text-2xl text-white">
              Doctors<span className="text-[#00b894]">365</span> AI
            </span>
          </motion.div>

          {/* Title */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
              Your AI Health{' '}
              <span className="bg-gradient-to-b from-[#00d9a5] via-[#00b894] to-white bg-clip-text text-transparent italic">
                Assistant
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
              Get instant answers to your health questions with our AI-powered medical assistant.
            </p>
          </motion.div>

          {/* Chat Input */}
          <motion.div 
            className="w-full max-w-[700px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
              <div className="relative rounded-2xl bg-[#1a2420] ring-1 ring-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_2px_20px_rgba(0,0,0,0.4)]">
                <textarea
                  ref={landingTextareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask your health question..."
                  className="w-full resize-none bg-transparent text-[15px] text-white placeholder-gray-600 px-5 pt-5 pb-3 focus:outline-none min-h-[80px] max-h-[150px]"
                  rows={1}
                />

                <div className="flex items-center justify-between px-3 pb-3 pt-1">
                  <div className="flex items-center gap-1">
                    <button className="flex items-center justify-center size-8 rounded-full bg-white/[0.08] hover:bg-white/[0.12] text-gray-500 hover:text-white transition-all">
                      <Plus className="size-4" />
                    </button>
                    <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium text-gray-500 hover:text-white hover:bg-white/5 transition-all">
                      <Stethoscope className="size-4 text-[#00b894]" />
                      <span>Doctors AI</span>
                      <ChevronDown className="size-3" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium text-gray-600 hover:text-white hover:bg-white/5 transition-all">
                      <Lightbulb className="size-4" />
                      <span className="hidden sm:inline">Symptoms</span>
                    </button>

                    <button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#00b894] hover:bg-[#00d9a5] text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,184,148,0.3)]"
                    >
                      <span className="hidden sm:inline">Ask AI</span>
                      <SendHorizontal className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div 
            className="flex items-center gap-4 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-sm text-gray-600">Quick actions</span>
            <div className="flex gap-2 flex-wrap justify-center">
              {[
                { label: 'Check Symptoms', icon: Activity },
                { label: 'Medication Info', icon: Pill },
                { label: 'Wellness Tips', icon: Heart },
              ].map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleQuickAction(action.label)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-transparent text-gray-500 hover:text-white hover:border-[#00b894]/50 hover:bg-[#00b894]/10 transition-all"
                >
                  <action.icon className="size-4" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p 
            className="mt-8 text-xs text-gray-600 text-center max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            This AI provides general health info only. Always consult a healthcare professional for medical advice.
          </motion.p>
        </div>
      </div>
    );
  }

  // Chat View (after first message)
  return (
    <motion.div 
      className="flex h-screen bg-[#0a1210]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <MembershipModal isOpen={showMembershipModal} onClose={() => setShowMembershipModal(false)} />
      
      {/* Sidebar */}
      <AnimatePresence>
        {showSidebar && (
          <motion.aside
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-y-0 left-0 z-30 w-80 flex flex-col border-r border-white/10 bg-[#0d1815] lg:relative"
          >
            {/* Sidebar Header */}
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
              <a href="/" className="flex items-center gap-3">
                <img src="/logo.png" alt="Doctors 365" className="h-8 w-auto brightness-0 invert" />
              </a>
              <button
                onClick={() => setShowSidebar(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-white/5 lg:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search */}
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#00b894]/50 focus:bg-white/10"
                />
              </div>
            </div>

            {/* New Chat Button */}
            <div className="px-4 pb-4">
              <button 
                onClick={() => { setMessages([]); setHasStartedChat(false); }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00b894] py-2.5 font-medium text-white transition-all hover:bg-[#00d9a5] active:scale-[0.98]"
              >
                <Plus className="h-5 w-5" />
                New Conversation
              </button>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto px-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                Recent Chats
              </p>
              <div className="space-y-2">
                {mockConversations.map((conv) => (
                  <motion.button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition-all ${
                      selectedConversation === conv.id
                        ? "bg-[#00b894]/20 border border-[#00b894]/30"
                        : "hover:bg-white/5 border border-transparent"
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        selectedConversation === conv.id
                          ? "bg-[#00b894] text-white"
                          : "bg-white/10 text-gray-400"
                      }`}
                    >
                      <conv.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-white text-sm">{conv.name}</h3>
                        <span className="text-[10px] text-gray-500">{conv.time}</span>
                      </div>
                      <p className="truncate text-xs text-gray-500">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00b894] text-[10px] font-medium text-white">
                        {conv.unread}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="border-t border-white/10 p-4 space-y-3">
              {isLoggedIn ? (
                <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00b894]">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{userName}</p>
                    <p className="text-xs text-[#00b894]">Member</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
                    title="Logout"
                  >
                    <LogOut className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <a
                  href="/login"
                  className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#00b894]/20 to-[#00b894]/10 p-3 hover:from-[#00b894]/30 hover:to-[#00b894]/20 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00b894]">
                    <Crown className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">Become a Member</p>
                    <p className="text-xs text-gray-400">€29.90/year for full access</p>
                  </div>
                </a>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        <header className="flex h-16 items-center justify-between border-b border-white/10 bg-[#0d1815] px-4">
          <div className="flex items-center gap-3">
            {!showSidebar && (
              <button
                onClick={() => setShowSidebar(true)}
                className="rounded-lg p-2 text-gray-400 hover:bg-white/5"
              >
                <Menu className="h-5 w-5" />
              </button>
            )}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b894] to-[#00d9a5]">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[#0d1815] bg-green-500">
                  <Check className="h-2 w-2 text-white" />
                </span>
              </div>
              <div>
                <h2 className="font-bold text-white">Doctors 365 AI</h2>
                <div className="flex items-center gap-1.5">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-500">Always online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden rounded-xl p-2.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white sm:block">
              <Phone className="h-5 w-5" />
            </button>
            <button className="hidden rounded-xl p-2.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white sm:block">
              <Video className="h-5 w-5" />
            </button>
            <button className="rounded-xl p-2.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-3xl space-y-6">
            {/* Welcome Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-gradient-to-r from-[#00b894] to-[#00d9a5] p-6 text-white shadow-lg shadow-[#00b894]/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-lg">Welcome to Doctors 365 AI</h3>
                  <p className="text-white/90 text-sm">
                    I can help with health questions, explain symptoms, provide medication info, and connect you with specialists.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Messages */}
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex max-w-[85%] gap-3 ${
                    message.type === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                      message.type === "ai"
                        ? "bg-gradient-to-br from-[#00b894] to-[#00d9a5]"
                        : "bg-white/10"
                    }`}
                  >
                    {message.type === "ai" ? (
                      <Bot className="h-5 w-5 text-white" />
                    ) : (
                      <User className="h-5 w-5 text-gray-400" />
                    )}
                  </div>

                  <div>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.type === "ai"
                          ? "bg-[#1a2420] border border-white/10"
                          : "bg-[#00b894] text-white"
                      }`}
                    >
                      <div
                        className={`whitespace-pre-wrap text-sm leading-relaxed ${
                          message.type === "ai" ? "text-gray-300" : ""
                        }`}
                        dangerouslySetInnerHTML={{
                          __html: message.content
                            .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>")
                            .replace(/\*(.*?)\*/g, "<em>$1</em>")
                            .replace(/\n/g, "<br />"),
                        }}
                      />
                    </div>
                    <div
                      className={`mt-1.5 flex items-center gap-2 text-[10px] text-gray-500 ${
                        message.type === "user" ? "justify-end" : ""
                      }`}
                    >
                      <Clock className="h-3 w-3" />
                      {message.time}
                      {message.type === "user" && (
                        <Check className="h-3 w-3 text-[#00b894]" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex justify-start"
                >
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b894] to-[#00d9a5]">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="rounded-2xl bg-[#1a2420] border border-white/10 px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        <motion.span
                          className="h-2 w-2 rounded-full bg-[#00b894]"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.span
                          className="h-2 w-2 rounded-full bg-[#00b894]"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.span
                          className="h-2 w-2 rounded-full bg-[#00b894]"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 bg-[#0d1815] p-4">
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
              <div className="relative rounded-2xl bg-[#1a2420] ring-1 ring-white/[0.08]">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask your health question..."
                  className="w-full resize-none bg-transparent text-[15px] text-white placeholder-gray-600 px-5 pt-4 pb-2 focus:outline-none min-h-[50px] max-h-[150px]"
                  rows={1}
                />

                <div className="flex items-center justify-between px-3 pb-3 pt-1">
                  <div className="flex items-center gap-1">
                    <div className="relative">
                      <button
                        onClick={() => setShowAttachMenu(!showAttachMenu)}
                        className="flex items-center justify-center size-8 rounded-full bg-white/[0.08] hover:bg-white/[0.12] text-gray-500 hover:text-white transition-all"
                      >
                        <Plus className={`size-4 transition-transform ${showAttachMenu ? 'rotate-45' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {showAttachMenu && (
                          <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowAttachMenu(false)} />
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute bottom-full left-0 mb-2 z-50 bg-[#1a2420] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                            >
                              <div className="p-1.5 min-w-[180px]">
                                {[
                                  { icon: Paperclip, label: 'Upload file' },
                                  { icon: Image, label: 'Add image' },
                                  { icon: FileText, label: 'Import report' }
                                ].map((item, i) => (
                                  <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all">
                                    <item.icon className="size-4" />
                                    <span className="text-sm">{item.label}</span>
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative">
                      <button
                        onClick={() => setShowModelSelector(!showModelSelector)}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                      >
                        <selectedModel.icon className="size-4 text-[#00b894]" />
                        <span>{selectedModel.name}</span>
                        <ChevronDown className={`size-3 transition-transform ${showModelSelector ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {showModelSelector && (
                          <>
                            <div className="fixed inset-0 z-40" onClick={() => setShowModelSelector(false)} />
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute bottom-full left-0 mb-2 z-50 min-w-[220px] bg-[#1a2420] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                            >
                              <div className="p-1.5">
                                <div className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-600">
                                  Select AI Model
                                </div>
                                {models.map((model) => (
                                  <button
                                    key={model.id}
                                    onClick={() => { setSelectedModel(model); setShowModelSelector(false); }}
                                    className={`w-full flex items-center gap-3 px-2.5 py-2 rounded-lg text-left transition-all ${
                                      selectedModel.id === model.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                                  >
                                    <model.icon className={`size-4 ${selectedModel.id === model.id ? 'text-[#00b894]' : ''}`} />
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium">{model.name}</span>
                                        {model.badge && (
                                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                                            model.badge === 'Pro' ? 'bg-purple-500/20 text-purple-300' : 'bg-[#00b894]/20 text-[#00b894]'
                                          }`}>
                                            {model.badge}
                                          </span>
                                        )}
                                      </div>
                                      <span className="text-[11px] text-gray-500">{model.description}</span>
                                    </div>
                                    {selectedModel.id === model.id && <Check className="size-4 text-[#00b894]" />}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <motion.button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#00b894] hover:bg-[#00d9a5] text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,184,148,0.3)]"
                    whileTap={{ scale: 0.95 }}
                  >
                    <SendHorizontal className="size-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
