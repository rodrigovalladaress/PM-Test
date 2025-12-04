import Image from "next/image";

import styles from "./hero.module.css";
import { Button } from "../button/button";

export function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.textContentWrapper}>
          <h1 className={styles.title}>Trade Forex with Premier Markets</h1>

          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              Access global markets with advanced trading tools, competitive
              spreads, and institutional grade execution.
            </p>
          </div>

          <div className={styles.buttonsWrapper}>
            <Button href="#" mode="inverted">
              Start Trading
            </Button>
            <Button href="#" mode="ghost">
              Try Demo Account
            </Button>
            <a href="#"></a>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/images/phone.png"
            alt="Picture of a phone"
            width={490}
            height={574}
          />
        </div>
      </div>
    </section>
  );
}
