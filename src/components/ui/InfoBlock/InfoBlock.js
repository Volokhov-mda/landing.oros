import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import Icon from "components/ui/Icon";

import styles from "./info-block.module.css";

const InfoBlock = ({ icon, className, children, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.infoBlock, styles[theme], className);

  return (
    <div className={className} {...props}>
      {icon && <InfoBlockIcon icon={icon} />}
      <div className={styles.text}>{children}</div>
    </div>
  );
};

const InfoBlockIcon = ({ icon }) => {
  const [theme] = useAtom(themeAtom);

  return (
    <div className={clsx(styles.iconWrapper, styles[theme])}>
      <Icon icon={icon} className={clsx(styles.icon, styles[theme])} />
    </div>
  );
};

export default InfoBlock;
