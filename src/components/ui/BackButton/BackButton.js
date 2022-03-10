import { useAtom } from "jotai";
import clsx from "clsx";
import { Link as RouteLink } from "react-router-dom";

import { themeAtom } from "data/atoms";

import arrowLeft from "images/icons/arrow-left.svg";

import Icon from "components/ui/Icon";
import Logo from "components/ui/Logo";

import styles from "./back-button.module.css";

const BackButton = ({ className, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.backButton, className);

  return (
    <RouteLink className={className} to="/" {...props}>
      <Icon className={clsx(styles.arrow, styles[theme])} icon={arrowLeft} />
      <Logo className={styles.logo} />
    </RouteLink>
  );
};

export default BackButton;
