"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faPalette,
  faImages,
  faThumbtack,
  faHeart,
  faChartLine,
  faFire,
  faMagic,
  faGem,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons"
import Profilepic from "../../images/profilepicture/pofilepicture.png"

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isFooterOpen, setIsFooterOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <nav
      className={`fixed left-[1vw] top-[1vw] h-[calc(100%-2vw)] bg-[#18283b] rounded-2xl flex flex-col text-[#f5f6fa] font-sans overflow-hidden select-none transition-all duration-300 ease-in-out ${isOpen ? "w-64" : "w-20"}`}
    >
      <input type="checkbox" id="nav-toggle" className="hidden" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
      <div className="relative flex items-center h-20 pl-4 pr-12 bg-transparent rounded-2xl z-10">
        <a
          href="https://codepen.io"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-2xl transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          NEU<FontAwesomeIcon icon={faCode} />
          KOD
        </a>
        <label
          htmlFor="nav-toggle"
          className="absolute right-0 flex items-center justify-center w-12 h-full cursor-pointer"
        >
          <span
            className={`relative w-5 h-0.5 -left-4 bg-[#18283b] rounded-full transition-all duration-300 ${isOpen ? "bg-[#18283b]" : "bg-[#f5f6fa]"}`}
          >
            <span
              className={`absolute top-0.2 -left-0 w-4 h-0.5 bg-[#f5f6fa] rounded-full transition-all duration-300 ${isOpen ? "rotate-45 -translate-y-0 -translate-x-1" : "-translate-y-1.5 w-2.5 translate-x-0.5"}`}
            />
            <span
              className={`absolute bottom-0.2 -left-0 w-4 h-0.5 bg-[#f5f6fa] rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-0 -translate-x-1" : "translate-y-1.5 w-2.5 translate-x-0.5"}`}
            />
          </span>
        </label>
        <hr className="absolute bottom-0 left-4 w-[calc(100%-2rem)] border-t border-[#2c3e50]" />
      </div>
      <div className={`relative flex-1 overflow-x-hidden transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
        <div
          className="absolute left-2 gap-5 top-0 w-[calc(100%-1rem)] h-[54px] bg-teal-400 rounded-2xl transition-all duration-300 ease-in-out"
          style={{ top: `${activeIndex * 54}px` }}
        ></div>
        <NavButton
          icon={faPalette}
          text="Your Work"
          index={0}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isOpen={isOpen}
        />
        <NavButton
          icon={faImages}
          text="Assets"
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isOpen={isOpen}
        />
        <NavButton
          icon={faThumbtack}
          text="Pinned Items"
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isOpen={isOpen}
        />
        <hr className="mx-4 border-t border-[#2c3e50]" />
        <NavButton
          icon={faHeart}
          text="Following"
          index={3}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isOpen={isOpen}
        />
        <NavButton
          icon={faChartLine}
          text="Trending"
          index={4}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isOpen={isOpen}
        />
        <NavButton
          icon={faFire}
          text="Challenges"
          index={5}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isOpen={isOpen}
        />
        <NavButton
          icon={faMagic}
          text="Spark"
          index={6}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isOpen={isOpen}
        />
        <hr className="mx-4 border-t border-[#2c3e50]" />
        <NavButton
          icon={faGem}
          text="Codepen Pro"
          index={7}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isOpen={isOpen}
        />
      </div>
      <div
        className={`relative bg-[#2c3e50] rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? "w-64" : "w-20"} ${isFooterOpen && isOpen ? "h-[30%]" : "h-[55px]"}`}
      >
        <div className="relative flex items-center h-[54px]">
          <div
            className={`flex transition-all duration-300`}
          >
            <Image
              src={Profilepic}
              alt="Avatar"
              className={`rounded-full w-8 h-8 object-cover ${isOpen ? "transition-all duration-300 ml-3 opacity-100 place-items-left" : "transition-all duration-500 ml-5 min-w-8 opacity-100 place-items-center"}`}
            />
          </div>
          <div
            className={`ml-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <a
              href="https://codepen.io/uahnbu/pens/public"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              uahnbu
            </a>
            <span className="text-xs text-[#8392a5]">Admin</span>
          </div>
          {isOpen && (
            <label
              htmlFor="nav-footer-toggle"
              className={`absolute right-0 flex items-center justify-center w-12 h-full cursor-pointer transition-transform duration-300 ${isFooterOpen ? "transform rotate-180" : ""}`}
              onClick={() => setIsFooterOpen(!isFooterOpen)}
            >
              <FontAwesomeIcon icon={faCaretUp} />
            </label>
          )}
        </div>
        {isOpen && (
          <div
            className={`mx-4 pt-4 text-sm text-[#8392a5] overflow-hidden transition-all duration-300 ${isFooterOpen ? "max-h-[calc(30vh-54px)]" : "max-h-0"}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
        )}
      </div>
    </nav>
  )
}

const NavButton: React.FC<{
  icon: any
  text: string
  index: number
  activeIndex: number
  setActiveIndex: (index: number) => void
  isOpen: boolean
}> = ({ icon, text, index, activeIndex, setActiveIndex, isOpen }) => {
  const isActive = index === activeIndex
  return (
    <div
      className={`relative flex px-5 space-x-2 items-center h-[54px] cursor-pointer group z-10 transition-colors duration-300 ${isActive ? "text-[#a5e0f0]" : "text-[#8392a5] hover:text-[#ffff]"}`}
      onClick={() => setActiveIndex(index)}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`max-w-[50px] justify-center text-center transition-all duration-300 ${isOpen ? "" : "w-full"}`}
      />
      <span
        className={`transition-all duration-300 ${isOpen ? "opacity-100 group-hover:pl-2" : "opacity-0 w-0"}`}
      >
        {text}
      </span>
    </div>
  )
}

export default SideNav;

