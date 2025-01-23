"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import ImgFormFill from "../../public/images/form/formfill.png"
import ImgFormSubmit from "../../public/images/form/formsubmitted.png"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { PhoneInput } from "@/components/ui/phone-input"
import type { E164Number } from "libphonenumber-js/core"

const FormSwitcher = () => {
  // const [isSignUp, setIsSignUp] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleForm = () => {
    // setIsSignUp(!isSignUp)
    setIsSubmitted((prev) => !prev)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //Nanti di delete bjir, buat cek form submit
    console.log("Form submitted")
    setIsSubmitted(true)
  }
  const [value, setValue] = useState<E164Number | undefined>()

  return (
    <div className="flex items-center justify-center h-auto py-10 px-2">
      <div className="relative w-full max-w-[900px] h-[600px] bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl shadow-lg overflow-hidden">
        {/* Sign Up Form */}
        <div
          className={`w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-background transition-opacity duration-500 ease-in-out ${isSubmitted ? "opacity-0 z-10" : "opacity-100 z-10"
            }`}
        >
          <ScrollArea className="w-full h-full items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-[500px] p-4 md:p-8 space-y-6">
              <h2 className="text-2xl font-bold text-primary text-center">Create Account</h2>
              <p className="text-sm text-center text-muted-foreground">or use your email for registration</p>
              <div className="space-y-4">
                <h1>Enter your parent information</h1>
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Parent name</Label>
                  <Input id="signup-name" placeholder="enter your parent name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parent-phone">Parent phone number</Label>
                  {/* <Input id="parent-phone" type="number" placeholder="enter your parent phone number" /> */}
                  <div className="grid gap-4 py-4">
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      value={value}
                      onChange={(value) => setValue(value)}
                      addInternationalOption={true}
                      formNoValidate
                      placeholder="enter your parent phone number"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Parent email</Label>
                  <Input id="signup-email" type="email" placeholder="enter your parent email" />
                </div>
                <div className="pt-10">
                  <h1>Enter your student information</h1>
                  <div className="space-y-2">
                    <Label htmlFor="student-name">Student name</Label>
                    <Input id="student-name" placeholder="enter student name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-age">Age</Label>
                    <Input id="student-age" type="number" defaultValue="0" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Experience</Label>
                    <RadioGroup defaultValue="option-one">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">GG EZ</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-three" id="option-three" />
                        <Label htmlFor="option-three">Basic</Label>
                      </div>
                    </RadioGroup>
                  </div>
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
          </ScrollArea>
        </div>
        {/* Switch Panel */}
        <motion.div
          className="absolute top-0 w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-sky-300 to-sky-500"
          animate={{ x: isSubmitted ? "0%" : "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="text-center space-y-6">
            <div className="relative w-full h-48 hidden md:block">
              <Image
                src={ImgFormFill || "/placeholder.svg"}
                alt="Fill form"
                fill
                style={{ objectFit: "contain" }}
                className={`absolute transition-opacity duration-1000 ease-in-out ${isSubmitted ? "opacity-0" : "opacity-100"
                  }`}
              />
              {/* Image shown when isSubmitted is true */}
              <Image
                src={ImgFormSubmit || "/placeholder.svg"}
                alt="Form submitted"
                fill
                style={{ objectFit: "contain" }}
                className={`absolute transition-opacity duration-1000 ease-in-out ${isSubmitted ? "opacity-100" : "opacity-0"
                  }`}
              />
            </div>
            {isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-primary">Welcome Back!</h2>
                <p className="text-sm text-primary-foreground">
                  To keep connected with us please login with your personal info
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-primary">Hello Friend!</h2>
                <p className="text-sm text-primary-foreground">Enter your personal details and start journey with us</p>
              </>
            )}
          </div>
        </motion.div>
        <div
          className={`absolute inset-0 flex transition-all duration-1000 ease-in-out ${isSubmitted ? "translate-x-0 md:translate-x-1/2" : "translate-x-full"
            }`}
        >
          {/* Sign In Form */}
          <div
            className={`w-full md:w-1/2 h-full flex items-center justify-center transition-opacity ease-in-out ${isSubmitted ? "opacity-100" : "opacity-100"
              }`}
          >
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
                    className="text-xl md:text-2xl lg:text-4xl font-bold text-primary mb-4"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                  >
                    Good Job !
                  </motion.h2>
                  <motion.p
                    className="text-sm md:text-lg text-center text-primary-foreground mb-6"
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
export default FormSwitcher

