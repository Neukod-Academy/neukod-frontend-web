'use client'

import { useState } from 'react'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"


export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For example, send the data to your backend API
    console.log('Form submitted')
    // Optionally close the popup after successful submission
    // setIsOpen(false)
  }

  return (
    <div className="relative w-full h-[600px] mx-auto sm:h-[500px] md:h-[500px] lg:h-[600px] bg-[#ec6f97] rounded-xl shadow-[inset_10px_10px_10px_#d1d9e6,inset_-10px_-10px_10px_#f9f9f9] p-0 overflow-hidden">
      <div className={`relative flex flex-col top-0 w-full md:w-[600px] h-full transition-all duration-500] ${isSignUp ? 'translate-x-full md:translate-x-1/2' : ''}`}>
        {/* After Sumbmit View */}
        <div className={`absolute h-full w-full flex flex-col justify-center items-center bg-sky-200 ${isSignUp ? 'translate-x-1/2 opacity-100 z-10' : 'translate-x-0 opacity-0 z-10'} transition-none duration-200`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181818] mb-4 sm:mb-6">Thank You!</h2>
          <span className="mb-4 text-sm sm:text-base text-center">We will notify you, please check your incoming emails on your registered email account. </span>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className={`relative top-0 left-0 h-full w-full flex flex-col justify-center items-center bg-red-200 ${isSignUp ? 'translate-x-0 opacity-0 z-0' : 'opacity-100 z-10'} transition-none duration-200`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#181818] mb-4 sm:mb-6">Sign in to Website</h2>
          <div className="flex mb-4">
            <Facebook className="w-6 h-6 sm:w-8 sm:h-8 mx-2 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
            <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 mx-2 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
            <Twitter className="w-6 h-6 sm:w-8 sm:h-8 mx-2 opacity-50 hover:opacity-100 cursor-pointer transition-opacity" />
          </div>
          <span className="mb-4 text-sm sm:text-base">or use your email account</span>
          <input type="text" placeholder="Name" className="w-full max-w-[350px] h-10 mb-4 px-6 rounded-lg bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#f9f9f9] outline-none" />
          <input type="email" placeholder="Email" className="w-full max-w-[350px] h-10 mb-4 px-6 rounded-lg bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#f9f9f9] outline-none" />
          <input type="password" placeholder="Password" className="w-full max-w-[350px] h-10 mb-4 px-6 rounded-lg bg-[#ecf0f3] shadow-[inset_2px_2px_4px_#d1d9e6,inset_-2px_-2px_4px_#f9f9f9] outline-none" />
          <a href="#" className="text-[#181818] mb-6 sm:mb-8 text-sm sm:text-base">Forgot your password?</a>
          {/* Checkbox */}
          <div className="items-top flex space-x-2 mb-5">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
          <button type="submit" onClick={toggleForm} className="w-[180px] h-[50px] rounded-full bg-[#4B70E2] text-white font-bold text-sm tracking-wider shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#f9f9f9]">
            SIGN IN
          </button>
        </form >
      </div >

      {/* Switch Panel */}
      <div className={`absolute top-0 w-full sm:w-1/2 h-full flex flwx-col justify-center items-center p-0 sm:p-12 bg-[#99e1f5] transition-all duration-1000] ${isSignUp ? 'translate-x-0 z-0' : 'translate-x-full z-0'}`
      }>
        <div className={`absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#e69e72] bottom-[-60%] left-[-60%] transition-all duration-500] ${isSignUp ? 'translate-x-1/2 opacity-50 z-50' : 'translate-x-0 opacity-80 z-50'}`} />
        <div className={`absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#d8d06e] top-[-30%] right-[-30%] transition-all duration-500] ${isSignUp ? '-translate-x-1/2 opacity-50 z-0' : 'translate-x-0 opacity-80 z-0'}`} />
        <div className="relative w-full md:w-1/2 flex justify-center items-center flex-col z-10">
          {isSignUp ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#181818] mb-2 sm:mb-4">Welcome Back!</h2>
              <p className="text-center mb-4 sm:mb-8 text-sm sm:text-base">To keep connected with us please login with your personal info</p>
              <button onClick={toggleForm} className="w-[180px] h-[50px] rounded-full border border-[#4B70E2] text-[#4B70E2] font-bold text-sm tracking-wider bg-[#ecf0f3] shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#f9f9f9] hover:shadow-[6px_6px_10px_#d1d9e6,-6px_-6px_10px_#f9f9f9] active:shadow-[2px_2px_6px_#d1d9e6,-2px_-2px_6px_#f9f9f9] transition-all">
                Go Back
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#181818] mb-2 sm:mb-4">Hello Friend!</h2>
              <p className="text-center mb-4 sm:mb-8 text-sm sm:text-base">Enter your personal details and start journey with us</p>
            </>
          )}
        </div>
      </div>
    </div >
  )
}