import clsx from "clsx";
import { useAtom } from "jotai";

import { languageAtom } from "data/atoms";

import localizedText from "consts/localizedText.json";

import Title from "components/ui/Title";
import Form from "components/partials/Form";
import Footer from "components/ui/Footer";

import styles from "./contacts.module.css";

const Contacts = ({ className, ...props }) => {
  const [language] = useAtom(languageAtom);

  className = clsx(styles.contacts, className);

  return (
    <div className={className} {...props}>
      <Title className={styles.title}>{localizedText[language].contacts}</Title>
      <Form />
      <Footer />
    </div>
  );
};

export default Contacts;
