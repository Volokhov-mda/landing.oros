import clsx from "clsx";

import styles from "./scroll-snap.module.css";

const ScrollSnap = ({ className, children, ...props }) => {
  className = clsx(styles.scrollSnap, className);

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

ScrollSnap.Screen = ({
  height = "100vh",
  snap,
  style,
  className,
  children,
  ...props
}) => {
  className = clsx(styles.screen, snap && styles.snap, className);

  return (
    <div className={className} style={{ height, minHeight: height, ...style }} {...props}>
      {children}
    </div>
  );
};

export default ScrollSnap;
