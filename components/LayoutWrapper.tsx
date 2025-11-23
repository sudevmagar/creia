"use client";

import React from "react";
import Navbar from "./ui/navbar";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isLoginSignupPath =
    pathname.startsWith("/login") || pathname.startsWith("/signup");
  return (
    <>
      {!isLoginSignupPath && <Navbar />}
      <main>{children}</main>
    </>
  );
}
