"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const titleRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const pricingPlans = [
    {
      name: "Free",
      monthlyPrice: "$0",
      annualPrice: "$0",
      description: "Perfect for individuals starting their journey.",
      features: [
        "Real-time code suggestions",
        "Basic integration logos",
        "Single MCP server connection",
        "Up to 2 AI coding agents",
        "Vercel deployments with Pointer branding",
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-secondary shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-1 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-blue-300",
    },
    {
      name: "Pro",
      monthlyPrice: "$20",
      annualPrice: "$16",
      description: "Ideal for professionals.",
      features: [
        "Enhanced real-time previews",
        "Unlimited integrations with custom logos",
        "Multiple MCP server connections",
        "Up to 10 concurrent AI coding agents",
        "Collaborative coding with team chat",
        "Advanced version control integrations",
        "Priority email and chat support",
      ],
      buttonText: "Join now",
      buttonClass:
        "bg-primary-foreground shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-primary text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-primary-foreground/90",
      popular: true,
    },
    {
      name: "Ultra",
      monthlyPrice: "$200",
      annualPrice: "$160",
      description: "Tailored solutions for teams.",
      features: [
        "Dedicated account support",
        "Unlimited MCP server clusters",
        "Unlimited AI coding agents",
        "Enterprise-grade security and compliance",
        "Priority deployments and SLA guarantees",
      ],
      buttonText: "Talk to Sales",
      buttonClass:
        "bg-secondary shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-1 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-red-300",
      hotDeal: true,
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const title = titleRef.current;
    const pricing = pricingRef.current;
    const section = sectionRef.current;

    gsap.set(title, {
      opacity: 0,
      y: 50,
    });

    gsap.set(pricingRef.current, {
      opacity: 0,
      y: 100,
      scale: 1.1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        once: true,
      },
    });

    tl.to(title, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    }).to(pricing, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14"
    >
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div
          ref={titleRef}
          className="flex flex-col justify-start items-center gap-4"
        >
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            Pricing built for <span className="text-blue-900">every class</span>
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            Choose a plan that fits your coding workflow, from individuals
            starting out to <br /> growing professionals and large
            organizations.
          </p>
        </div>
        <div className="pt-4">
          <div className="p-0.5 bg-muted rounded-full outline outline-1 outline-[#0307120a] outline-offset-[-1px] flex justify-start items-center gap-1 md:mt-0">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-3 py-2 flex justify-start items-start gap-2 rounded-full ${
                isAnnual
                  ? "bg-blue-200 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]"
                  : ""
              }`}
            >
              <span
                className={`text-center text-sm font-medium leading-tigh ${
                  isAnnual
                    ? "text-accent-foreground"
                    : "text-zinc-400 transform transition-all duration-100 hover:text-blue-900 hover:scale-105 hover:font-semibold"
                }`}
              >
                Annually
              </span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-3 py-2 flex justify-start items-start rounded-full ${
                !isAnnual
                  ? "bg-blue-200 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.08)]"
                  : ""
              }`}
            >
              <span
                className={`text-center text-sm font-medium leading-tight ${
                  !isAnnual
                    ? "text-accent-foreground"
                    : "text-zinc-400 transform transition-all duration-100 hover:text-blue-900 hover:scale-105 hover:font-semibold"
                }`}
              >
                Monthly
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={pricingRef}
        className="self-stretch px-5 flex flex-col md:flex-row justify-start items-start gap-4 md:gap-6 mt-6 max-w-[1100px] mx-auto"
      >
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 p-4 overflow-hidden rounded-xl flex flex-col justify-start items-start gap-6 ${
              plan.popular
                ? "bg-blue-500 transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]"
                : plan.hotDeal
                ? "bg-red-700/50 transition-all duration-300 hover:bg-red-700/70 hover:scale-105 shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]"
                : "bg-gradient-to-b from-blue-200/50 to-gray-200/50 transition-all duration-300 hover:scale-105 hover:from-blue-400/05 hover:to-gray-300/50 shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]"
            }`}
            style={
              plan.popular
                ? {}
                : {
                    outline: "1px solid hsl(var(--border))",
                    outlineOffset: "-1px",
                  }
            }
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div
                  className={`w-full h-5 text-sm font-medium leading-tight ${
                    plan.popular || plan.hotDeal
                      ? "text-primary-foreground"
                      : "text-zinc-500"
                  }`}
                >
                  {plan.name}
                  {plan.popular && (
                    <div className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-yellow-700 to-orange-300 bg-white">
                      <div className="text-center text-xs font-semibold leading-tight break-words">
                        Popular
                      </div>
                    </div>
                  )}
                  {plan.hotDeal && (
                    <div className="ml-2 px-2 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex mt-0 py-0.5 bg-gradient-to-b from-red-500 to-orange-400 bg-white">
                      <div className="text-center text-xs font-semibold leading-tight break-words">
                        Hot
                      </div>
                    </div>
                  )}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                  <div className="flex justify-start items-center gap-1.5">
                    <div
                      className={`relative h-10 flex items-center text-3xl font-medium leading-10 ${
                        plan.popular || plan.hotDeal
                          ? "text-white"
                          : "text-zinc-500"
                      }`}
                    >
                      <span className="invisible">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: isAnnual ? 1 : 0,
                          transform: `scale(${isAnnual ? 1 : 0.8})`,
                          filter: `blur(${isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={!isAnnual}
                      >
                        {plan.annualPrice}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: !isAnnual ? 1 : 0,
                          transform: `scale(${!isAnnual ? 1 : 0.8})`,
                          filter: `blur(${!isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={isAnnual}
                      >
                        {plan.monthlyPrice}
                      </span>
                    </div>
                    <div
                      className={`text-center text-sm font-medium leading-tight ${
                        plan.popular || plan.hotDeal
                          ? "text-white"
                          : "text-zinc-400"
                      }`}
                    >
                      /month
                    </div>
                  </div>
                  <div
                    className={`self-stretch text-sm font-medium leading-tight ${
                      plan.popular || plan.hotDeal
                        ? "text-white"
                        : "text-zinc-400"
                    }`}
                  >
                    {plan.description}
                  </div>
                </div>
              </div>
              <Button
                className={`self-stretch px-5 py-2 rounded-[40px] flex justify-center items-center ${plan.buttonClass}`}
              >
                <div className="px-1.5 flex justify-center items-center gap-2">
                  <span
                    className={`text-center text-sm font-medium leading-tight ${
                      plan.name === "Free"
                        ? "text-gray-800"
                        : plan.name === "Pro" || plan.name === "Ultra"
                        ? "text-primary"
                        : "text-zinc-950"
                    }`}
                  >
                    {plan.buttonText}
                  </span>
                </div>
              </Button>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                className={`self-stretch text-sm font-medium leading-tight ${
                  plan.popular || plan.hotDeal
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {plan.name === "Free"
                  ? "Get Started today:"
                  : "Everything in Free +"}
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="self-stretch flex justify-start items-center gap-2"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Check
                        className={`w-full h-full ${
                          plan.popular || plan.hotDeal
                            ? "text-primary-foreground"
                            : "text-muted-foreground"
                        }`}
                        strokeWidth={2}
                      />
                    </div>
                    <div
                      className={`leading-tight font-normal text-sm text-left ${
                        plan.popular || plan.hotDeal
                          ? "text-primary-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PricingSection;
