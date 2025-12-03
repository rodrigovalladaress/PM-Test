import Link from "next/link";

import UkIcon from "@/public/svg/uk.inline.svg";
import LogoIcon from "@/public/svg/logo.inline.svg";
import UserIcon from "@/public/svg/user.inline.svg";

import styles from "./header.module.css";

const TOP_LINKS = ["WebTrader", "Support", "Open Demo"];
const MAIN_LINKS = [
  "Trading",
  "Discover",
  "Promotions",
  "Company",
  "Partner with us",
];

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.border}></div>

        <div className={`${styles.selector} ${styles.withSeparator}`}>
          <button className={styles.selected}>Personal</button>
          <button>Institutional</button>
        </div>

        <nav className={styles.topNav}>
          <ul className={styles.withSeparator}>
            {TOP_LINKS.map((label) => (
              <li key={label}>
                <Link href="#">{label}</Link>
              </li>
            ))}
            <li className={styles.languageSelectorWrapper}>
              <button>
                <span className={styles.languageSelector}>
                  <div className={styles.iconWrapper}>
                    <UkIcon />
                  </div>

                  <span>EN</span>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.main}>
        <nav className={styles.mainNav}>
          <ul>
            <li>
              <Link className={styles.logoWrapper} href="/">
                <LogoIcon />
              </Link>
            </li>

            <div className={styles.mainNavCenter}>
              {MAIN_LINKS.map((label) => (
                <li className={styles.mainLinkWrapper} key={label}>
                  <Link className={styles.mainLink} href="#">
                    {label}
                  </Link>
                </li>
              ))}
            </div>

            <div className={styles.registrationWrapper}>
              <li>
                <Link className={styles.registerButton} href="#">
                  Register
                </Link>
              </li>

              <li>
                <Link href="#">
                  <UserIcon />
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
