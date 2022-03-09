import { forwardRef } from "react";
import clsx from "clsx";
import { useAtom } from "jotai";

import { themeAtom } from "data/atoms";

import styles from "./input.module.css";

const Input = forwardRef(
  ({ placeholder, type = "text", error, className, ...props }, ref) => {
    const [theme] = useAtom(themeAtom);

    className = clsx(styles.input, styles[theme], error && styles.error, className);

    return (
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Input;
