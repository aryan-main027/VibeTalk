import React from "react";
import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer"
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";

function SignUpPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const { signup, isSigningUp } = useAuthStore();

    const handleSubmit = (e) => {
      e.preventDefault();
      signup(formData);
    };

  return (
     <div className="w-full flex items-center justify-center p-6">

      {/* CARD */}
      <div className="w-full max-w-6xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

        <div className="flex flex-col md:flex-row">

          {/* LEFT SIDE - FORM */}
          <div className="md:w-1/2 p-10 flex items-center justify-center">

            <div className="w-full max-w-md">

              {/* HEADING */}
              <div className="text-center mb-8">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 mx-auto mb-4">
                  <MessageCircleIcon className="text-white w-7 h-7" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  Create Account
                </h2>

                <p className="text-slate-400">
                  Join and start chatting instantly
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* FULL NAME */}
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">
                    Full Name
                  </label>

                  <div className="relative">
                    <UserIcon className="absolute left-3 top-3 text-slate-500 w-5 h-5" />

                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">
                    Email
                  </label>

                  <div className="relative">
                    <MailIcon className="absolute left-3 top-3 text-slate-500 w-5 h-5" />

                    <input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">
                    Password
                  </label>

                  <div className="relative">
                    <LockIcon className="absolute left-3 top-3 text-slate-500 w-5 h-5" />

                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSigningUp}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:opacity-90 transition flex items-center justify-center"
                >
                  {isSigningUp ? (
                    <LoaderIcon className="animate-spin w-5 h-5" />
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              {/* LOGIN LINK */}
              <div className="mt-6 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - ILLUSTRATION */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10">

            <div className="text-center">

              <img
                src="/signup.png"
                alt="signup illustration"
                className="w-[350px] mx-auto mb-6"
              />

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Start Your Journey
              </h3>

              <p className="text-slate-400 mb-6">
                Connect with people instantly using our realtime chat platform
              </p>

              <div className="flex justify-center gap-3">
                <span className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Free
                </span>

                <span className="px-3 py-1 text-sm rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  Secure
                </span>

                <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Private
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;