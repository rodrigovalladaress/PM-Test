import { JSX } from "react";

import UpIcon from "@/public/svg/up.inline.svg";
import DownIcon from "@/public/svg/down.inline.svg";

import styles from "./currency-info.module.css";

export type CurrencyInfoData = {
  label: string;
  Logo: () => JSX.Element;
  up: boolean;
  values: [number, number];
};

export function CurrencyInfo({ label, Logo, up, values }: CurrencyInfoData) {
  const GraphIcon = up ? UpIcon : DownIcon;

  return (
    <div className={styles.wrapper}>
      <Logo />

      <div>{label}</div>

      <GraphIcon />

      <div>
        {values.map((value, i) => (
          <div key={i} className={value < 0 ? styles.redNumbers : ""}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
