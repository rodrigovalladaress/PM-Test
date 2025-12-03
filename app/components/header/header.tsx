import styles from "./header.module.css";

import UkIcon from "@/public/svg/uk.svg";

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.border}></div>

        <div className={`${styles.selector} ${styles.withSeparator}`}>
          <button className={styles.selected}>Personal</button>
          <button>Institutional</button>
        </div>

        <nav className={`${styles.topNav} ${styles.withSeparator}`}>
          <a href="#">WebTrader</a>
          <a href="#">Support</a>
          <a href="#">Open Demo</a>
          <button>
            <span className={styles.languageSelector}>
              <div className={styles.iconWrapper}>
                <UkIcon />
              </div>

              <span>EN</span>
            </span>
          </button>
        </nav>
      </div>
    </div>
  );
}
