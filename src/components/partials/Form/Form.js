import clsx from "clsx";

import Input from "components/ui/Input";
import Checkbox from "components/ui/Checkbox";

import styles from "./form.module.css";

const Form = ({ className, ...props }) => {
  className = clsx(styles.form, className);

  return (
    <form {...props}>
      <div className={styles.inputs}>
        <Input placeholder="Имя" />
        <Input placeholder="Email" />
        <Input placeholder="Сообщение" />
      </div>
      <Checkbox className={styles.checkbox}>Согласен с политикой обработки персональных данных</Checkbox>
    </form>
  );
};

export default Form;
