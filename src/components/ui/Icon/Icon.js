import clsx from "clsx";

import styles from "./icon.module.css";

const Icon = ({ icon, className, ...props }) => {
  className = clsx(styles.icon, className);

  return (
    <div className={className} {...props}>
      <img src={icon} alt="" />
    </div>
  );
};

export default Icon;
