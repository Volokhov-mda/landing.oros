import clsx from "clsx";
import Image from "next/image";

import styles from "./icon.module.css";

const Icon = ({ slug, className, ...props }) => {
  className = clsx(styles.icon, className);

  return (
    <div className={className} {...props}>
      <Image src={`/public/images/icons/${slug}.svg`} layout="fill" alt="" />
    </div>
  );
};

export default Icon;
