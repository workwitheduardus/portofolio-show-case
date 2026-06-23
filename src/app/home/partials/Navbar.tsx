"use client";

import { navigationData } from "@/components/ui/contant/navigation-data";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-neutral-800 bg-transparent">
      {/* INNER CONTAINER
          mobile: padding 0 16px → desktop: padding 0 128px
          via navbar-container class in globals.css */}
      <div className="navbar-container flex flex-row items-center justify-between h-20 w-full max-w-[1440px] mx-auto">
        {/* MOBILE LOGO — navbar-mobile-logo hides at lg+ */}
        <div className="navbar-mobile-logo flex-row items-center gap-[9px] shrink-0">
          <span
            aria-hidden="true"
            className="navbar-line block h-px bg-white shrink-0"
          />
          <Link
            href="#home"
            aria-label="Go to homepage"
            className="navbar-logo-text font-bold text-primary-200 whitespace-nowrap no-underline"
          >
            Edwin Anderson.
          </Link>
        </div>

        {/* DESKTOP ROW — navbar-desktop-row shows at lg+
            Figma Frame 1618873557: gap 32px, flex-grow 1 */}
        <div className="navbar-desktop-row navbar-desktoprow-gap flex-row items-center grow">
          {/* Line 5 — 40px at desktop, 24px mobile via navbar-line */}
          <span
            aria-hidden="true"
            className="navbar-line block h-px bg-white shrink-0"
          />

          {/* Menu group: Edwin Anderson. + nav links
              Figma: padding 8px, gap 8px */}
          <div className="navbar-menugroup flex flex-row items-center grow">
            {/* Edwin Anderson. — 20px bold green at desktop */}
            <Link
              href="#home"
              aria-label="Go to homepage"
              className="navbar-logo-text font-bold text-primary-200 whitespace-nowrap no-underline shrink-0"
            >
              Edwin Anderson.
            </Link>

            {/* Nav links
                Figma each item: flex-row, justify-center, items-center,
                padding 8px, gap 8px, height 46px, border-radius 0 */}
            <nav aria-label="Primary navigation">
              <ul className="flex flex-row items-center list-none m-0 p-0">
                {navigationData.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="navbar-navlink flex flex-row justify-center items-center rounded-none shrink-0 grow-0 font-normal text-white whitespace-nowrap no-underline transition-colors duration-200 hover:text-primary-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* MOBILE HAMBURGER — navbar-hamburger hides at lg+ */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open main navigation"
              className="navbar-hamburger items-center justify-center bg-transparent border-none cursor-pointer p-1 shrink-0"
            >
              <Menu size={24} strokeWidth={2} color="#ffffff" />
            </button>
          </SheetTrigger>

          {/* MOBILE OVERLAY */}
          <SheetContent
            side="left"
            className="flex flex-col p-0 border-none w-screen max-w-[100vw] bg-black"
          >
            {/* Overlay header — h 80px, border-bottom */}
            <div className="flex flex-row items-center justify-between px-4 h-20 border-b border-neutral-800 shrink-0">
              {/* Logo: line + gap + name */}
              <div className="flex flex-row items-center gap-[9px]">
                <span
                  aria-hidden="true"
                  className="block w-6 h-px bg-white shrink-0"
                />
                <SheetClose asChild>
                  <Link
                    href="#home"
                    className="font-bold text-base leading-[30px] text-primary-200 whitespace-nowrap no-underline"
                  >
                    Edwin Anderson.
                  </Link>
                </SheetClose>
              </div>

              {/* X close */}
              <SheetClose asChild>
                <button
                  aria-label="Close navigation"
                  className="flex items-center justify-center bg-transparent border-none cursor-pointer p-1 shrink-0 text-white hover:text-primary-200 transition-colors duration-200"
                >
                  <X size={24} strokeWidth={2} color="currentColor" />
                </button>
              </SheetClose>
            </div>

            {/* Nav links
                Figma Frame 1618873596:
                absolute, left 16px, top 96px, gap 16px, flex-col */}
            <nav
              aria-label="Mobile navigation"
              className="navbar-mobile-nav absolute flex flex-col justify-center items-start"
            >
              {navigationData.map((item) => (
                <SheetClose key={item.label} asChild>
                  <Link
                    href={item.href}
                    className="navbar-navlink flex flex-row justify-center items-center rounded-none shrink-0 grow-0 font-normal text-white whitespace-nowrap no-underline transition-colors duration-200 hover:text-primary-200"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
