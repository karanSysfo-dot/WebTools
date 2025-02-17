"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HamIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/theme-btn";

export default function Navbar() {
  return (
    <nav className="border-b-white-200 border-b sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center p-4 backdrop-blur-sm">
        {/* Brand/Logo */}
        <Link href="/" className="text-2xl font-bold">
          My Tools
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:items-center space-x-6">
          <li>
            <Link href="/" className="hover:text-slate-800">
              Home
            </Link>
          </li>
          <li>
            <Link href="/tools" className="hover:text-slate-800">
              Tools
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-slate-800">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-slate-800">
              Contact
            </Link>
          </li>
          <li>
            <Button variant="outline">Login</Button>
          </li>
          <li>
            <Button variant="outline">signup</Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              {/* Mobile Menu Button */}
              <div>
                <HamIcon />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="text-2xl font-bold">
                    My Tools
                  </Link>
                </SheetTitle>

                {/* Desktop Links */}
                <ul className="md:flex flex-col gap-3 text-white md:items-center space-x-6">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/tools">Tools</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Button variant="outline">Login</Button>
                  </li>
                  <li>
                    <Button variant="outline">signup</Button>
                  </li>
                </ul>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
