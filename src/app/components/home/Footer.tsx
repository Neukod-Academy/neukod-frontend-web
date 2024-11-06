"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Putih.png";
import { Facebook, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
// import WhatsappSVG from "../../components/svg/WhatsappSVG"
// import EmailSVG from "../../components/svg/EmailSVG"

export default function Component() {
  return (
    <footer className="inset-x-0 bottom-0 z-50 bg-white/30 backdrop-blur-md dark:bg-neutral-800/30 border-t-2 pt-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-top justify-center">
          <div className="col-span-1">
            <Image
              src={logo}
              alt="Agree Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm mb-2">Telkom STO Kebayoran</p>
            <p className="text-sm mb-2">
              Jl. Sisingamangaraja No.4 RT.2/RW.1, Selong, Kebayoran
            </p>
            <p className="text-sm mb-4">
              Baru, Kota Jakarta Selatan, DKI Jakarta 12110.
            </p>
            <p className="text-sm mb-1">Telepon: +62-811-1953-323</p>
            <p className="text-sm">Email: hello@agreeculture.id</p>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="flex items-center">
                  {/* <WhatsappSVG /> */}
                  <span>Whatsapp</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center">
                  {/* <EmailSVG /> */}
                  <span>Email</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">NEUKOD</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Tentang Kami</Link>
              </li>
              <li>
                <Link href="#">Berita dan Kegiatan</Link>
              </li>
              <li>
                <Link href="#">Syarat & Ketentuan</Link>
              </li>
              <li>
                <Link href="#">Kebijakan Privasi</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0 pb-4">
            <Link
              href="#"
              className="text-white hover:text-gray-300 rounded-full bg-orange-950 p-1 items-center"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 rounded-full bg-orange-950 p-1 items-center"
            >
              <Mail size={24} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 rounded-full bg-orange-950 p-1 items-center"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 rounded-full bg-orange-950 p-1 items-center"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-300 rounded-full bg-orange-950 p-1 items-center"
            >
              <Youtube size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-cols bg-blackOut w-auto md:max-w-full h-auto mx-auto items-center justify-center py-5 px-0">
        <p className="text-sm text-white text-center">
          © Neukod Edu 2024 - Neukod adalah merek milik PT Pak Nardi Indonesia,
          Tbk. Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik
          Indonesia.
        </p>
      </div>
    </footer>
  );
}