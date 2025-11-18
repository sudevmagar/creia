"use client";

import Image from "next/image";

export default function SignupPageContent() {
  return (
    <div className="min-h-screen flex bg-background">
      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="customClipPath" clipPathUnits="objectBoundingBox">
            {/* Convert your coordinates to 0-1 range by dividing by approximate max values */}
            {/* <path d="M0.025,0.108 A0.108,0.108,0,0,1,0.108,0.027 L0.900,0.027 A0.108,0.108,0,0,1,1,0.125 L0.952,0.919 A0.108,0.108,0,0,1, 0.892,1 L0.108,1 A0.108,0.108,0,0,1,0.025,0.919 Z" /> */}

            <path
              d="M0.025,0.108 A0.108,0.108,0,0,1, 0.108,0.027 
            L0.900,0.027 A0.108,0.108,0,0,1, 1,0.125 
            L0.94,0.919 A0.05,0.05,0,0,1, 0.885,0.96 
            L0.125,0.96 A0.108,0.108,0,0,1, 0.025,0.855 Z"
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative w-1/2 imageWrapper"
        style={{
          clipPath: "url(#customClipPath)",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1763046287602-7f878927101f?q=80&w=687&auto=format&fit=crop"
          alt="Image"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-1/2 flex items-center justify-center p-8">
        <h1 className="text-4xl font-bold">Form contents</h1>
      </div>
    </div>
  );
}
