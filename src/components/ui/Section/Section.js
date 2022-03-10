import clsx from "clsx";
import Title from "../Title";

import styles from "./section.module.css";

const Section = ({ title, className, children, ...props }) => {
  className = clsx(styles.section, className);

  return (
    <div className={className} {...props}>
      <Title className={styles.title}>{title}</Title>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default Section;
