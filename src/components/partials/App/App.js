import { Routes, Route } from "react-router-dom";
import { useAtom } from "jotai";
import clsx from "clsx";

import { themeAtom } from "data/atoms";

import Home from "routes/home";
import Agreement from "routes/agreement";

import styles from "./app.module.css";
import { useEffect } from "react";

const App = () => {
  const [theme] = useAtom(themeAtom);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "var(--secondary-color)" : "var(--primary-color)";
  }, [theme])

  const className = clsx(styles.app, styles[theme]);

  return (
    <div className={className}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agreement" element={<Agreement />} />
      </Routes>
    </div>
  );
};

export default App;
