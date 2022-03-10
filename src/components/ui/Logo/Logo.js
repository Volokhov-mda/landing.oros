import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import logo from "images/logos/logo.svg";

import Icon from "components/ui/Icon";

import styles from "./logo.module.css";

const Logo = ({ className, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.logo, styles[theme], className);

  return <Icon className={className} icon={logo} {...props} />;
};

export default Logo;
