import Link from "next/link";
import styles from "./button.module.css";
import React from "react";

interface CustomCss extends React.CSSProperties {
  "--background-color"?: string;
  "--background"?: string;
  "--text-color": string;
  "--border-color": string;
  "--filter"?: string;
}

export function Button({
  href,
  mode,
  children,
}: {
  href: string;
  mode?: "fill" | "inverted" | "ghost" | "bright";
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

    case "bright":
      style = {
        "--background": "linear-gradient( 30deg, #110001 20%, #3b0000 45%)",
        "--text-color": "var(--color-neutral-white)",
        "--border-color": "#ff9595",
        "--filter": "drop-shadow(0, 4px, 30px, rgba(255, 0, 0, 85%))",
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
