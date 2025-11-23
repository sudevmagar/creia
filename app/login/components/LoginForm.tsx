"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import OAuthButton from "@/components/OAuthButton";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(null);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (res?.error) {
        setErrors(res.error);
        toast.error(res.error);
      } else if (res && res.ok) {
        toast.success("Successfully signed in!");
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrors("An error occurred during login. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="mt-6 text-xl font-semibold">New to Creia?</h2>
          <Link href="/signup" className="underline">
            Join Now
          </Link>
        </div>
      </div>

      {/* Signup Form */}
      <form
        className="mt-4 flex flex-col gap-6 space-y-1 px-8"
        onSubmit={handleSubmit}
      >
        <div className="">
          <h2 className="font-bold text-sm text-foreground">Welcome Back!</h2>
          <p className="text-3xl text-foreground">Sign in to your account</p>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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
          disabled={isSubmitting}
          className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-[#f0f4f5] border-2 border-primary rounded-md px-6 py-3 text-lg font-semibold transition-all duration-500 hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
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
          <OAuthButton provider="google" disabled={isSubmitting} />
          <OAuthButton provider="github" disabled={isSubmitting} />
        </div>
      </div>

      {/* modals */}
      <Toaster position="top-right" />
    </div>
  );
}
