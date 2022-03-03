import clsx from "clsx";

import styles from "./screen.module.css";

const Screen = ({ height = "100vh", style, className, children, ...props }) => {
  className = clsx(styles.screen, className);

  return (
    <div className={className} style={{ height, ...style }} {...props}>
      {children}
    </div>
  );
};

export default Screen;
