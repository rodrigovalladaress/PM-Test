import Link from "next/link";

import UkIcon from "@/public/svg/uk.inline.svg";
import LogoIcon from "@/public/svg/logo.inline.svg";
import UserIcon from "@/public/svg/user.inline.svg";
import ChevronDownIcon from "@/public/svg/chevron-down.inline.svg";

import styles from "./header.module.css";
import { Button } from "../button/button";
import { HeaderSelector } from "./header-selector";

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
        <div className={styles.topContent}>
          <HeaderSelector />

          <nav className={styles.topNav}>
            <ul className="withSeparator">
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
      </div>

      <div className={styles.main}>
        <div className={styles.mainContent}>
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
                      <span>{label}</span>

                      <span className={styles.chevronIconWrapper}>
                        <ChevronDownIcon />
                      </span>
                    </Link>
                  </li>
                ))}
              </div>

              <div className={styles.registrationWrapper}>
                <li>
                  <Button href="#">Register</Button>
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
    </div>
  );
}
