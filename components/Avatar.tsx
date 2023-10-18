import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import avatarImage from "../public/images/favicon.png";

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
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? "6rem" : "2.25rem"}
        className={clsx(
          "rounded bg-zinc-1000 object-cover dark:bg-zinc-800",
          large ? "h-14 w-44" : "h-9 9"
        )}
        priority
      />
    </Link>
  );
}
