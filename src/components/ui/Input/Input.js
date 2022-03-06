import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import styles from "./input.module.css";

const Input = ({ placeholder, type = "text", className, ...props }) => {
  const [theme] = useAtom(themeAtom);
  className = clsx(styles.input, styles[theme], className);

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};

export default Input;
