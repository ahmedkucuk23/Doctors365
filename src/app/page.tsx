"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Menu,
  X,
  FileText,
  UserSearch,
  ClipboardList,
  ChevronRight,
  Play,
  Check,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Baby,
  Bone,
  Activity,
  Smile,
  Users,
  Video,
  MessageSquare,
  Shield,
  Plane,
  Smartphone,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const specializations = [
  { name: "Aesthetic Medicine", icon: Smile },
  { name: "Cardiology", icon: Heart },
  { name: "Dermatology", icon: Activity },
  { name: "General Medicine", icon: Stethoscope },
  { name: "Gynecology", icon: Users },
  { name: "Neurology", icon: Brain },
  { name: "Ophthalmology", icon: Eye },
  { name: "Pediatrics", icon: Baby },
  { name: "Orthopedics", icon: Bone },
];

const benefitsData = {
  doctors: [
    "Work from home",
    "Working hours by choice",
    "Patients from video chats can become patients at your own practice or clinic",
    "Networking with patients and colleagues",
    "Free advertising",
    "No added stress",
    "Be your own boss",
    "Terms at will",
  ],
  patients: [
    "Direct contact with a doctor of your choice from the comfort of your home",
    "Your profile with diagnoses and analysis can only be viewed by your doctor",
    "Appointments at will",
    "Possibility to contact a doctor 24/7",
    "Language of your choice",
    "Uploaded medical records visible only to the doctor",
    "Online prescriptions",
  ],
  business: [
    "Every room with internet access/every flight will have a doctor",
    "Included in the ticket/room price",
    "Professional service 24/7/365",
    "Possibility to contact a doctor 24/7",
    "Language of your choice",
    "Available on demand",
  ],
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeBenefitTab, setActiveBenefitTab] = useState<"doctors" | "patients" | "business">("patients");

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <nav className="container-custom flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/logo.png" 
              alt="Doctors 365" 
              className="h-8 w-auto sm:h-10"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden items-center gap-8 lg:flex"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#" className="nav-link font-medium">Find Doctor</a>
            <a href="#" className="nav-link font-medium">Join as a Doctor</a>
            <a href="/doctors-ai" className="nav-link font-medium">Doctors AI</a>
            <a href="#" className="nav-link font-medium">Membership</a>
            <a href="#" className="nav-link font-medium">Blog</a>
          </motion.div>

          {/* Desktop CTA */}
          <motion.div
            className="hidden items-center gap-4 lg:flex"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="/login" className="font-medium text-gray-600 transition-colors hover:text-primary-600">
              Login
            </a>
            <a href="/login" className="btn-primary">
              Sign Up
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="border-t border-gray-100 bg-white lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container-custom flex flex-col gap-4 px-4 py-6">
                <a href="#" className="py-2 font-medium text-gray-900">Find Doctor</a>
                <a href="#" className="py-2 font-medium text-gray-900">Join as a Doctor</a>
                <a href="/doctors-ai" className="py-2 font-medium text-gray-900">Doctors AI</a>
                <a href="#" className="py-2 font-medium text-gray-900">Membership</a>
                <a href="#" className="py-2 font-medium text-gray-900">Blog</a>
                <hr className="my-2" />
                <a href="/login" className="py-2 font-medium text-gray-600">Login</a>
                <a href="/login" className="btn-primary text-center">Sign Up</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-white pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary-100/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-primary-50/80 blur-3xl" />

        <div className="container-custom relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:py-0">
          {/* Hero Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="flex h-2 w-2 rounded-full bg-primary-500" />
              <span className="text-sm font-medium text-primary-700">Trusted by 600+ Specialists</span>
            </motion.div>

            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Find online doctor{" "}
              <span className="relative">
                <span className="text-gradient">in your language</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 10C50 4 150 2 298 10"
                    stroke="url(#paint0_linear)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="paint0_linear" x1="2" y1="6" x2="298" y2="6">
                      <stop stopColor="#00b894" />
                      <stop offset="1" stopColor="#00cca5" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-xl text-lg text-gray-600 lg:mx-0 lg:text-xl">
              Connect with verified healthcare professionals worldwide through secure video consultations, available 24/7 in your preferred language.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a href="#" className="btn-primary group w-full sm:w-auto">
                Find a Doctor
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#" className="btn-secondary w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch How It Works
              </a>
            </div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-200 pt-8 lg:max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="stat-card">
                <span className="stat-number text-gradient">600+</span>
                <span className="stat-label">Active Specialists</span>
              </div>
              <div className="stat-card">
                <span className="stat-number text-gradient">28+</span>
                <span className="stat-label">Departments</span>
              </div>
              <div className="stat-card">
                <span className="stat-number text-gradient">11+</span>
                <span className="stat-label">Languages</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Video Call Visual */}
          <motion.div
            className="mt-12 flex-1 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Video Call Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-900 shadow-2xl shadow-gray-900/30 sm:aspect-square">
                {/* Doctor Video (Main) */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/doctor-video.mp4" type="video/mp4" />
                </video>

                {/* Video Call UI Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Patient Video (Small - Picture in Picture) */}
                <motion.div
                  className="absolute right-4 top-4 h-24 w-20 overflow-hidden rounded-2xl border-2 border-white/30 shadow-xl sm:h-32 sm:w-24 lg:h-36 lg:w-28"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src="/patient-video.mp4" type="video/mp4" />
                  </video>
                  {/* Patient label */}
                  <div className="absolute bottom-1 left-1 right-1 rounded-lg bg-black/50 px-2 py-0.5 text-center backdrop-blur-sm">
                    <span className="text-[10px] font-medium text-white">You</span>
                  </div>
                </motion.div>

                {/* Call Duration */}
                <motion.div
                  className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="flex h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="text-xs font-medium text-white">Live</span>
                </motion.div>

                {/* Doctor Info */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Stethoscope className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Dr. Sarah Mitchell</p>
                        <p className="text-xs text-white/70">General Medicine</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 transition-colors hover:bg-red-600">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Verified Badge */}
                <motion.div
                  className="absolute right-4 bottom-20 flex items-center gap-2 rounded-full bg-primary-600/90 px-3 py-1.5 backdrop-blur-sm sm:bottom-24"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield className="h-4 w-4 text-white" />
                  <span className="text-xs font-medium text-white">Verified Doctor</span>
                </motion.div>
              </div>

              {/* Floating Card - Left */}
              <motion.div
                className="absolute -left-4 top-12 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                    <Video className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">HD Video</p>
                    <p className="text-xs text-gray-500">Crystal Clear</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Right */}
              <motion.div
                className="absolute -right-4 top-1/2 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Secure</p>
                    <p className="text-xs text-gray-500">End-to-end</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Second Opinion Card */}
            <motion.div
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              variants={fadeInUp}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 transition-colors group-hover:bg-primary-600">
                <FileText className="h-8 w-8 text-primary-600 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-gray-900">Second Opinion</h3>
              <p className="mb-6 text-gray-600">
                Submit your request and medical reports for a personalized expert review.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                Learn More
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Request to Doctor Card */}
            <motion.div
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              variants={fadeInUp}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 transition-colors group-hover:bg-primary-600">
                <UserSearch className="h-8 w-8 text-primary-600 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-gray-900">Request to Doctor</h3>
              <p className="mb-6 text-gray-600">
                Discover fitting healthcare professionals tailored to your needs.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                Find Doctor
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Prescription Card */}
            <motion.div
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              variants={fadeInUp}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 transition-colors group-hover:bg-primary-600">
                <ClipboardList className="h-8 w-8 text-primary-600 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-gray-900">Prescription</h3>
              <p className="mb-6 text-gray-600">
                Your case will be reviewed by a specialist tailored to your condition.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                Get Started
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
              Limited Time Offer
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Doctors 365 Membership for just
            </h2>
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className="font-display text-6xl font-bold text-white sm:text-7xl lg:text-8xl">€29.90</span>
              <span className="text-xl text-white/80">/year</span>
            </div>
            <p className="mb-8 text-lg text-white/90">
              Click the button below to become a Doctors 365 member today and unlock exclusive benefits!
            </p>
            <a href="#" className="btn-white group inline-flex items-center">
              Become a Member
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Popular Specializations */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Popular <span className="text-gradient">Specializations</span>
            </h2>
            <p className="section-subtitle mx-auto max-w-3xl">
              Medical branches primarily represented on Doctors 365 include Aesthetic medicine, Cardiology, Dermatology, General/Family medicine, Gynecology, Neurology, Ophthalmology, Pediatrics, Physiatrics, Orthopedics, Oncology and Aesthetic stomatology.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {specializations.map((spec, index) => (
              <motion.a
                key={index}
                href="#"
                className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100"
                variants={fadeInUp}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 transition-colors group-hover:bg-primary-100">
                  <spec.icon className="h-8 w-8 text-gray-600 transition-colors group-hover:text-primary-600" />
                </div>
                <h3 className="font-display text-sm font-semibold text-gray-900">{spec.name}</h3>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="#" className="btn-primary">
              View All Specializations
            </a>
          </motion.div>
        </div>
      </section>

      {/* Second Opinion Service */}
      <section className="relative overflow-hidden bg-gray-50 py-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto mb-16 max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Second Opinion Service for only{" "}
              <span className="text-gradient">€9.90</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "1",
                title: "Online Registration",
                description: "Begin your journey by registering online. Provide essential details, ensuring a seamless start to your Second Opinion process.",
                icon: Users,
              },
              {
                step: "2",
                title: "Submit Your Request",
                description: "Share your health concerns and submit relevant medical reports through our secure portal with utmost confidentiality.",
                icon: FileText,
              },
              {
                step: "3",
                title: "Multiple Expert Responses",
                description: "Our panel of doctors receives your request. Review their profiles, ask questions, and choose your preferred doctor.",
                icon: MessageSquare,
              },
              {
                step: "4",
                title: "Video Consultation",
                description: "Our experienced doctors will reach out for a personalized video consultation to address your concerns.",
                icon: Video,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative rounded-3xl bg-white p-8 shadow-lg"
                variants={fadeInUp}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="step-number">{item.step}</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100">
                    <item.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="mb-3 font-display text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="#" className="btn-primary">
              Get Second Opinion
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <h2 className="section-title">
                  How it <span className="text-gradient">works</span>
                </h2>
                <p className="section-subtitle max-w-2xl">
                  Doctors 365 is a multilingual online medical platform for real-time telemedicine. The platform is based on online consultation services in the medical field, which can be provided both to individuals and companies all around the globe.
                </p>
              </div>
              <a href="#" className="btn-secondary shrink-0">
                Learn More
              </a>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-8 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Choose a doctor",
                description: "Search by language, price, specialization, or availability",
                image: "/step-1.png",
              },
              {
                step: "02",
                title: "Register or login",
                description: "Free and easy sign up",
                image: "/step-2.png",
              },
              {
                step: "03",
                title: "Chat or call a verified doctor",
                description: "Talk with your doctor about your needs",
                image: "/step-3.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col items-center text-center"
                variants={fadeInUp}
              >
                {/* Phone Mockup */}
                <div className="relative mb-8">
                  <motion.div
                    className="relative"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[400px] w-auto object-contain drop-shadow-2xl transition-all duration-300 group-hover:drop-shadow-[0_35px_35px_rgba(0,184,148,0.25)] lg:h-[450px]"
                    />
                  </motion.div>
                  {/* Step Number Badge */}
                  <div className="absolute -left-2 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 font-display text-2xl font-bold text-white shadow-lg shadow-primary-600/30">
                    {item.step}
                  </div>
                </div>
                {/* Content */}
                <h3 className="mb-3 font-display text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="max-w-xs text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Get Prescription */}
      <section className="relative overflow-hidden bg-dark-900 py-20 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary-600 blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-500 blur-[150px]" />
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
                How to get a <span className="text-primary-400">Prescription?</span>
              </h2>
            </div>
            <a href="#" className="btn-primary shrink-0">
              Get Prescription Now
            </a>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Online Registration",
                description: "Begin your journey by registering online. Provide essential details, ensuring a seamless start.",
              },
              {
                step: "02",
                title: "Submit Your Request with Medical Reports",
                description: "Share your health concerns and submit relevant medical reports through our secure portal.",
              },
              {
                step: "03",
                title: "Multiple Expert Responses - Your Choice",
                description: "Review profiles, ask questions, and choose the doctor for your consultation.",
              },
              {
                step: "04",
                title: "Video Consultation with Our Doctors",
                description: "Our experienced doctors will reach out for a personalized video consultation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary-500/50 hover:bg-white/10"
                variants={fadeInUp}
              >
                <div className="mb-6 font-display text-5xl font-bold text-primary-500">{item.step}</div>
                <h3 className="mb-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Benefits of <span className="text-gradient">online consultations</span>
            </h2>
            <p className="section-subtitle mx-auto max-w-3xl">
              The basic strength of the Doctors 365 platform is shortening the time for receiving medical advice in conventional medicine, overcoming the distance between patients and doctors, and providing the best price-quality ratio possible.
            </p>
          </motion.div>

          {/* Tab Buttons */}
          <motion.div
            className="mb-12 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button
              onClick={() => setActiveBenefitTab("patients")}
              className={`tab-button flex items-center gap-2 ${
                activeBenefitTab === "patients" ? "tab-button-active" : "tab-button-inactive"
              }`}
            >
              <Users className="h-5 w-5" />
              For Patients
            </button>
            <button
              onClick={() => setActiveBenefitTab("doctors")}
              className={`tab-button flex items-center gap-2 ${
                activeBenefitTab === "doctors" ? "tab-button-active" : "tab-button-inactive"
              }`}
            >
              <Stethoscope className="h-5 w-5" />
              For Doctors
            </button>
            <button
              onClick={() => setActiveBenefitTab("business")}
              className={`tab-button flex items-center gap-2 ${
                activeBenefitTab === "business" ? "tab-button-active" : "tab-button-inactive"
              }`}
            >
              <Plane className="h-5 w-5" />
              For Hotels & Airlines
            </button>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBenefitTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-4xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {benefitsData[activeBenefitTab].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl bg-gray-50 p-6 transition-all duration-300 hover:bg-primary-50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-600">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* App Download Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white blur-3xl" />
        </div>

        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            {/* Phone Mockup */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mx-auto max-w-sm">
                <motion.img
                  src="/app-phone.png"
                  alt="Doctors 365 App - Video consultation"
                  className="w-full drop-shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Floating Elements */}
                <motion.div
                  className="absolute -left-4 top-1/4 rounded-2xl bg-white p-3 shadow-xl lg:-left-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Video className="h-6 w-6 text-primary-600" />
                </motion.div>
                <motion.div
                  className="absolute -right-4 top-1/2 rounded-2xl bg-white p-3 shadow-xl lg:-right-8"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <MessageSquare className="h-6 w-6 text-primary-600" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
                <Smartphone className="mr-2 inline h-4 w-4" />
                Mobile Application
              </span>
              <h2 className="mb-6 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Get Doctors 365 App!
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Consult with qualified doctors of any profile in online video, audio and chat 24/7. Download now and take your healthcare anywhere.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl bg-black px-6 py-3 transition-transform hover:scale-105"
                >
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="font-semibold text-white">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-xl bg-black px-6 py-3 transition-transform hover:scale-105"
                >
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h11c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-11c-.83 0-1.5-.67-1.5-1.5m12.5-7.5L12 9.5 5.5 13l6.5 3.5 6.5-3.5M12 5.5L5.5 9l6.5 3.5L18.5 9 12 5.5z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="font-semibold text-white">Google Play</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 pt-20 text-gray-400">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div>
              <a href="#" className="mb-6 inline-block">
                <img 
                  src="/logo.png" 
                  alt="Doctors 365" 
                  className="h-10 w-auto brightness-0 invert"
                />
              </a>
              <p className="mb-6 text-sm">
                Your trusted multilingual online medical platform for real-time telemedicine, available 24/7/365.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary-600">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary-600">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary-600">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-primary-600">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 font-display text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="transition-colors hover:text-primary-500">About</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-500">How it works</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-500">FAQ</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-500">Reviews</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="mb-6 font-display text-lg font-semibold text-white">Useful Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="transition-colors hover:text-primary-500">Departments</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-500">Doctors</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-500">Blog</a></li>
                <li><a href="#" className="transition-colors hover:text-primary-500">Contacts</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 font-display text-lg font-semibold text-white">Doctors 365 AG</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary-500" />
                  <span>Theaterstrasse 2, Postfach, 6210 Sursee</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-primary-500" />
                  <span>+41 44 520 76 40</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-primary-500" />
                  <span>doctors@doctors365.org</span>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="mt-6">
                <h5 className="mb-3 text-sm font-semibold text-white">Keep in touch</h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:bg-white/20"
                  />
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 transition-colors hover:bg-primary-700">
                    <Send className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm">© 2026 Doctors 365. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="transition-colors hover:text-primary-500">Terms and Conditions</a>
                <a href="#" className="transition-colors hover:text-primary-500">Legal Notice</a>
                <a href="#" className="transition-colors hover:text-primary-500">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
