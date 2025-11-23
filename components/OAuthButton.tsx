"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";

type OAuthProvider = "google" | "github";

interface OAuthButtonProps {
  provider: OAuthProvider;
  disabled?: boolean;
}

const providerConfig = {
  google: {
    name: "Google",
    icon: FaGoogle,
  },
  github: {
    name: "GitHub",
    icon: FaGithub,
  },
};

export default function OAuthButton({
  provider,
  disabled = false,
}: OAuthButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const config = providerConfig[provider];
  const Icon = config.icon;

  const handleOAuth = async () => {
    setIsLoading(true);

    try {
      const result = await signIn(provider, {
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (result?.error) {
        toast.error(`${config.name} sign-in failed.`);
        setIsLoading(false);
        return;
      }

      if (result?.ok) {
        toast.success("Successfully signed in!");
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      console.error(`Error during ${config.name} sign-in:`, error);
      toast.error(
        `An error occurred during ${config.name} sign-in. Please try again.`
      );
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleOAuth}
      disabled={disabled || isLoading}
      className="w-full flex justify-center items-center gap-4 bg-background hover:bg-primary/20 text-foreground border-2 border-border hover:border-primary rounded-md px-6 py-3 text-lg font-semibold transition-all duration-500 hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <Icon className="text-2xl" />
      {isLoading ? `Signing in...` : config.name}
    </button>
  );
}
