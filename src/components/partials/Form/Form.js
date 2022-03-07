import clsx from "clsx";
import { useAtom } from "jotai";

import { languageAtom } from "data/atoms";

import localizedText from "consts/localizedText.json";

import Input from "components/ui/Input";
import Checkbox from "components/ui/Checkbox";
import Icon from "components/ui/Icon";
import Link from "components/ui/Link";

import arrowRight from "images/icons/arrow-right.svg";

import styles from "./form.module.css";

const Form = ({ className, ...props }) => {
  const [language] = useAtom(languageAtom);
  className = clsx(styles.form, className);

  return (
    <form className={className} {...props}>
      <div className={styles.inputs}>
        <Input placeholder={localizedText[language].namePlaceholder} />
        <Input placeholder={localizedText[language].eMailPlaceholder} />
        <Input placeholder={localizedText[language].messagePlaceholder} />
      </div>
      <Checkbox className={styles.checkbox}>
        {localizedText[language].agree}{" "}
        <Link className={styles.policy} href="/agreement">
        {localizedText[language].policy}
        </Link>
      </Checkbox>
      <Button type="submit">{localizedText[language].submit}</Button>
    </form>
  );
};

const Button = ({ children, ...props }) => {
  return (
    <button className={styles.button}>
      <span>{children}</span>
      <Icon className={styles.icon} icon={arrowRight} />
    </button>
  );
};

export default Form;
