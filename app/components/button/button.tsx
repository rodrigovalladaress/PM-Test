import Link from "next/link";
import styles from "./button.module.css";
import React from "react";

interface CustomCss extends React.CSSProperties {
  "--background-color": string;
  "--text-color": string;
  "--border-color": string;
}

export function Button({
  href,
  mode,
  children,
}: {
  href: string;
  mode?: "fill" | "inverted" | "ghost";
  children: React.ReactNode;
}) {
  let style: CustomCss;
  switch (mode) {
    case "ghost":
      style = {
        "--background-color": "transparent",
        "--text-color": "var(--color-neutral-white)",
        "--border-color": "var(--color-neutral-white)",
      };
      break;

    case "inverted":
      style = {
        "--background-color": "var(--color-neutral-white)",
        "--text-color": "var(--color-primary)",
        "--border-color": "var(--color-neutral-white)",
      };
      break;

    case "fill":
    default:
      style = {
        "--background-color": "var(--color-primary)",
        "--text-color": "var(--color-neutral-white)",
        "--border-color": "var(--color-primary)",
      };
      break;
  }

  return (
    <Link className={styles.wrapper} href={href} style={style}>
      {children}
    </Link>
  );
}
