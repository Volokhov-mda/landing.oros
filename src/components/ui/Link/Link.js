import clsx from "clsx";
import { useAtom } from "jotai";
import { Link as RouteLink } from "react-router-dom";

import { themeAtom } from "data/atoms";

import styles from "./link.module.css";

const Link = ({ href, className, children, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.link, styles[theme], className);

  return (
    <a className={className} href={href} {...props}>
      {children}
    </a>
  );
};

const Route = ({ to, className, children, ...props }) => {
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.link, styles[theme], className);

  return (
    <RouteLink className={className} to={to} {...props}>
      {children}
    </RouteLink>
  );
};

Link.Route = Route;

export default Link;
