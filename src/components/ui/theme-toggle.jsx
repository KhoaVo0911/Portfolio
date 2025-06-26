import { Button } from "./button";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={[
        className,
        "outline-none focus:outline-none transition-transform duration-150 hover:scale-110 active:scale-105",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {theme === "dark" ? <Sun size={32} /> : <Moon size={32} />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
