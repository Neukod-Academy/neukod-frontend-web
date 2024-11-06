'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import NeuLogo from '../../assets/Putih.png'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import FormSwitch from '../common/FormSwitch'

const languageOptions = [
  { value: 'EN', label: 'EN' },
  { value: 'ID', label: 'ID' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-gradient-to-b from-blackOut/90 to-blackOut/40 backdrop-filter backdrop-blur-md">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src={NeuLogo}
            alt="Logo"
            width={64}
            height={64} />
          <span className="hidden font-bold sm:inline-block text-white">
            NEUKOD ACADEMY
          </span>
        </Link>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="flex sm:flex-row">
            <NavItems />
          </div>
          <LanguageSelector />
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <NavItems />
            </SheetContent>
          </Sheet> */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-redFlag" variant="default">Apply Now!</Button>
            </DialogTrigger>
            <DialogHeader>
              <DialogTitle className="invisible"></DialogTitle>
            </DialogHeader>
            <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] lg:max-w-[1000px]">
              <FormSwitch />
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </header>
  )
}

function NavItems() {
  return (
    <div className="flex flex-row md:flex-row items-center md:items-center md:space-x-4 md:space-y-0">
      <Link
        href="/landing_page/about"
        className="text-sm font-medium transition-colors hover:text-primary mx-2 text-white"
      >
        Course
      </Link>
      <Link
        href="/landing_page/contact"
        className="text-sm font-medium transition-colors hover:text-primary text-white"
      >
        Contact Us
      </Link>
    </div>
  )
}

function LanguageSelector() {
  return (
    <div className="grid gap-3 p-4 md:grid-cols-1">
      <Select>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="EN" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {languageOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}