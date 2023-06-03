"use client";

import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const modeIcon = 'text-xl cursor-pointer hover:text-amber-500';

  return (
    <>
      {mounted &&
        (currentTheme === 'dark' ?
          <MdLightMode className={modeIcon} onClick={() => setTheme('light')} />
          : <BsFillMoonFill className={modeIcon} onClick={() => setTheme('dark')} />
        )}

    </>
  )
}
