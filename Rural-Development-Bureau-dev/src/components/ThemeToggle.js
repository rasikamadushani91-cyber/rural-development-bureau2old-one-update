import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="rounded-lg bg-white/20 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white/40 sm:px-5 sm:text-sm"
    >
      {dark ? "🔆 Light" : "🌙 Dark"}
    </button>
  );
}