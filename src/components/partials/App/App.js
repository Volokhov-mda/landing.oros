import { useAtom } from "jotai";
import clsx from "clsx";

import { themeAtom } from "data/atoms";

import Home from "routes/home";

import styles from "./app.module.css";

const App = () => {
  const [theme] = useAtom(themeAtom);

  const className = clsx(styles.app, styles[theme]);

  return (
    <div className={className}>
      <div className={styles.content}>
        <Home />
      </div>
    </div>
  );
};

export default App;
