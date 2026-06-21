"use client";

import { useTheme } from "@/providers/theme-context";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button type="button" variant={"ghost"} onClick={toggleTheme} aria-label={theme==="dark"?"روشن":"تاریک"}>
      {theme === "dark" ? (
        <Sun className="w-6 h-6 fill-amber-400 stroke-amber-400" />
      ) : (
        <Moon className="w-6 h-6 fill-[#cc4444] stroke-[#cc4444]" />
      )}
    </Button>
  );
}
