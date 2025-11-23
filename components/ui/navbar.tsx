"use client";

import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border bg-sidebar px-4 text-sidebar-foreground">
      <div className="flex items-center gap-1">
        <span className="text-3xl font-bold ">Creia</span>
        <span className="text-3xl font-bold leading-none text-primary">.</span>
      </div>
      <div>
        <Link href="/login" className="mr-4 hover:underline">
          Login
        </Link>
        <Link
          href="/signup"
          className="mr-4 bg-primary px-4 py-2 rounded-md text-white hover:bg-primary/90 transition-colors"
        >
          Get Creia Free
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
