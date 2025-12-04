import { Button } from "../button/button";
import CircleDollarIcon from "@/public/svg/circle-dollar.inline.svg";
import StocksIcon from "@/public/svg/stocks.inline.svg";
import PieIcon from "@/public/svg/pie.inline.svg";
import EarthIcon from "@/public/svg/earth.inline.svg";
import GraphBarsIcon from "@/public/svg/graph-bars.inline.svg";
import SecureIcon from "@/public/svg/secure.inline.svg";

import styles from "./access-section.module.css";
import {
  AccessSectionCard,
  AccessSectionCardData,
} from "./access-section-card";

const CARDS_DATA: AccessSectionCardData[] = [
  {
    Icon: CircleDollarIcon,
    title: "Forex",
    content:
      "Trade the world's largest financial market. Access deep liquidity, tight spreads, and constant opportunity across major and minor currency pairs.",
  },
  {
    Icon: StocksIcon,
    title: "Stocks",
    content:
      "From Wall Street to global tech leaders, follow the world's leading companies and react to market moves in real time.",
  },
  {
    Icon: PieIcon,
    title: "Indices",
    content:
      "Trade major global indices with deep liquidity, precise execution, and competitive spreads across key markets.",
  },
  {
    Icon: EarthIcon,
    title: "Commodities",
    content:
      "Tap into global demand and supply trends by trading essential resources such as oil, gas, and agricultural products.",
  },
];

export function AccessSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Access <span className={styles.primaryText}>17,000+</span> <br />
          markets all in one
        </h2>

        <p className={styles.textContent}>
          Trade forex, shares, indices, and commodities with competitive
          spreads, deep liquidity, and seamless execution.
        </p>

        <div className={styles.buttonsWrapper}>
          <Button href="#" mode="bright">
            <span className={styles.buttonContent}>
              <span className={styles.iconWrapper}>
                <CircleDollarIcon />
              </span>
              $0 Deposit Fees
            </span>
          </Button>

          <Button href="#" mode="bright">
            <span className={styles.buttonContent}>
              <span className={styles.iconWrapper}>
                <GraphBarsIcon />
              </span>
              Spreads from 0.0 pips
            </span>
          </Button>

          <Button href="#" mode="bright">
            <span className={styles.buttonContent}>
              <span className={styles.iconWrapper}>
                <SecureIcon />
              </span>
              Secure Funds
            </span>
          </Button>
        </div>

        <div className={styles.cardsWrapper}>
          {CARDS_DATA.map((data) => (
            <AccessSectionCard key={data.title} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
}
