import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { useMutation } from "react-fetching-library";

import { postGoogleSpreadsheets } from "api/actions";

import { languageAtom } from "data/atoms";

import localizedText from "consts/localizedText.json";

import Input from "components/ui/Input";
import Checkbox from "components/ui/Checkbox";
import Icon from "components/ui/Icon";
import Link from "components/ui/Link";

import arrowRight from "images/icons/arrow-right.svg";

import styles from "./form.module.css";

const Form = ({ className, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [language] = useAtom(languageAtom);
  const { mutate } = useMutation(postGoogleSpreadsheets);

  const onSubmit = async (data) => {
    const { error } = await mutate(data);

    if (error) {
      alert("An unknown error occured. Contact us via email or phone.");
      return;
    }

    alert("Form has been successfully submitted!");
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
        <Link className={styles.policy} href="/agreement">
          {localizedText[language].policy}
        </Link>
      </Checkbox>

      <Button type="submit">{localizedText[language].submit}</Button>
    </form>
  );
};

const Button = ({ children, ...props }) => (
  <button className={styles.button} {...props}>
    <span>{children}</span>
    <Icon className={styles.icon} icon={arrowRight} />
  </button>
);

export default Form;
