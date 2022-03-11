import clsx from "clsx";
import { useAtom } from "jotai";

import { languageAtom } from "data/atoms";

import agreementLocalizedText from "consts/agreementLocalizedText.json";

import BackButton from "components/ui/BackButton";
import Section from "components/ui/Section";

import styles from "./styles.module.css";
import { useEffect } from "react";

const Agreement = ({ className, ...props }) => {
  const [language] = useAtom(languageAtom);

  useEffect(() => {
    document.body.style.overflow = "auto";
    window.document.title = "Privacy Policy — Oros Digital";
  }, []);

  className = clsx(styles.agreement, className);

  return (
    <div className={className} {...props}>
      <BackButton />

      <div className={styles.policy}>
        {agreementLocalizedText[language].map((section, i) => (
          <Section title={section.title} key={i}>
            {section.texts.map((text, j) => (
              <>
                <div key={j} dangerouslySetInnerHTML={{ __html: text.value }} />
                {text.list && (
                  <ul className={styles.list}>
                    {text.list.map((listItem, k) => (
                      <li className={styles.listItem} key={k}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Agreement;
