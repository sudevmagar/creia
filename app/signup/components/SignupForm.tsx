import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SignupForm() {
  return (
    <div className="w-full lg:w-4/10 flex flex-col justify-between p-8 ">
      {/* Header */}
      <div className="flex items-center justify-between text-foreground mb-8">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-3xl font-bold ">Creia</span>
          <span className="text-3xl font-bold leading-none text-primary">
            .
          </span>
        </Link>
        <div className="flex flex-col">
          <h2 className="mt-6 text-xl font-semibold">Already a Member?</h2>
          <Link href="/login" className="underline">
            Login Here
          </Link>
        </div>
      </div>

      {/* Signup Form */}
      <form className="mt-4 flex flex-col gap-6 space-y-1 px-8">
        <div className="">
          <h2 className="font-bold text-sm text-foreground">
            Sign Up to Creia.
          </h2>
          <p className="text-3xl text-foreground">Create Together.</p>
        </div>
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder=" "
            className="w-full px-4 py-3 border border-border rounded-md bg-transparent text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ease-in-out duration-300 peer"
            required
          />
          <label
            htmlFor="name"
            className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-foreground peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm pointer-events-none transition-all ease-in-out duration-300"
          >
            Full Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder=" "
            className="w-full px-4 py-3 border border-border rounded-md bg-transparent text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ease-in-out duration-300 peer"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-foreground peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm pointer-events-none transition-all ease-in-out duration-300"
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder=" "
            className="w-full px-4 py-3 border border-border rounded-md bg-transparent text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all ease-in-out duration-300 peer"
            required
          />
          <label
            htmlFor="password"
            className="absolute left-4 -top-2.5 bg-background px-1 text-sm text-foreground peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm pointer-events-none transition-all ease-in-out duration-300"
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-[#f0f4f5] border-2 border-primary rounded-md px-6 py-3 text-lg font-semibold transition-all duration-500 hover:scale-105 cursor-pointer"
        >
          Sign Up
        </button>
      </form>

      {/* OAuth Section */}
      <div className="mt-4 px-4">
        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex items-center justify-center">
            <span className="text-center px-2 text-foreground bg-background my-4">
              Or continue with
            </span>
          </div>
        </div>

        {/* Oauth Button */}
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-4 bg-background hover:bg-primary/20 text-foreground border-2 border-border hover:border-primary rounded-md px-6 py-3 text-lg font-semibold transition-all duration-500 hover:scale-105 cursor-pointer"
          >
            <FaGoogle className="text-2xl" />
            Google
          </button>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-4 bg-background hover:bg-primary/20 text-foreground border-2 border-border hover:border-primary rounded-md px-6 py-3 text-lg font-semibold transition-all duration-500 hover:scale-105 cursor-pointer"
          >
            <FaGithub className="text-2xl" />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
