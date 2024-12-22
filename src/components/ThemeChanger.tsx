"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // 클라이언트에서만 렌더링되도록 설정
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 초기 렌더링 시 아무것도 표시하지 않음

  return (
    <div>
      {theme === "light" ? (
        <Sun onClick={() => setTheme("dark")} />
      ) : (
        <Moon onClick={() => setTheme("light")} />
      )}
    </div>
  );
};

export default ThemeChanger;
