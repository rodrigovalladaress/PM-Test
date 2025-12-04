import EuUsaIcon from "@/public/svg/eu-usa.inline.svg";
import GoldIcon from "@/public/svg/gold.inline.svg";

import { CurrencyInfo, CurrencyInfoData } from "./currency-info";
import styles from "./currencies-section.module.css";

const CURRENCY_INFO: CurrencyInfoData[] = [
  {
    label: "USD/EUR",
    Logo: EuUsaIcon,
    up: true,
    values: [0.00014, -234.45],
  },
  {
    label: "XAUUSD",
    Logo: GoldIcon,
    up: false,
    values: [0.00014, -234.45],
  },
  {
    label: "USD/EUR",
    Logo: EuUsaIcon,
    up: true,
    values: [0.00014, -234.45],
  },
  {
    label: "XAUUSD",
    Logo: GoldIcon,
    up: false,
    values: [0.00014, -234.45],
  },
];

export function CurrenciesSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {CURRENCY_INFO.map((info, i) => (
          <CurrencyInfo key={i} {...info} />
        ))}
      </div>
    </div>
  );
}
