
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

import avatarImage_dark from "../public/images/favicon_dark.png";
import avatarImage_light from "../public/images/favicon_light.png";


type Props = {
  large?: boolean;
  className?: string;
  [key: string]: any;
};
export default function Avatar({
  large = false,
  className,
  ...props
}: Props): JSX.Element {

  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={ isDark ? avatarImage_dark: avatarImage_light}
        
        alt=""
        sizes={large ? "16rem" : "10rem"}
        className={clsx(
          "rounded-lg bg-zinc-1000 object-cover dark:bg-zinc-800",
          large ? "h-14 w-44" : "h-10 w-32"
        )}
        priority
      />
    </Link>
  );
}
