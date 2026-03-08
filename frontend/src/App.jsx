import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import ChatPage from "./pages/ChatPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage"
import { useAuthStore } from './store/useAuthStore.js';
import PageLoader from './components/PageLoader.jsx';
import { Toaster } from "react-hot-toast";
function App() {

  const {checkAuth , isCheckingAuth,authUser} = useAuthStore();

  useEffect(() => {
    checkAuth();
  },[checkAuth])

  console.log(authUser);

  if(isCheckingAuth) return <PageLoader/>
  return (
    <>
      <div className="min-h-screen bg-slate-950 relative flex items-center justify-center p-4 overflow-hidden">

        {/* grid background */}
        <div
          className="absolute inset-0 
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
              linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-[size:22px_22px]"
        />

        {/* top left glow */}
        <div
          className="absolute -top-40 -left-40 w-[32rem] h-[32rem]
          bg-violet-600/30 rounded-full blur-[150px]"
        />

        {/* right glow */}
        <div
          className="absolute top-1/2 -right-40 w-[34rem] h-[34rem]
          bg-cyan-500/30 rounded-full blur-[160px]"
        />

        {/* bottom glow */}
        <div
          className="absolute -bottom-40 left-1/3 w-[30rem] h-[30rem]
          bg-blue-500/25 rounded-full blur-[150px]"
        />

        {/* center radial highlight */}
        <div
          className="absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_65%)]"
        />

        {/* optional noise texture for premium feel */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

        {/* pages */}
        <Toaster/>
        <Routes>
          <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
        </Routes>
      </div>
    </>
  )
}

export default App