// 'use client'

// import { useState } from 'react'
// import { Facebook, Linkedin, Twitter } from 'lucide-react'
// import { Checkbox } from "@/components/ui/checkbox"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Link from 'next/link'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function AuthPage() {
//   const [isSignUp, setIsSignUp] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const toggleForm = () => {
//     setIsSignUp(!isSignUp)
//     setIsSubmitted(false)
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     // Here you would typically handle the form submission
//     // For example, send the data to your backend API
//     console.log('Form submitted')
//     setIsSubmitted(true)
//   }

//   return (
//     <div className="flex items-center justify-center max-h-fit p-8">
//       <div className="relative w-full max-w-[900px] h-[600px] bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl shadow-lg overflow-hidden">
//         <div className={`absolute inset-0 flex transition-transform duration-500 ease-in-out ${isSignUp ? 'translate-x-1/2' : 'translate-x-full'}`}>
//           {/* Sign In Form */}
//           <div className={`w-1/2 h-full flex flex-col justify-center items-center bg-background transition-opacity duration-500 ease-in-out ${isSignUp ? 'opacity-100 ' : 'opacity-100 pointer-events-none'}`}>
//             <form onSubmit={handleSubmit} className="w-full max-w-[350px] p-8 space-y-6">
//               <h2 className="text-2xl font-bold text-primary text-center">Sign in to Website</h2>
//               <div className="flex justify-center space-x-4">
//                 <Button variant="ghost" size="icon" aria-label="Sign in with Facebook">
//                   <Facebook className="w-5 h-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" aria-label="Sign in with LinkedIn">
//                   <Linkedin className="w-5 h-5" />
//                 </Button>
//                 <Button variant="ghost" size="icon" aria-label="Sign in with Twitter">
//                   <Twitter className="w-5 h-5" />
//                 </Button>
//               </div>
//               <p className="text-sm text-center text-muted-foreground">or use your email account</p>
//               <div className="space-y-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" type="email" placeholder="Email" required />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="password">Password</Label>
//                   <Input id="password" type="password" placeholder="Password" required />
//                 </div>
//               </div>
//               <Link href="#" className="block text-center text-sm text-primary hover:underline">
//                 Forgot your password?
//               </Link>
//               <div className="flex items-center space-x-2">
//                 <Checkbox id="terms1" required />
//                 <Label htmlFor="terms1" className="text-sm">
//                   Accept terms and conditions
//                 </Label>
//               </div>
//               <Button type="submit" className="w-full">
//                 SIGN IN
//               </Button>
//             </form>
//           </div>
//         </div>

//         {/* Sign Up Form */}
//         <div className={`w-1/2 h-full flex flex-col justify-center items-center bg-background transition-opacity duration-500 ease-in-out {opacity-0 z-10' : opacity-100 z-10 pointer-events-none'}`}>
//           <form onSubmit={handleSubmit} className="w-full max-w-[350px] p-8 space-y-6">
//             <h2 className="text-2xl font-bold text-primary text-center">Create Account</h2>
//             <div className="flex justify-center space-x-4">
//               <Button variant="ghost" size="icon" aria-label="Sign up with Facebook">
//                 <Facebook className="w-5 h-5" />
//               </Button>
//               <Button variant="ghost" size="icon" aria-label="Sign up with LinkedIn">
//                 <Linkedin className="w-5 h-5" />
//               </Button>
//               <Button variant="ghost" size="icon" aria-label="Sign up with Twitter">
//                 <Twitter className="w-5 h-5" />
//               </Button>
//             </div>
//             <p className="text-sm text-center text-muted-foreground">or use your email for registration</p>
//             <div className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="signup-name">Name</Label>
//                 <Input id="signup-name" placeholder="Name" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="signup-email">Email</Label>
//                 <Input id="signup-email" type="email" placeholder="Email" required />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="signup-password">Password</Label>
//                 <Input id="signup-password" type="password" placeholder="Password" required />
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox id="terms2" required />
//               <Label htmlFor="terms2" className="text-sm">
//                 Accept terms and conditions
//               </Label>
//             </div>
//             <Button type="submit" className="w-full">
//               SIGN UP
//             </Button>
//           </form>
//         </div>


//         {/* Switch Panel */}
//         <div className={`absolute top-0 w-1/2 h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-sky-300 to-sky-500 transition-transform duration-500 ease-in-out ${isSignUp ? 'translate-x-0' : 'translate-x-full'}`}>
//           <div className="text-center space-y-6">
//             {isSignUp ? (
//               <>
//                 <h2 className="text-2xl font-bold text-primary">Welcome Back!</h2>
//                 <p className="text-sm text-primary-foreground">To keep connected with us please login with your personal info</p>
//                 <Button onClick={toggleForm} variant="outline" className="w-[180px]">
//                   SIGN IN
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-2xl font-bold text-primary">Hello Friend!</h2>
//                 <p className="text-sm text-primary-foreground">Enter your personal details and start journey with us</p>
//                 <Button onClick={toggleForm} variant="outline" className="w-full md:w-[180px]">
//                   SIGN UP
//                 </Button>
//               </>
//             )}
//           </div>
//         </div>

//         {/* After Submit View */}
//         <AnimatePresence>
//           {isSubmitted && (
//             <motion.div
//               className="absolute inset-0 flex flex-col justify-center items-center bg-sky-200 z-10"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.h2
//                 className="text-4xl font-bold text-primary mb-4"
//                 initial={{ y: -20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//               >
//                 Good Job !
//               </motion.h2>
//               <motion.p
//                 className="text-lg text-center text-primary-foreground mb-6"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.4, duration: 0.5 }}
//               >
//                 Thank you for submitting. We'll be in touch soon!
//               </motion.p>
//               <motion.div
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//               >
//                 <Button onClick={() => setIsSubmitted(false)} variant="outline">
//                   Back to {isSignUp ? 'Sign Up' : 'Sign In'}
//                 </Button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }