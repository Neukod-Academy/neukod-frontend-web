'use client'

import Image from "next/image"
import { useState } from 'react'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from 'framer-motion'
import ImgFormFill from "../../public/images/form/formfill.png"
import ImgFormSubmit from "../../public/images/form/formsubmitted.png"

const FormSwitcher = () => {

  const [isSignUp, setIsSignUp] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
    setIsSubmitted((prev) => !prev);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //Nanti di delete bjir, buat cek form submit
    console.log('Form submitted')
    setIsSubmitted(true)
  }

  return (
    <div className="flex items-center justify-center max-h-fit p-2">
      <div className="relative w-full max-w-[900px] h-[600px] bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl shadow-lg overflow-hidden">

        {/* Sign Up Form */}
        <div className={`w-1/2 h-full flex flex-col justify-center items-center bg-background transition-opacity duration-500 ease-in-out {opacity-0 z-10' : opacity-100 z-10'}`}>
          <form onSubmit={handleSubmit} className="w-full max-w-[350px] p-8 space-y-6">
            <h2 className="text-2xl font-bold text-primary text-center">Create Account</h2>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon" aria-label="Sign up with Facebook">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Sign up with LinkedIn">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Sign up with Twitter">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-center text-muted-foreground">or use your email for registration</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">Name</Label>
                <Input id="signup-name" placeholder="Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" placeholder="Password" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms2" />
              <Label htmlFor="terms2" className="text-sm">
                Accept terms and conditions
              </Label>
            </div>
            <Button type="submit" className="w-full">
              SIGN UP
            </Button>
          </form>
        </div>


        {/* Switch Panel */}
        <motion.div
          className="absolute top-0 w-1/2 h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-sky-300 to-sky-500"
          animate={{ x: isSubmitted ? '0%' : '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="text-center space-y-6">
            <div className="relative w-full h-48">
              <Image
                src={ImgFormFill}
                alt="Fill form"
                fill
                style={{ objectFit: 'contain' }}
                className={`absolute transition-opacity duration-1000 ease-in-out ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}
              />
              {/* Image shown when isSubmitted is true */}
              <Image
                src={ImgFormSubmit}
                alt="Form submitted"
                fill
                style={{ objectFit: 'contain' }}
                className={`absolute transition-opacity duration-1000 ease-in-out ${isSubmitted ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            {isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-primary">Welcome Back!</h2>
                <p className="text-sm text-primary-foreground">To keep connected with us please login with your personal info</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-primary">Hello Friend!</h2>
                <p className="text-sm text-primary-foreground">Enter your personal details and start journey with us</p>
              </>
            )}
          </div>
        </motion.div>
        <div className={`absolute inset-0 flex transition-all duration-1000 ease-in-out ${isSubmitted ? 'translate-x-1/2' : 'translate-x-full'}`}>
          {/* Sign In Form */}
          <div className={`w-1/2 h-full flex items-center justify-center transition-opacity ease-in-out ${isSubmitted ? 'opacity-100 ' : 'opacity-100'}`}>
            {/* After Submit View */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="flex flex-col justify-center items-center z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1 }}
                >
                  <motion.h2
                    className="text-2xl md:text-4xl font-bold text-primary mb-4"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                  >
                    Good Job !
                  </motion.h2>
                  <motion.p
                    className="text-lg text-center text-primary-foreground mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                  >
                    Thank you for submitting. We'll be in touch soon!
                  </motion.p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6, duration: 1 }}
                  >
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-[180px]">
                      Go Back
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  )
}
export default FormSwitcher;