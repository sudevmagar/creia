"use client";

import Image from "next/image";
import SignupForm from "./SignupForm";

export default function SignupPageContent() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="customClipPath" clipPathUnits="objectBoundingBox">
            {/* Convert your coordinates to 0-1 range by dividing by approximate max values */}
            {/* <path d="M0.025,0.108 A0.108,0.108,0,0,1,0.108,0.027 L0.900,0.027 A0.108,0.108,0,0,1,1,0.125 L0.952,0.919 A0.108,0.108,0,0,1, 0.892,1 L0.108,1 A0.108,0.108,0,0,1,0.025,0.919 Z" /> */}

            <path
              d="M0.025,0.120 A0.108,0.108,0,0,1, 0.118,0.027 
            L0.900,0.027 A0.108,0.108,0,0,1, 1,0.146 
            L0.90,0.919 A0.05,0.05,0,0,1, 0.845,0.96 
            L0.125,0.96 A0.108,0.108,0,0,1, 0.025,0.855 Z"
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative w-full lg:w-6/10 imageWrapper"
        style={{
          clipPath: "url(#customClipPath)",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          fill
          className="object-cover"
        />
      </div>

      <SignupForm />
    </div>
  );
}
