"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait for hydration
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a skeleton that matches the final size
    return (
      <Button variant="outline" size="icon" className="cursor-default">
        <div className="h-4 w-4" />
      </Button>
    );
  }

  const current = theme === "system" ? systemTheme : theme;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
    >
      {current === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
