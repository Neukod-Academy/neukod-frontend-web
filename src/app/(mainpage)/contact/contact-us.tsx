"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact</h1>
              <h2 className="text-4xl font-bold text-purple-600 mb-6">Our Sales Team</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Need a tailored solution for your business? Simply fill out the contact form, and our sales team will reach out to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Address:</h3>
                <p className="text-gray-600">
                  358 Herbert Macaulay Way, Yaba, Lagos, Nigeria.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Number (WhatsApp):</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">+2349122964215</p>
                  <p className="text-gray-600">+2349122964215 & +2349122964215</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Address:</h3>
                <p className="text-gray-600">hello@sunesisconsulting.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      className="mt-1"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      className="mt-1"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-1"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label htmlFor="idea" className="text-sm font-medium text-gray-700">
                    What idea do you plan to execute? *
                  </Label>
                  <Textarea
                    id="idea"
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell us about your project or idea..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - FAQ Header */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Your Questions,</h2>
            <h3 className="text-4xl font-bold text-purple-600 mb-8">Answered.</h3>
            <Button
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book A Call
            </Button>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                  What does Sunesis do?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Sunesis is a leading tech consulting firm that specializes in providing innovative technology solutions for businesses. We help companies leverage cutting-edge technologies to streamline operations, enhance productivity, and drive growth through digital transformation initiatives.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                  What services does Sunesis Tech Consulting offer?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  We offer a comprehensive range of services including software development, cloud migration, cybersecurity solutions, data analytics, AI implementation, digital transformation consulting, system integration, and ongoing technical support. Our team works closely with clients to deliver customized solutions that meet their specific business needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                  How can Sunesis help my business grow?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Sunesis helps businesses grow by implementing technology solutions that increase efficiency, reduce costs, and open new revenue streams. We analyze your current processes, identify opportunities for improvement, and develop strategic technology roadmaps that align with your business goals to accelerate growth and competitive advantage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                  Why choose Sunesis over other tech consulting firms?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Sunesis stands out through our personalized approach, deep industry expertise, and proven track record of successful implementations. We combine technical excellence with business acumen, ensuring that our solutions not only work technically but also deliver measurable business value. Our team stays current with emerging technologies and best practices to provide cutting-edge solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                  Does Sunesis provide AI solutions for businesses?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  Yes, Sunesis specializes in AI and machine learning solutions tailored for business applications. We help companies implement AI-powered automation, predictive analytics, natural language processing, computer vision, and intelligent decision-making systems. Our AI solutions are designed to enhance operational efficiency and create new business opportunities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactPage;
