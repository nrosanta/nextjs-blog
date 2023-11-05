import clsx from "clsx";
import { useReadingProgress } from "hooks";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): JSX.Element {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-blue-500 dark:text-blue-400"
            : "hover:text-teal-500 dark:hover:text-green-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-blue-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
}

type Props = {
  links: { href: string; label: string }[];
  className?: string;
};

export default function DesktopNavigation({
  links,
  className,
}: Props): JSX.Element {
  let router = useRouter();
  // const completion = useReadingProgress();

  return (
    <nav className={className}>
    {/* <nav className="flex flex-row justify-between items-center print:hidden sticky z-50 top-0 bg-inherit py-3"> */}
      <ul className="flex rounded-full bg-white/90 px-3 text-md font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-700/90 dark:text-zinc-200 dark:ring-white/10">
        {links.map(({ href, label }, index) => (
          <NavItem key={index} href={href}>
            {label}
          </NavItem>
        ))}
      </ul>
      {/* </div> */}
      {/* <span
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full h-0.5 bg-yellow-500`}
      /> */}
    </nav>
  );
}
