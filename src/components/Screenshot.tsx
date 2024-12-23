import clsx from "clsx";
import styles from "./ScreenshotGroup.module.css";

interface ScreenshotProps {
  name: string;
  alt: string;
  width?: number;
  height?: number;
  showCaption?: boolean;
  large?: boolean;
}

const DEFAULT_WIDTH = 205;
const DEFAULT_HEIGHT = 433;

export default function Screenshot({
  name,
  alt,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  showCaption = true,
  large = false,
}: ScreenshotProps) {
  // Type assertion to handle dynamic imports
  const pngImage = require(`@site/static/img/screenshots/${name}.png`) as { default: string };
  const webpImage = require(`@site/static/img/screenshots/${name}.webp`) as { default: string };

  return (
    <div className={styles.screenshotContainer}>
      <picture>
        <source
          type="image/webp"
          srcSet={webpImage.default}
        />
        <source
          type="image/png"
          srcSet={pngImage.default}
        />
        <img
          className={clsx(styles.screenshot, large && styles.screenshotLarge)}
          width={width}
          height={height}
          src={pngImage.default}
          alt={alt}
        />
      </picture>
      {showCaption && (
        <>
          <br />
          <span className={styles.screenshotCaption}>{alt}</span>
        </>
      )}
    </div>
  );
}