"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import ContactUsBg from "@/app/images/contactUs/contactus_bg.png";
import { contactQuestions } from "@/app/utils/constant";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroRef = useRef(null);
  const herotextRef = useRef<HTMLDivElement | null >(null);
  const contactRef = useRef<HTMLDivElement | null >(null);
  const faqRef = useRef<HTMLDivElement | null >(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-banner", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.in",
        delay: 0.3,
      });
      gsap.from(".hero-text", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.in",
        delay: 0.3,
      });
      gsap.from(".contact", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.in",
        delay: 0.6,
      });
      gsap.fromTo(".faq", {
        y:90,
        opacity: 0
      },{
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
        }
      })
    });
    return () => ctx.revert();
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <main className="relative">
      <div ref={heroRef} className="hero-banner relative h-[40vh] lg:h-[40vh] w-full overflow-hidden items-center justify-center">
        <Image
          alt="Concact Banner"
          fill
          src={ContactUsBg}
          className="w-full object-cover"
        />
        <div ref={herotextRef} className="hero-text z-50 h-full relative px-5 md:px-20 justify-center top-1/3">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">Contact</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-6">
            And get help from our team
          </h2>
        </div>
      </div>
      <div className="contact min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contact Section */}
          <div ref={contactRef} className="contact grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Contact
                </h1>
                <h2 className="text-4xl font-bold text-blue-800 mb-6">
                  And get help from our team
                </h2>
                {/* <p className="text-gray-600 text-lg leading-relaxed">
                Need a tailored solution for your business? Simply fill out the contact form, and our sales team will reach out to assist you.
              </p> */}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Address:
                  </h3>
                  <p className="text-gray-600">
                    Jl. KHR Asnawi, P.O. Box 126. Kudus, Indonesia
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Phone Number (WhatsApp):
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">0291 433255 </p>
                    {/* <p className="text-gray-600">
                    +2349122964215 & +2349122964215
                  </p> */}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Email Address:
                  </h3>
                  <p className="text-gray-600">hallodek@neukod.edu</p>
                </div>
              </div>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700"
                      >
                        First Name <span className="text-red-500"> *</span>
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
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700"
                      >
                        Last Name <span className="text-red-500"> *</span>
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
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email <span className="text-red-500"> *</span>
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
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number <span className="text-red-500"> *</span>
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
                    <Label
                      htmlFor="idea"
                      className="text-sm font-medium text-gray-700"
                    >
                      Message <span className="text-red-500"> *</span>
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
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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
          <div ref={faqRef} className="faq grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side - FAQ Header */}
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Your Questions,
              </h2>
              <h3 className="text-4xl font-bold text-blue-800 mb-8">
                Answered.
              </h3>
              <Button
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Book A Call
              </Button>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="lg:col-span-2 space-y-2">
              <Accordion type="single" collapsible className="space-y-4">
                {contactQuestions.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border border-gray-200 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-2">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
