"use client";

import Image from "next/image";
import NeuLogo from "../../images/Putih.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <main className="p-5">
      {/* Form section */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <section className="flex pr-[5%] py-1 items-center justify-center">
            <div className="container max-w-lg border-4 border-gray-100 rounded-lg p-4 bg-muted/60">
              <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
                {/* <p className="mb-3 font-semibold md:mb-4">Connect</p> */}
                <h2 className="rb-5 mb-5 text-3xl text-blue-800 font-bold md:mb-6 md:text-5xl lg:text-6xl">
                  Get in Touch
                </h2>
                <p className="md:text-md">We'd love to hear from you!</p>
              </div>
              <form className="mx-auto grid w-full max-w-md grid-cols-1 gap-6">
                <div className="grid w-full items-center">
                  <Label htmlFor="name" className="mb-2">
                    Name
                  </Label>
                  <Input type="text" id="name" />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2">
                    Email
                  </Label>
                  <Input type="email" id="email" />
                </div>
                <div className="grid w-full items-center">
                  <Label htmlFor="message" className="mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message..."
                    className="min-h-[11.25rem] overflow-auto"
                  />
                </div>
                <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="cursor-pointer">
                    I accept the Terms
                  </Label>
                </div>
                <div className="text-center">
                <Button className="px-6 font-semibold text-white text-sm md:text-base bg-redFlag hover:bg-pink-800 rounded-md transition-colors">
                  Submit
                </Button>
                </div>
              </form>
            </div>
          </section>
        </div>

        <div className="col-span-2 w-full py-1">
          <section className="w-full mx-auto p-5 overflow-hidden items-center justify-center bg-muted/60 border-4 border-gray-100 rounded-lg">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-800 text-center">
              Contact Us
            </h1>
            <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 rounded md:my-10 dark:bg-gray-700" />
            <div className="relative grid grid-cols-4 justify-center items-center rounded-lg px-auto">
              <div className="flex w-full items-start justify-center bg-sky-900">
                <Image
                  src={NeuLogo}
                  alt="Logo Neukod"
                  objectFit="contain"
                  className="w-auto md:max-w-[80%] object-contain"
                />
              </div>
              <div className="flex flex-col col-span-3 justify-center items-start px-5">
                {/* Suggested code may be subject to a license. Learn more: ~LicenseLog:1372034879. */}
                <h1 className="text-2xl font-semibold mb-4">NEUKOD EDU</h1>
                <h2 className="text-sm md:text-base mb-4">
                  Start your journey pergi kebarat mencari kitab suci dengan
                  seekor kera terkurung terpenjara dalam gua bertindak sesuka
                  hati loncat sana kesini.
                </h2>
                <h2 className="text-sm md:text-base">
                  Offline office&nbsp; : &nbsp;Jl. Bersama Prabowo 2 Periode,
                </h2>
                <h2 className="text-sm md:text-base">
                  Email&nbsp;:&nbsp;{" "}
                  <a href="#" className="text-blue-200 hover:text-primary">
                    dinar@gmail.com
                  </a>
                </h2>
                <h2 className="text-sm md:text-base">
                  Phone&nbsp;:&nbsp;{" "}
                  <a href="#" className="text-blue-200 hover:text-primary">
                    +628522345589
                  </a>
                </h2>
              </div>
            </div>
          </section>

          {/*Subs section */}
          <section className="relative overflow-hidden border-4 border-gray-100 rounded-lg px-8 py-8 mt-8 bg-muted/60">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-6xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl text-blue-800 font-bold">
                  Don&apos;t Miss Our Updates
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                  Join the Pennant Education community! Sign up for our
                  newsletter to receive the latest updates on programs, industry
                  insights, success stories, and exclusive offers. Stay
                  connected and take the first step towards a brighter future.
                </p>
              </div>
              <div className="w-full md:w-auto flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 w-60 md:w-80 px-4 py-5 text-sm md:text-base rounded-md border border-gray-200 focus:border-white/20 focus:ring-0 bg-white text-gray-900"
                />
                <Button className="px-6 font-semibold text-white text-sm md:text-base bg-redFlag hover:bg-pink-800 rounded-md transition-colors">
                  Subscribe
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
export default ContactUs;
