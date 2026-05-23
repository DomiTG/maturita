"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const nextDark = window.localStorage.getItem("theme") === "dark";
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
  }, []);

  const toggle = () => {
    const nextDark = !dark;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  return (
    <Button variant="outline" onClick={toggle} aria-label="Přepnout téma">
      {dark ? "Světlý režim" : "Tmavý režim"}
    </Button>
  );
}
