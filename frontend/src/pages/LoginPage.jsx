import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore.js";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer.jsx";
import { MessageCircleIcon, MailIcon, LoaderIcon, LockIcon } from "lucide-react";
import { Link } from "react-router";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
        <div className="w-full flex items-center justify-center p-6">
          <div className="w-full max-w-6xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

            <div className="flex flex-col md:flex-row">

          {/* FORM COLUMN - LEFT SIDE */}
              <div className="md:w-1/2 p-10 flex items-center justify-center md:border-r border-white/10">

              <div className="w-full max-w-md">

              {/* HEADING */}
              <div className="text-center mb-8">

                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-500 mx-auto mb-4">
                  <MessageCircleIcon className="text-white w-7 h-7" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  Welcome Back
                </h2>

                <p className="text-slate-400">
                  Login to access your account
                </p>

              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">
                    Email
                  </label>

                  <div className="relative">
                    <MailIcon className="absolute left-3 top-3 text-slate-500 w-5 h-5" />

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                      placeholder="johndoe@gmail.com"
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
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:opacity-90 transition flex items-center justify-center"
                  type="submit"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <LoaderIcon className="w-5 h-5 animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </button>

              </form>

              {/* SIGNUP LINK */}
              <div className="mt-6 text-center text-sm text-slate-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Sign Up
                </Link>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - ILLUSTRATION */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10">

            <div className="text-center">

              <img
                src="/login.png"
                alt="login illustration"
                className="w-full max-w-[300px] mx-auto mb-6 object-contain hover:scale-105 transition"
              />

              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                Connect Anytime
              </h3>

              <p className="text-slate-400 mb-6">
                Stay in touch with friends using our realtime chat platform
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
export default LoginPage;