"use client";

import Image from "next/image";
import NeuLogo from "../../assets/Putih.png"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactUs = () => {
    return (
        <div className="w-full mx-auto p-5 overflow-hidden items-center jsutify-center bg-gray-100">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-800 text-center">
                Contact Us
            </h1>
            <hr className="w-48 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="relative grid grid-cols-4 justify-center items-center border-4 border-gray-100 rounded-lg px-auto">
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
                    <h1 className="text-2xl font-semibold mb-4">
                        NEUKOD EDU
                    </h1>
                    <h2 className="text-sm md:text-base lg:text-lg mb-4">
                        Start your journey pergi kebarat mencari kitab suci dengan seekor kera terkurung terpenjara dalam gua
                        bertindak sesuka hati loncat sana kesini.
                    </h2>
                    <h2 className="text-sm md:text-base lg:text-lg">
                        Offline office&nbsp; : &nbsp;Jl. Bersama Prabowo 2 Periode,
                    </h2>
                    <h2 className="text-sm md:text-base lg:text-lg">
                        Email&nbsp;:&nbsp; <a href="#" className="text-blue-200 hover:text-primary">dinar@gmail.com</a>
                    </h2>
                    <h2 className="text-sm md:text-base lg:text-lg">
                        Phone&nbsp;:&nbsp; <a href="#" className="text-blue-200 hover:text-primary">+628522345589</a>
                    </h2>
                </div>

                {/* <div className="flex flex-col items-center justify-center mx-auto">
                    <h3 className="text-lg font-semibold mb-4 items-center text-white">Follow Us</h3>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 rounded-full bg-redFlag p-1 items-center transform duration-200 hover:scale-110"
                        >
                            <Facebook className="w-8 h-8 md:w-10 md:h-10" />
                        </Link>
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 rounded-full bg-redFlag p-1 items-center transform duration-200 hover:scale-110"
                        >
                            <Twitter className="w-8 h-8 md:w-10 md:h-10" />
                        </Link>
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 rounded-full bg-redFlag p-1 items-center transform duration-200 hover:scale-110"
                        >
                            <Instagram className="w-8 h-8 md:w-10 md:h-10" />
                        </Link>
                    </div>
                </div> */}
            </div>
            {/* <section className="relative overflow-hidden border-4 border-gray-100 rounded-lg p-8 mt-5 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-6xl mx-auto">
                    <div className="flex-1 space-y-4">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Don&apos;t Miss Our Updates
                        </h2>
                        <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                            Join the Pennant Education community! Sign up for our newsletter to receive the latest updates on programs, industry insights, success stories, and exclusive offers. Stay connected and take the first step towards a brighter future.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 w-60 md:w-80 px-4 py-5 text-sm md:text-base lg:text-lg rounded-md border border-gray-200 focus:border-white/20 focus:ring-0 bg-white text-gray-900"
                        />
                        <Button className="px-6 font-semibold text-white text-sm md:text-base bg-redFlag hover:bg-pink-800 rounded-md transition-colors">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section> */}
        </div>


    )
}
export default ContactUs;
