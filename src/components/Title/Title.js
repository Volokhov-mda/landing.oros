import clsx from "clsx";

import styles from "./title.module.css";

const Title = ({ className, children, ...props }) => {
  className = clsx(styles.title, className);

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default Title;
