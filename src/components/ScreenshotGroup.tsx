import clsx from "clsx";
import styles from "./ScreenshotGroup.module.css";
import { ReactNode } from "react";

interface ScreenshotsProps {
  children: ReactNode;
}

export default function Screenshots({ children }: ScreenshotsProps) {
  return (
    <div className={styles.screenshotsContainer}>{children}</div>
  );
}