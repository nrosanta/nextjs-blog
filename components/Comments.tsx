"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Comments(): JSX.Element {
  const { theme } = useTheme();
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Comments
      </h2>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400 mb-4">
      Want to give your thoughts or chat about more ideas? Feel free to leave a comment {" "}
        <Link className="text-teal-500"
          href="https://github.com/testingfly/nextjs-blog/discussions"
          target="blank"
        >
          here
        </Link>
        .
      </p>
      <Giscus
        id="comments"
        repo="testingfly/nextjs-blog"
        repoId="R_kgDOKgx4UQ"
        category="General"
        categoryId="DIC_kwDOKgx4Uc4CaQSD"
        mapping="title"
        data-strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="lazy"
      />
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        Instead of authenticating the{" "}
        <Link
          href="https://giscus.app"
          target="blank"
          className="text-teal-500"
        >
          giscus
        </Link>{" "}
        application, you can also comment directly{" "}
        <Link className="text-teal-500"
          href="https://github.com/testingfly/nextjs-blog/discussions"
          target="blank"
        >
          on GitHub
        </Link>
        .
      </p>
    </div>
  );
}
