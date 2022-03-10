import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";

import { addRow } from "api";

import { languageAtom, themeAtom } from "data/atoms";

import localizedText from "consts/localizedText.json";

import Input from "components/ui/Input";
import Checkbox from "components/ui/Checkbox";
import Icon from "components/ui/Icon";
import Link from "components/ui/Link";

import arrowRight from "images/icons/arrow-right.svg";

import styles from "./form.module.css";
import { useState } from "react";

const Form = ({ className, ...props }) => {
  const [language] = useAtom(languageAtom);
  const [theme] = useAtom(themeAtom);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const { ok } = await addRow({
      Name: data.name,
      Email: data.email,
      Message: data.message,
    });

    setLoading(false);

    if (!ok) {
      alert(localizedText[language].requestFail);
      return;
    }

    alert(localizedText[language].requestSuccess);
    reset();
  };

  className = clsx(styles.form, className);

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)} {...props}>
      <div className={styles.inputs}>
        <Input
          placeholder={localizedText[language].namePlaceholder}
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
        />

        <Input
          placeholder={localizedText[language].eMailPlaceholder}
          {...register("email", { required: "Email is required" })}
          error={!!errors.email}
        />

        <Input
          placeholder={localizedText[language].messagePlaceholder}
          {...register("message")}
        />
      </div>

      <Checkbox
        className={styles.checkbox}
        {...register("policy", { required: "Policy needs to be accepted" })}
        error={!!errors.policy}
      >
        {localizedText[language].agree}{" "}
        <Link.Route className={styles.policy} to="/agreement">
          {localizedText[language].policy}
        </Link.Route>
      </Checkbox>

      <Button type="submit" loading={loading}>
        {localizedText[language].submit}
      </Button>
    </form>
  );
};

const Button = ({ loading, children, ...props }) => {
  const [language] = useAtom(languageAtom);

  return !loading ? (
    <button className={styles.button} {...props}>
      <span>{children}</span>
      <Icon className={styles.icon} icon={arrowRight} />
    </button>
  ) : (
    <span className={clsx(styles.button, styles.loading)}>
      {localizedText[language].loading}
    </span>
  );
};

export default Form;
