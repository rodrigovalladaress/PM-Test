import { JSX } from "react";

import SendIcon from "@/public/svg/send.inline.svg";

import styles from "./access-section-card.module.css";

export type AccessSectionCardData = {
  Icon: () => JSX.Element;
  title: string;
  content: string;
};

export function AccessSectionCard({
  Icon,
  title,
  content,
}: AccessSectionCardData) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.animated}>
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <p> {content}</p>
        <div className={styles.sendIconWrapper}>
          <SendIcon />
        </div>
      </div>
    </div>
  );
}
