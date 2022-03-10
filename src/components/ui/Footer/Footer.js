import clsx from "clsx";
import { useAtom } from "jotai";

import { languageAtom, themeAtom } from "data/atoms";

import { email, telNumber } from "consts";
import localizedText from "consts/localizedText.json";

import Logo from "components/ui/Logo";
import Link from "components/ui/Link";

import styles from "./footer.module.css";

const Footer = ({ className, ...props }) => {
  const [language] = useAtom(languageAtom);
  const [theme] = useAtom(themeAtom);

  className = clsx(styles.footer, styles[theme], className);
  return (
    <footer className={className} {...props}>
      <Logo className={styles.logo} />
      <div className={styles.contacts}>
        <Link href={`mailto:${email}`}>{email}</Link>
        <Link href={`tel:${formatTelNumber(telNumber)}`}>
          {localizedText[language].tel}.: {telNumber}
        </Link>
      </div>
    </footer>
  );
};

const formatTelNumber = (telNumberString) =>
  telNumberString.replace(/[-() ]/g, "");

export default Footer;
