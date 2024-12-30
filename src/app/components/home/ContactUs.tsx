"use client";

import Image from "next/image";
import NeuLogo from "../../assets/Putih.png"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

const ContactUs = () => {
    return (
        <div className="w-full mx-auto p-5 overflow-hidden">
            <h1 className="text-4xl font-bold">
                Contact Us
            </h1>
            <div className="relative grid grid-cols-4 justify-center items-center bg-gradient-to-bl from-cyan-400 via-blue-600 to-blue-950 px-auto">
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
                    <h2 className="mb-4">
                        Start your journey pergi kebarat mencari kitab suci dengan seekor kera terkurung terpenjara dalam gua
                        bertindak sesuka hati loncat sana kesini.
                    </h2>
                    <h2>
                        Offline office&nbsp; : &nbsp;Jl. Bersama Prabowo 2 Periode,
                    </h2>
                    <h2>
                        Email&nbsp;:&nbsp; <a href="#" className="text-muted-foreground hover:text-primary">dinar@gmail.com</a>
                    </h2>
                    <h2>
                        Phone&nbsp;:&nbsp; <a href="#" className="text-muted-foreground hover:text-primary">+628522345589</a>
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-center mx-auto">
                    <h3 className="text-lg font-semibold mb-4 items-center">Follow Us</h3>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 rounded-full bg-redFlag p-1 items-center transform duration-200 hover:scale-110"
                        >
                            <Facebook size={24} />
                        </Link>
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 rounded-full bg-redFlag p-1 items-center transform duration-200 hover:scale-110"
                        >
                            <Twitter size={24} />
                        </Link>
                        <Link
                            href="#"
                            className="text-white hover:text-gray-300 rounded-full bg-redFlag p-1 items-center transform duration-200 hover:scale-110"
                        >
                            <Instagram size={24} />
                        </Link>
                    </div>
                </div>
            </div>
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-600 to-cyan-400 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 max-w-6xl mx-auto">
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Don&apos;t Miss Our Updates
                        </h2>
                        <p className="text-white/90 text-base md:text-lg leading-relaxed">
                            Join the Pennant Education community! Sign up for our newsletter to receive the latest updates on programs, industry insights, success stories, and exclusive offers. Stay connected and take the first step towards a brighter future.
                        </p>
                    </div>
                    <div className="w-full md:w-auto flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 md:w-80 px-4 py-3 rounded-md border border-transparent focus:border-white/20 focus:ring-0 bg-white text-gray-900"
                        />
                        <button className="px-6 py-3 font-semibold text-white bg-blue-950 hover:bg-blue-900 rounded-md transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>


    )
}
export default ContactUs;
