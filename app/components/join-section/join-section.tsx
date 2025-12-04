import Image from "next/image";

import { Button } from "../button/button";
import styles from "./join-section.module.css";

export function JoinSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.textContentWrapper}>
          <h2 className={styles.title}>
            Join <span className={styles.primaryText}>50,000+</span> traders who
            trust us
          </h2>

          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              Experience advanced trading tools, transparent and competitive
              pricing, lightnaing-fast execution, and dedicated support trusted
              by traders worldwide.
            </p>

            <div className={styles.buttonsWrapper}>
              <Button href="#">Start Trading</Button>
              <Button href="#">Try Demo Account</Button>
            </div>
          </div>
        </div>

        <div className={styles.bannerWrapper}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src="/images/the-guy.png"
              alt=""
              width={255}
              height={399}
            />
          </div>

          <div className={styles.bannerContentWrapper}>
            <div className={styles.bannerContent}>
              <h2 className={styles.bannerTitle}>
                Everything you need to trade the markets
              </h2>

              <div>
                <Button href="#" mode="bright">
                  Explore Accounts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
